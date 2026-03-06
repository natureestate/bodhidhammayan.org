import type { Language } from "@bodhidhammayan/api-client";
import { HREFLANG_MAP } from "@bodhidhammayan/api-client";

interface SeoHeadProps {
  title: string;
  description?: string;
  ogImage?: string;
  canonical?: string;
  alternateUrls?: Partial<Record<Language, string>>;
  type?: "website" | "article";
  publishedAt?: string;
  siteName?: string;
}

const BASE_URL = "https://bodhidhammayan.org";

export function SeoHead({
  title,
  description,
  ogImage,
  canonical,
  alternateUrls,
  type = "website",
  publishedAt,
  siteName = "โพธิธรรมญาณสถาน",
}: SeoHeadProps) {
  const fullCanonical = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${BASE_URL}${canonical}`
    : undefined;

  const fullOgImage = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${BASE_URL}${ogImage}`
    : undefined;

  return (
    <>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      {fullOgImage && <meta property="og:image" content={fullOgImage} />}
      {publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {fullOgImage && <meta name="twitter:image" content={fullOgImage} />}

      {/* hreflang */}
      {alternateUrls &&
        Object.entries(alternateUrls).map(([lang, url]) => (
          <link
            key={lang}
            rel="alternate"
            hrefLang={HREFLANG_MAP[lang as Language]}
            href={url?.startsWith("http") ? url : `${BASE_URL}${url}`}
          />
        ))}
      {alternateUrls && Object.keys(alternateUrls).length > 0 && (
        <link
          rel="alternate"
          hrefLang="x-default"
          href={
            alternateUrls.th
              ? alternateUrls.th.startsWith("http")
                ? alternateUrls.th
                : `${BASE_URL}${alternateUrls.th}`
              : `${BASE_URL}/th/hometh/`
          }
        />
      )}
    </>
  );
}
