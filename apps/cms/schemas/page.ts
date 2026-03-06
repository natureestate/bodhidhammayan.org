import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "หน้าเว็บ",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "ชื่อหน้า",
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
      name: "pageType",
      title: "ประเภทหน้า",
      type: "string",
      options: {
        list: [
          { title: "หน้าแรก", value: "home" },
          { title: "เกี่ยวกับเรา", value: "about" },
          { title: "อาจารย์", value: "master" },
          { title: "สถานที่", value: "place" },
          { title: "ตารางคอร์ส", value: "course-schedule" },
        ],
      },
      validation: (rule) => rule.required(),
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
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
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
    select: { title: "title", language: "language", pageType: "pageType" },
    prepare({ title, language, pageType }) {
      return {
        title,
        subtitle: `${pageType} [${language}]`,
      };
    },
  },
});
