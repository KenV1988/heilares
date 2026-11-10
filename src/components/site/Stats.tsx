import { useTranslation } from "react-i18next";
import { useCountUp } from "@/hooks/use-reveal";

export function Stats() {
  const { t, i18n } = useTranslation();
  const locale = i18n.resolvedLanguage || i18n.language;
  const mw = useCountUp(167.64, 1200, locale);
  const yrs = useCountUp(5, 1000, locale);
  const hrs = useCountUp(24, 1000, locale);

  return (
    <section className="bg-[#10160F] py-16 md:py-24">
      <div className="container-x grid grid-cols-3 gap-3 md:gap-8">
        <div className="text-center">
          <div className="font-display text-[28px] font-bold leading-none tracking-tight text-[var(--gold)] md:text-[56px]">
            <span ref={mw}>0</span>
            <span> MW</span>
          </div>
          <div className="mt-2 text-[10px] font-semibold uppercase leading-tight tracking-[0.16em] text-white/55 md:mt-3 md:text-[12px]">
            {t("stats.mw")}
          </div>
        </div>
        <div className="text-center">
          <div className="font-display text-[28px] font-bold leading-none tracking-tight text-[var(--gold)] md:text-[56px]">
            <span ref={yrs}>0</span>
            <span className="text-[var(--gold-light)]">+</span>
          </div>
          <div className="mt-2 text-[10px] font-semibold uppercase leading-tight tracking-[0.16em] text-white/55 md:mt-3 md:text-[12px]">
            {t("stats.years")}
          </div>
        </div>
        <div className="text-center">
          <div className="font-display text-[28px] font-bold leading-none tracking-tight text-[var(--gold)] md:text-[56px]">
            <span ref={hrs}>0</span>h
          </div>
          <div className="mt-2 text-[10px] font-semibold uppercase leading-tight tracking-[0.16em] text-white/55 md:mt-3 md:text-[12px]">
            {t("stats.response")}
          </div>
        </div>
      </div>
    </section>
  );
}
