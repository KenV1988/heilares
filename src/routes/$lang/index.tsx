import { createFileRoute } from "@tanstack/react-router";
import { Index } from "../index";
import { localizedHead } from "@/lib/locale-seo";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => localizedHead(params.lang, "home", "/"),
  component: Index,
});
