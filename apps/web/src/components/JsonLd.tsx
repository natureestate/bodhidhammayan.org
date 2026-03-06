interface OrganizationLdProps {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: string[];
}

export function OrganizationLd({
  name,
  url,
  logo,
  description,
  email,
  phone,
  address,
  socialLinks,
}: OrganizationLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    ...(logo && { logo }),
    ...(description && { description }),
    ...(email && { email }),
    ...(phone && { telephone: phone }),
    ...(address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: address,
        addressCountry: "TH",
      },
    }),
    ...(socialLinks && { sameAs: socialLinks }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `https://bodhidhammayan.org${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface ArticleLdProps {
  title: string;
  description?: string;
  url: string;
  image?: string;
  publishedAt: string;
  authorName?: string;
}

export function ArticleLd({
  title,
  description,
  url,
  image,
  publishedAt,
  authorName = "โพธิธรรมญาณสถาน",
}: ArticleLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    ...(description && { description }),
    url: url.startsWith("http") ? url : `https://bodhidhammayan.org${url}`,
    ...(image && { image }),
    datePublished: publishedAt,
    author: { "@type": "Organization", name: authorName },
    publisher: {
      "@type": "Organization",
      name: "โพธิธรรมญาณสถาน",
      url: "https://bodhidhammayan.org",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface FaqLdProps {
  items: Array<{ question: string; answer: string }>;
}

export function FaqLd({ items }: FaqLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
