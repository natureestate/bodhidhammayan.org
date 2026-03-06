import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { ArticleLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/$slug")({
  component: PostPage,
});

function PostPage() {
  const { lang, slug } = Route.useParams();

  // Placeholder สำหรับข้อมูลบทความ - จะถูกดึงจาก Sanity CMS
  const postTitle = slug ?? "บทความ";
  const canonical = `/${lang}/${slug}/`;
  const postUrl = `https://bodhidhammayan.org${canonical}`;

  return (
    <>
      <SeoHead
        title={postTitle}
        description={`บทความ ${postTitle} - โพธิธรรมญาณสถาน`}
        canonical={canonical}
        type="article"
      />
      <ArticleLd
        title={postTitle}
        description={`เนื้อหาบทความ ${postTitle}`}
        url={postUrl}
        publishedAt={new Date().toISOString()}
      />
      <article className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="font-display text-3xl font-bold text-dharma-900">
          {postTitle}
        </h1>
        <div className="prose prose-lg mt-8">
          <p className="text-dharma-600">
            เนื้อหาบทความจะถูกดึงจาก Sanity CMS
          </p>
        </div>
      </article>
    </>
  );
}
