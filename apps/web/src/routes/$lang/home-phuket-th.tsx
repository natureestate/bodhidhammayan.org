import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/home-phuket-th")({
  component: HomePhuketThPage,
});

function HomePhuketThPage() {
  return (
    <>
      <SeoHead
        title="โพธิธรรมญาณสถาน ภูเก็ต"
        description="โพธิธรรมญาณสถาน ภูเก็ต สถานปฏิบัติธรรมอานาปานสติและวิปัสสนากรรมฐาน"
        canonical="/th/home-phuket-th/"
        alternateUrls={{
          th: "/th/home-phuket-th/",
          en: "/en/home-phuket-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "โพธิธรรมญาณสถาน ภูเก็ต", url: "/th/home-phuket-th/" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-serif text-3xl font-bold text-brand-dark">
          โพธิธรรมญาณสถาน ภูเก็ต
        </h1>
        <p className="mt-4 text-brand-text-secondary">
          เนื้อหาจะถูกดึงจาก Sanity CMS
        </p>
      </section>
    </>
  );
}
