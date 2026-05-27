import { useTranslation } from "react-i18next";
import { SectionHeader } from "./Section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function FAQ() {
  const { t } = useTranslation();
  const keys = ["turnkey", "size", "countries", "types", "quoteSpeed"] as const;

  return (
    <section className="container-x py-20 md:py-28">
      <SectionHeader
        eyebrow={t("faq.eyebrow")}
        title={t("faq.title")}
        subtitle={t("faq.subtitle")}
      />
      <div className="mx-auto mt-12 max-w-3xl md:mt-16">
        <Accordion type="single" collapsible className="space-y-4">
          {keys.map((key) => (
            <AccordionItem
              key={key}
              value={key}
              className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-6 data-[state=open]:border-[var(--ring)]"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:no-underline md:text-lg [&[data-state=open]>svg]:text-[var(--brand)]">
                {t(`faq.items.${key}.question`)}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-white/70 md:text-base">
                <span className="mb-2 block font-semibold text-[var(--brand)]">
                  {t(`faq.items.${key}.lead`)}
                </span>
                {t(`faq.items.${key}.answer`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
