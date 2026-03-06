import { createFileRoute, Link } from "@tanstack/react-router";
import { PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Badge } from "~/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { getLocationBySlug } from "~/data/seed-locations";
import { courses } from "~/data/seed-courses";

export const Route = createFileRoute("/$lang/home-hatyai-th")({
  component: HomeHatYaiThPage,
});

function HomeHatYaiThPage() {
  const location = getLocationBySlug("hatyai")!;

  return (
    <>
      <SeoHead
        title="โพธิธรรมญาณสถาน หาดใหญ่ สงขลา - สถานปฏิบัติธรรมในไทย"
        description={location.description}
        canonical="/th/home-hatyai-th/"
        alternateUrls={{ th: "/th/home-hatyai-th/", en: "/en/home-hatyai-en/" }}
      />
      <BreadcrumbLd items={[{ name: "หน้าแรก", url: "/th/hometh/" }, { name: "โพธิธรรมญาณสถาน หาดใหญ่", url: "/th/home-hatyai-th/" }]} />
      <Breadcrumb items={[{ label: "หน้าแรก", href: "/th/hometh/" }, { label: "หาดใหญ่" }]} />

      <section className="relative bg-brand-dark">
        <div className="aspect-video max-h-[480px] w-full">
          <img src={location.image} alt={location.name} className="h-full w-full object-cover opacity-80" />
        </div>
        <div className="absolute inset-0 flex items-end bg-linear-to-t from-brand-dark/80 to-transparent">
          <div className="mx-auto w-full max-w-6xl px-4 pb-10">
            <h1 className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">{location.name}</h1>
            <p className="mt-2 text-lg text-white/80">{location.shortName}</p>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">โพธิธรรมญาณสถาน หาดใหญ่ สงขลา</h2>
          <p className="mt-6 text-brand-text-secondary leading-relaxed">{location.description}</p>
          <p className="mt-4 text-brand-text-secondary leading-relaxed">
            มีสถานที่ปฏิบัติสมาธิและวิปัสสนากรรมฐาน ตามหลักสติปัฎฐานสี่ ตามแนวทางท่านอาจารย์อัจฉราวดี วงศ์สกล
            แสงธรรมโพธิญาณ มีการวางผังที่สงบ สัปปายะ และแยบคายด้วยการออกแบบให้แนวอาณาเขตที่พัก เรือนอาหาร
            แยกเป็นสัดส่วนกั้นด้วยแนวไม้ไผ่และต้นไม้ ทางเดินแผ่นหินวางเรียงกลมกลืนกับสนามหญ้า
            แสงไฟที่สว่างไสวบนเรือนภาวนา ทำให้ตัวอาคารไม้แข็งแกร่งดูน่าเกรงขาม
            เสาไม้ต้นใหญ่ที่หาได้ยากทำให้มีความเป็นเอกลักษณ์เฉพาะ
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-brand-text-secondary">
            <ExternalLink className="h-4 w-4 shrink-0 text-brand-gold-500" />
            <a href={`https://www.facebook.com/${location.facebook}`} target="_blank" rel="noopener noreferrer" className="text-brand-gold-600 hover:underline">FB: {location.facebook}</a>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream section-padding py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">คอร์สที่เปิดสอน</h2>
          <div className="mt-8 space-y-4">
            {courses.filter((c) => location.coursesAvailable.includes(c.id)).map((course) => (
              <Link key={course.id} to={PAGE_URL_MAP["course-schedule"]?.th ?? "#"} className="group block">
                <div className="rounded-xl border border-brand-gold-100/50 bg-white p-6 transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                  <h3 className="font-serif text-xl font-semibold text-brand-dark group-hover:text-brand-gold-600">{course.title}</h3>
                  <p className="mt-1 text-sm text-brand-gold-600">{course.titleEn}</p>
                  <Badge variant="nature" className="mt-2">{course.duration}</Badge>
                  <p className="mt-3 text-sm text-brand-text-secondary">{course.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
