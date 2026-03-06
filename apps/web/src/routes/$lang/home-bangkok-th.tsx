import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/home-bangkok-th")({
  component: HomeBangkokThPage,
});

function HomeBangkokThPage() {
  return (
    <>
      <SeoHead
        title="ห้องภาวนามูลนิธิฯ กรุงเทพฯ"
        description="ห้องภาวนามูลนิธิฯ กรุงเทพฯ สถานปฏิบัติธรรมอานาปานสติและวิปัสสนากรรมฐาน"
        canonical="/th/home-bangkok-th/"
        alternateUrls={{
          th: "/th/home-bangkok-th/",
          en: "/en/home-bangkok-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "ห้องภาวนามูลนิธิฯ กรุงเทพฯ", url: "/th/home-bangkok-th/" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-display text-3xl font-bold text-dharma-900">
          ห้องภาวนามูลนิธิฯ กรุงเทพฯ
        </h1>
        <p className="mt-4 text-dharma-600">
          เนื้อหาจะถูกดึงจาก Sanity CMS
        </p>
      </section>
    </>
  );
}
