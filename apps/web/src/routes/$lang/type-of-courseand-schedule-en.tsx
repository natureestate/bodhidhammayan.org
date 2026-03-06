import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { Breadcrumb } from "~/components/Breadcrumb";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import { MapPin, CheckCircle, ChevronRight, ArrowLeft } from "lucide-react";
import { courses, getCourseBySlug, type Course } from "~/data/seed-courses";
import { locations } from "~/data/seed-locations";
import { cn } from "~/lib/utils";

export const Route = createFileRoute("/$lang/type-of-courseand-schedule-en")({
  component: TypeOfCourseAndScheduleEnPage,
});

function getLocationsForCourse(courseId: string) {
  return locations.filter((loc) => loc.coursesAvailable.includes(courseId));
}

function TypeOfCourseAndScheduleEnPage() {
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
        title="Course Types & Schedule - Bodhi Dhammayan Retreat"
        description="Detailed course types: Journey to the Mind, Anapanasati Meditation, Vipassana Advanced Meditation, and 4 retreat locations across Thailand. Free of charge."
        canonical="/en/type-of-courseand-schedule-en/"
        alternateUrls={{
          th: "/th/type-of-courseand-schedule-th/",
          en: "/en/type-of-courseand-schedule-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          {
            name: "Course Types & Schedule",
            url: "/en/type-of-courseand-schedule-en/",
          },
        ]}
      />
      <Breadcrumb items={[{ label: "Home", href: "/en/homeen/" }, { label: "Course Types" }]} />

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
            Course Types
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-brand-text-secondary">
            Select a course to view details and available retreat locations
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
                      alt={course.titleEn}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="space-y-3 p-6">
                    <h2 className="font-serif text-xl font-bold text-brand-dark group-hover:text-brand-gold-700">
                      {course.titleEn}
                    </h2>
                    <p className="text-sm text-brand-gold-600">
                      {course.title}
                    </p>
                    <Badge variant="nature">{course.durationEn}</Badge>
                    <p className="line-clamp-3 text-sm leading-relaxed text-brand-text-secondary">
                      {course.descriptionEn}
                    </p>
                    <div className="flex items-center gap-1.5 pt-2 text-xs text-brand-text-muted">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>
                        Available at {availableLocations.length} location
                        {availableLocations.length > 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 pt-1 text-sm font-medium text-brand-gold-600 group-hover:text-brand-gold-700">
                      <span>View details & locations</span>
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
            Back to course selection
          </button>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={course.image}
                alt={course.titleEn}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
                {course.titleEn}
              </h1>
              <p className="mt-1 text-lg text-brand-gold-600">{course.title}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <Badge variant="nature">{course.durationEn}</Badge>
                <span className="text-sm text-brand-text-muted">
                  Ages {course.ageRange.replace("ปี", "years")}
                </span>
              </div>
              <p className="mt-4 leading-relaxed text-brand-text-secondary">
                {course.descriptionEn}
              </p>
              <p className="mt-3 text-sm font-semibold text-brand-gold-700">
                Free of charge — no fees of any kind
              </p>

              {course.id === "course-vipassana" && (
                <p className="mt-2 text-sm text-red-600">
                  *Prerequisite: Must complete the 4-day 3-night Anapanasati
                  course first
                </p>
              )}

              <h3 className="mt-8 font-serif text-lg font-semibold text-brand-dark">
                Course Includes
              </h3>
              <ul className="mt-3 space-y-2">
                {course.activitiesEn.map((activity) => (
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
            Select Retreat Location
          </h2>
          <p className="mt-2 text-brand-text-secondary">
            {course.titleEn} — {course.durationEn}
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
              const url = PAGE_URL_MAP[pageKey]?.en ?? "#";
              return (
                <Link key={loc.id} to={url} className="group">
                  <Card className="h-full overflow-hidden p-0 transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="aspect-video w-full overflow-hidden bg-brand-cream">
                      <img
                        src={loc.image}
                        alt={loc.shortNameEn}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 shrink-0 text-brand-gold-500" />
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-brand-dark group-hover:text-brand-gold-600">
                            {loc.nameEn}
                          </h3>
                          <p className="text-sm text-brand-text-muted">
                            {loc.shortNameEn}
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
            Other Courses
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
                          alt={otherCourse.titleEn}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif font-semibold text-brand-dark group-hover:text-brand-gold-600">
                          {otherCourse.titleEn}
                        </h3>
                        <p className="text-xs text-brand-text-muted">
                          {otherCourse.durationEn}
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
