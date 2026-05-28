import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import trackerImg from "@/assets/services/tracker-park-1.jpg";

const KEYS = ["ground", "roof", "tracker"] as const;

const IMAGES: Partial<Record<(typeof KEYS)[number], { src: string; alt: string }>> = {
  tracker: {
    src: trackerImg,
    alt: "Päikest jälgiv tracker-park selge taeva all, pikad paneeliread rohelisel väljal",
  },
};

export function ParkTypes() {
  const { t } = useTranslation();

  return (
    <section className="container-x py-16 md:py-24">
      <div className="mx-auto max-w-4xl space-y-20 md:space-y-28">
        {KEYS.map((key) => {
          const paragraphs = t(`panelsPage.${key}.paragraphs`, {
            returnObjects: true,
          }) as string[];
          const image = IMAGES[key];

          return (
            <article key={key} className="scroll-mt-28" id={key}>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-card)] p-8 md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                  {t(`panelsPage.${key}.eyebrow`)}
                </p>
                <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl">
                  {t(`panelsPage.${key}.title`)}
                </h2>
                <p className="mt-6 border-l-2 border-[var(--brand)] pl-4 text-base font-medium text-white/90 md:text-lg">
                  {t(`panelsPage.${key}.lead`)}
                </p>
                <div className="mt-6 space-y-4 text-white/70 md:text-lg">
                  {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="mt-8">
                  <Accordion type="single" collapsible>
                    <AccordionItem
                      value={`${key}-faq`}
                      className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-6 data-[state=open]:border-[var(--ring)]"
                    >
                      <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:no-underline md:text-lg [&[data-state=open]>svg]:text-[var(--brand)]">
                        {t(`panelsPage.${key}.faq.question`)}
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-sm leading-relaxed text-white/70 md:text-base">
                        <span className="mb-2 block font-semibold text-[var(--brand)]">
                          {t(`panelsPage.${key}.faq.lead`)}
                        </span>
                        {t(`panelsPage.${key}.faq.answer`)}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
