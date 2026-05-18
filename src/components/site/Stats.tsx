import { useTranslation } from "react-i18next";

export function Stats() {
  const { t } = useTranslation();
  const items = [
    { value: "400+", label: t("stats.mw") },
    { value: "50+", label: t("stats.projects") },
    { value: "6", label: t("stats.countries") },
    { value: "10+", label: t("stats.years") },
  ];
  return (
    <section className="container-x py-12 md:py-16">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.label}
            className="bg-[var(--bg-elevated)] px-6 py-8 text-center md:px-8 md:py-10"
          >
            <div className="text-3xl font-bold tracking-tight text-[var(--brand)] md:text-4xl">
              {it.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-wider text-white/55 md:text-[13px]">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
