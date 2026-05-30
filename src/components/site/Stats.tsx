import { useTranslation } from "react-i18next";
import { useCountUp } from "@/hooks/use-reveal";

export function Stats() {
  const { t } = useTranslation();
  const mw = useCountUp(400, 1200);
  const yrs = useCountUp(5, 1000);
  const hrs = useCountUp(24, 1000);

  return (
    <section className="py-16 md:py-24 bg-[#10160F]">
      <div className="container-x grid grid-cols-3 gap-3 md:gap-8">
        <div className="text-center">
          <div className="font-display text-[28px] font-bold leading-none tracking-tight text-white md:text-[56px]">
            <span ref={mw}>0</span>
            <span className="text-[#3FBE74]">+</span> MW
          </div>
          <div className="mt-2 text-[10px] font-semibold uppercase leading-tight tracking-[0.16em] text-white/55 md:mt-3 md:text-[12px]">
            {t("stats.mw")}
          </div>
        </div>
        <div className="text-center">
          <div className="font-display text-[28px] font-bold leading-none tracking-tight text-white md:text-[56px]">
            <span ref={yrs}>0</span>
            <span className="text-[#3FBE74]">+</span>
          </div>
          <div className="mt-2 text-[10px] font-semibold uppercase leading-tight tracking-[0.16em] text-white/55 md:mt-3 md:text-[12px]">
            {t("stats.years")}
          </div>
        </div>
        <div className="text-center">
          <div className="font-display text-[28px] font-bold leading-none tracking-tight text-white md:text-[56px]">
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
