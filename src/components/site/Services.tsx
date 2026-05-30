import { Link } from "@tanstack/react-router";
import { ArrowUpRight, SunMedium, Mountain, Building2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "./Section";

export function Services() {
  const { t } = useTranslation();
  const items = [
    { key: "tracker", Icon: SunMedium },
    { key: "ground", Icon: Mountain },
    { key: "roof", Icon: Building2 },
  ] as const;

  return (
    <section id="services" className="container-x py-20 md:py-28">
      <SectionHeader title={t("services.title")} subtitle={t("services.subtitle")} />
      <div className="mt-12 grid gap-5 md:grid-cols-3 md:mt-16">
        {items.map(({ key, Icon }) => (
          <Link
            key={key}
            to="/paikesepargid"
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8 transition hover:border-[var(--ring)]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">{t(`services.${key}.title`)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              {t(`services.${key}.desc`)}
            </p>
            <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand)]">
              {t("common.learnMore")}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
