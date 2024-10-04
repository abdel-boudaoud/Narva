import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../components/Page";
import HeadLine from "../components/HeadLine";
import { isPreview } from "../components/isPreview";
import Article from "../components/Article";
import AllArticles from "../components/AllArticles";
import PopularArticles from "../components/PopularArticles";
const components = {
  headline: HeadLine,
  page: Page,
  "popular-articles": PopularArticles,
  "all-articles": AllArticles,
  article: Article,
};

export function initializeStoryblok(accessToken) {
  storyblokInit({
    accessToken: accessToken,
    use: [apiPlugin],
    components,
    bridge: isPreview(),
  });
}
