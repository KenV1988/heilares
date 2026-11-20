import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostView } from "../../blogi/$slug";
import { getBlogPost } from "@/data/blog";
import { blogDetailHead } from "@/lib/blog-head";
export const Route = createFileRoute("/$lang/blogi/$slug")({
  beforeLoad: ({ params }) => { if (!getBlogPost(params.slug)) throw notFound(); },
  head: ({ params }) => blogDetailHead(params.lang, params.slug),
  component: () => {
    const { slug } = Route.useParams();
    const post = getBlogPost(slug);
    if (!post) throw notFound();
    return <BlogPostView post={post} />;
  },
});
