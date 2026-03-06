import { defineField, defineType } from "sanity";

export const location = defineType({
  name: "location",
  title: "สถานที่ปฏิบัติธรรม",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "ชื่อสถานที่",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
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
      name: "address",
      title: "ที่อยู่",
      type: "text",
    }),
    defineField({
      name: "description",
      title: "คำอธิบาย",
      type: "text",
    }),
    defineField({
      name: "body",
      title: "เนื้อหา",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
      ],
    }),
    defineField({
      name: "images",
      title: "รูปภาพ",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt Text", type: "string" }],
        },
      ],
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook Page",
      type: "url",
    }),
    defineField({
      name: "mapUrl",
      title: "Google Maps URL",
      type: "url",
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
  preview: {
    select: { title: "name", language: "language" },
    prepare({ title, language }) {
      return { title, subtitle: `[${language}]` };
    },
  },
});
