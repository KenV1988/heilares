import { bessProjects } from "@/data/bess-projects";
import { projects, formatCapacity } from "@/data/projects";
import { formatStorage } from "@/data/bess-projects";
import { getSupportedLang } from "@/i18n";
import { localizedContentHead } from "./locale-seo";

export function referenceProjectHead(language: string, slug: string) {
  const lang = getSupportedLang(language);
  const project =
    projects.find((p) => p.slug === slug) ?? bessProjects.find((p) => p.slug === slug);
  if (!project) return { meta: [{ title: "Unavailable | HeilAres" }, { name: "robots", content: "noindex" }] };
  const capacity = 'storageKwh' in project ? formatStorage(project.storageKwh, lang) : formatCapacity(project.parkCapacityKw, lang);
  const head = localizedContentHead(
    lang,
    `/tehtud-tood/${slug}`,
    `${project.title[lang]} — ${capacity}`,
    `${project.title[lang]}. ${capacity}. ${project.description[lang]}`,
  );
  return { ...head, meta: [...head.meta, { name: "robots", content: "index, follow" }] };
}
