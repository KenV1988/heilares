import { createFileRoute, notFound } from "@tanstack/react-router";
import { ReferenceProjectView } from "../../tehtud-tood/$slug";
import { projects } from "@/data/projects";
import { bessProjects } from "@/data/bess-projects";
import { referenceProjectHead } from "@/lib/reference-projects";

export const Route = createFileRoute("/$lang/tehtud-tood/$slug")({
  beforeLoad: ({ params }) => {
    if (
      !projects.some((p) => p.slug === params.slug) &&
      !bessProjects.some((p) => p.slug === params.slug)
    )
      throw notFound();
  },
  head: ({ params }) => referenceProjectHead(params.lang, params.slug),
  component: () => {
    const { slug } = Route.useParams();
    return <ReferenceProjectView slug={slug} />;
  },
});
