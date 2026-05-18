import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SeoProps {
  titleKey: string;
  descriptionKey: string;
}

/** Lightweight client-side SEO updater — sets <title> and meta description. */
export function Seo({ titleKey, descriptionKey }: SeoProps) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = t(titleKey);
    const description = t(descriptionKey);
    if (typeof document === "undefined") return;
    document.title = title;
    document.documentElement.lang = i18n.language;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
  }, [titleKey, descriptionKey, i18n.language, t]);

  return null;
}
