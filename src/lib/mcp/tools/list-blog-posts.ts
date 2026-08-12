import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPosts } from "@/data/blog";

const LANGS = ["et", "en", "fi"] as const;

export default defineTool({
  name: "list_blog_posts",
  title: "List blog articles",
  description:
    "List HeilAres solar-energy knowledge base articles with slug, title, summary, category, date and reading time.",
  inputSchema: {
    lang: z.enum(LANGS).default("et").describe("Language of the article metadata."),
    category: z
      .enum(["epc", "park_types", "components", "maintenance"])
      .optional()
      .describe("Optional category filter."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ lang, category }) => {
    const list = blogPosts
      .filter((p) => !category || p.category === category)
      .map((p) => ({
        slug: p.slug,
        title: p.content[lang].title,
        summary: p.content[lang].summary,
        category: p.category,
        date: p.date,
        readMinutes: p.readMinutes,
        url: `https://heilares.ee/blogi/${p.slug}`,
      }));
    return {
      content: [{ type: "text", text: JSON.stringify(list, null, 2) }],
      structuredContent: { posts: list },
    };
  },
});
