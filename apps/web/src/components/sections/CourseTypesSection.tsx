import { Link } from "@tanstack/react-router";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { Compass, Brain, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { courses } from "~/data/seed-courses";

interface CourseTypesSectionProps {
  lang: Language;
}

const courseIcons: Record<string, LucideIcon> = {
  "course-jtm": Compass,
  "course-anapanasati": Brain,
  "course-vipassana": Sparkles,
};

export function CourseTypesSection({ lang }: CourseTypesSectionProps) {
  return (
    <section className="bg-brand-cream section-padding py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl lg:text-4xl">
          {t(lang, "section.courses")}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = courseIcons[course.id] ?? Compass;
            const url = PAGE_URL_MAP["course-schedule"]?.[lang] ?? "#";
            const title = lang === "th" ? course.title : course.titleEn;
            const subtitle = course.titleEn;
            const duration = lang === "th" ? course.duration : course.durationEn;
            return (
              <Link key={course.id} to={url} className="group">
                <Card className="overflow-hidden p-0 transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="aspect-video w-full bg-brand-cream">
                    <img
                      src={course.image}
                      alt={title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-5">
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
                    <Badge variant="nature" className="mt-3">
                      {duration}
                    </Badge>
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
