import { Link } from "@tanstack/react-router";
import { ArrowUpRight, SunMedium, Mountain, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "./Section";
import { Reveal } from "./Reveal";

export function Services() {
  const { t } = useTranslation();
  const items: { key: "tracker" | "ground" | "roof"; Icon: LucideIcon }[] = [
    { key: "tracker", Icon: SunMedium },
    { key: "ground", Icon: Mountain },
    { key: "roof", Icon: Building2 },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow={t("services.title")}
          title={t("services.subtitle")}
        />
        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3">
          {items.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={i * 90}>
              <Link
                to="/paikesepargid"
                className="card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]"
              >
                {/* Image area — visual placeholder driven by Icon + gradient */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-accent)]">
                  <div
                    className="absolute inset-0 transition duration-700 group-hover:scale-105"
                    style={{
                      background:
                        "radial-gradient(120% 90% at 50% 0%, rgba(63,190,116,0.20) 0%, transparent 60%), linear-gradient(180deg, #1A2419 0%, #10160F 100%)",
                    }}
                  />
                  <div className="bg-grid absolute inset-0 opacity-40" />
                  <div className="absolute inset-0 grid place-items-center text-[var(--brand-glow)]/85">
                    <Icon className="h-20 w-20" strokeWidth={1.3} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-[22px] font-bold leading-tight text-white">
                    {t(`services.${key}.title`)}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-[1.6] text-white/65">
                    {t(`services.${key}.desc`)}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--brand)] transition group-hover:text-[var(--brand-glow)]">
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
      </div>
    </section>
  );
}
