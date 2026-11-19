import { bessProjects } from "@/data/bess-projects";
import { projects } from "@/data/projects";
import { getSupportedLang } from "@/i18n";
import { localizedContentHead } from "./locale-seo";

export function referenceProjectHead(language: string, slug: string) {
  const lang = getSupportedLang(language);
  const project =
    projects.find((p) => p.slug === slug) ?? bessProjects.find((p) => p.slug === slug);
  if (!project) return localizedContentHead(lang, `/tehtud-tood/${slug}`, "HeilAres", "HeilAres");
  return localizedContentHead(
    lang,
    `/tehtud-tood/${slug}`,
    project.title[lang],
    project.description[lang],
  );
}
