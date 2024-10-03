import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  json,
} from "@remix-run/react";

import "./tailwind.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeadLine from "./components/HeadLine";
import { initializeStoryblok } from "./utils/storyblokInit";
// import { isPreview } from "./components/isPreview";
// import { storyblokInit, apiPlugin } from "@storyblok/react";
// import Page from "./components/Page";

// const components = {
//   headline: HeadLine,
//   page: Page,
// };

export function Layout({ children }) {
  // const env = useLoaderData();
  // const { STORYBLOK_TOKEN, STORYBLOK_IS_PREVIEW } = env;
  
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}

        <ScrollRestoration />
        {/* <Scripts
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env.STORYBLOK_TOKEN)}`,
          }}
        /> */}

        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export const loader = async ({ params, context }) => {
  let lang = params.lang || "default";
  const { env, cf, ctx } = context.cloudflare;
  initializeStoryblok(env.STORYBLOK_TOKEN)
  return json({
    STORYBLOK_TOKEN: env.STORYBLOK_TOKEN,
    STORYBLOK_IS_PREVIEW: env.STORYBLOK_IS_PREVIEW,
  });
};
