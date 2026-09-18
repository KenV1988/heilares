import { createFileRoute, notFound } from "@tanstack/react-router";
import { BlogPostView } from "../../blogi/$slug";
import { getBlogPost } from "@/data/blog";
import { localizedContentHead } from "@/lib/locale-seo";
import { getSupportedLang } from "@/i18n";
export const Route = createFileRoute("/$lang/blogi/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) =>
    loaderData
      ? localizedContentHead(
          params.lang,
          `/blogi/${params.slug}`,
          loaderData.post.content[getSupportedLang(params.lang)].title,
          loaderData.post.content[getSupportedLang(params.lang)].summary,
          "article",
        )
      : {},
  component: () => {
    const { post } = Route.useLoaderData();
    return <BlogPostView post={post} />;
  },
});
