const isServer = typeof window === "undefined";
const isPreview = () => {
  let isPreviewValue = isServer
    ? import.meta.env.STORYBLOK_IS_PREVIEW
    : window.env.STORYBLOK_IS_PREVIEW;

  return isPreviewValue === "yes";
};
export { isPreview };
