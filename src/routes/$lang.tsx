import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import i18n, { type Lang } from "@/i18n";

const PREFIXED_LANGS = ["fi", "en", "de"] as const;

export const Route = createFileRoute("/$lang")({
  beforeLoad: async ({ params }) => {
    if (!PREFIXED_LANGS.includes(params.lang as (typeof PREFIXED_LANGS)[number])) throw notFound();
    await i18n.changeLanguage(params.lang);
    return { lang: params.lang as Lang };
  },
  component: () => <Outlet />,
});
