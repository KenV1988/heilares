import { Award, Layers, Zap, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "./Section";

export function Why() {
  const { t } = useTranslation();
  const items = [
    { key: "scale", Icon: Layers },
    { key: "turnkey", Icon: Award },
    { key: "speed", Icon: Zap },
    { key: "quality", Icon: ShieldCheck },
  ] as const;
  return (
    <section className="container-x py-20 md:py-28">
      <SectionHeader title={t("why.title")} subtitle={t("why.subtitle")} />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16">
        {items.map(({ key, Icon }) => (
          <div
            key={key}
            className="flex gap-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{t(`why.items.${key}.title`)}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                {t(`why.items.${key}.desc`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
