import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { QuoteModal } from "./QuoteModal";

export function CTA() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <section className="container-x py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-10 md:p-16">
        <div className="absolute inset-x-0 -top-32 h-64 radial-glow" />
        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl min-h-[2.5rem] md:min-h-[2.75rem]">
              {t("cta.title")}
            </h3>
            <p className="mt-3 max-w-xl text-white/65 min-h-[3rem]">{t("cta.subtitle")}</p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center justify-center gap-2 self-start rounded-full bg-[var(--brand)] px-7 py-3.5 text-sm font-semibold text-[#0a0f0d] transition hover:bg-[var(--brand-hover)] md:self-center"
          >
            {t("cta.button")}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
      <QuoteModal open={open} onOpenChange={setOpen} />
    </section>
  );
}
