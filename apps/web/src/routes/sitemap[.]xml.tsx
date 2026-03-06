import { createFileRoute } from "@tanstack/react-router";

const BASE_URL = "https://bodhidhammayan.org";

const STATIC_PAGES = [
  { th: "/th/hometh/", en: "/en/homeen/" },
  { th: "/th/about-us-th/", en: "/en/about-us-en/" },
  { th: "/th/masterth/", en: "/en/masteren/" },
  { th: "/th/dhammath/", en: "/en/dhammaen/" },
  { th: "/th/newsth/", en: "/en/newsen/" },
  { th: "/th/experience-th/", en: "/en/experience-en/" },
  { th: "/th/placeth/", en: "/en/placeen/" },
  { th: "/th/course-saraburi-th/", en: "/en/course-saraburi-en/" },
  { th: "/th/course-phuket-th/", en: "/en/course-phuket-en/" },
  { th: "/th/course-hatyai-th/", en: "/en/course-hatyai-en/" },
  { th: "/th/course-bangkok-th/", en: "/en/course-bangkok-en/" },
  { th: "/th/home-saraburi-th/", en: "/en/home-saraburi-en/" },
  { th: "/th/home-phuket-th/", en: "/en/home-phuket-en/" },
  { th: "/th/home-hatyai-th/", en: "/en/home-hatyai-en/" },
  { th: "/th/home-bangkok-th/", en: "/en/home-bangkok-en/" },
  {
    th: "/th/type-of-courseand-schedule-th/",
    en: "/en/type-of-courseand-schedule-en/",
  },
  { th: "/th/register-email-th/", en: "/en/register-email-en/" },
];

export const Route = createFileRoute("/sitemap.xml")({
  component: () => null,
});

export function generateSitemapXml(): string {
  const urls: string[] = [];

  for (const page of STATIC_PAGES) {
    urls.push(`  <url>
    <loc>${BASE_URL}${page.th}</loc>
    <xhtml:link rel="alternate" hreflang="th" href="${BASE_URL}${page.th}" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${page.en}" />
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);

    urls.push(`  <url>
    <loc>${BASE_URL}${page.en}</loc>
    <xhtml:link rel="alternate" hreflang="th" href="${BASE_URL}${page.th}" />
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${page.en}" />
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>`;
}
