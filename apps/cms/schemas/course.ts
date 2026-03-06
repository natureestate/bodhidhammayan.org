import { defineField, defineType } from "sanity";

export const course = defineType({
  name: "course",
  title: "คอร์สปฏิบัติธรรม",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "ชื่อคอร์ส",
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
      name: "courseType",
      title: "ประเภทคอร์ส",
      type: "string",
      options: {
        list: [
          { title: "การเดินทางสู่จิตใจ", value: "journey-to-the-mind" },
          { title: "สมาธิอานาปานสติ", value: "anapanasati" },
          { title: "วิปัสสนากรรมฐาน", value: "vipassana" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "duration",
      title: "ระยะเวลา",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "ลำดับ",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "คำอธิบาย",
      type: "text",
    }),
    defineField({
      name: "featuredImage",
      title: "รูปภาพหลัก",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt Text", type: "string" }],
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
    select: { title: "title", courseType: "courseType", language: "language" },
    prepare({ title, courseType, language }) {
      return { title, subtitle: `${courseType} [${language}]` };
    },
  },
});
