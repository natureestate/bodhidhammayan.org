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
    <section className="bg-brand-cream section-padding py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl lg:text-4xl">
          {t(lang, "section.books")}
        </h2>

        <div className="mt-12 overflow-x-auto pb-4">
          <div className="flex gap-4 md:gap-6">
            {books.map((book) => (
              <Card
                key={book.key}
                className="min-w-[140px] shrink-0 overflow-hidden p-0 transition-all hover:-translate-y-1 hover:shadow-lg md:min-w-[160px]"
              >
                <div className="relative aspect-3/4 w-full bg-brand-cream">
                  <img
                    src={book.image}
                    alt={t(lang, book.key)}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end bg-linear-to-t from-brand-dark/70 to-transparent p-3">
                    <BookOpen className="h-5 w-5 text-brand-gold-300" aria-hidden />
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="line-clamp-3 text-sm font-medium text-brand-dark">
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
