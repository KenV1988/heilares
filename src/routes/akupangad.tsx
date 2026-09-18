import { useState, type ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowDown,
  ArrowRight,
  BatteryCharging,
  Building2,
  Cable,
  ChartNoAxesCombined,
  Cpu,
  Factory,
  Gauge,
  Grid3X3,
  Layers3,
  PanelsTopLeft,
  PlugZap,
  RadioTower,
  ShieldCheck,
  Sun,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionBadge, SectionHeader } from "@/components/site/Section";
import { QuoteModal } from "@/components/site/QuoteModal";
import { BessFAQ } from "@/components/site/BessFAQ";
import { Button } from "@/components/ui/button";
import i18n from "@/i18n";
import { localizedHead } from "@/lib/locale-seo";
import heroBg from "@/assets/services/service-akupangad.jpg";

const BENEFIT_ICONS = [BatteryCharging, ChartNoAxesCombined, Gauge, Sun, Cpu, Layers3] as const;
const AUDIENCE_ICONS = [PanelsTopLeft, Factory, Building2, RadioTower] as const;
const SOLUTION_ICONS = [
  BatteryCharging,
  PlugZap,
  Cpu,
  Cable,
  ChartNoAxesCombined,
  Grid3X3,
] as const;
const WHY_ICONS = [Sun, Workflow, Layers3, PlugZap, Building2] as const;
const FAQ_KEYS = [
  "what",
  "uses",
  "existingSolar",
  "size",
  "dimensioning",
  "industry",
  "ev",
  "electrical",
  "expansion",
  "timeline",
  "start",
] as const;

interface CopyItem {
  title: string;
  desc: string;
}
type Step = CopyItem;

export const Route = createFileRoute("/akupangad")({
  component: BessPage,
  head: () => {
    const seo = localizedHead("et", "bess", "/akupangad");
    const faq = FAQ_KEYS.map((key) => ({
      "@type": "Question",
      name: i18n.t(`bessPage.faq.items.${key}.question`),
      acceptedAnswer: { "@type": "Answer", text: i18n.t(`bessPage.faq.items.${key}.answer`) },
    }));
    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                name: i18n.t("seo.bess.title"),
                description: i18n.t("seo.bess.description"),
                url: "https://heilares.ee/akupangad",
              },
              {
                "@type": "Service",
                name: i18n.t("bessPage.hero.title"),
                description: i18n.t("bessPage.hero.support"),
                provider: { "@type": "Organization", name: "HeilAres OÜ" },
                areaServed: ["Estonia", "Europe"],
                url: "https://heilares.ee/akupangad",
              },
              { "@type": "FAQPage", mainEntity: faq },
            ],
          }),
        },
      ],
    };
  },
});

export function BessPage() {
  const { t } = useTranslation();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const benefits = t("bessPage.benefits.items", { returnObjects: true }) as CopyItem[];
  const audiences = t("bessPage.audiences.items", { returnObjects: true }) as CopyItem[];
  const solutions = t("bessPage.solution.items", { returnObjects: true }) as CopyItem[];
  const process = t("bessPage.process.items", { returnObjects: true }) as Step[];
  const why = t("bessPage.why.items", { returnObjects: true }) as CopyItem[];
  const sizing = t("bessPage.sizing.flow", { returnObjects: true }) as string[];
  const trust = t("bessPage.hero.trust", { returnObjects: true }) as string[];

  return (
    <SiteLayout>
      <PageHero
        title={t("bessPage.hero.title")}
        subtitle={t("bessPage.hero.subtitle")}
        backgroundImage={heroBg}
        backgroundAlt={t("bessPage.heroAlt")}
      />

      <section className="container-x pt-6 pb-14 md:pt-8 md:pb-20">
        <div className="flex flex-col items-center gap-7 text-center">
          <p className="max-w-3xl text-[15px] leading-relaxed text-white/65 md:text-base">
            {t("bessPage.hero.support")}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={() => setQuoteOpen(true)}
              className="h-auto rounded-full bg-[var(--brand)] px-7 py-3.5 font-semibold text-[var(--primary-foreground)] hover:bg-[var(--brand-hover)]"
            >
              {t("bessPage.hero.primary")} <ArrowRight />
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-full border-[var(--border)] bg-transparent px-7 py-3.5 font-semibold text-white hover:border-[var(--brand)] hover:bg-[var(--bg-elevated)] hover:text-[var(--brand-glow)]"
            >
              <a href="#mis-on-bess">{t("bessPage.hero.secondary")}</a>
            </Button>
          </div>
          <div className="flex max-w-3xl flex-wrap justify-center gap-x-5 gap-y-2 border-t border-[var(--border)] pt-5">
            {trust.map((item) => (
              <span
                key={item}
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="mis-on-bess" className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[var(--bg-accent)]" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-25" />
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal>
            <div>
              <SectionBadge>{t("bessPage.what.eyebrow")}</SectionBadge>
              <h2 className="font-display mt-5 text-[36px] font-bold leading-[1.08] text-white md:text-[56px]">
                {t("bessPage.what.title")}
              </h2>
              <p className="mt-6 text-base leading-[1.7] text-white/70">{t("bessPage.what.p1")}</p>
              <p className="mt-4 text-base leading-[1.7] text-white/70">{t("bessPage.what.p2")}</p>
              <p className="mt-4 text-base leading-[1.7] text-white/70">{t("bessPage.what.p3")}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <FlowDiagram
              labels={t("bessPage.what.flow", { returnObjects: true }) as string[]}
              icons={[Sun, BatteryCharging, Factory]}
            />
          </Reveal>
        </div>
      </section>

      <CardGridSection
        eyebrow={t("bessPage.benefits.eyebrow")}
        title={t("bessPage.benefits.title")}
        items={benefits}
        icons={BENEFIT_ICONS}
        columns="lg:grid-cols-3"
        numbered
      />
      <CardGridSection
        eyebrow={t("bessPage.audiences.eyebrow")}
        title={t("bessPage.audiences.title")}
        items={audiences}
        icons={AUDIENCE_ICONS}
        columns="lg:grid-cols-4"
        accent
      />

      <SplitSection
        eyebrow={t("bessPage.solar.eyebrow")}
        title={t("bessPage.solar.title")}
        paragraphs={[t("bessPage.solar.p1"), t("bessPage.solar.p2")]}
        reverse
      >
        <FlowDiagram
          labels={t("bessPage.solar.flow", { returnObjects: true }) as string[]}
          icons={[Sun, Cpu, BatteryCharging, Factory]}
        />
        <p className="mt-5 text-sm leading-relaxed text-white/50">{t("bessPage.solar.note")}</p>
        <Link
          to="/paikesepargid"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-glow)]"
        >
          {t("bessPage.solar.link")} <ArrowRight className="h-4 w-4" />
        </Link>
      </SplitSection>

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[var(--bg-accent)]" />
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <SectionBadge>{t("bessPage.sizing.eyebrow")}</SectionBadge>
              <h2 className="font-display mt-5 text-[36px] font-bold leading-[1.08] text-white md:text-[56px]">
                {t("bessPage.sizing.title")}
              </h2>
              <p className="mt-6 text-base leading-[1.7] text-white/70">
                {t("bessPage.sizing.p1")}
              </p>
              <p className="mt-4 text-base leading-[1.7] text-white/70">
                {t("bessPage.sizing.p2")}
              </p>
              <p className="mt-4 font-semibold text-[var(--gold-light)]">
                {t("bessPage.sizing.p3")}
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-2">
              {sizing.map((label, index) => (
                <div key={label}>
                  <div
                    className={`rounded-xl border p-4 text-center font-display text-base font-semibold ${index === sizing.length - 1 ? "border-[var(--gold)]/35 bg-[var(--bg-card)] text-[var(--gold-light)]" : "border-[var(--border)] bg-[var(--bg-elevated)] text-white"}`}
                  >
                    {label}
                  </div>
                  {index < sizing.length - 1 && (
                    <ArrowDown className="mx-auto my-2 h-5 w-5 text-[var(--brand)]" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CardGridSection
        eyebrow={t("bessPage.solution.eyebrow")}
        title={t("bessPage.solution.title")}
        items={solutions}
        icons={SOLUTION_ICONS}
        columns="lg:grid-cols-3"
      />

      <SplitSection
        eyebrow={t("bessPage.electrical.eyebrow")}
        title={t("bessPage.electrical.title")}
        paragraphs={[t("bessPage.electrical.p1"), t("bessPage.electrical.p2")]}
        accent
      >
        <div className="rounded-2xl border border-[var(--gold)]/25 bg-[var(--bg-elevated)] p-8 md:p-10">
          <ShieldCheck className="h-10 w-10 text-[var(--gold-light)]" />
          <p className="font-display mt-6 text-2xl font-bold text-white">
            {t("bessPage.electrical.registry")}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {t("bessPage.electrical.registryNote")}
          </p>
          <Button
            asChild
            variant="outline"
            className="mt-7 h-auto rounded-full border-[var(--border)] bg-transparent px-6 py-3 text-white hover:border-[var(--brand)] hover:bg-[var(--bg-card)] hover:text-[var(--brand-glow)]"
          >
            <Link to="/elektritood">
              {t("bessPage.electrical.cta")} <ArrowRight />
            </Link>
          </Button>
        </div>
      </SplitSection>

      <SplitSection
        eyebrow={t("bessPage.safety.eyebrow")}
        title={t("bessPage.safety.title")}
        paragraphs={[t("bessPage.safety.p1"), t("bessPage.safety.p2")]}
        reverse
      >
        <div className="grid grid-cols-2 gap-3">
          {(t("bessPage.safety.points", { returnObjects: true }) as string[]).map((point) => (
            <div
              key={point}
              className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 text-sm font-semibold text-white/75"
            >
              {point}
            </div>
          ))}
        </div>
      </SplitSection>

      <SplitSection
        eyebrow={t("bessPage.future.eyebrow")}
        title={t("bessPage.future.title")}
        paragraphs={[t("bessPage.future.p1"), t("bessPage.future.p2")]}
        accent
      >
        <FutureFlow
          stages={
            t("bessPage.future.stages", { returnObjects: true }) as {
              label: string;
              value: string;
            }[]
          }
        />
      </SplitSection>

      <CardGridSection
        eyebrow={t("bessPage.process.eyebrow")}
        title={t("bessPage.process.title")}
        items={process}
        icons={[ChartNoAxesCombined, Workflow, Cable, ShieldCheck]}
        columns="lg:grid-cols-4"
        numbered
        accent
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[var(--bg-accent)]" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="container-x grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <Reveal className="md:sticky md:top-32">
            <div>
              <SectionBadge>{t("bessPage.why.eyebrow")}</SectionBadge>
              <h2 className="font-display mt-5 text-[40px] font-bold leading-[1.05] text-white md:text-[64px]">
                {brandTitle(t("bessPage.why.title"))}
              </h2>
              <p className="mt-6 max-w-md text-base leading-[1.65] text-white/70 md:text-lg">
                {t("bessPage.why.subtitle")}
              </p>
            </div>
          </Reveal>
          <ul className="space-y-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)]">
            {why.map((item, index) => {
              const Icon = WHY_ICONS[index];
              return (
                <Reveal as="li" key={item.title} delay={index * 80}>
                  <div className="flex gap-5 bg-[var(--bg-elevated)] p-7 md:p-8">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold-light)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-[15px] leading-[1.6] text-white/65">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <BessFAQ />

      <section className="container-x py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-10 md:p-16">
          <div className="absolute inset-x-0 -top-32 h-64 radial-glow" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                {t("bessPage.cta.title")}
              </h2>
              <p className="mt-3 max-w-2xl text-white/65">{t("bessPage.cta.subtitle")}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button
                onClick={() => setQuoteOpen(true)}
                className="h-auto rounded-full bg-[var(--brand)] px-7 py-3.5 text-[var(--primary-foreground)] hover:bg-[var(--brand-hover)]"
              >
                {t("bessPage.cta.primary")} <ArrowRight />
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto rounded-full border-[var(--border)] bg-transparent px-7 py-3.5 text-white hover:bg-[var(--bg-elevated)] hover:text-white"
              >
                <Link to="/kontakt">{t("bessPage.cta.secondary")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal open={quoteOpen} onOpenChange={setQuoteOpen} defaultType="battery" />
    </SiteLayout>
  );
}

function CardGridSection({
  eyebrow,
  title,
  items,
  icons,
  columns,
  numbered = false,
  accent = false,
}: {
  eyebrow: string;
  title: string;
  items: CopyItem[];
  icons: readonly LucideIcon[];
  columns: string;
  numbered?: boolean;
  accent?: boolean;
}) {
  return (
    <section className="relative py-20 md:py-28">
      {accent && (
        <>
          <div className="absolute inset-0 -z-10 bg-[var(--bg-accent)]" />
          <div className="absolute inset-0 -z-10 bg-grid opacity-25" />
        </>
      )}
      <div className="container-x">
        <Reveal>
          <SectionHeader eyebrow={eyebrow} title={title} />
        </Reveal>
        <div className={`mt-14 grid gap-5 sm:grid-cols-2 ${columns}`}>
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={item.title} delay={(index % 4) * 70} className="h-full">
                <article className="card-lift flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold-light)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    {numbered && (
                      <span className="font-display text-sm font-bold text-[var(--gold)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display mt-5 text-xl font-bold leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.65] text-white/65">{item.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SplitSection({
  eyebrow,
  title,
  paragraphs,
  children,
  reverse = false,
  accent = false,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  children: ReactNode;
  reverse?: boolean;
  accent?: boolean;
}) {
  return (
    <section className="relative py-20 md:py-28">
      {accent && <div className="absolute inset-0 -z-10 bg-[var(--bg-accent)]" />}
      <div className="container-x grid min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}>
          <div className="min-w-0">
            <SectionBadge>{eyebrow}</SectionBadge>
            <h2 className="font-display mt-5 break-words text-[36px] font-bold leading-[1.08] text-white md:text-[56px]">
              {title}
            </h2>
            {paragraphs.map((p, i) => (
              <p key={i} className="mt-5 text-base leading-[1.7] text-white/70">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100} className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>
          <div>{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

function FlowDiagram({ labels, icons }: { labels: string[]; icons: readonly LucideIcon[] }) {
  if (labels.length === 4) {
    return (
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:grid-rows-[1fr_auto_1fr] sm:items-center">
        {labels.map((label, index) => {
          const Icon = icons[index];
          const cardPosition = [
            "sm:col-start-1 sm:row-start-1",
            "sm:col-start-3 sm:row-start-1",
            "sm:col-start-3 sm:row-start-3",
            "sm:col-start-1 sm:row-start-3",
          ][index];
          const arrowPosition = [
            "sm:col-start-2 sm:row-start-1 sm:rotate-0",
            "sm:col-start-3 sm:row-start-2 sm:rotate-90",
            "sm:col-start-2 sm:row-start-3 sm:rotate-180",
          ][index];

          return (
            <div key={label} className="contents">
              <div
                className={`flex min-h-36 min-w-0 flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 text-center sm:h-full ${cardPosition}`}
              >
                <Icon className="mx-auto h-8 w-8 shrink-0 text-[var(--gold-light)]" />
                <div className="font-display mt-3 break-words text-base font-bold text-white">
                  {label}
                </div>
              </div>
              {index < labels.length - 1 && (
                <ArrowRight
                  className={`mx-auto h-5 w-5 rotate-90 text-[var(--brand)] ${arrowPosition}`}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
      {labels.map((label, index) => {
        const Icon = icons[index];
        return (
          <div key={label} className="contents">
            <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 text-center sm:h-full">
              <Icon className="mx-auto h-8 w-8 text-[var(--gold-light)]" />
              <div className="font-display mt-3 text-base font-bold text-white">{label}</div>
            </div>
            {index < labels.length - 1 && (
              <ArrowRight className="mx-auto h-5 w-5 rotate-90 self-center text-[var(--brand)] sm:rotate-0" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function FutureFlow({ stages }: { stages: { label: string; value: string }[] }) {
  return (
    <div className="space-y-3">
      {stages.map((stage, index) => (
        <div key={stage.label}>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              {stage.label}
            </div>
            <div className="font-display mt-2 text-lg font-bold text-white">{stage.value}</div>
          </div>
          {index < stages.length - 1 && (
            <ArrowDown className="mx-auto my-2 h-5 w-5 text-[var(--gold)]" />
          )}
        </div>
      ))}
    </div>
  );
}

function brandTitle(title: string) {
  const match = title.match(/^(.*?)(HeilAres)(.*)$/i);
  if (!match) return title;
  return (
    <>
      {match[1]}
      <span className="text-gradient">{match[2]}</span>
      {match[3]}
    </>
  );
}
