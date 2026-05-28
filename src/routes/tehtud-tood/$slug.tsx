import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, MapPin, Calendar, Gauge } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { projects, formatCapacity } from "@/data/projects";
import { CTA } from "@/components/site/CTA";
import { getSupportedLang } from "@/i18n";

export const Route = createFileRoute("/tehtud-tood/$slug")({
  component: ProjectDetail,
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const { t, i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);

  return (
    <SiteLayout>
      <Seo titleKey="seo.projects.title" descriptionKey="seo.projects.description" />

      <article className="pt-32 md:pt-40">
        <div className="container-x">
          <Link
            to="/tehtud-tood"
            className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-[var(--brand)]"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("projectsSection.back")}
          </Link>

          <div className="mt-8 max-w-4xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand)]/30 bg-[var(--brand)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
              {t(`projectsSection.filter.${project.category}`)}
            </span>
            <h1 className="mt-5 text-balance text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[64px]">
              {project.title[lang]}
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
              {project.description[lang]}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Stat Icon={Gauge} label={t("projectsSection.capacity")} value={formatCapacity(project.capacityKw, lang)} />
            <Stat Icon={MapPin} label={t("projectsSection.location")} value={project.location} />
            <Stat Icon={Calendar} label={t("projectsSection.year")} value={String(project.yearCompleted)} />
          </div>
        </div>

        <div className="container-x mt-12 md:mt-16">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
            <img
              src={project.coverImage}
              alt={project.coverAlt}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        <section className="container-x py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="grid gap-3 sm:grid-cols-2">
                {project.gallery.map((img, idx: number) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-2xl border border-[var(--border)] object-cover"
                  />
                ))}
              </div>
            </div>
            <aside className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7">
              <Detail label={t("projectsSection.details.panels")} value={project.panelsUsed} />
              <Detail label={t("projectsSection.details.inverter")} value={project.inverter} />
              <Detail label={t("projectsSection.details.mounting")} value={project.mountingSystem} />
              <Detail label={t("projectsSection.details.duration")} value={project.completionTime} />
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
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/55">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <div className="mt-2 text-xl font-bold text-white">{value}</div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-[var(--border)] py-4 last:border-0">
      <div className="text-xs uppercase tracking-wider text-white/50">{label}</div>
      <div className="mt-1 text-sm font-medium text-white">{value}</div>
    </div>
  );
}
