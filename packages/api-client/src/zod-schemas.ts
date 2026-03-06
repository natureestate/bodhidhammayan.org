import { z } from "zod";

export const languageSchema = z.enum(["th", "en"]);
export type Language = z.infer<typeof languageSchema>;

export const seoSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  ogImage: z.string().url().optional(),
  canonical: z.string().url().optional(),
});
export type Seo = z.infer<typeof seoSchema>;

export const imageSchema = z.object({
  _type: z.literal("image"),
  asset: z.object({
    _ref: z.string(),
    url: z.string().url().optional(),
  }),
  alt: z.string().optional(),
});

export const portableTextBlockSchema = z.object({
  _type: z.string(),
  _key: z.string(),
  children: z.array(z.any()).optional(),
  markDefs: z.array(z.any()).optional(),
  style: z.string().optional(),
});

export const slugSchema = z.object({
  _type: z.literal("slug"),
  current: z.string(),
});

export const postSchema = z.object({
  _id: z.string(),
  _type: z.literal("post"),
  title: z.string(),
  slug: slugSchema,
  language: languageSchema,
  category: z.enum(["dhamma", "news", "experience", "portfolio"]),
  excerpt: z.string().optional(),
  featuredImage: imageSchema.optional(),
  body: z.array(portableTextBlockSchema),
  publishedAt: z.string(),
  seo: seoSchema.optional(),
});
export type Post = z.infer<typeof postSchema>;

export const courseTypeSchema = z.enum([
  "journey-to-the-mind",
  "anapanasati",
  "vipassana",
]);

export const courseSchema = z.object({
  _id: z.string(),
  _type: z.literal("course"),
  title: z.string(),
  slug: slugSchema,
  language: languageSchema,
  courseType: courseTypeSchema,
  duration: z.string(),
  description: z.string().optional(),
  body: z.array(portableTextBlockSchema).optional(),
  featuredImage: imageSchema.optional(),
  seo: seoSchema.optional(),
});
export type Course = z.infer<typeof courseSchema>;

export const locationSchema = z.object({
  _id: z.string(),
  _type: z.literal("location"),
  name: z.string(),
  slug: slugSchema,
  language: languageSchema,
  address: z.string().optional(),
  description: z.string().optional(),
  body: z.array(portableTextBlockSchema).optional(),
  images: z.array(imageSchema).optional(),
  facebookUrl: z.string().url().optional(),
  mapUrl: z.string().url().optional(),
  seo: seoSchema.optional(),
});
export type Location = z.infer<typeof locationSchema>;

export const bookSchema = z.object({
  _id: z.string(),
  _type: z.literal("book"),
  title: z.string(),
  slug: slugSchema,
  language: languageSchema,
  coverImage: imageSchema.optional(),
  description: z.string().optional(),
  purchaseUrl: z.string().url().optional(),
});
export type Book = z.infer<typeof bookSchema>;

export const faqSchema = z.object({
  _id: z.string(),
  _type: z.literal("faq"),
  question: z.string(),
  answer: z.array(portableTextBlockSchema),
  language: languageSchema,
  order: z.number().optional(),
});
export type Faq = z.infer<typeof faqSchema>;

export const siteSettingsSchema = z.object({
  _id: z.string(),
  _type: z.literal("siteSettings"),
  siteName: z.string(),
  siteDescription: z.string().optional(),
  logo: imageSchema.optional(),
  favicon: imageSchema.optional(),
  contactEmail: z.string().email().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  socialLinks: z
    .object({
      facebook: z.string().url().optional(),
      youtube: z.string().url().optional(),
      tiktok: z.string().url().optional(),
      instagram: z.string().url().optional(),
    })
    .optional(),
  donationInfo: z
    .object({
      bankName: z.string(),
      accountName: z.string(),
      accountNumber: z.string(),
      swiftCode: z.string().optional(),
    })
    .array()
    .optional(),
});
export type SiteSettings = z.infer<typeof siteSettingsSchema>;

export const pageSchema = z.object({
  _id: z.string(),
  _type: z.literal("page"),
  title: z.string(),
  slug: slugSchema,
  language: languageSchema,
  pageType: z.enum(["home", "about", "master", "place", "course-schedule"]),
  body: z.array(portableTextBlockSchema).optional(),
  seo: seoSchema.optional(),
});
export type Page = z.infer<typeof pageSchema>;
