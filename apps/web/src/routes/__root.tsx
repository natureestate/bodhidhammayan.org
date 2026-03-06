/// <reference types="vite/client" />
import type { ReactNode } from "react";
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { OrganizationLd } from "~/components/JsonLd";
import { QueryProvider } from "~/components/QueryProvider";
import appCss from "~/global.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#C8A951" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Sarabun:wght@300;400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="th">
      <head>
        <HeadContent />
      </head>
      <body>
        <QueryProvider>{children}</QueryProvider>
        <OrganizationLd
          name="โพธิธรรมญาณสถานเตชะชัยสิทธิ"
          url="https://bodhidhammayan.org"
          description="สถานปฏิบัติธรรมอานาปานสติ และวิปัสสนากรรมฐาน ตามหลักสติปัฏฐานสี่"
          email="info@bodhidhammayan.org"
          phone="02-117-4063"
          address="462/12 ซอยอ่อนนุช 8 ถนนสุขุมวิท 77 แขวงอ่อนนุช เขตสวนหลวง กรุงเทพมหานคร 10250"
          socialLinks={[
            "https://www.facebook.com/bodhidhammayan",
            "https://www.youtube.com/@ThamLaewDee",
            "https://www.tiktok.com/@thamlaewdee",
            "https://www.instagram.com/thamlaewdee",
          ]}
        />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
