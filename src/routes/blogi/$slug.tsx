import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { CTA } from "@/components/site/CTA";
import { getBlogPost } from "@/data/blog";
import { getSupportedLang } from "@/i18n";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/blogi/$slug")({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const { t, i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);
  const c = post.content[lang];

  return (
    <SiteLayout>
      <Seo titleKey="seo.blog.title" descriptionKey="seo.blog.description" />

      <article className="pt-32 md:pt-40">
        <div className="container-x">
          <Link
            to="/blogi"
            className="inline-flex items-center gap-2 text-sm text-white/65 transition hover:text-[var(--brand)]"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("blog.back")}
          </Link>

          <div className="mt-8 max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-white/50">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString(lang, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readMinutes} {t("blog.minutes")}
              </span>
            </div>
            <h1 className="mt-5 text-balance text-[36px] font-bold leading-[1.1] tracking-tight text-white md:text-[56px]">
              {c.title}
            </h1>
          </div>
        </div>

        <div className="container-x mt-12 md:mt-16">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)]">
            <img
              src={post.cover}
              alt={c.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        <section className="container-x py-16 md:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="rounded-2xl border border-[var(--brand)]/30 bg-[var(--brand)]/10 p-6 text-base font-medium leading-relaxed text-white md:text-lg">
              {c.lead}
            </p>

            {c.sections.map((section, idx) => (
              <section key={idx} className="mt-12">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-base leading-relaxed text-white/75 md:text-[17px]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <section className="mt-16">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                {t("blog.faqHeading")}
              </h2>
              <Accordion type="single" collapsible className="mt-6 space-y-4">
                {c.faqs.map((faq, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`faq-${idx}`}
                    className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] px-6 data-[state=open]:border-[var(--ring)]"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:no-underline md:text-lg [&[data-state=open]>svg]:text-[var(--brand)]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-sm leading-relaxed text-white/70 md:text-base">
                      <span className="mb-2 block font-semibold text-[var(--brand)]">
                        {faq.lead}
                      </span>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>
        </section>
      </article>

      <CTA />
    </SiteLayout>
  );
}
