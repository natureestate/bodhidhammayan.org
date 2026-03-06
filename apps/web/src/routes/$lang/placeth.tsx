import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/placeth")({
  component: PlaceThPage,
});

function PlaceThPage() {
  return (
    <>
      <SeoHead
        title="สถานที่ปฏิบัติธรรม - โพธิธรรมญาณสถาน"
        canonical="/th/placeth/"
        alternateUrls={{ th: "/th/placeth/", en: "/en/placeen/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "สถานที่ปฏิบัติธรรม", url: "/th/placeth/" },
        ]}
      />
      <section className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-2xl font-bold">สถานที่ปฏิบัติธรรม</h1>
        <p className="text-muted-foreground">
          เนื้อหาเกี่ยวกับสถานที่ปฏิบัติธรรมจะแสดงที่นี่
        </p>
      </section>
    </>
  );
}
