import { useTranslation } from "react-i18next";
import { SectionHeader } from "./Section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function ElectricalFAQ() {
  const { t } = useTranslation();
  const keys = [
    "scope",
    "existing",
    "solar",
    "switchboards",
    "industrial",
    "planning",
    "ev",
    "registration",
    "regions",
    "ordering",
    "quote",
  ] as const;

  return (
    <section className="container-x py-20 md:py-28">
      <SectionHeader
        eyebrow={t("electricalPage.faq.eyebrow")}
        title={t("electricalPage.faq.title")}
        subtitle={t("electricalPage.faq.subtitle")}
      />
      <div className="mx-auto mt-12 max-w-3xl md:mt-16">
        <Accordion type="single" collapsible className="space-y-4">
          {keys.map((key) => (
            <AccordionItem
              key={key}
              value={key}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-6 data-[state=open]:border-[var(--ring)]"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:no-underline md:text-lg [&>svg]:text-[var(--gold)] [&[data-state=open]>svg]:text-[var(--gold-light)]">
                {t(`electricalPage.faq.items.${key}.question`)}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-white/70 md:text-base">
                {t(`electricalPage.faq.items.${key}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
