import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { SectionBadge } from "@/components/site/Section";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";
import { CTA } from "@/components/site/CTA";
import i18n from "@/i18n";

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

const FILTERS: (ProjectCategory | "all")[] = ["all", "tracker_park", "maapark", "katusepark"];

function ProjectsPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("all");

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <SiteLayout>
      <Seo titleKey="seo.projects.title" descriptionKey="seo.projects.description" />

      <section className="relative pt-36 pb-8 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-[500px] radial-glow -z-10" />
        <div className="container-x text-center">
          <SectionBadge>{t("hero.badge")}</SectionBadge>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[64px]">
            {t("projectsSection.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            {t("projectsSection.subtitle")}
          </p>
        </div>
      </section>

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
              {t(`projectsSection.filter.${f}`)}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
