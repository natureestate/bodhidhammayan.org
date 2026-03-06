import type { Language } from "@bodhidhammayan/api-client";
import { t } from "@bodhidhammayan/api-client";
import { Card, CardContent } from "~/components/ui/card";

interface BooksSectionProps {
  lang: Language;
}

const books = [
  "book.teun",
  "book.global",
  "book.gharavasa2",
  "book.gharavasa",
  "book.sinchad",
  "book.rooluey",
  "book.vipassana",
  "book.techo",
  "book.misil",
];

export function BooksSection({ lang }: BooksSectionProps) {
  return (
    <section className="bg-dharma-50 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl font-bold text-dharma-900 md:text-3xl">
          {t(lang, "section.books")}
        </h2>

        <div className="mt-10 overflow-x-auto pb-4">
          <div className="flex gap-4 md:gap-6">
            {books.map((key) => (
              <Card
                key={key}
                className="min-w-[140px] shrink-0 overflow-hidden p-0 md:min-w-[160px]"
              >
                <div className="aspect-[3/4] w-full bg-dharma-100" aria-hidden />
                <CardContent className="p-3">
                  <p className="line-clamp-3 font-thai text-sm font-medium text-dharma-800">
                    {t(lang, key)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
