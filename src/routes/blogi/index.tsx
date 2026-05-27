import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { SectionBadge } from "@/components/site/Section";
import { CTA } from "@/components/site/CTA";
import { blogPosts } from "@/data/blog";
import { getSupportedLang } from "@/i18n";
import i18n from "@/i18n";

export const Route = createFileRoute("/blogi/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: i18n.t("seo.blog.title") },
      { name: "description", content: i18n.t("seo.blog.description") },
      { property: "og:title", content: i18n.t("seo.blog.title") },
      { property: "og:description", content: i18n.t("seo.blog.description") },
    ],
    links: [
      { rel: "canonical", href: "https://heilares.ainiki.ee/blogi" },
    ],
  }),
});

function BlogIndex() {
  const { t, i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);

  return (
    <SiteLayout>
      <Seo titleKey="seo.blog.title" descriptionKey="seo.blog.description" />

      <section className="relative pt-36 pb-8 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-[500px] radial-glow -z-10" />
        <div className="container-x text-center">
          <SectionBadge>{t("blog.eyebrow")}</SectionBadge>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[64px]">
            {t("blog.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            {t("blog.subtitle")}
          </p>
        </div>
      </section>

      <section className="container-x py-12 md:py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => {
            const c = post.content[lang];
            return (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] transition hover:border-[var(--ring)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.cover}
                    alt={c.title}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-white/50">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(lang, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readMinutes} {t("blog.minutes")}
                    </span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-white">{c.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                    {c.summary}
                  </p>
                  <Link
                    to="/blogi/$slug"
                    params={{ slug: post.slug }}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] transition group-hover:gap-2.5"
                  >
                    {t("blog.readMore")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
