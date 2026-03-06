import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/about-us-th")({
  component: AboutUsThPage,
});

function AboutUsThPage() {
  return (
    <>
      <SeoHead
        title="เกี่ยวกับเรา - โพธิธรรมญาณสถาน"
        canonical="/th/about-us-th/"
        alternateUrls={{ th: "/th/about-us-th/", en: "/en/about-us-en/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "เกี่ยวกับเรา", url: "/th/about-us-th/" },
        ]}
      />
      <section className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-2xl font-bold">เกี่ยวกับเรา</h1>
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-xl font-semibold">เกี่ยวกับมูลนิธิ</h2>
            <p className="text-muted-foreground">
              เนื้อหาเกี่ยวกับมูลนิธิจะแสดงที่นี่
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold">ประวัติ</h2>
            <p className="text-muted-foreground">
              เนื้อหาประวัติจะแสดงที่นี่
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold">รางวัล</h2>
            <p className="text-muted-foreground">
              เนื้อหารางวัลจะแสดงที่นี่
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
