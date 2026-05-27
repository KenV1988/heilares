import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { SectionBadge } from "@/components/site/Section";
import { ParkTypes } from "@/components/site/ParkTypes";
import { Process } from "@/components/site/Process";
import { Why } from "@/components/site/Why";
import { CTA } from "@/components/site/CTA";
import i18n from "@/i18n";

export const Route = createFileRoute("/paikesepaneelid")({
  component: PanelsPage,
  head: () => ({
    meta: [
      { title: i18n.t("seo.panels.title") },
      { name: "description", content: i18n.t("seo.panels.description") },
      { property: "og:title", content: i18n.t("seo.panels.title") },
      { property: "og:description", content: i18n.t("seo.panels.description") },
    ],
    links: [
      { rel: "canonical", href: "https://heilares.ainiki.ee/paikesepaneelid" },
    ],
  }),
});

function PanelsPage() {
  const { t } = useTranslation();
  return (
    <SiteLayout>
      <Seo titleKey="seo.panels.title" descriptionKey="seo.panels.description" />
      <section className="relative pt-36 pb-12 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-[500px] radial-glow -z-10" />
        <div className="container-x text-center">
          <SectionBadge>{t("hero.badge")}</SectionBadge>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[64px]">
            {t("panelsPage.hero.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            {t("panelsPage.hero.subtitle")}
          </p>
        </div>
      </section>
      <ParkTypes />
      <Process />
      <Why />
      <CTA />
    </SiteLayout>
  );
}
