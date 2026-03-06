import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "คำถามที่พบบ่อย",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "คำถาม",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      title: "คำตอบ",
      type: "array",
      of: [{ type: "block" }],
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
      name: "order",
      title: "ลำดับ",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "ลำดับ",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "question", language: "language" },
    prepare({ title, language }) {
      return { title, subtitle: `[${language}]` };
    },
  },
});
