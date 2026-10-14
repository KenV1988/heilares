import { createFileRoute } from "@tanstack/react-router";
import { PanelsPage } from "../paikesepargid";
import { localizedHead } from "@/lib/locale-seo";
export const Route = createFileRoute("/$lang/paikesepargid")({
  head: ({ params }) => localizedHead(params.lang, "panels", "/paikesepargid"),
  component: PanelsPage,
});
