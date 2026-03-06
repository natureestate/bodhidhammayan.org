import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Card, CardContent } from "~/components/ui/card";
import { siteConfig } from "~/data";

export const Route = createFileRoute("/$lang/placeth")({
  component: PlaceThPage,
});

const locations = [
  {
    name: "โพธิธรรมญาณสถาน แก่งคอย สระบุรี",
    description: "สถานปฏิบัติธรรมหลัก ตั้งอยู่ท่ามกลางธรรมชาติอันสงบร่มเย็น เหมาะสำหรับการปฏิบัติทั้งระยะสั้นและระยะยาว",
    image: "/images/hero/bodhidhammayan-hero.webp",
    page: "home-saraburi",
  },
  {
    name: "มูลนิธิฯ อ่อนนุช กรุงเทพฯ",
    description: "สำนักงานมูลนิธิและสถานที่จัดคอร์สสมาธิในกรุงเทพมหานคร สะดวกในการเดินทาง",
    image: "/images/news/journey-1day-bangkok.webp",
    page: "home-bangkok",
  },
  {
    name: "หาดใหญ่ สงขลา",
    description: "สาขาภาคใต้ตอนล่าง เปิดโอกาสให้ชาวใต้ได้ฝึกปฏิบัติธรรมใกล้บ้าน",
    image: "/images/news/dhamma-3d.webp",
    page: "home-hatyai",
  },
  {
    name: "ภูเก็ต",
    description: "สาขาฝั่งอันดามัน รองรับทั้งชาวไทยและชาวต่างชาติที่สนใจฝึกปฏิบัติธรรม",
    image: "/images/news/dhamma-3d-phuket.webp",
    page: "home-phuket",
  },
];

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

      <div className="relative bg-dharma-950 px-4 py-20">
        <img
          src={siteConfig.images.hero}
          alt="สถานที่ปฏิบัติธรรม"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            สถานที่ปฏิบัติธรรม
          </h1>
          <p className="mt-4 font-thai text-lg text-dharma-200">
            สถานปฏิบัติธรรม 4 แห่งทั่วประเทศไทย
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {locations.map((loc) => {
            const url = PAGE_URL_MAP[loc.page]?.th ?? "#";
            return (
              <Link key={loc.name} to={url} className="group">
                <Card className="overflow-hidden p-0 transition-shadow group-hover:shadow-lg">
                  <div className="aspect-video w-full bg-dharma-100">
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 shrink-0 text-gold-500" />
                      <h2 className="font-display text-xl font-bold text-dharma-900 group-hover:text-gold-600">
                        {loc.name}
                      </h2>
                    </div>
                    <p className="mt-2 font-thai text-sm text-dharma-600">
                      {loc.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
