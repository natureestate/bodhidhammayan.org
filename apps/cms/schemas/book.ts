import { defineField, defineType } from "sanity";

export const book = defineType({
  name: "book",
  title: "หนังสือ",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "ชื่อหนังสือ",
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
      name: "coverImage",
      title: "ปกหนังสือ",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
    }),
    defineField({
      name: "description",
      title: "คำอธิบาย",
      type: "text",
    }),
    defineField({
      name: "purchaseUrl",
      title: "ลิงก์ซื้อ",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "title", language: "language", media: "coverImage" },
    prepare({ title, language, media }) {
      return { title, subtitle: `[${language}]`, media };
    },
  },
});
