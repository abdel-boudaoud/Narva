import { json } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { initializeStoryblok } from "../utils/storyblokInit";
import {
  getStoryblokApi,
  useStoryblokState,
  StoryblokComponent,
} from "@storyblok/react";

export const loader = async ({ params, context }) => {
  const { env, cf, ctx } = context.cloudflare;
  initializeStoryblok(env.STORYBLOK_TOKEN);
  const slug = params.slug ?? "home";

  let sbParams = {
    version: "draft",
  };

  let { data } = await getStoryblokApi()
    .get(`cdn/stories/${slug}`, sbParams)
    .catch((e) => {
      console.log("e", e);
      return { data: null };
    });

  if (!data) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ story: data?.story });
};

export default function Page({ context }) {
  // const { env, cf, ctx } = context.cloudflare;
  // initializeStoryblok(`rF9dcOIIiXK8sNGQLkliyQtt`);

  let { story } = useLoaderData();

  story = useStoryblokState(story);

  return <StoryblokComponent blok={story.content} />;
}
