import { createFileRoute, Link } from "@tanstack/react-router";
import { PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import { MapPin, CheckCircle } from "lucide-react";
import { courses } from "~/data/seed-courses";
import { locations } from "~/data/seed-locations";

export const Route = createFileRoute("/$lang/type-of-courseand-schedule-th")({
  component: TypeOfCourseAndScheduleThPage,
});

function TypeOfCourseAndScheduleThPage() {
  return (
    <>
      <SeoHead
        title="ประเภทคอร์สและตารางปฏิบัติธรรม - โพธิธรรมญาณสถาน"
        description="รายละเอียดประเภทคอร์สปฏิบัติธรรม การเดินทางสู่จิตใจ สมาธิอานาปานสติ วิปัสสนากรรมฐาน และสถานปฏิบัติธรรมทั้ง 4 แห่ง อบรมฟรีไม่มีค่าใช้จ่าย"
        canonical="/th/type-of-courseand-schedule-th/"
        alternateUrls={{
          th: "/th/type-of-courseand-schedule-th/",
          en: "/en/type-of-courseand-schedule-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          {
            name: "ประเภทคอร์สและตารางปฏิบัติธรรม",
            url: "/th/type-of-courseand-schedule-th/",
          },
        ]}
      />

      {/* ประเภทคอร์ส */}
      <section className="bg-brand-cream section-padding py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            ประเภทคอร์ส
          </h1>
          <div className="mt-10 space-y-16">
            {courses.map((course) => (
              <article key={course.id} className="scroll-mt-24" id={course.slug}>
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
                      {course.title}
                    </h2>
                    <p className="mt-1 text-lg text-brand-gold-600">
                      {course.titleEn}
                    </p>
                    <Badge variant="nature" className="mt-3">
                      {course.duration}
                    </Badge>
                    <p className="mt-1 text-sm text-brand-text-muted">
                      รับผู้สมัครอายุ {course.ageRange}
                    </p>
                    <p className="mt-4 text-brand-text-secondary leading-relaxed">
                      {course.description}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-brand-gold-700">
                      อบรมฟรีไม่มีค่าใช้จ่ายใดๆ
                    </p>

                    <h3 className="mt-6 font-serif text-lg font-semibold text-brand-dark">
                      คอร์สประกอบไปด้วย
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {course.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-2 text-sm text-brand-text-secondary">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-500" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* สถานปฏิบัติและตารางคอร์ส */}
      <section className="bg-white section-padding py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
            สถานปฏิบัติและตารางคอร์ส
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {locations.map((loc) => {
              const pageKey = `home-${loc.slug}`;
              const url = PAGE_URL_MAP[pageKey]?.th ?? "#";
              return (
                <Link key={loc.id} to={url} className="group">
                  <Card className="overflow-hidden p-0 transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="aspect-video w-full bg-brand-cream">
                      <img
                        src={loc.image}
                        alt={loc.shortName}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 shrink-0 text-brand-gold-500" />
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-brand-dark group-hover:text-brand-gold-600">
                            {loc.name}
                          </h3>
                          <p className="text-sm text-brand-text-muted">
                            {loc.district} {loc.province}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
