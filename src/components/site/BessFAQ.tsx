import { useTranslation } from "react-i18next";
import { SectionHeader } from "./Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_KEYS = [
  "what",
  "uses",
  "existingSolar",
  "size",
  "dimensioning",
  "industry",
  "ev",
  "electrical",
  "expansion",
  "timeline",
  "start",
] as const;

export function BessFAQ() {
  const { t } = useTranslation();
  return (
    <section className="container-x py-20 md:py-28">
      <SectionHeader
        eyebrow={t("bessPage.faq.eyebrow")}
        title={t("bessPage.faq.title")}
        subtitle={t("bessPage.faq.subtitle")}
      />
      <div className="mx-auto mt-12 max-w-3xl md:mt-16">
        <Accordion type="single" collapsible className="space-y-4">
          {FAQ_KEYS.map((key) => (
            <AccordionItem
              key={key}
              value={key}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-6 data-[state=open]:border-[var(--ring)]"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:no-underline md:text-lg [&>svg]:text-[var(--gold)] [&[data-state=open]>svg]:text-[var(--gold-light)]">
                {t(`bessPage.faq.items.${key}.question`)}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-white/70 md:text-base">
                {t(`bessPage.faq.items.${key}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
