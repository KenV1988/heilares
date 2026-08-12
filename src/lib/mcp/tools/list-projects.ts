import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "@/data/projects";

const LANGS = ["et", "en", "fi"] as const;

export default defineTool({
  name: "list_projects",
  title: "List solar park projects",
  description:
    "List HeilAres reference projects (solar tracker parks, ground-mounted and rooftop parks) with location, capacity, park type and completion year.",
  inputSchema: {
    lang: z.enum(LANGS).default("et").describe("Language for titles and descriptions."),
    category: z
      .enum(["tracker_park", "maapark", "katusepark"])
      .optional()
      .describe("Optional park type filter."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ lang, category }) => {
    const list = projects
      .filter((p) => !category || p.category === category)
      .map((p) => ({
        slug: p.slug,
        title: p.title[lang],
        category: p.category,
        location: p.location,
        capacityMw: p.capacityKw ? p.capacityKw / 1000 : undefined,
        yearCompleted: p.yearCompleted,
      }));
    if (list.length === 0) throw new ToolError("No projects match that filter.");
    return {
      content: [{ type: "text", text: JSON.stringify(list, null, 2) }],
      structuredContent: { projects: list },
    };
  },
});
