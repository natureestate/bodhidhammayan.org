import type { Language } from "@bodhidhammayan/api-client";
import { t } from "@bodhidhammayan/api-client";
import { BookOpen } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

interface BooksSectionProps {
  lang: Language;
}

const books = [
  { key: "book.teun", image: "/images/teachings/heavy-light-mind.webp" },
  { key: "book.global", image: "/images/teachings/merit-much-little.webp" },
  { key: "book.gharavasa2", image: "/images/teachings/dhamma-nature.webp" },
  { key: "book.gharavasa", image: "/images/teachings/chanting-power.webp" },
  { key: "book.sinchad", image: "/images/teachings/meditation-more-than-you-think.webp" },
  { key: "book.rooluey", image: "/images/teachings/kilesa-fear.webp" },
  { key: "book.vipassana", image: "/images/teachings/goodness-correctness.webp" },
  { key: "book.techo", image: "/images/teachings/keep-balance.webp" },
  { key: "book.misil", image: "/images/teachings/heavy-light-mind.webp" },
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
            {books.map((book) => (
              <Card
                key={book.key}
                className="min-w-[140px] shrink-0 overflow-hidden p-0 md:min-w-[160px]"
              >
                <div className="relative aspect-3/4 w-full bg-dharma-100">
                  <img
                    src={book.image}
                    alt={t(lang, book.key)}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end bg-linear-to-t from-dharma-950/70 to-transparent p-3">
                    <BookOpen className="h-5 w-5 text-gold-300" aria-hidden />
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="line-clamp-3 font-thai text-sm font-medium text-dharma-800">
                    {t(lang, book.key)}
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
