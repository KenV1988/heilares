import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projectsByCategory, formatProjectDuration } from "@/data/projects";

const LANGS = ["et", "en", "fi", "de"] as const;

export default defineTool({
  name: "list_projects",
  title: "List solar park projects",
  description:
    "List HeilAres reference projects with separate total park capacity and documented HeilAres work scope, location, park type and project period.",
  inputSchema: {
    lang: z.enum(LANGS).default("et").describe("Language for titles and descriptions."),
    category: z
      .enum(["tracker_park", "maapark", "katusepark"])
      .optional()
      .describe("Optional park type filter."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ lang, category }) => {
    const list = projectsByCategory
      .filter((p) => !category || p.category === category)
      .map((p) => ({
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
        durationMonths: p.durationMonths,
        duration: formatProjectDuration(p, lang),
      }));
    if (list.length === 0) throw new ToolError("No projects match that filter.");
    return {
      content: [{ type: "text", text: JSON.stringify(list, null, 2) }],
      structuredContent: { projects: list },
    };
  },
});
