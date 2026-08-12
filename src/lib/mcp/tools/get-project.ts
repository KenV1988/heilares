import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "@/data/projects";

const LANGS = ["et", "en", "fi"] as const;

export default defineTool({
  name: "get_project",
  title: "Get project details",
  description:
    "Get full public details of one HeilAres reference project by slug: description, panels, inverter, mounting system and completion time.",
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
      location: p.location,
      capacityMw: p.capacityKw ? p.capacityKw / 1000 : undefined,
      yearCompleted: p.yearCompleted,
      panelsUsed: p.panelsUsed,
      inverter: p.inverter,
      mountingSystem: p.mountingSystem,
      completionTime: p.completionTime,
      url: `https://heilares.ee/tehtud-tood/${p.slug}`,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
