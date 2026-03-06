import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/register-email-th")({
  component: RegisterEmailThPage,
});

function RegisterEmailThPage() {
  return (
    <>
      <SeoHead
        title="ลงทะเบียน - โพธิธรรมญาณสถาน"
        description="ลงทะเบียนคอร์สปฏิบัติธรรม โพธิธรรมญาณสถาน"
        canonical="/th/register-email-th/"
        alternateUrls={{
          th: "/th/register-email-th/",
          en: "/en/register-email-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "ลงทะเบียน", url: "/th/register-email-th/" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-display text-3xl font-bold text-dharma-900">
          ลงทะเบียน
        </h1>
        <p className="mt-4 text-dharma-600">
          เนื้อหาจะถูกดึงจาก Sanity CMS
        </p>
      </section>
    </>
  );
}
