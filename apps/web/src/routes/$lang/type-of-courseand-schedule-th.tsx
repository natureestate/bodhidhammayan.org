import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import { MapPin, CheckCircle, ChevronRight, ArrowLeft } from "lucide-react";
import { courses, getCourseBySlug, type Course } from "~/data/seed-courses";
import { locations } from "~/data/seed-locations";
import { cn } from "~/lib/utils";

export const Route = createFileRoute("/$lang/type-of-courseand-schedule-th")({
  component: TypeOfCourseAndScheduleThPage,
});

function getLocationsForCourse(courseId: string) {
  return locations.filter((loc) => loc.coursesAvailable.includes(courseId));
}

function TypeOfCourseAndScheduleThPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const course = getCourseBySlug(hash);
      if (course) setSelectedCourse(course);
    }
  }, []);

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
      <Breadcrumb items={[{ label: "หน้าแรก", href: "/th/hometh/" }, { label: "ประเภทคอร์ส" }]} />

      {!selectedCourse ? (
        <CourseSelectionView onSelect={setSelectedCourse} />
      ) : (
        <CourseDetailView
          course={selectedCourse}
          onBack={() => setSelectedCourse(null)}
          onSelectCourse={(c) => {
            setSelectedCourse(c);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      )}
    </>
  );
}

function CourseSelectionView({
  onSelect,
}: {
  onSelect: (course: Course) => void;
}) {
  return (
    <section className="bg-brand-cream section-padding py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            ประเภทคอร์ส
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-brand-text-secondary">
            เลือกคอร์สที่สนใจเพื่อดูรายละเอียดและสถานปฏิบัติ
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {courses.map((course) => {
            const availableLocations = getLocationsForCourse(course.id);
            return (
              <button
                key={course.id}
                type="button"
                onClick={() => onSelect(course)}
                className="group text-left"
              >
                <Card className="h-full overflow-hidden p-0 transition-all group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="aspect-4/3 w-full overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="space-y-3 p-6">
                    <h2 className="font-serif text-xl font-bold text-brand-dark group-hover:text-brand-gold-700">
                      {course.title}
                    </h2>
                    <p className="text-sm text-brand-gold-600">
                      {course.titleEn}
                    </p>
                    <Badge variant="nature">{course.duration}</Badge>
                    <p className="line-clamp-3 text-sm leading-relaxed text-brand-text-secondary">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-1.5 pt-2 text-xs text-brand-text-muted">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>เปิดสอน {availableLocations.length} สถานที่</span>
                    </div>
                    <div className="flex items-center gap-1 pt-1 text-sm font-medium text-brand-gold-600 group-hover:text-brand-gold-700">
                      <span>ดูรายละเอียดและสถานที่</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CourseDetailView({
  course,
  onBack,
  onSelectCourse,
}: {
  course: Course;
  onBack: () => void;
  onSelectCourse: (course: Course) => void;
}) {
  const availableLocations = getLocationsForCourse(course.id);

  return (
    <>
      <section className="bg-brand-cream section-padding py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <button
            type="button"
            onClick={onBack}
            className="group mb-8 flex items-center gap-2 text-sm font-medium text-brand-gold-600 transition-colors hover:text-brand-gold-800"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            กลับไปเลือกคอร์ส
          </button>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={course.image}
                alt={course.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
                {course.title}
              </h1>
              <p className="mt-1 text-lg text-brand-gold-600">
                {course.titleEn}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <Badge variant="nature">{course.duration}</Badge>
                <span className="text-sm text-brand-text-muted">
                  รับผู้สมัครอายุ {course.ageRange}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-brand-text-secondary">
                {course.description}
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-gold-700">
                อบรมฟรีไม่มีค่าใช้จ่ายใดๆ
              </p>

              {course.id === "course-vipassana" && (
                <p className="mt-2 text-sm text-red-600">
                  *ผู้ที่จะเข้าอบรมคอร์สนี้ได้ ต้องผ่านคอร์สอานาปานสติ 4 วัน 3
                  คืน ก่อน 1 คอร์ส
                </p>
              )}

              <h3 className="mt-8 font-serif text-lg font-semibold text-brand-dark">
                คอร์สประกอบไปด้วย
              </h3>
              <ul className="mt-3 space-y-2">
                {course.activities.map((activity) => (
                  <li
                    key={activity}
                    className="flex items-start gap-2 text-sm text-brand-text-secondary"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-500" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white section-padding py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
            เลือกสถานปฏิบัติ
          </h2>
          <p className="mt-2 text-brand-text-secondary">
            {course.title} {course.duration}
          </p>

          <div
            className={cn(
              "mt-10 grid gap-6",
              availableLocations.length <= 2
                ? "sm:grid-cols-2"
                : "sm:grid-cols-2 lg:grid-cols-3",
            )}
          >
            {availableLocations.map((loc) => {
              const pageKey = `home-${loc.slug}`;
              const url = PAGE_URL_MAP[pageKey]?.th ?? "#";
              return (
                <Link key={loc.id} to={url} className="group">
                  <Card className="h-full overflow-hidden p-0 transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="aspect-video w-full overflow-hidden bg-brand-cream">
                      <img
                        src={loc.image}
                        alt={loc.shortName}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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

      <section className="bg-brand-cream/50 section-padding py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-xl font-bold text-brand-dark">
            คอร์สอื่นๆ
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {courses
              .filter((c) => c.id !== course.id)
              .map((otherCourse) => (
                <button
                  key={otherCourse.id}
                  type="button"
                  onClick={() => onSelectCourse(otherCourse)}
                  className="group text-left"
                >
                  <Card className="overflow-hidden p-0 transition-all group-hover:shadow-md group-hover:-translate-y-0.5">
                    <div className="flex items-center gap-4 p-4">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                        <img
                          src={otherCourse.image}
                          alt={otherCourse.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif font-semibold text-brand-dark group-hover:text-brand-gold-600">
                          {otherCourse.title}
                        </h3>
                        <p className="text-xs text-brand-text-muted">
                          {otherCourse.duration}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 shrink-0 text-brand-gold-400 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </button>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
