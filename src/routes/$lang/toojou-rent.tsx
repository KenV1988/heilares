import { createFileRoute } from "@tanstack/react-router";
import { WorkforcePage } from "../toojou-rent";
import { localizedHead } from "@/lib/locale-seo";
export const Route = createFileRoute("/$lang/toojou-rent")({
  head: ({ params }) => localizedHead(params.lang, "workforce", "/toojou-rent"),
  component: WorkforcePage,
});
