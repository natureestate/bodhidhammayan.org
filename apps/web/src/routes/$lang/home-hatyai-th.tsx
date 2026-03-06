import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/home-hatyai-th")({
  component: HomeHatYaiThPage,
});

function HomeHatYaiThPage() {
  return (
    <>
      <SeoHead
        title="โพธิธรรมญาณสถาน หาดใหญ่"
        description="โพธิธรรมญาณสถาน หาดใหญ่ สถานปฏิบัติธรรมอานาปานสติและวิปัสสนากรรมฐาน"
        canonical="/th/home-hatyai-th/"
        alternateUrls={{
          th: "/th/home-hatyai-th/",
          en: "/en/home-hatyai-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "โพธิธรรมญาณสถาน หาดใหญ่", url: "/th/home-hatyai-th/" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-display text-3xl font-bold text-dharma-900">
          โพธิธรรมญาณสถาน หาดใหญ่
        </h1>
        <p className="mt-4 text-dharma-600">
          เนื้อหาจะถูกดึงจาก Sanity CMS
        </p>
      </section>
    </>
  );
}
