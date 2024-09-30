


const isServer = typeof window === "undefined";
const isPreview = () => {
  let isPreviewValue = isServer
    ? env.STORYBLOK_IS_PREVIEW
    : window.env.STORYBLOK_IS_PREVIEW;

  return isPreviewValue === "yes";
};
export { isPreview };
