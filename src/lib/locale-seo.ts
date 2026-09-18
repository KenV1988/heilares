import i18n, { getSupportedLang, type Lang } from "@/i18n";

const SITE_URL = "https://heilares.ee";
const PREFIXED_LANGS: Exclude<Lang, "et">[] = ["fi", "en", "de"];

type SeoPage =
  | "home"
  | "panels"
  | "bess"
  | "electrical"
  | "projects"
  | "blog"
  | "contact"
  | "workforce";

export function localeUrl(lang: Lang, path: string) {
  const suffix = path === "/" ? "" : path;
  return `${SITE_URL}${lang === "et" ? suffix || "/" : `/${lang}${suffix}`}`;
}

function alternateLinks(path: string) {
  return [
    { rel: "alternate", hrefLang: "et", href: localeUrl("et", path) },
    ...PREFIXED_LANGS.map((lang) => ({
      rel: "alternate",
      hrefLang: lang,
      href: localeUrl(lang, path),
    })),
    { rel: "alternate", hrefLang: "x-default", href: localeUrl("et", path) },
  ];
}

export function localizedHead(language: string, page: SeoPage, path: string) {
  const lang = getSupportedLang(language);
  const title = i18n.getFixedT(lang)(`seo.${page}.title`);
  const description = i18n.getFixedT(lang)(`seo.${page}.description`);
  return localizedContentHead(lang, path, title, description);
}

export function localizedContentHead(
  language: string,
  path: string,
  title: string,
  description: string,
  type: "website" | "article" = "website",
) {
  const lang = getSupportedLang(language);
  const url = localeUrl(lang, path);
  return {
    meta: [
      { title: title.includes("HeilAres") ? title : `${title} | HeilAres` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }, ...alternateLinks(path)],
  };
}
