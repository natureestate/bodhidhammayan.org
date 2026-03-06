import type { Language } from "@bodhidhammayan/api-client";
import { t } from "@bodhidhammayan/api-client";
import { Compass, Brain, Sparkles } from "lucide-react";
import { Card, CardHeader, CardContent } from "~/components/ui/card";
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
  },
  {
    icon: Brain,
    titleKey: "course.anapanasati",
    titleEnKey: "course.anapanasatiEn",
    durationKey: "course.anapanasatiDuration",
  },
  {
    icon: Sparkles,
    titleKey: "course.vipassana",
    titleEnKey: "course.vipassanaEn",
    durationKey: "course.vipassanaDuration",
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
            return (
              <Card key={course.titleKey} className="p-0">
                <CardHeader className="pb-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-100 text-gold-600">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-display text-lg font-semibold text-dharma-800">
                    {t(lang, course.titleKey)}
                  </h3>
                  <p className="mt-1 font-thai text-sm text-dharma-600">
                    {t(lang, course.titleEnKey)}
                  </p>
                  <Badge variant="nature" className="mt-3">
                    {t(lang, course.durationKey)}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
