import { useTranslation } from "react-i18next";
import { SectionHeader } from "./Section";
import { Reveal } from "./Reveal";

export function Process() {
  const { t } = useTranslation();
  const steps = ["step1", "step2", "step3"] as const;
  return (
    <section className="container-x py-24 md:py-32">
      <SectionHeader title={t("process.title")} subtitle={t("process.subtitle")} />

      <ol className="relative mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
        {/* Desktop dotted connector — sits behind the numbers */}
        <div
          className="dotted-line pointer-events-none absolute left-[14%] right-[14%] top-[42px] hidden h-px md:block"
          aria-hidden
        />
        {steps.map((s, i) => (
          <Reveal as="li" key={s} delay={i * 100}>
            <div className="relative flex gap-6 md:block md:text-center">
              {/* Mobile vertical line on the left */}
              {i < steps.length - 1 && (
                <span
                  className="dotted-line-v absolute left-[34px] top-[88px] bottom-[-48px] w-px md:hidden"
                  aria-hidden
                />
              )}

              <div className="font-display flex shrink-0 items-start md:justify-center">
                <span
                  className="text-[72px] font-bold leading-none tracking-tight md:text-[96px]"
                  style={{ color: "var(--gold)" }}
                >
                  0{i + 1}
                </span>
              </div>

              <div className="md:mt-6">
                <h3 className="font-display text-[22px] font-bold leading-tight text-white md:text-[24px]">
                  {t(`process.${s}.title`)}
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-[1.6] text-white/65 md:mx-auto md:text-[16px]">
                  {t(`process.${s}.desc`)}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
