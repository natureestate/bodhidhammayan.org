import { Link } from "@tanstack/react-router";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { Compass, Brain, Sparkles } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

interface CourseTypesSectionProps {
  lang: Language;
}

const courses = [
  {
    icon: Compass,
    titleKey: "course.journey",
    titleEnKey: "course.journeyEn",
    durationKey: "course.journeyDuration",
    image: "/images/teachings/meditation-more-than-you-think.webp",
    page: "course-schedule",
  },
  {
    icon: Brain,
    titleKey: "course.anapanasati",
    titleEnKey: "course.anapanasatiEn",
    durationKey: "course.anapanasatiDuration",
    image: "/images/teachings/dhamma-nature.webp",
    page: "course-schedule",
  },
  {
    icon: Sparkles,
    titleKey: "course.vipassana",
    titleEnKey: "course.vipassanaEn",
    durationKey: "course.vipassanaDuration",
    image: "/images/teachings/chanting-power.webp",
    page: "course-schedule",
  },
];

export function CourseTypesSection({ lang }: CourseTypesSectionProps) {
  return (
    <section className="bg-dharma-50 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl font-bold text-dharma-900 md:text-3xl">
          {t(lang, "section.courses")}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;
            const url = PAGE_URL_MAP[course.page]?.[lang] ?? "#";
            return (
              <Link key={course.titleKey} to={url} className="group">
                <Card className="overflow-hidden p-0 transition-shadow group-hover:shadow-lg">
                  <div className="aspect-video w-full bg-dharma-100">
                    <img
                      src={course.image}
                      alt={t(lang, course.titleKey)}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-600">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-dharma-800 group-hover:text-gold-600">
                          {t(lang, course.titleKey)}
                        </h3>
                        <p className="font-thai text-sm text-dharma-600">
                          {t(lang, course.titleEnKey)}
                        </p>
                      </div>
                    </div>
                    <Badge variant="nature" className="mt-3">
                      {t(lang, course.durationKey)}
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
