import { useMemo, useRef, useState } from "react";
import { useOverviewFilter } from "@/components/site/useOverviewFilter";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { ExpandableProjectGrid } from "@/components/site/ExpandableProjectGrid";
import { projectReturnScrollY } from "@/components/site/project-expansion";
import { BessProjectComparison } from "@/components/site/BessProjectComparison";
import { bessProjects, bessProjectLabels } from "@/data/bess-projects";
import { getSupportedLang } from "@/i18n";
import { SectionBadge } from "@/components/site/Section";
import { projectsByCategory, type ProjectCategory } from "@/data/projects";
import { CTA } from "@/components/site/CTA";
import { localizedHead } from "@/lib/locale-seo";
import heroBg from "@/assets/projects/risti-2.jpg";

export const Route = createFileRoute("/tehtud-tood/")({
  component: ProjectsPage,
  head: () => localizedHead("et", "projects", "/tehtud-tood"),
});

type FilterKey = ProjectCategory | "all" | "bess" | "workforce";
const FILTERS: FilterKey[] = ["all", "tracker_park", "maapark", "katusepark", "bess", "workforce"];

export function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);
  const [filter, setFilter] = useOverviewFilter(FILTERS, "all");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const openingPosition = useRef<{ slug: string; top: number } | null>(null);
  const returnAfterClose = useRef(false);
  const rememberOpening = (slug: string) => {
    const card = document.querySelector<HTMLElement>(`[data-project-card="${slug}"]`);
    openingPosition.current = card ? { slug, top: card.getBoundingClientRect().top } : null;
    returnAfterClose.current = false;
  };
  const closeProject = () => {
    if (expandedSlug) document.getElementById(`project-trigger-${expandedSlug}`)?.focus({ preventScroll: true });
    returnAfterClose.current = true;
    setExpandedSlug(null);
  };
  const restoreOpeningPosition = () => {
    if (!returnAfterClose.current) return;
    returnAfterClose.current = false;
    const position = openingPosition.current;
    if (!position) return;
    const trigger = document.getElementById(`project-trigger-${position.slug}`);
    const card = document.querySelector<HTMLElement>(`[data-project-card="${position.slug}"]`);
    if (!trigger || !card) return;
    trigger.focus({ preventScroll: true });
    window.scrollTo({ top: projectReturnScrollY(window.scrollY, card.getBoundingClientRect().top, position.top), behavior: "instant" });
    openingPosition.current = null;
  };
  const toggleProject = (slug: string) => {
    if (expandedSlug === slug) { closeProject(); return; }
    rememberOpening(slug);
    setExpandedSlug(slug);
  };
  const openFromComparison = (slug: string) => {
    rememberOpening(slug);
    setExpandedSlug(slug);
    requestAnimationFrame(() => document.getElementById(`project-trigger-${slug}`)?.scrollIntoView({ block: "start", behavior: "instant" }));
  };

  const filteredSolar = useMemo(
    () =>
      filter === "all"
        ? projectsByCategory
        : filter === "workforce" || filter === "bess"
          ? []
          : projectsByCategory.filter((p) => p.category === filter),
    [filter],
  );

  const showShipyards = filter === "all" || filter === "workforce";

  return (
    <SiteLayout>
      <Seo titleKey="seo.projects.title" descriptionKey="seo.projects.description" />

      <PageHero
        title={t("projectsSection.title")}
        subtitle={t("projectsSection.subtitle")}
        backgroundImage={heroBg}
        backgroundAlt={t("projectsSection.heroAlt")}
      />

      <section className="container-x py-12 md:py-16">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <Button
              key={f}
              onClick={() => { returnAfterClose.current = false; openingPosition.current = null; setFilter(f); setExpandedSlug(null); }}
              variant="outline"
              aria-pressed={filter === f}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === f
                  ? "border-brand bg-brand text-primary-foreground hover:bg-brand-hover hover:text-primary-foreground"
                  : "border-border text-foreground/70 hover:border-ring hover:text-foreground"
              }`}
            >
              {f === "bess"
                ? bessProjectLabels.category[lang]
                : f === "workforce"
                  ? t("nav.workforce")
                  : t(`projectsSection.filter.${f}`)}
            </Button>
          ))}
        </div>

        {filteredSolar.length > 0 && (
          <div>
            <div className="mb-6">
              <SectionBadge>{t("nav.panels")}</SectionBadge>
            </div>
            <ExpandableProjectGrid projects={filteredSolar} expandedSlug={expandedSlug} onToggle={toggleProject} onClose={closeProject} onClosed={restoreOpeningPosition} />
          </div>
        )}

        {(filter === "all" || filter === "bess") && (
          <div className={filteredSolar.length > 0 ? "mt-[72px]" : ""}>
            <div className="mb-6">
              <SectionBadge>{bessProjectLabels.category[lang]}</SectionBadge>
            </div>
            <ExpandableProjectGrid projects={bessProjects} expandedSlug={expandedSlug} onToggle={toggleProject} onClose={closeProject} onClosed={restoreOpeningPosition} />
            <BessProjectComparison onOpenProject={openFromComparison} />
          </div>
        )}

        {showShipyards && (
          <div className="mt-[72px]">
            <div
              className="mb-10 h-px w-14"
              style={{ background: "rgba(214,178,106,0.4)" }}
              aria-hidden
            />
            <div className="mb-10 max-w-3xl">
              <SectionBadge>{t("nav.workforce")}</SectionBadge>
              <p className="mt-3 text-base text-white/65 md:text-lg">
                {t("workforceProjects.lead")}
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-2">
              {(
                t("workforceProjects.items", { returnObjects: true }) as {
                  name: string;
                  country: string;
                }[]
              ).map((s, i) => (
                <div
                  key={s.name}
                  className="flex items-center gap-5 bg-[var(--bg-elevated)] p-6 md:p-7"
                >
                  <span className="font-display w-9 text-[13px] font-semibold tracking-[0.18em] text-[var(--brand)]">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="text-[12px] text-white/55">{s.country}</div>
                    <h3 className="font-display mt-1 text-[18px] font-bold leading-tight text-white">
                      {s.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <CTA />
    </SiteLayout>
  );
}
