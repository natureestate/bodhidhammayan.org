import { useState } from "react";
import { Link } from "@tanstack/react-router";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { Compass, Brain, Sparkles, MapPin, CheckCircle, ChevronRight, ArrowLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { courses, type Course } from "~/data/seed-courses";
import { locations } from "~/data/seed-locations";
import { cn } from "~/lib/utils";

interface CourseTypesSectionProps {
  lang: Language;
}

const courseIcons: Record<string, LucideIcon> = {
  "course-jtm": Compass,
  "course-anapanasati": Brain,
  "course-vipassana": Sparkles,
};

function getLocationsForCourse(courseId: string) {
  return locations.filter((loc) => loc.coursesAvailable.includes(courseId));
}

export function CourseTypesSection({ lang }: CourseTypesSectionProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  if (selectedCourse) {
    return (
      <CourseDetailView
        lang={lang}
        course={selectedCourse}
        onBack={() => setSelectedCourse(null)}
        onSelectCourse={(c) => {
          setSelectedCourse(c);
          document.getElementById("course-types")?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    );
  }

  return (
    <section id="course-types" className="scroll-mt-16 bg-brand-cream section-padding py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl lg:text-4xl">
            {t(lang, "section.courses")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-brand-text-secondary">
            {lang === "th"
              ? "เลือกคอร์สที่สนใจเพื่อดูรายละเอียดและสถานปฏิบัติ"
              : "Select a course to view details and available retreat locations"}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = courseIcons[course.id] ?? Compass;
            const title = lang === "th" ? course.title : course.titleEn;
            const subtitle = lang === "th" ? course.titleEn : course.title;
            const duration = lang === "th" ? course.duration : course.durationEn;
            const description = lang === "th" ? course.description : course.descriptionEn;
            const availableLocations = getLocationsForCourse(course.id);

            return (
              <button
                key={course.id}
                type="button"
                onClick={() => setSelectedCourse(course)}
                className="group text-left"
              >
                <Card className="h-full overflow-hidden p-0 transition-all group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="aspect-video w-full overflow-hidden bg-brand-cream">
                    <img
                      src={course.image}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="space-y-3 p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-gold-50 text-brand-gold-600">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-brand-dark group-hover:text-brand-gold-600">
                          {title}
                        </h3>
                        <p className="text-sm text-brand-text-secondary">
                          {subtitle}
                        </p>
                      </div>
                    </div>
                    <Badge variant="nature">{duration}</Badge>
                    <p className="line-clamp-2 text-sm leading-relaxed text-brand-text-secondary">
                      {description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-brand-text-muted">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>
                        {lang === "th"
                          ? `เปิดสอน ${availableLocations.length} สถานที่`
                          : `Available at ${availableLocations.length} location${availableLocations.length > 1 ? "s" : ""}`}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-brand-gold-600 group-hover:text-brand-gold-700">
                      <span>
                        {lang === "th" ? "ดูรายละเอียดและสถานที่" : "View details & locations"}
                      </span>
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
  lang,
  course,
  onBack,
  onSelectCourse,
}: {
  lang: Language;
  course: Course;
  onBack: () => void;
  onSelectCourse: (course: Course) => void;
}) {
  const availableLocations = getLocationsForCourse(course.id);
  const title = lang === "th" ? course.title : course.titleEn;
  const subtitle = lang === "th" ? course.titleEn : course.title;
  const duration = lang === "th" ? course.duration : course.durationEn;
  const description = lang === "th" ? course.description : course.descriptionEn;
  const activities = lang === "th" ? course.activities : course.activitiesEn;

  return (
    <>
      <section id="course-types" className="scroll-mt-16 bg-brand-cream section-padding py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <button
            type="button"
            onClick={onBack}
            className="group mb-8 flex items-center gap-2 text-sm font-medium text-brand-gold-600 transition-colors hover:text-brand-gold-800"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {lang === "th" ? "กลับไปเลือกคอร์ส" : "Back to course selection"}
          </button>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={course.image}
                alt={title}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
                {title}
              </h2>
              <p className="mt-1 text-lg text-brand-gold-600">{subtitle}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <Badge variant="nature">{duration}</Badge>
                <span className="text-sm text-brand-text-muted">
                  {lang === "th"
                    ? `รับผู้สมัครอายุ ${course.ageRange}`
                    : `Ages ${course.ageRange.replace("ปี", "years")}`}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-brand-text-secondary">
                {description}
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-gold-700">
                {lang === "th" ? "อบรมฟรีไม่มีค่าใช้จ่ายใดๆ" : "Free of charge — no fees of any kind"}
              </p>

              {course.id === "course-vipassana" && (
                <p className="mt-2 text-sm text-red-600">
                  {lang === "th"
                    ? "*ผู้ที่จะเข้าอบรมคอร์สนี้ได้ ต้องผ่านคอร์สอานาปานสติ 4 วัน 3 คืน ก่อน 1 คอร์ส"
                    : "*Prerequisite: Must complete the 4-day 3-night Anapanasati course first"}
                </p>
              )}

              <h3 className="mt-8 font-serif text-lg font-semibold text-brand-dark">
                {lang === "th" ? "คอร์สประกอบไปด้วย" : "Course Includes"}
              </h3>
              <ul className="mt-3 space-y-2">
                {activities.map((activity) => (
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

      {/* สถานปฏิบัติ */}
      <section className="bg-white section-padding py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
            {lang === "th" ? "เลือกสถานปฏิบัติ" : "Select Retreat Location"}
          </h2>
          <p className="mt-2 text-brand-text-secondary">
            {title} {duration}
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
              const url = PAGE_URL_MAP[pageKey]?.[lang] ?? "#";
              const locName = lang === "th" ? loc.name : loc.nameEn;
              const locSub = lang === "th" ? `${loc.district} ${loc.province}` : loc.shortNameEn;

              return (
                <Link key={loc.id} to={url} className="group">
                  <Card className="h-full overflow-hidden p-0 transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="aspect-video w-full overflow-hidden bg-brand-cream">
                      <img
                        src={loc.image}
                        alt={lang === "th" ? loc.shortName : loc.shortNameEn}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 shrink-0 text-brand-gold-500" />
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-brand-dark group-hover:text-brand-gold-600">
                            {locName}
                          </h3>
                          <p className="text-sm text-brand-text-muted">{locSub}</p>
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

      {/* คอร์สอื่นๆ */}
      <section className="bg-brand-cream/50 section-padding py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-xl font-bold text-brand-dark">
            {lang === "th" ? "คอร์สอื่นๆ" : "Other Courses"}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {courses
              .filter((c) => c.id !== course.id)
              .map((otherCourse) => {
                const otherTitle = lang === "th" ? otherCourse.title : otherCourse.titleEn;
                const otherDuration = lang === "th" ? otherCourse.duration : otherCourse.durationEn;
                return (
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
                            alt={otherTitle}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-serif font-semibold text-brand-dark group-hover:text-brand-gold-600">
                            {otherTitle}
                          </h3>
                          <p className="text-xs text-brand-text-muted">{otherDuration}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 shrink-0 text-brand-gold-400 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Card>
                  </button>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
