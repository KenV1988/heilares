import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BatteryCharging,
  ChartNoAxesCombined,
  Factory,
  PanelsTopLeft,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "./Section";
import { Reveal } from "./Reveal";

export function BatterySection() {
  const { t } = useTranslation();
  const items: { key: "storage" | "solar" | "loads" | "industry"; Icon: LucideIcon }[] = [
    { key: "storage", Icon: BatteryCharging },
    { key: "solar", Icon: PanelsTopLeft },
    { key: "loads", Icon: ChartNoAxesCombined },
    { key: "industry", Icon: Factory },
  ];

  return (
    <section id="akupangad" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[var(--bg-accent)]" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-25" />
      <div className="container-x">
        <SectionHeader
          eyebrow={t("batterySection.eyebrow")}
          title={t("batterySection.title")}
          subtitle={t("batterySection.subtitle")}
        />
        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ key, Icon }, index) => (
            <Reveal key={key} delay={index * 80} className="h-full">
              <Link
                to="/akupangad"
                className="card-lift group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold-light)]">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="font-display mt-5 text-[19px] font-bold leading-tight text-white">
                  {t(`batterySection.items.${key}.title`)}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-[1.6] text-white/65">
                  {t(`batterySection.items.${key}.desc`)}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
                    {t("common.learnMore")}
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-white/70 transition group-hover:border-[var(--brand)] group-hover:text-[var(--brand-glow)]">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
