import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Anchor, Factory, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { SectionBadge } from "@/components/site/Section";
import { QuoteModal } from "@/components/site/QuoteModal";

export const Route = createFileRoute("/toojou-rent")({
  component: WorkforcePage,
});

function WorkforcePage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const items = [
    { key: "shipbuilding", Icon: Anchor },
    { key: "factories", Icon: Factory },
  ] as const;

  return (
    <SiteLayout>
      <Seo titleKey="seo.workforce.title" descriptionKey="seo.workforce.description" />

      <section className="relative pt-36 pb-12 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-[500px] radial-glow -z-10" />
        <div className="container-x text-center">
          <SectionBadge>{t("hero.badge")}</SectionBadge>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[64px]">
            {t("workforce.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            {t("workforce.subtitle")}
          </p>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          {items.map(({ key, Icon }) => (
            <div
              key={key}
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8 md:p-10"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-white">
                {t(`workforce.${key}.title`)}
              </h3>
              <p className="mt-3 text-white/65">{t(`workforce.${key}.desc`)}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-7 py-3.5 text-sm font-semibold text-[#0a0f0d] transition hover:bg-[var(--brand-hover)]"
          >
            {t("workforce.cta")}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
        </div>
      </section>

      <QuoteModal open={open} onOpenChange={setOpen} defaultType="workforce" />
    </SiteLayout>
  );
}
