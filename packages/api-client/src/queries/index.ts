import { sanityClient } from "../sanity-client";
import type { Language } from "../zod-schemas";

function ensureClient() {
  if (!sanityClient) {
    console.warn("Sanity client not configured. Set SANITY_PROJECT_ID env var.");
    return null;
  }
  return sanityClient;
}

export async function getHomePage(lang: Language) {
  const client = ensureClient();
  if (!client) return null;
  return client.fetch(
    `*[_type == "page" && pageType == "home" && language == $lang][0]{
      ...,
      "featuredPosts": *[_type == "post" && language == $lang] | order(publishedAt desc)[0...6]{
        _id, title, slug, excerpt, featuredImage, publishedAt, category
      },
      "courses": *[_type == "course" && language == $lang] | order(order asc){
        _id, title, slug, courseType, duration, description, featuredImage
      },
      "locations": *[_type == "location" && language == $lang]{
        _id, name, slug, address, description, images
      },
      "books": *[_type == "book" && language == $lang]{
        _id, title, slug, coverImage, description
      },
      "faqs": *[_type == "faq" && language == $lang] | order(order asc){
        _id, question, answer
      }
    }`,
    { lang },
  );
}

export async function getPosts(
  category: string,
  lang: Language,
  page = 1,
  pageSize = 12,
) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const client = ensureClient();
  if (!client) return { posts: [], total: 0, page, pageSize, totalPages: 0 };

  const [posts, total] = await Promise.all([
    client.fetch(
      `*[_type == "post" && category == $category && language == $lang] | order(publishedAt desc)[$start...$end]{
        _id, title, slug, excerpt, featuredImage, publishedAt, category
      }`,
      { category, lang, start, end },
    ),
    client.fetch(
      `count(*[_type == "post" && category == $category && language == $lang])`,
      { category, lang },
    ),
  ]);

  return { posts, total, page, pageSize, totalPages: Math.ceil(total / pageSize) };
}

export async function getPostBySlug(slug: string, lang: Language) {
  const client = ensureClient();
  if (!client) return null;
  return client.fetch(
    `*[_type == "post" && slug.current == $slug && language == $lang][0]{
      ...,
      "relatedPosts": *[_type == "post" && category == ^.category && language == $lang && _id != ^._id] | order(publishedAt desc)[0...3]{
        _id, title, slug, excerpt, featuredImage, publishedAt
      }
    }`,
    { slug, lang },
  );
}

export async function getCourses(lang: Language) {
  const client = ensureClient();
  if (!client) return [];
  return client.fetch(
    `*[_type == "course" && language == $lang] | order(order asc){
      _id, title, slug, courseType, duration, description, featuredImage, seo
    }`,
    { lang },
  );
}

export async function getLocations(lang: Language) {
  const client = ensureClient();
  if (!client) return [];
  return client.fetch(
    `*[_type == "location" && language == $lang]{
      _id, name, slug, address, description, images, facebookUrl, mapUrl, seo
    }`,
    { lang },
  );
}

export async function getBooks(lang: Language) {
  const client = ensureClient();
  if (!client) return [];
  return client.fetch(
    `*[_type == "book" && language == $lang]{
      _id, title, slug, coverImage, description, purchaseUrl
    }`,
    { lang },
  );
}

export async function getFaqs(lang: Language) {
  const client = ensureClient();
  if (!client) return [];
  return client.fetch(
    `*[_type == "faq" && language == $lang] | order(order asc){
      _id, question, answer
    }`,
    { lang },
  );
}

export async function getSiteSettings() {
  const client = ensureClient();
  if (!client) return null;
  return client.fetch(`*[_type == "siteSettings"][0]`);
}

export async function getAllPostSlugs() {
  const client = ensureClient();
  if (!client) return [];
  return client.fetch<Array<{ slug: string; language: Language }>>(
    `*[_type == "post"]{ "slug": slug.current, language }`,
  );
}

export async function getSitemapData() {
  const client = ensureClient();
  if (!client) return { posts: [], pages: [], courses: [], locations: [] };

  const [posts, pages, courses, locations] = await Promise.all([
    client.fetch(
      `*[_type == "post"]{ "slug": slug.current, language, _updatedAt, category }`,
    ),
    client.fetch(
      `*[_type == "page"]{ "slug": slug.current, language, _updatedAt, pageType }`,
    ),
    client.fetch(
      `*[_type == "course"]{ "slug": slug.current, language, _updatedAt }`,
    ),
    client.fetch(
      `*[_type == "location"]{ "slug": slug.current, language, _updatedAt }`,
    ),
  ]);

  return { posts, pages, courses, locations };
}
