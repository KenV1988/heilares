import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "@/data/projects";

const LANGS = ["et", "en", "fi", "de"] as const;

export default defineTool({
  name: "get_project",
  title: "Get project details",
  description:
    "Get public details of one HeilAres reference project, clearly separating total park capacity from HeilAres' documented scope and work packages.",
  inputSchema: {
    slug: z.string().min(1).describe("Project slug, e.g. from list_projects."),
    lang: z.enum(LANGS).default("et").describe("Language for the title and description."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug, lang }) => {
    const p = projects.find((x) => x.slug === slug);
    if (!p) throw new ToolError(`No project found with slug "${slug}".`);
    const data = {
      slug: p.slug,
      title: p.title[lang],
      description: p.description[lang],
      category: p.category,
      location: p.location[lang],
      parkCapacityMw: p.parkCapacityKw / 1000,
      heilAresShareMw: p.heilAresShareKw / 1000,
      heilAresShareApproximate: p.heilAresShareApproximate ?? false,
      shareBreakdown: p.shareBreakdown
        ? {
            mechanicalMw: p.shareBreakdown.mechanicalKw / 1000,
            electricalMw: p.shareBreakdown.electricalKw / 1000,
            note: "Work-package volumes are separate and must not be added together.",
          }
        : undefined,
      period: p.period,
      technology: p.technology?.[lang],
      developer: p.developer,
      mainContractor: p.mainContractor,
      client: p.client,
      url: `https://heilares.ee${lang === "et" ? "" : `/${lang}`}/tehtud-tood/${p.slug}`,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
