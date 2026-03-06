import { Link } from "@tanstack/react-router";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

interface ExperienceSectionProps {
  lang: Language;
}

const PLACEHOLDER_COUNT = 6;

export function ExperienceSection({ lang }: ExperienceSectionProps) {
  const experienceUrl = PAGE_URL_MAP.experience?.[lang] ?? "#";

  return (
    <section className="bg-dharma-50 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl font-bold text-dharma-900 md:text-3xl">
          {t(lang, "section.experience")}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <Card key={i} className="overflow-hidden p-0">
              <div className="aspect-[4/3] w-full bg-dharma-100" aria-hidden />
              <CardContent className="p-4">
                <p className="font-thai text-sm font-medium text-dharma-800">
                  ชื่อผู้เขียน
                </p>
                <p className="mt-1 font-thai text-xs text-dharma-500">วันที่</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to={experienceUrl}>{t(lang, "cta.viewAll")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
