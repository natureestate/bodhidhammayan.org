import { createFileRoute, Link } from "@tanstack/react-router";
import { PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Badge } from "~/components/ui/badge";
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";
import { getLocationBySlug } from "~/data/seed-locations";
import { courses } from "~/data/seed-courses";

export const Route = createFileRoute("/$lang/home-bangkok-th")({
  component: HomeBangkokThPage,
});

function HomeBangkokThPage() {
  const location = getLocationBySlug("bangkok")!;

  return (
    <>
      <SeoHead
        title="ห้องภาวนามูลนิธิโนอิ้ง บุดด้า อ่อนนุช กรุงเทพฯ - โพธิธรรมญาณสถาน"
        description={location.description}
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
      <Breadcrumb items={[{ label: "หน้าแรก", href: "/th/hometh/" }, { label: "กรุงเทพฯ" }]} />

      {/* Hero */}
      <section className="relative bg-brand-dark">
        <div className="aspect-video max-h-[480px] w-full">
          <img
            src={location.image}
            alt={location.name}
            className="h-full w-full object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex items-end bg-linear-to-t from-brand-dark/80 to-transparent">
          <div className="mx-auto w-full max-w-6xl px-4 pb-10">
            <h1 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {location.name}
            </h1>
            <p className="mt-2 text-lg text-white/80">
              {location.shortName}
            </p>
          </div>
        </div>
      </section>

      {/* รายละเอียด */}
      <section className="bg-white section-padding py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
            {location.name} {location.district} {location.province}
          </h2>
          <p className="mt-6 text-brand-text-secondary leading-relaxed">
            {location.description}
          </p>
          <p className="mt-4 text-brand-text-secondary leading-relaxed">
            การอบรมสมาธิอานาปานสติ สอนโดยพระภิกษุและอาจารย์ผู้ช่วยสอน
            และจะได้ฟังเสียงธรรมะบรรยายของท่านอาจารย์อัจฉราวดี วงศ์สกล ประกอบการอบรม 2 ภาษา ไทย-อังกฤษ
          </p>

          {/* ข้อมูลติดต่อ */}
          <div className="mt-8 rounded-xl border border-brand-gold-100 bg-brand-cream/50 p-6">
            <h3 className="font-serif text-lg font-semibold text-brand-dark">ข้อมูลติดต่อ</h3>
            <div className="mt-4 space-y-3 text-sm text-brand-text-secondary">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-500" />
                <span>462/12 ซอยอ่อนนุช 8 ถนนสุขุมวิท 77 แขวงอ่อนนุช เขตสวนหลวง กรุงเทพมหานคร 10250</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-brand-gold-500" />
                <span>จันทร์ - ศุกร์ เวลา 9.00 - 17.00 น.</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-gold-500" />
                <span>โทร 02 117 4063 , 02 117 4064</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-gold-500" />
                <span>info@bodhidhammayan.org</span>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="h-4 w-4 shrink-0 text-brand-gold-500" />
                <a
                  href={`https://www.facebook.com/${location.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold-600 hover:underline"
                >
                  FB: {location.facebook}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* คอร์สที่เปิดสอน */}
      <section className="bg-brand-cream section-padding py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
            คอร์สที่เปิดสอน
          </h2>
          <div className="mt-8 space-y-4">
            {courses
              .filter((c) => location.coursesAvailable.includes(c.id))
              .map((course) => (
                <Link
                  key={course.id}
                  to={PAGE_URL_MAP["course-schedule"]?.th ?? "#"}
                  className="group block"
                >
                  <div className="rounded-xl border border-brand-gold-100/50 bg-white p-6 transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                    <h3 className="font-serif text-xl font-semibold text-brand-dark group-hover:text-brand-gold-600">
                      {course.title}
                    </h3>
                    <p className="mt-1 text-sm text-brand-gold-600">{course.titleEn}</p>
                    <Badge variant="nature" className="mt-2">{course.duration}</Badge>
                    <p className="mt-3 text-sm text-brand-text-secondary">
                      {course.description}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
