import { Link } from "@tanstack/react-router";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { MapPin, ChevronRight } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { courses } from "~/data/seed-courses";
import { locations } from "~/data/seed-locations";

interface CourseTypesSectionProps {
  lang: Language;
}

function getLocationsForCourse(courseId: string) {
  return locations.filter((loc) => loc.coursesAvailable.includes(courseId));
}

export function CourseTypesSection({ lang }: CourseTypesSectionProps) {
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
            const url = `${PAGE_URL_MAP["course-schedule"]?.[lang] ?? "#"}#${course.slug}`;
            const title = lang === "th" ? course.title : course.titleEn;
            const subtitle = lang === "th" ? course.titleEn : course.title;
            const duration = lang === "th" ? course.duration : course.durationEn;
            const description = lang === "th" ? course.description : course.descriptionEn;
            const availableLocations = getLocationsForCourse(course.id);

            return (
              <Link key={course.id} to={url} className="group">
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
                      <div className="w-0.5 self-stretch rounded-full bg-brand-gold-400" />
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
