import { Fragment, useMemo, useRef, useState, type CSSProperties } from "react";
import { useOverviewFilter } from "@/components/site/useOverviewFilter";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight, ChevronDown, Clock, X } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import { blogPosts, type BlogCategory } from "@/data/blog";
import { getSupportedLang } from "@/i18n";
import { localizedHead } from "@/lib/locale-seo";
import heroBg from "@/assets/services/tracker-park-1.jpg";
import { Button } from "@/components/ui/button";
import { ContentLink } from "@/components/site/ContentLink";
import { linkCopy } from "@/lib/content-links";
import { BlogPostView } from "./$slug";
import { projectReturnScrollY } from "@/components/site/project-expansion";

export const Route = createFileRoute("/blogi/")({
  component: BlogIndex,
  head: () => localizedHead("et", "blog", "/blogi"),
});

const ALL_FILTERS: (BlogCategory | "all")[] = [
  "all",
  "epc",
  "park_types",
  "components",
  "maintenance",
  "electrical",
  "storage",
  "workforce",
];

export function BlogIndex() {
  const { t, i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);
  const [filter, setFilter] = useOverviewFilter(ALL_FILTERS, "all");

  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const openingPosition = useRef<{ slug: string; top: number } | null>(null);
  const closeCopy = { et: "Sulge postitus", en: "Close post", fi: "Sulje artikkeli", de: "Beitrag schließen" };
  const closeArticle = () => {
    const position = openingPosition.current;
    setExpandedSlug(null);
    requestAnimationFrame(() => {
      if (!position) return;
      const card = document.getElementById(`blog-card-${position.slug}`);
      document.getElementById(`blog-trigger-${position.slug}`)?.focus({ preventScroll: true });
      if (card) {
        window.scrollTo({ top: projectReturnScrollY(window.scrollY, card.getBoundingClientRect().top, 120), behavior: "instant" });
      }
      openingPosition.current = null;
    });
  };
  const toggleArticle = (slug: string) => {
    if (expandedSlug === slug) { closeArticle(); return; }
    const card = document.getElementById(`blog-card-${slug}`);
    openingPosition.current = card ? { slug, top: card.getBoundingClientRect().top } : null;
    setExpandedSlug(slug);
  };

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
        backgroundAlt={t("blog.heroAlt")}
      />

      <section className="container-x py-12 md:py-16">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {availableFilters.map((f) => (
            <Button
              key={f}
              variant="ghost"
              aria-pressed={filter === f}
              onClick={() => { setFilter(f); setExpandedSlug(null); }}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === f
                  ? "border-brand bg-brand text-primary-foreground hover:bg-brand-hover hover:text-primary-foreground"
                  : "border-border bg-transparent text-foreground/70 hover:border-ring hover:bg-transparent hover:text-foreground"
              }`}
            >
              {t(`blog.filters.${f}`)}
            </Button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((post, index) => {
            const c = post.content[lang];
            return (
              <Fragment key={post.slug}>
              <article
                id={`blog-card-${post.slug}`}
                style={{ order: index * 10 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] transition duration-200 ease-out hover:border-[rgba(214,178,106,0.35)] hover:shadow-[0_4px_20px_rgba(214,178,106,0.12)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.cover}
                    alt={c.title}
                    loading="lazy"
                    width={1280}
                    height={720}
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
                  <span className="mt-3 inline-flex w-fit rounded-full border border-[rgba(214,178,106,0.35)] bg-[rgba(214,178,106,0.08)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--gold)]">
                    {t(`blog.filters.${post.category}`)}
                  </span>
                  <h2 className="mt-3 text-xl font-bold text-foreground"><ContentLink kind="article" slug={post.slug} className="hover:text-brand">{c.title}</ContentLink></h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{c.summary}</p>
                  <Button
                    id={`blog-trigger-${post.slug}`}
                    variant="ghost"
                    aria-expanded={expandedSlug === post.slug}
                    aria-controls={`blog-panel-${post.slug}`}
                    onClick={() => toggleArticle(post.slug)}
                    className="mt-5 justify-start px-0 text-sm font-semibold text-brand"
                  >
                    {expandedSlug === post.slug ? closeCopy[lang] : t("blog.readMore")}
                    <ChevronDown className={`h-4 w-4 transition-transform ${expandedSlug === post.slug ? "rotate-180" : ""}`} />
                  </Button>
                </div>
              </article>
              {expandedSlug === post.slug && <div
                id={`blog-panel-${post.slug}`}
                role="region"
                aria-labelledby={`blog-trigger-${post.slug}`}
                style={{ '--mobile-order': index * 10 + 1, '--tablet-order': (Math.floor(index / 2) * 2 + 1) * 10 + 1, '--desktop-order': (Math.floor(index / 3) * 3 + 2) * 10 + 1 } as CSSProperties}
                className="col-span-full min-w-0 border-y border-brand/40 bg-bg-elevated py-6 [order:var(--mobile-order)] md:[order:var(--tablet-order)] lg:[order:var(--desktop-order)]"
              >
                <div className="flex justify-end px-5"><Button variant="outline" size="icon" aria-label={closeCopy[lang]} onClick={closeArticle}><X /></Button></div>
                <BlogPostView post={post} inline />
                <div className="mx-5 mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal text-left"><ContentLink kind="article" slug={post.slug}>{linkCopy.fullArticle[lang]}<ArrowRight /></ContentLink></Button>
                  <Button variant="ghost" onClick={closeArticle}><X />{closeCopy[lang]}</Button>
                </div>
              </div>}
              </Fragment>
            );
          })}
        </div>
      </section>

      <CTA subtitle={{ et: "Saada oma projekti põhiandmed ja soovitud ajakava.", en: "Send your project information and preferred schedule.", fi: "Lähetä hankkeen perustiedot ja toivottu aikataulu.", de: "Senden Sie die Projektdaten und Ihren gewünschten Zeitplan." }[lang]} />
    </SiteLayout>
  );
}
