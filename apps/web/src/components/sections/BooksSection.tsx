import type { Language } from "@bodhidhammayan/api-client";
import { t } from "@bodhidhammayan/api-client";
import { BookOpen } from "lucide-react";

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
    <section className="bg-brand-cream section-padding py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl lg:text-4xl">
          {t(lang, "section.books")}
        </h2>

        <div className="mt-8 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex gap-3 md:gap-4">
            {books.map((book) => (
              <div
                key={book.key}
                className="group w-[100px] shrink-0 md:w-[120px]"
              >
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg bg-brand-cream shadow-sm transition-all group-hover:-translate-y-1 group-hover:shadow-md">
                  <img
                    src={book.image}
                    alt={t(lang, book.key)}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end bg-linear-to-t from-brand-dark/60 to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100">
                    <BookOpen className="h-4 w-4 text-brand-gold-300" aria-hidden />
                  </div>
                </div>
                <p className="mt-2 line-clamp-2 text-xs font-medium text-brand-dark">
                  {t(lang, book.key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
