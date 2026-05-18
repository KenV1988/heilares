import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Why } from "@/components/site/Why";
import { CTA } from "@/components/site/CTA";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/site/Section";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useTranslation();
  return (
    <SiteLayout>
      <Seo titleKey="seo.home.title" descriptionKey="seo.home.description" />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Why />

      <section className="container-x py-20 md:py-28">
        <SectionHeader title={t("projectsSection.title")} subtitle={t("projectsSection.subtitle")} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/tehtud-tood"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white/5"
          >
            {t("common.viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
