import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Ship } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";
import { CTA } from "@/components/site/CTA";
import i18n from "@/i18n";
import heroBg from "@/assets/projects/risti-2.jpg";
import shipyard4 from "@/assets/projects/shipyard-4.jpg";

export const Route = createFileRoute("/tehtud-tood/")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: i18n.t("seo.projects.title") },
      { name: "description", content: i18n.t("seo.projects.description") },
      { property: "og:title", content: i18n.t("seo.projects.title") },
      { property: "og:description", content: i18n.t("seo.projects.description") },
    ],
    links: [
      { rel: "canonical", href: "https://heilares.ainiki.ee/tehtud-tood" },
    ],
  }),
});

type FilterKey = ProjectCategory | "all" | "workforce";
const FILTERS: FilterKey[] = ["all", "tracker_park", "maapark", "katusepark", "workforce"];

const SHIPYARD_IMAGES: Record<string, { src: string; alt: string }> = {
  "Saint-Nazaire": {
    src: shipyard4,
    alt: "Saint-Nazaire'i laevatehas Prantsusmaal — punane kraan ja kruiisilaeva kere ehituses",
  },
};

function ProjectsPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<FilterKey>("all");

  const filteredSolar = useMemo(
    () =>
      filter === "all"
        ? projects
        : filter === "workforce"
        ? []
        : projects.filter((p) => p.category === filter),
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
        backgroundAlt="Risti Solar Tracker Park Eestis"
      />

      <section className="container-x py-12 md:py-16">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === f
                  ? "border-[var(--brand)] bg-[var(--brand)] text-[#0a0f0d]"
                  : "border-[var(--border)] text-white/70 hover:border-[var(--ring)] hover:text-white"
              }`}
            >
              {f === "workforce" ? t("nav.workforce") : t(`projectsSection.filter.${f}`)}
            </button>
          ))}
        </div>

        {filteredSolar.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredSolar.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                {t("nav.workforce")}
              </p>
              <h2 className="font-display mt-3 text-balance text-[28px] font-bold leading-tight text-white md:text-[40px]">
                {t("workforceProjects.title")}
              </h2>
              <p className="mt-3 text-base text-white/65 md:text-lg">
                {t("workforceProjects.lead")}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {(t("workforceProjects.items", { returnObjects: true }) as { name: string; country: string }[]).map((s) => {
                const key = s.name.split(/['\s]/)[0];
                const img = SHIPYARD_IMAGES[key];
                return (
                  <Link
                    key={s.name}
                    to="/toojou-rent"
                    hash="tehtud-tood"
                    className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-card)]">
                      {img ? (
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          width={1280}
                          height={800}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-[#131C19] to-[#0A0F0D] text-[var(--brand-glow)]/70">
                          <Ship className="h-16 w-16" strokeWidth={1.3} />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="text-[12px] text-white/55">{s.country}</div>
                      <h3 className="font-display mt-1.5 text-[18px] font-bold leading-tight text-white">
                        {s.name}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </section>

      <CTA />
    </SiteLayout>
  );
}
