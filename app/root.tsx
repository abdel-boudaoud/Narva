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

export function Layout({ children }) {
  const env = useLoaderData(); // Access loader data on the client side

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
            __html: `window.env = ${JSON.stringify(env)}`, // Inject env values into window.env
          }}
        />
        <Footer />
      </body>
    </html>
  );
}

export default function App() {
  const env = useLoaderData();

  // Initialize Storyblok after the loader data is available
  if (typeof window !== "undefined") {
    storyblokInit({
      accessToken: env.STORYBLOK_TOKEN, // Use env from loader data
      use: [apiPlugin],
      components,
      bridge: env.previewMode === "yes", // Use preview mode from loader data
    });
  }

  return <Outlet />;
}

// Server-side loader to pass env variables to the client
export const loader = async ({ params, env }) => {
  let lang = params.lang || "default";
  const previewMode = isPreview(env); // Use env directly in server-side code

  return json({
    STORYBLOK_TOKEN: env.STORYBLOK_TOKEN, // Pass STORYBLOK_TOKEN to the client
    previewMode: previewMode ? "yes" : "no", // Pass preview mode to the client
  });
};
