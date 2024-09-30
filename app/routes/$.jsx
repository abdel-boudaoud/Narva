import { isPreview } from "../components/isPreview";

export const loader = async ({ params, request }) => {
  let version = isPreview() ? "draft" : "published";

  let sbParams = {
    version,
    resolve_relations: ["popular-articles.articles"],
    language,
  };

  const { data } = await getStoryblokApi()
    .get(`cdn/stories/${slug}`, sbParams, { cache: "no-store" })
    .catch((e) => ({ data: null }));

  if (!data) throw new Response("Not Found", { status: 404 });

  let { data: articles } = await getStoryblokApi().get(
    `cdn/stories`,
    {
      version,
      starts_with: "blog/",
      language,
      is_startpage: 0,
    },
    { cache: "no-store" }
  );

  return json({ story: data?.story, articles: articles?.stories });
};
