import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "../kontakt";
import { localizedHead } from "@/lib/locale-seo";
export const Route = createFileRoute("/$lang/kontakt")({
  head: ({ params }) => localizedHead(params.lang, "contact", "/kontakt"),
  component: ContactPage,
});
