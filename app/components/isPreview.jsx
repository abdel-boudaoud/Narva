const isServer = typeof window === "undefined";

export default async function isPreview(context) {
  const { env, cf, ctx } = context.cloudflare;

  let isPreviewValue = isServer
    ? env.STORYBLOK_TOKEN
    : env.STORYBLOK_IS_PREVIEW;

  return isPreviewValue === "yes";
}

export { isPreview };
