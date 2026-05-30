import { Award, Layers, Clock, Cpu } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import { SectionBadge } from "./Section";
import { Reveal } from "./Reveal";

export function Why() {
  const { t } = useTranslation();
  const items = [
    { key: "scale", Icon: Layers },
    { key: "turnkey", Icon: Award },
    { key: "speed", Icon: Clock },
    { key: "quality", Icon: Cpu },
  ] as const;

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Layered background */}
      <div className="absolute inset-0 -z-10 bg-[var(--bg-accent)]" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[var(--brand)]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-[var(--brand)]/30 to-transparent" />

      <div className="container-x grid gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="md:sticky md:top-32">
            <SectionBadge>{t("why.title")}</SectionBadge>
            <h2 className="font-display mt-5 text-balance text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[64px]">
              <Trans
                i18nKey="why.title"
                defaults={t("why.title")}
              >
                Miks <span className="text-gradient">HeilAres</span>
              </Trans>
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-[1.65] text-white/70 md:text-[18px]">
              {t("why.subtitle")}
            </p>
          </div>
        </Reveal>

        <ul className="space-y-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)]">
          {items.map(({ key, Icon }, i) => (
            <Reveal as="li" key={key} delay={i * 80}>
              <div className="flex gap-5 bg-[var(--bg-elevated)] p-7 transition hover:bg-[var(--bg-card)] md:p-8">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[var(--brand)]/30 bg-[var(--brand)]/10 text-[var(--brand-glow)]">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display text-[20px] font-bold leading-tight text-white">
                    {t(`why.items.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-white/65">
                    {t(`why.items.${key}.desc`)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
