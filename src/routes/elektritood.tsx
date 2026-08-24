import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowDown,
  BadgeCheck,
  FileCheck2,
  Sun,
  LayoutGrid,
  Cable,
  Cpu,
  ShieldCheck,
  Gauge,
  Building2,
  PlugZap,
} from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { QuoteModal } from "@/components/site/QuoteModal";
import { ElectricalFAQ } from "@/components/site/ElectricalFAQ";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/data/projects";
import i18n from "@/i18n";
import heroBg from "@/assets/services/service-elektritood.jpg";

export const Route = createFileRoute("/elektritood")({
  component: ElectricalPage,
  head: () => ({
    meta: [
      { title: i18n.t("seo.electrical.title") },
      { name: "description", content: i18n.t("seo.electrical.description") },
      { property: "og:title", content: i18n.t("seo.electrical.title") },
      { property: "og:description", content: i18n.t("seo.electrical.description") },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://heilares.ee/elektritood" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://heilares.ee/elektritood" }],
  }),
});

const SERVICE_ICONS = [
  Sun,
  LayoutGrid,
  Cable,
  Cpu,
  ShieldCheck,
  Gauge,
  Building2,
  PlugZap,
] as const;

interface ServiceItem {
  title: string;
  list: string[];
}

interface Step {
  title: string;
  desc: string;
}

interface WhyItem {
  title: string;
  desc: string;
}

const FEATURED_SLUGS = ["risti-eesti", "stelpe-latvia", "kirikmae-eesti"];

function ElectricalPage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const services = t("electricalPage.services.items", { returnObjects: true }) as ServiceItem[];
  const steps = t("electricalPage.process.steps", { returnObjects: true }) as Step[];
  const whyItems = t("electricalPage.why.items", { returnObjects: true }) as WhyItem[];
  const featured = FEATURED_SLUGS.map((s) => projects.find((p) => p.slug === s)).filter(
    Boolean,
  ) as typeof projects;

  return (
    <SiteLayout>
      <Seo titleKey="seo.electrical.title" descriptionKey="seo.electrical.description" />

      <PageHero
        title={t("electricalPage.hero.title")}
        subtitle={t("electricalPage.hero.subtitle")}
        backgroundImage={heroBg}
        backgroundAlt={t("electricalPage.heroAlt")}
      />

      {/* Hero CTAs + trust badges */}
      <section className="container-x -mt-4 pb-14 md:pb-20">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => setOpen(true)}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-7 py-3.5 text-sm font-semibold text-[#0a0f0d] transition hover:bg-[var(--brand-hover)]"
            >
              {t("electricalPage.hero.cta")}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <Link
              to="/tehtud-tood"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[var(--brand)] hover:text-[var(--brand-glow)]"
            >
              {t("electricalPage.hero.ctaSecondary")}
            </Link>
          </div>

          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-1.5 text-[12px] font-medium tracking-wide text-[var(--gold-light)]">
              <FileCheck2 className="h-3.5 w-3.5" strokeWidth={1.8} />
              {t("electricalPage.hero.badgeRegistry")}
            </span>
            <span
              aria-hidden
              className="hidden h-1.5 w-1.5 rotate-45 sm:block"
              style={{ background: "rgba(214,178,106,0.4)" }}
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-1.5 text-[12px] font-medium tracking-wide text-[var(--gold-light)]">
              <BadgeCheck className="h-3.5 w-3.5" strokeWidth={1.8} />
              {t("electricalPage.hero.badgeLevel")}
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-x py-16 md:py-24">
        <Reveal>
          <SectionHeader
            eyebrow={t("electricalPage.services.eyebrow")}
            title={t("electricalPage.services.title")}
            subtitle={t("electricalPage.services.subtitle")}
          />
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
            return (
              <Reveal as="article" key={s.title} delay={(i % 4) * 70}>
                <div className="card-lift flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold-light)]">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display mt-5 text-[19px] font-bold leading-tight text-white">
                    {s.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-[14px] leading-[1.5] text-white/65">
                    {s.list.map((li) => (
                      <li key={li} className="flex gap-2.5">
                        <span
                          aria-hidden
                          className="mt-[7px] block h-1.5 w-1.5 shrink-0 rotate-45 bg-[var(--brand)]/70"
                        />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Credentials */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[var(--bg-accent)]" />
        <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow={t("electricalPage.credentials.eyebrow")}
              title={t("electricalPage.credentials.title")}
              subtitle={t("electricalPage.credentials.lead")}
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
            {(["registry", "competence"] as const).map((k, i) => (
              <Reveal key={k} delay={i * 90}>
                <div className="h-full rounded-2xl border border-[var(--gold)]/25 bg-[var(--bg-elevated)] p-8 text-center">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                    {t(`electricalPage.credentials.${k}.label`)}
                  </div>
                  <div
                    className="font-display mt-3 text-[30px] font-bold leading-none md:text-[36px]"
                    style={{ color: "#D6B26A" }}
                  >
                    {t(`electricalPage.credentials.${k}.value`)}
                  </div>
                  <p className="mt-4 text-[14px] leading-[1.6] text-white/60">
                    {t(`electricalPage.credentials.${k}.note`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Future-ready */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                {t("electricalPage.future.eyebrow")}
              </p>
              <h2 className="font-display mt-4 text-balance text-[32px] font-bold leading-[1.1] tracking-tight text-white md:text-[48px]">
                {t("electricalPage.future.title")}
              </h2>
              <p className="mt-6 text-[16px] leading-[1.65] text-white/70">
                {t("electricalPage.future.p1")}
              </p>
              <p className="mt-4 text-[16px] leading-[1.65] text-white/70">
                {t("electricalPage.future.p2")}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col justify-center gap-4">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  {t("electricalPage.future.todayLabel")}
                </div>
                <div className="font-display mt-2 text-[22px] font-bold text-white">
                  {t("electricalPage.future.todayValue")}
                </div>
              </div>
              <div className="flex justify-center" aria-hidden>
                <ArrowDown className="h-6 w-6 text-[var(--brand)]" strokeWidth={1.8} />
              </div>
              <div className="rounded-2xl border border-[var(--gold)]/30 bg-[var(--bg-card)] p-7">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  {t("electricalPage.future.tomorrowLabel")}
                </div>
                <div className="font-display mt-2 text-[20px] font-bold leading-snug text-[var(--gold-light)]">
                  {t("electricalPage.future.tomorrowValue")}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[var(--bg-accent)]" />
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow={t("electricalPage.process.eyebrow")}
              title={t("electricalPage.process.title")}
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7">
                  <div
                    className="font-display text-[14px] font-bold tracking-[0.15em]"
                    style={{ color: "#D6B26A" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display mt-4 text-[19px] font-bold leading-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-white/65">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <Reveal>
            <div className="md:sticky md:top-32">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                {t("electricalPage.why.eyebrow")}
              </p>
              <h2 className="font-display mt-5 text-balance text-[36px] font-bold leading-[1.05] tracking-tight text-white md:text-[56px]">
                {t("electricalPage.why.title")}
              </h2>
            </div>
          </Reveal>
          <ul className="space-y-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)]">
            {whyItems.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 70}>
                <div className="bg-[var(--bg-elevated)] p-7 transition hover:bg-[var(--bg-card)] md:p-8">
                  <h3 className="font-display text-[20px] font-bold leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-white/65">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="container-x pb-8 md:pb-16">
        <Reveal>
          <SectionHeader
            eyebrow={t("electricalPage.projects.eyebrow")}
            title={t("electricalPage.projects.title")}
            subtitle={t("electricalPage.projects.lead")}
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/tehtud-tood"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] transition hover:text-[var(--brand-glow)]"
          >
            {t("electricalPage.projects.link")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-10 md:p-16">
          <div className="absolute inset-x-0 -top-32 h-64 radial-glow" />
          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                {t("electricalPage.cta.title")}
              </h2>
              <p className="mt-3 max-w-xl text-white/65">{t("electricalPage.cta.subtitle")}</p>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="group inline-flex items-center justify-center gap-2 self-start rounded-full bg-[var(--brand)] px-7 py-3.5 text-sm font-semibold text-[#0a0f0d] transition hover:bg-[var(--brand-hover)] md:self-center"
            >
              {t("electricalPage.cta.button")}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>

      <QuoteModal open={open} onOpenChange={setOpen} />
    </SiteLayout>
  );
}
