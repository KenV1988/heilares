import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { ParkTypes } from "@/components/site/ParkTypes";
import { Process } from "@/components/site/Process";
import { Why } from "@/components/site/Why";
import { ParksFAQ } from "@/components/site/ParksFAQ";
import { CTA } from "@/components/site/CTA";
import i18n from "@/i18n";
import heroBg from "@/assets/services/service-maapark.jpg";

export const Route = createFileRoute("/paikesepargid")({
  component: PanelsPage,
  head: () => ({
    meta: [
      { title: i18n.t("seo.panels.title") },
      { name: "description", content: i18n.t("seo.panels.description") },
      { property: "og:title", content: i18n.t("seo.panels.title") },
      { property: "og:description", content: i18n.t("seo.panels.description") },
    ],
    links: [
      { rel: "canonical", href: "https://heilares.ainiki.ee/paikesepargid" },
    ],
  }),
});

function PanelsPage() {
  const { t } = useTranslation();
  return (
    <SiteLayout>
      <Seo titleKey="seo.panels.title" descriptionKey="seo.panels.description" />
      <PageHero
        title={t("panelsPage.hero.title")}
        subtitle={t("panelsPage.hero.subtitle")}
        backgroundImage={heroBg}
        backgroundAlt="Maapealne päikesepark — paneeliread silmapiirini"
      />
      <ParkTypes />
      <Process />
      <Why />
      <ParksFAQ />
      <CTA />
    </SiteLayout>
  );
}
