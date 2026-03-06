import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/home-saraburi-th")({
  component: HomeSaraburiThPage,
});

function HomeSaraburiThPage() {
  return (
    <>
      <SeoHead
        title="โพธิธรรมญาณสถาน สระบุรี"
        description="โพธิธรรมญาณสถาน สระบุรี สถานปฏิบัติธรรมอานาปานสติและวิปัสสนากรรมฐาน"
        canonical="/th/home-saraburi-th/"
        alternateUrls={{
          th: "/th/home-saraburi-th/",
          en: "/en/home-saraburi-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "โพธิธรรมญาณสถาน สระบุรี", url: "/th/home-saraburi-th/" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-display text-3xl font-bold text-dharma-900">
          โพธิธรรมญาณสถาน สระบุรี
        </h1>
        <p className="mt-4 text-dharma-600">
          เนื้อหาจะถูกดึงจาก Sanity CMS
        </p>
      </section>
    </>
  );
}
