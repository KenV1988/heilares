import { createFileRoute } from "@tanstack/react-router";
import { ElectricalPage } from "../elektritood";
import { localizedHead } from "@/lib/locale-seo";
export const Route = createFileRoute("/$lang/elektritood")({
  head: ({ params }) => localizedHead(params.lang, "electrical", "/elektritood"),
  component: ElectricalPage,
});
