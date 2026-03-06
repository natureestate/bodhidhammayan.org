import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "บทความ",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "หัวข้อ",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "language",
      title: "ภาษา",
      type: "string",
      options: {
        list: [
          { title: "ไทย", value: "th" },
          { title: "English", value: "en" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "หมวดหมู่",
      type: "string",
      options: {
        list: [
          { title: "ธรรมคำสอน", value: "dhamma" },
          { title: "ข่าวสาร", value: "news" },
          { title: "ประสบการณ์", value: "experience" },
          { title: "หนังสือ/ผลงาน", value: "portfolio" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "บทคัดย่อ",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "featuredImage",
      title: "รูปภาพหลัก",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", title: "Alt Text", type: "string" },
      ],
    }),
    defineField({
      name: "body",
      title: "เนื้อหา",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "alt", title: "Alt Text", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "วันที่เผยแพร่",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        { name: "title", title: "SEO Title", type: "string" },
        { name: "description", title: "Meta Description", type: "text" },
        { name: "ogImage", title: "OG Image", type: "image" },
      ],
    }),
  ],
  orderings: [
    {
      title: "วันที่เผยแพร่ (ใหม่สุด)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      language: "language",
      media: "featuredImage",
    },
    prepare({ title, category, language, media }) {
      return {
        title,
        subtitle: `${category} [${language}]`,
        media,
      };
    },
  },
});
