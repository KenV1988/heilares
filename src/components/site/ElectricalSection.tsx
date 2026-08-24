import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sun, LayoutGrid, Cable, Cpu, BadgeCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "./Section";
import { Reveal } from "./Reveal";

export function ElectricalSection() {
  const { t } = useTranslation();
  const items: { key: "solar" | "switchboards" | "cabling" | "inverters"; Icon: LucideIcon }[] = [
    { key: "solar", Icon: Sun },
    { key: "switchboards", Icon: LayoutGrid },
    { key: "cabling", Icon: Cable },
    { key: "inverters", Icon: Cpu },
  ];

  return (
    <section id="elektritood" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow={t("electricalSection.eyebrow")}
          title={t("electricalSection.title")}
          subtitle={t("electricalSection.subtitle")}
        />

        {/* Trust badge */}
        <div className="mt-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-1.5 text-[12px] font-medium tracking-wide text-[var(--gold-light)]">
            <BadgeCheck className="h-3.5 w-3.5" strokeWidth={1.8} />
            {t("electricalSection.badge")}
          </span>
        </div>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-4 md:items-stretch">
          {items.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={i * 80} className="h-full">
              <Link
                to="/elektritood"
                className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-accent)]">
                  <div
                    className="absolute inset-0 transition duration-700 group-hover:scale-105"
                    style={{
                      background:
                        "radial-gradient(120% 90% at 50% 0%, rgba(214,178,106,0.18) 0%, transparent 60%), linear-gradient(180deg, #1A2419 0%, #10160F 100%)",
                    }}
                  />
                  <div className="bg-grid absolute inset-0 opacity-40" />
                  <div className="absolute inset-0 grid place-items-center text-[var(--gold-light)]/85">
                    <Icon className="h-16 w-16" strokeWidth={1.3} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[19px] font-bold leading-tight text-white">
                    {t(`electricalSection.items.${key}.title`)}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[14px] leading-[1.6] text-white/65">
                    {t(`electricalSection.items.${key}.desc`)}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--brand)] transition group-hover:text-[var(--brand-glow)]">
                      {t("common.learnMore")}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-white/70 transition group-hover:border-[var(--brand)] group-hover:text-[var(--brand-glow)]">
                      <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/elektritood"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 px-6 text-[14px] font-semibold text-white transition hover:border-[var(--brand)] hover:text-[var(--brand-glow)]"
          >
            {t("electricalSection.cta")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
