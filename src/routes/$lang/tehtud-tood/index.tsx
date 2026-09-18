import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "../../tehtud-tood/index";
import { localizedHead } from "@/lib/locale-seo";
export const Route = createFileRoute("/$lang/tehtud-tood/")({
  head: ({ params }) => localizedHead(params.lang, "projects", "/tehtud-tood"),
  component: ProjectsPage,
});
