import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Zap, Ship, Factory } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "./Section";

export function WorkforceSection() {
  const { t } = useTranslation();
  const items = [
    { key: "solar", Icon: Zap },
    { key: "shipbuilding", Icon: Ship },
    { key: "factories", Icon: Factory },
  ] as const;

  return (
    <section id="workforce" className="container-x py-20 md:py-28">
      <SectionHeader
        eyebrow={t("workforceSection.eyebrow")}
        title={t("workforceSection.title")}
        subtitle={t("workforceSection.subtitle")}
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3 md:mt-16">
        {items.map(({ key, Icon }) => (
          <Link
            key={key}
            to="/toojou-rent"
            className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8 transition hover:border-[var(--ring)]"
          >
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">
              {t(`workforceSection.${key}.title`)}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              {t(`workforceSection.${key}.desc`)}
            </p>
            <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand)]">
              {t("common.learnMore")}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/toojou-rent"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white/5"
        >
          {t("workforceSection.cta")}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
