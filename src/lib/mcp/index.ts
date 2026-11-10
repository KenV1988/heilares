import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyInfo from "./tools/get-company-info";
import listProjects from "./tools/list-projects";
import getProject from "./tools/get-project";
import listBlogPosts from "./tools/list-blog-posts";
import getBlogPost from "./tools/get-blog-post";

export default defineMcp({
  name: "heilares",
  title: "Heilares",
  version: "0.1.0",
  instructions:
    "Public tools for HeilAres OÜ, an installation contractor for utility-scale solar parks. Use get_company_info for contacts, list_projects/get_project for reference projects with separate total park capacity and HeilAres work scope, and list_blog_posts/get_blog_post for the solar knowledge base. Content is available in Estonian (et), English (en), Finnish (fi) and German (de).",
  tools: [getCompanyInfo, listProjects, getProject, listBlogPosts, getBlogPost],
});
