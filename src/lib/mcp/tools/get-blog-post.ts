import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPosts } from "@/data/blog";

const LANGS = ["et", "en", "fi"] as const;

export default defineTool({
  name: "get_blog_post",
  title: "Get blog article",
  description:
    "Get the full text of one HeilAres blog article by slug, including all sections and FAQ entries.",
  inputSchema: {
    slug: z.string().min(1).describe("Article slug, e.g. from list_blog_posts."),
    lang: z.enum(LANGS).default("et").describe("Language of the article."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug, lang }) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) throw new ToolError(`No blog article found with slug "${slug}".`);
    const c = post.content[lang];
    const data = {
      slug: post.slug,
      category: post.category,
      date: post.date,
      readMinutes: post.readMinutes,
      title: c.title,
      summary: c.summary,
      lead: c.lead,
      sections: c.sections,
      faqs: c.faqs,
      url: `https://heilares.ee/blogi/${post.slug}`,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
