import { Award, Layers, Clock, Cpu, BadgeCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionBadge } from "./Section";
import { Reveal } from "./Reveal";

export function Why() {
  const { t } = useTranslation();
  const items = [
    { key: "scale", Icon: Layers },
    { key: "turnkey", Icon: Award },
    { key: "speed", Icon: Clock },
    { key: "quality", Icon: Cpu },
    { key: "competence", Icon: BadgeCheck },
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
              {renderWhyTitle(t("why.title"))}
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
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold-light)]">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display text-[20px] font-bold leading-tight text-white">
                    {t(`why.items.${key}.title`)}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.6] text-white/65">
                    {t(`why.items.${key}.desc`)}
                  </p>
                  {key === "competence" && (
                    <span className="mt-3 inline-flex items-center rounded-md border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-3 py-1.5 font-mono text-[13px] font-semibold tracking-wide text-[var(--gold-light)]">
                      {t("why.items.competence.mtr")}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Render "Miks HeilAres" / "Why HeilAres" with the brand word in gradient. */
function renderWhyTitle(title: string) {
  const match = title.match(/^(.*?)(HeilAres)(.*)$/i);
  if (!match) return title;
  const [, before, brand, after] = match;
  return (
    <>
      {before}
      <span className="text-gradient">{brand}</span>
      {after}
    </>
  );
}
