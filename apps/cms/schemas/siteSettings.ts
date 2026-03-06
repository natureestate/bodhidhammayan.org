import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "ตั้งค่าเว็บไซต์",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "ชื่อเว็บไซต์",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "siteDescription",
      title: "คำอธิบายเว็บไซต์",
      type: "text",
    }),
    defineField({
      name: "logo",
      title: "โลโก้",
      type: "image",
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
    }),
    defineField({
      name: "contactEmail",
      title: "อีเมลติดต่อ",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "โทรศัพท์",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "ที่อยู่",
      type: "text",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media",
      type: "object",
      fields: [
        { name: "facebook", title: "Facebook", type: "url" },
        { name: "youtube", title: "YouTube", type: "url" },
        { name: "tiktok", title: "TikTok", type: "url" },
        { name: "instagram", title: "Instagram", type: "url" },
      ],
    }),
    defineField({
      name: "donationInfo",
      title: "ข้อมูลบริจาค",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "bankName", title: "ชื่อธนาคาร", type: "string" },
            { name: "accountName", title: "ชื่อบัญชี", type: "string" },
            { name: "accountNumber", title: "เลขที่บัญชี", type: "string" },
            { name: "swiftCode", title: "SWIFT Code", type: "string" },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "ตั้งค่าเว็บไซต์" };
    },
  },
});
