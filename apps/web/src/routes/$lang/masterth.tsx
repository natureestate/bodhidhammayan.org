import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/masterth")({
  component: MasterThPage,
});

function MasterThPage() {
  return (
    <>
      <SeoHead
        title="ท่านอาจารย์อัจฉราวดี วงศ์สกล - โพธิธรรมญาณสถาน"
        canonical="/th/masterth/"
        alternateUrls={{ th: "/th/masterth/", en: "/en/masteren/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "ท่านอาจารย์อัจฉราวดี วงศ์สกล", url: "/th/masterth/" },
        ]}
      />
      <section className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-2xl font-bold">
          ท่านอาจารย์อัจฉราวดี วงศ์สกล
        </h1>
        <p className="text-muted-foreground">
          เนื้อหาเกี่ยวกับท่านอาจารย์จะแสดงที่นี่
        </p>
      </section>
    </>
  );
}
