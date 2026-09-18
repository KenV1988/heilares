import { createFileRoute, notFound } from "@tanstack/react-router";
import { ProjectDetailView } from "../../tehtud-tood/$slug";
import { projects } from "@/data/projects";
import { localizedContentHead } from "@/lib/locale-seo";
import { getSupportedLang } from "@/i18n";
export const Route = createFileRoute("/$lang/tehtud-tood/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) =>
    loaderData
      ? localizedContentHead(
          params.lang,
          `/tehtud-tood/${params.slug}`,
          loaderData.project.title[getSupportedLang(params.lang)],
          loaderData.project.description[getSupportedLang(params.lang)],
        )
      : {},
  component: () => {
    const { project } = Route.useLoaderData();
    return <ProjectDetailView project={project} />;
  },
});
