import { useTranslation } from "react-i18next";
import { SectionHeader } from "./Section";

export function Process() {
  const { t } = useTranslation();
  const steps = ["step1", "step2", "step3", "step4"] as const;
  return (
    <section className="container-x py-20 md:py-28">
      <SectionHeader title={t("process.title")} subtitle={t("process.subtitle")} />
      <ol className="mt-12 grid gap-5 md:grid-cols-4 md:mt-16">
        {steps.map((s, i) => (
          <li
            key={s}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7"
          >
            <div className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--brand)]">
              0{i + 1}
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">{t(`process.${s}.title`)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              {t(`process.${s}.desc`)}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
