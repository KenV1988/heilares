import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import { blogPosts, type BlogCategory } from "@/data/blog";
import { getSupportedLang } from "@/i18n";
import i18n from "@/i18n";
import heroBg from "@/assets/services/tracker-park-1.jpg";

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

const ALL_FILTERS: (BlogCategory | "all")[] = [
  "all",
  "epc",
  "park_types",
  "components",
  "maintenance",
  "electrical",
];

function BlogIndex() {
  const { t, i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);
  const [filter, setFilter] = useState<(typeof ALL_FILTERS)[number]>("all");

  const availableFilters = useMemo(() => {
    const present = new Set(blogPosts.map((p) => p.category));
    return ALL_FILTERS.filter((f) => f === "all" || present.has(f));
  }, []);

  const visible = useMemo(
    () => (filter === "all" ? blogPosts : blogPosts.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <SiteLayout>
      <Seo titleKey="seo.blog.title" descriptionKey="seo.blog.description" />

      <PageHero
        badge={t("blog.eyebrow")}
        title={t("blog.title")}
        subtitle={t("blog.subtitle")}
        backgroundImage={heroBg}
        backgroundAlt="Solar Tracker Park päikest jälgivate paneeliridadega"
      />

      <section className="container-x py-12 md:py-16">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {availableFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === f
                  ? "border-[var(--brand)] bg-[var(--brand)] text-[#0a0f0d]"
                  : "border-[var(--border)] text-white/70 hover:border-[var(--ring)] hover:text-white"
              }`}
            >
              {t(`blog.filters.${f}`)}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => {
            const c = post.content[lang];
            return (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] transition duration-200 ease-out hover:-translate-y-1 hover:border-[rgba(214,178,106,0.35)] hover:shadow-[0_4px_20px_rgba(214,178,106,0.12)]"
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
