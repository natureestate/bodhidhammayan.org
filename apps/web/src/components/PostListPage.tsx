import { Link } from "@tanstack/react-router";
import type { Language } from "@bodhidhammayan/api-client";
import { getPosts } from "@bodhidhammayan/api-client";
import { PostCard } from "./PostCard";
import { getPostsByCategory, type SeedPost } from "~/data";

type PostListItem = Awaited<ReturnType<typeof getPosts>>["posts"][number];

const SEED_CATEGORY_MAP: Record<string, SeedPost["category"]> = {
  dhamma: "teachings",
  news: "news",
  experience: "testimonials",
};

interface PostListPagePropsWithData {
  category: "dhamma" | "news" | "experience";
  lang: Language;
  basePath: string;
  data: Awaited<ReturnType<typeof getPosts>>;
}

interface PostListPagePropsWithPlaceholder {
  category: "dhamma" | "news" | "experience";
  lang: Language;
  title: string;
}

type PostListPageProps =
  | PostListPagePropsWithData
  | PostListPagePropsWithPlaceholder;

function isPropsWithData(
  props: PostListPageProps,
): props is PostListPagePropsWithData {
  return "data" in props && "basePath" in props;
}

function formatDate(dateStr: string, lang: Language): string {
  return new Date(dateStr).toLocaleDateString(
    lang === "th" ? "th-TH" : "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );
}

export function PostListPage(props: PostListPageProps) {
  const { category, lang } = props;

  const titleMap = {
    dhamma: { th: "รวมธรรมคำสอน", en: "Dhamma Teaching" },
    news: { th: "ข่าวสารอัพเดท", en: "News & Updates" },
    experience: {
      th: "ประสบการณ์จากผู้ปฏิบัติ",
      en: "Experience & Testimonials",
    },
  };

  const title =
    "title" in props ? props.title : titleMap[category][lang];

  let posts: Array<{
    id: string;
    title: string;
    excerpt?: string;
    date: string;
    imageUrl?: string;
    href: string;
  }>;

  if (isPropsWithData(props)) {
    const { posts: dataPosts, totalPages, page } = props.data;
    const basePathClean = props.basePath.replace(/\/$/, "");

    if (dataPosts.length > 0) {
      posts = dataPosts.map((post: PostListItem) => {
        const slug =
          typeof post.slug === "object" && post.slug?.current
            ? post.slug.current
            : String(post.slug);
        const imageUrl =
          post.featuredImage?.asset?.url ??
          (typeof post.featuredImage === "object" &&
          "asset" in post.featuredImage &&
          post.featuredImage.asset?.url
            ? post.featuredImage.asset.url
            : undefined);

        return {
          id: post._id,
          title: post.title,
          excerpt: post.excerpt,
          date: formatDate(post.publishedAt, lang),
          imageUrl,
          href: `${basePathClean}/${slug}`,
        };
      });

      return (
        <section className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="font-display text-3xl font-bold text-dharma-900">
            {title}
          </h1>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                imageUrl={post.imageUrl}
                href={post.href}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <nav
              className="mt-8 flex justify-center gap-2"
              aria-label="Pagination"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (p) => (
                  <Link
                    key={p}
                    to={basePathClean}
                    search={p === 1 ? undefined : { page: p }}
                    className={`rounded px-4 py-2 transition-colors ${
                      p === page
                        ? "bg-gold-500 text-white"
                        : "text-dharma-600 hover:bg-dharma-100"
                    }`}
                  >
                    {p}
                  </Link>
                ),
              )}
            </nav>
          )}
        </section>
      );
    }
  }

  const seedCategory = SEED_CATEGORY_MAP[category] ?? "teachings";
  const seedPosts = getPostsByCategory(seedCategory);

  posts = seedPosts.map((post) => ({
    id: post.id,
    title: post.title,
    excerpt: post.excerpt,
    date: formatDate(post.date, lang),
    imageUrl: post.image,
    href: `/${lang}/${post.slug}`,
  }));

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-dharma-900">
        {title}
      </h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            imageUrl={post.imageUrl}
            href={post.href}
          />
        ))}
      </div>
    </section>
  );
}
