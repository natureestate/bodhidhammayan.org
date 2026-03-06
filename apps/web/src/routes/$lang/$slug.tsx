import { createFileRoute, Link } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd, ArticleLd } from "~/components/JsonLd";
import { getPostBySlug } from "~/data";

export const Route = createFileRoute("/$lang/$slug")({
  component: PostPage,
});

function PostPage() {
  const { lang, slug } = Route.useParams();
  const post = getPostBySlug(slug);
  const canonical = `/${lang}/${slug}/`;
  const postUrl = `https://bodhidhammayan.org${canonical}`;

  if (!post) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="font-display text-3xl font-bold text-dharma-900">
          ไม่พบบทความ
        </h1>
        <p className="mt-4 text-dharma-600">
          บทความที่คุณค้นหาไม่มีอยู่ในระบบ
        </p>
        <Link
          to={`/${lang}/${lang === "th" ? "hometh" : "homeen"}/`}
          className="mt-6 inline-block rounded-lg bg-gold-500 px-6 py-3 font-semibold text-white hover:bg-gold-600"
        >
          กลับหน้าแรก
        </Link>
      </section>
    );
  }

  const categoryMap: Record<string, { label: string; path: string }> = {
    teachings: { label: "ธรรมคำสอน", path: lang === "th" ? "dhammath" : "dhammaen" },
    news: { label: "ข่าวสาร", path: lang === "th" ? "newsth" : "newsen" },
    testimonials: { label: "ประสบการณ์", path: lang === "th" ? "experience-th" : "experience-en" },
  };
  const cat = categoryMap[post.category] ?? { label: post.category, path: "" };

  return (
    <>
      <SeoHead
        title={`${post.title} - โพธิธรรมญาณสถาน`}
        description={post.excerpt}
        canonical={canonical}
        type="article"
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: `/${lang}/${lang === "th" ? "hometh" : "homeen"}/` },
          { name: cat.label, url: `/${lang}/${cat.path}/` },
          { name: post.title, url: canonical },
        ]}
      />
      <ArticleLd
        title={post.title}
        description={post.excerpt}
        url={postUrl}
        publishedAt={post.date}
      />

      <article className="mx-auto max-w-4xl px-4 py-16">
        {post.image && (
          <div className="mb-8 overflow-hidden rounded-xl">
            <img
              src={post.image}
              alt={post.title}
              className="aspect-video w-full object-cover"
            />
          </div>
        )}

        <div className="mb-4 flex items-center gap-3">
          <Link
            to={`/${lang}/${cat.path}/`}
            className="rounded-full bg-gold-100 px-3 py-1 text-xs font-medium text-gold-700 hover:bg-gold-200"
          >
            {cat.label}
          </Link>
          <time className="text-sm text-dharma-400">
            {new Date(post.date).toLocaleDateString(
              lang === "th" ? "th-TH" : "en-US",
              { year: "numeric", month: "long", day: "numeric" },
            )}
          </time>
        </div>

        <h1 className="font-display text-3xl font-bold text-dharma-900 md:text-4xl">
          {post.title}
        </h1>

        <p className="mt-4 font-thai text-lg leading-relaxed text-dharma-600">
          {post.excerpt}
        </p>

        <div className="mt-2 text-sm text-dharma-400">
          โดย {post.author}
        </div>

        <hr className="my-8 border-dharma-100" />

        <div className="prose prose-lg max-w-none">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="mb-4 font-thai text-base leading-relaxed text-dharma-700"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <hr className="my-8 border-dharma-100" />

        <Link
          to={`/${lang}/${cat.path}/`}
          className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700"
        >
          &larr; กลับไปหน้า{cat.label}
        </Link>
      </article>
    </>
  );
}
