import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Page";
import HeadLine from "../components/HeadLine";
import { isPreview } from "../components/isPreview";
import Article from "../components/Aticle";
import Test from "../components/Test";
const components = {
  headline: HeadLine,
  page: Page,
  article: Article,
  test: Test,
};

export function initializeStoryblok(accessToken) {
  storyblokInit({
    accessToken: accessToken,
    use: [apiPlugin],
    components,
    bridge: isPreview(),
  });
}
