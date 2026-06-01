import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight, Zap, Shield, Gauge, Settings, Ship } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { QuoteModal } from "@/components/site/QuoteModal";
import { WorkforceTypes } from "@/components/site/WorkforceTypes";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import i18n from "@/i18n";
import shipyard4 from "@/assets/projects/shipyard-4.jpg";
import heroBg from "@/assets/services/service-laevaehitus.jpg";

const SHIPYARD_IMAGES: Record<string, { src: string; alt: string }> = {
  "Saint-Nazaire'i laevatehas": {
    src: shipyard4,
    alt: "Saint-Nazaire'i laevatehas Prantsusmaal — hiiglaslik punane kraan ja kruiisilaeva kere ehituses",
  },
};

export const Route = createFileRoute("/toojou-rent")({
  component: WorkforcePage,
  head: () => ({
    meta: [
      { title: i18n.t("seo.workforce.title") },
      { name: "description", content: i18n.t("seo.workforce.description") },
      { property: "og:title", content: i18n.t("seo.workforce.title") },
      { property: "og:description", content: i18n.t("seo.workforce.description") },
    ],
    links: [
      { rel: "canonical", href: "https://heilares.ainiki.ee/toojou-rent" },
    ],
  }),
});

const WHY_ICONS = [
  { key: "mobilization", Icon: Zap },
  { key: "certified", Icon: Shield },
  { key: "flexible", Icon: Settings },
] as const;

function WorkforcePage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const faqKeys = ["q1", "q2"] as const;

  return (
    <SiteLayout>
      <Seo titleKey="seo.workforce.title" descriptionKey="seo.workforce.description" />

      <PageHero
        title={t("workforcePage.hero.title")}
        subtitle={t("workforcePage.hero.subtitle")}
        backgroundImage={heroBg}
        backgroundAlt="Laevaehituse sadam — laevad kuivdokis ja kraanad"
      />

      <WorkforceTypes />

      {/* Why HeilAres */}
      <section className="container-x py-16 md:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            {t("workforceWhy.eyebrow")}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-[32px] font-bold leading-[1.05] tracking-tight text-white md:text-[48px]">
            {t("workforceWhy.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            {t("workforceWhy.subtitle")}
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
          {WHY_ICONS.map(({ key, Icon }) => (
            <div
              key={key}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-8"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">
                {t(`workforceWhy.items.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65 md:text-base">
                {t(`workforceWhy.items.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Past projects — shipyards */}
      <section id="tehtud-tood" className="container-x scroll-mt-28 py-16 md:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            {t("workforceProjects.eyebrow")}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-[32px] font-bold leading-[1.05] tracking-tight text-white md:text-[48px]">
            {t("workforceProjects.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
            {t("workforceProjects.lead")}
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {(t("workforceProjects.items", { returnObjects: true }) as { name: string; country: string }[]).map((item) => {
            const img = SHIPYARD_IMAGES[item.name];
            return (
              <div
                key={item.name}
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] transition hover:border-[var(--ring)]"
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
                <div className="p-6 md:p-7">
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <div className="mt-1 text-sm text-white/55">{item.country}</div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-white/70 md:text-lg">
          {t("workforceProjects.specialties")}
        </p>
      </section>




      {/* CTA */}
      <section className="container-x py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] px-6 py-16 text-center md:py-24">
          <div className="absolute inset-0 -z-10 radial-glow opacity-40" />
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
            {t("workforcePage.cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/65 md:text-lg">
            {t("workforcePage.cta.subtitle")}
          </p>
          <button
            onClick={() => setOpen(true)}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-7 py-3.5 text-sm font-semibold text-[#0a0f0d] transition hover:bg-[var(--brand-hover)]"
          >
            {t("workforcePage.cta.button")}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-16 md:py-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
            {t("workforceFAQ.eyebrow")}
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-[32px] font-bold leading-[1.05] tracking-tight text-white md:text-[48px]">
            {t("workforceFAQ.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            {t("workforceFAQ.subtitle")}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-3xl md:mt-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqKeys.map((key) => (
              <AccordionItem
                key={key}
                value={key}
                className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-6 data-[state=open]:border-[var(--ring)]"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:no-underline md:text-lg [&[data-state=open]>svg]:text-[var(--brand)]">
                  {t(`workforceFAQ.items.${key}.question`)}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-white/70 md:text-base">
                  <span className="mb-2 block font-semibold text-[var(--brand)]">
                    {t(`workforceFAQ.items.${key}.lead`)}
                  </span>
                  {t(`workforceFAQ.items.${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <QuoteModal open={open} onOpenChange={setOpen} defaultType="workforce" />
    </SiteLayout>
  );
}
