import { createFileRoute, Link } from "@tanstack/react-router";
import { PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";
import { MapPin, CheckCircle } from "lucide-react";
import { courses } from "~/data/seed-courses";
import { locations } from "~/data/seed-locations";

export const Route = createFileRoute("/$lang/type-of-courseand-schedule-en")({
  component: TypeOfCourseAndScheduleEnPage,
});

function TypeOfCourseAndScheduleEnPage() {
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

      <section className="bg-brand-cream section-padding py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-serif text-3xl font-bold text-brand-dark md:text-4xl">
            Course Types
          </h1>
          <div className="mt-10 space-y-16">
            {courses.map((course) => (
              <article key={course.id} className="scroll-mt-24" id={course.slug}>
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={course.image}
                      alt={course.titleEn}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
                      {course.titleEn}
                    </h2>
                    <p className="mt-1 text-lg text-brand-gold-600">
                      {course.title}
                    </p>
                    <Badge variant="nature" className="mt-3">
                      {course.durationEn}
                    </Badge>
                    <p className="mt-1 text-sm text-brand-text-muted">
                      Ages {course.ageRange.replace("ปี", "years")}
                    </p>
                    <p className="mt-4 text-brand-text-secondary leading-relaxed">
                      {course.descriptionEn}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-brand-gold-700">
                      Free of charge — no fees of any kind
                    </p>

                    <h3 className="mt-6 font-serif text-lg font-semibold text-brand-dark">
                      Course Includes
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {course.activitiesEn.map((activity) => (
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

      <section className="bg-white section-padding py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
            Retreat Locations & Schedule
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {locations.map((loc) => {
              const pageKey = `home-${loc.slug}`;
              const url = PAGE_URL_MAP[pageKey]?.en ?? "#";
              return (
                <Link key={loc.id} to={url} className="group">
                  <Card className="overflow-hidden p-0 transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="aspect-video w-full bg-brand-cream">
                      <img
                        src={loc.image}
                        alt={loc.shortNameEn}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
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
    </>
  );
}
