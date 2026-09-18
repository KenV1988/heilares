import { createFileRoute } from "@tanstack/react-router";
import { BlogIndex } from "../../blogi/index";
import { localizedHead } from "@/lib/locale-seo";
export const Route = createFileRoute("/$lang/blogi/")({
  head: ({ params }) => localizedHead(params.lang, "blog", "/blogi"),
  component: BlogIndex,
});
