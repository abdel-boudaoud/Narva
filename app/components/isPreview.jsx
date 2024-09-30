


const isServer = typeof window === "undefined";
const isPreview = (env) => {
  let isPreviewValue = isServer
    ? env.STORYBLOK_IS_PREVIEW
    : window.env.STORYBLOK_IS_PREVIEW;

  return isPreviewValue === "yes";
};
export { isPreview };
