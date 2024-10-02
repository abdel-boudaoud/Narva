import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Page";
import HeadLine from "../components/HeadLine";
import { isPreview } from "../components/isPreview";

const components = {
  headline: HeadLine,
  page: Page,
};

export function initializeStoryblok(accessToken) {
  storyblokInit({
    accessToken: accessToken,
    use: [apiPlugin],
    components,
    bridge: isPreview(),
  });
}
