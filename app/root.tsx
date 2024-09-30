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
import { isPreview } from "./components/isPreview";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "./components/Page";
const components = {
  headline: HeadLine,
  page: Page,
};
const isServer = typeof window === "undefined";
const accessToken = isServer
  ? env.STORYBLOK_TOKEN
  : window.env.STORYBLOK_TOKEN;
storyblokInit({
  accessToken,
  use: [apiPlugin],
  components,
  bridge: isPreview(),
});

export function Layout({ children }) {
  const env = useLoaderData();

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
        <Scripts
          dangerouslySetInnerHTML={{
            __html: `window.env = ${JSON.stringify(env)}`,
          }}
        />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export const loader = async ({ params }) => {
  let lang = params.lang || "default";

  return json({
    env: {
      STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
      STORYBLOK_IS_PREVIEW: process.env.STORYBLOK_IS_PREVIEW,
    },
  });
};
