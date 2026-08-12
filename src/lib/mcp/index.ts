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
    "Public tools for HeilAres OÜ, a green-energy EPC company building megawatt-scale solar parks in the Baltics and Nordics. Use get_company_info for contacts, list_projects/get_project for reference projects, and list_blog_posts/get_blog_post for the solar knowledge base. Content is available in Estonian (et), English (en) and Finnish (fi).",
  tools: [getCompanyInfo, listProjects, getProject, listBlogPosts, getBlogPost],
});
