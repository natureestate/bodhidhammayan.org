import { Link } from "@tanstack/react-router";
import type { Language } from "@bodhidhammayan/api-client";
import { getPosts } from "@bodhidhammayan/api-client";
import { PostCard } from "./PostCard";

/** รูปแบบโพสต์จาก getPosts (ไม่มี body) */
type PostListItem = Awaited<ReturnType<typeof getPosts>>["posts"][number];

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

/**
 * คอมโพเนนต์แสดงรายการโพสต์ตามหมวดหมู่ (ธรรมะ, ข่าว, ประสบการณ์)
 * รองรับทั้งข้อมูลจาก Sanity (data + basePath) และ placeholder (title)
 */
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
        date: new Date(post.publishedAt).toLocaleDateString(
          lang === "th" ? "th-TH" : "en-US",
        ),
        imageUrl,
        href: `${basePathClean}/${slug}`,
      };
    });

    return (
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-display text-3xl font-bold text-dharma-900">
          {title}
        </h1>

        {posts.length === 0 ? (
          <p className="mt-8 text-dharma-500">
            {lang === "th"
              ? "ยังไม่มีเนื้อหาในหมวดนี้"
              : "No content in this category yet."}
          </p>
        ) : (
          <>
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
          </>
        )}
      </section>
    );
  }

  // Placeholder mode
  const placeholderPosts = Array.from({ length: 9 }, (_, i) => ({
    id: `placeholder-${i}`,
    title: `${title} ${i + 1}`,
    excerpt: "เนื้อหาจะถูกดึงจาก Sanity CMS",
    date: "2026-03-06",
    href: `/${lang}/${category}-post-${i + 1}`,
  }));

  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="font-display text-3xl font-bold text-dharma-900">
        {title}
      </h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {placeholderPosts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            href={post.href}
          />
        ))}
      </div>
    </section>
  );
}
