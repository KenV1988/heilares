import { createFileRoute, notFound } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, MapPin, Calendar, Gauge, ListChecks } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { projects, formatCapacity, formatHeilAresShare, getAdditionalProjectImages } from "@/data/projects";
import { CTA } from "@/components/site/CTA";
import { getSupportedLang } from "@/i18n";
import { localizedContentHead } from "@/lib/locale-seo";
import { LocalizedLink } from "@/components/site/LocalizedLink";

export const Route = createFileRoute("/tehtud-tood/$slug")({
  component: ProjectDetail,
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const project = loaderData.project;
    return localizedContentHead(
      "et",
      `/tehtud-tood/${project.slug}`,
      project.title.et,
      project.description.et,
    );
  },
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return <ProjectDetailView project={project} />;
}

export function ProjectDetailView({ project }: { project: (typeof projects)[number] }) {
  const { t, i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);
  const gallery = getAdditionalProjectImages(project);

  return (
    <SiteLayout>
      <Seo titleKey="seo.projects.title" descriptionKey="seo.projects.description" />

      <article className="pt-32 md:pt-40">
        <div className="container-x">
          <LocalizedLink
            to="/tehtud-tood"
            className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-[var(--brand)]"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("projectsSection.back")}
          </LocalizedLink>

          <div className="mt-8 max-w-4xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand)]/30 bg-[var(--brand)]/10 px-3 py-1 text-[12px] font-semibold tracking-[0.02em] text-[var(--brand)]">
              {t(`projectsSection.filter.${project.category}`)}
            </span>
            <h1 className="mt-5 text-balance text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[64px]">
              {project.title[lang]}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
              {project.description[lang]}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Stat
              Icon={ListChecks}
              label={t("projectsSection.share")}
              value={formatHeilAresShare(project, lang)}
              lines={
                project.shareBreakdown
                  ? [
                      `${formatCapacity(project.shareBreakdown.mechanicalKw, lang)} — ${t("projectsSection.shareMechanical")}`,
                      `${formatCapacity(project.shareBreakdown.electricalKw, lang)} — ${t("projectsSection.shareElectrical")}`,
                    ]
                  : undefined
              }
            />
            <Stat
              Icon={Gauge}
              label={t("projectsSection.capacity")}
              value={formatCapacity(project.parkCapacityKw, lang)}
            />
            <Stat
              Icon={MapPin}
              label={t("projectsSection.location")}
              value={project.location[lang]}
            />
            <Stat Icon={Calendar} label={t("projectsSection.year")} value={project.period} />
          </div>
          {project.shareBreakdown && (
            <p className="mt-3 text-sm text-white/55">{t("projectsSection.shareBreakdown")}</p>
          )}
        </div>

        <div className="container-x mt-12 md:mt-16">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
            <img
              src={project.coverImage}
              alt={project.coverAlt[lang]}
              loading="eager"
              fetchPriority="high"
              width={1280}
              height={720}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        <section className="container-x py-16 md:py-24">
          <div className={gallery.length > 0 ? "grid items-start gap-10 md:grid-cols-3" : "grid items-start"}>
            {gallery.length > 0 && <div className="md:col-span-2">
              <div className="grid gap-3 sm:grid-cols-2">
                {gallery.map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt[lang]}
                    loading="lazy"
                    width={960}
                    height={720}
                    className="aspect-[4/3] w-full rounded-2xl border border-[var(--border)] object-cover"
                  />
                ))}
              </div>
            </div>}
            <aside className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7">
              <h2 className="font-display mb-2 text-xl font-bold text-white">
                {t("projectsSection.details.title")}
              </h2>
              {project.technology && (
                <Detail
                  label={t("projectsSection.details.technology")}
                  value={project.technology[lang]}
                />
              )}
              {project.developer && (
                <Detail label={t("projectsSection.details.developer")} value={project.developer} />
              )}
              {project.mainContractor && (
                <Detail
                  label={t(
                    project.contractorRole === "epc"
                      ? "projectsSection.details.epcContractor"
                      : "projectsSection.details.contractor",
                  )}
                  value={project.mainContractor}
                />
              )}
              {project.client && (
                <Detail label={t("projectsSection.details.client")} value={project.client} />
              )}
            </aside>
          </div>
        </section>
      </article>

      <CTA />
    </SiteLayout>
  );
}

function Stat({
  Icon,
  label,
  value,
  lines,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  lines?: string[];
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
      <div className="flex items-center gap-2 text-xs uppercase leading-snug tracking-wider text-white/55">
        <Icon className="h-3.5 w-3.5 shrink-0" />
        {label}
      </div>
      {lines ? (
        <ul className="mt-2 space-y-1.5">
          {lines.map((l) => (
            <li key={l} className="text-base font-bold leading-snug text-white">{l}</li>
          ))}
        </ul>
      ) : (
        <div className="mt-2 text-xl font-bold text-white">{value}</div>
      )}
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[var(--border)] py-4 last:border-0">
      <div className="text-xs uppercase tracking-wider text-white/50">{label}</div>
      <div className="mt-1 text-sm font-medium leading-relaxed text-white">{value}</div>
    </div>
  );
}
