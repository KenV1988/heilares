import { createFileRoute } from "@tanstack/react-router";
import { BessPage } from "../akupangad";
import { localizedHead } from "@/lib/locale-seo";
export const Route = createFileRoute("/$lang/akupangad")({
  head: ({ params }) => localizedHead(params.lang, "bess", "/akupangad"),
  component: BessPage,
});
