/**
 * WordPress -> Sanity Migration Script
 *
 * ใช้ WP REST API ดึงข้อมูลทั้งหมดจาก bodhidhammayan.org
 * แล้วแปลงเป็น Sanity documents พร้อม import
 *
 * วิธีใช้: npx tsx scripts/migrate-wp.ts
 */

const WP_BASE = "https://bodhidhammayan.org/wp-json/wp/v2";

interface WpPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  categories: number[];
  featured_media: number;
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_image?: Array<{ url: string }>;
  };
}

interface WpPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  yoast_head_json?: {
    title?: string;
    description?: string;
    og_image?: Array<{ url: string }>;
  };
}

interface WpCategory {
  id: number;
  slug: string;
  name: string;
  count: number;
}

interface WpMedia {
  id: number;
  source_url: string;
  alt_text: string;
  title: { rendered: string };
}

const CATEGORY_MAP: Record<string, string> = {
  dhamma: "dhamma",
  dhamaen: "dhamma",
  news: "news",
  newsen: "news",
  experienceth: "experience",
  experienceen: "experience",
  portfolioth: "portfolio",
};

function detectLanguage(slug: string): "th" | "en" {
  if (slug.endsWith("-en") || slug.includes("en/")) return "en";
  return "th";
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function htmlToPortableText(html: string) {
  const blocks: Array<Record<string, unknown>> = [];
  const paragraphs = html.split(/<\/p>|<br\s*\/?>/gi).filter(Boolean);

  for (const p of paragraphs) {
    const text = stripHtml(p);
    if (!text) continue;

    blocks.push({
      _type: "block",
      _key: Math.random().toString(36).slice(2, 10),
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: Math.random().toString(36).slice(2, 10),
          text,
          marks: [],
        },
      ],
    });
  }

  return blocks;
}

async function fetchAll<T>(endpoint: string): Promise<T[]> {
  const results: T[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const url = `${WP_BASE}/${endpoint}?per_page=100&page=${page}`;
    console.log(`  Fetching: ${url}`);

    const res = await fetch(url);
    if (!res.ok) {
      if (res.status === 400) break;
      throw new Error(`HTTP ${res.status} for ${url}`);
    }

    const data = (await res.json()) as T[];
    results.push(...data);

    const totalPages = parseInt(res.headers.get("X-WP-TotalPages") ?? "1");
    hasMore = page < totalPages;
    page++;
  }

  return results;
}

async function migrate() {
  console.log("=== WordPress -> Sanity Migration ===\n");

  console.log("1. Fetching categories...");
  const categories = await fetchAll<WpCategory>("categories");
  const categoryMap = new Map(categories.map((c) => [c.id, c.slug]));
  console.log(`   Found ${categories.length} categories\n`);

  console.log("2. Fetching posts...");
  const wpPosts = await fetchAll<WpPost>("posts");
  console.log(`   Found ${wpPosts.length} posts\n`);

  console.log("3. Fetching pages...");
  const wpPages = await fetchAll<WpPage>("pages");
  console.log(`   Found ${wpPages.length} pages\n`);

  console.log("4. Fetching media...");
  const wpMedia = await fetchAll<WpMedia>("media");
  const mediaMap = new Map(wpMedia.map((m) => [m.id, m]));
  console.log(`   Found ${wpMedia.length} media items\n`);

  console.log("5. Converting posts to Sanity documents...");
  const sanityPosts = wpPosts.map((post) => {
    const catSlug = post.categories
      .map((id) => categoryMap.get(id))
      .find((s) => s && CATEGORY_MAP[s]);
    const category = catSlug ? CATEGORY_MAP[catSlug] : "dhamma";
    const language = detectLanguage(post.slug);
    const media = post.featured_media ? mediaMap.get(post.featured_media) : undefined;

    return {
      _type: "post",
      _id: `wp-post-${post.id}`,
      title: stripHtml(post.title.rendered),
      slug: { _type: "slug", current: post.slug },
      language,
      category,
      excerpt: stripHtml(post.excerpt.rendered),
      body: htmlToPortableText(post.content.rendered),
      publishedAt: post.date,
      ...(media && {
        featuredImage: {
          _type: "image",
          alt: media.alt_text || stripHtml(media.title.rendered),
          _externalUrl: media.source_url,
        },
      }),
      ...(post.yoast_head_json && {
        seo: {
          title: post.yoast_head_json.title,
          description: post.yoast_head_json.description,
          ...(post.yoast_head_json.og_image?.[0] && {
            ogImageUrl: post.yoast_head_json.og_image[0].url,
          }),
        },
      }),
    };
  });

  console.log(`   Converted ${sanityPosts.length} posts\n`);

  console.log("6. Converting pages to Sanity documents...");
  const sanityPages = wpPages.map((page) => {
    const language = detectLanguage(page.slug);
    return {
      _type: "page",
      _id: `wp-page-${page.id}`,
      title: stripHtml(page.title.rendered),
      slug: { _type: "slug", current: page.slug },
      language,
      pageType: "home",
      body: htmlToPortableText(page.content.rendered),
      ...(page.yoast_head_json && {
        seo: {
          title: page.yoast_head_json.title,
          description: page.yoast_head_json.description,
        },
      }),
    };
  });

  console.log(`   Converted ${sanityPages.length} pages\n`);

  const output = {
    posts: sanityPosts,
    pages: sanityPages,
    media: wpMedia.map((m) => ({
      id: m.id,
      url: m.source_url,
      alt: m.alt_text,
      title: stripHtml(m.title.rendered),
    })),
    categories: categories.map((c) => ({
      id: c.id,
      slug: c.slug,
      name: c.name,
      count: c.count,
    })),
    _meta: {
      exportedAt: new Date().toISOString(),
      totalPosts: sanityPosts.length,
      totalPages: sanityPages.length,
      totalMedia: wpMedia.length,
    },
  };

  const outputPath = "scripts/wp-export.json";
  const { writeFile } = await import("node:fs/promises");
  await writeFile(outputPath, JSON.stringify(output, null, 2));
  console.log(`\n=== Export complete! Saved to ${outputPath} ===`);
  console.log(`   Posts: ${sanityPosts.length}`);
  console.log(`   Pages: ${sanityPages.length}`);
  console.log(`   Media: ${wpMedia.length}`);
  console.log(
    "\nNext step: Use Sanity CLI to import the data:",
  );
  console.log(
    "  npx sanity dataset import scripts/wp-export.json production",
  );
}

migrate().catch(console.error);
