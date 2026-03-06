import { useCallback, useEffect, useRef, useState } from "react";
import type { Language } from "@bodhidhammayan/api-client";
import { t } from "@bodhidhammayan/api-client";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { books as seedBooks } from "~/data";

interface BooksSectionProps {
  lang: Language;
}

const bookImages: Record<string, string> = {
  "book-01": "/images/teachings/heavy-light-mind.webp",
  "book-02": "/images/teachings/merit-much-little.webp",
  "book-03": "/images/teachings/dhamma-nature.webp",
  "book-04": "/images/teachings/chanting-power.webp",
  "book-05": "/images/teachings/meditation-more-than-you-think.webp",
  "book-06": "/images/teachings/kilesa-fear.webp",
  "book-07": "/images/teachings/goodness-correctness.webp",
  "book-08": "/images/teachings/keep-balance.webp",
  "book-09": "/images/teachings/heavy-light-mind.webp",
};

function BookCard({ book, lang }: { book: (typeof seedBooks)[number]; lang: Language }) {
  return (
    <button
      type="button"
      className="group w-[100px] shrink-0 cursor-pointer text-left md:w-[120px]"
      aria-label={lang === "en" && book.titleEn ? book.titleEn : book.title}
    >
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-lg bg-brand-cream shadow-sm transition-all group-hover:-translate-y-1 group-hover:shadow-md group-active:scale-95">
        <img
          src={bookImages[book.id] ?? "/images/teachings/heavy-light-mind.webp"}
          alt={lang === "en" && book.titleEn ? book.titleEn : book.title}
          className="h-full w-full object-cover"
          loading="lazy"
          draggable={false}
        />
        <div className="absolute inset-0 flex items-end bg-linear-to-t from-brand-dark/60 to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100">
          <BookOpen className="h-4 w-4 text-brand-gold-300" aria-hidden />
        </div>
      </div>
      <p className="mt-2 line-clamp-2 text-xs font-medium text-brand-dark">
        {lang === "en" && book.titleEn ? book.titleEn : book.title}
      </p>
    </button>
  );
}

export function BooksSection({ lang }: BooksSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  const updateFadeIndicators = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeftFade(el.scrollLeft > 8);
    setShowRightFade(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    const speed = 0.5;

    function step() {
      if (!container) return;

      if (isPausedRef.current) {
        animationId = requestAnimationFrame(step);
        return;
      }

      container.scrollLeft += speed;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      updateFadeIndicators();
      animationId = requestAnimationFrame(step);
    }

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [updateFadeIndicators]);

  const resumeTimerRef = useRef<ReturnType<typeof setTimeout>>();

  const pause = useCallback(() => {
    clearTimeout(resumeTimerRef.current);
    isPausedRef.current = true;
  }, []);

  const resume = useCallback(() => {
    isPausedRef.current = false;
  }, []);

  const resumeAfterDelay = useCallback(() => {
    clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(resume, 2000);
  }, [resume]);

  const scrollBy = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = direction === "left" ? -200 : 200;
    el.scrollBy({ left: amount, behavior: "smooth" });
    setTimeout(updateFadeIndicators, 350);
  }, [updateFadeIndicators]);

  const duplicatedBooks = [...seedBooks, ...seedBooks];

  return (
    <section className="bg-brand-cream section-padding py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl lg:text-4xl">
            {t(lang, "section.books")}
          </h2>

          {/* ปุ่มเลื่อนซ้าย-ขวา desktop */}
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => scrollBy("left")}
              className="rounded-full border border-brand-dark/20 p-1.5 text-brand-dark/60 transition-colors hover:bg-brand-dark/10 hover:text-brand-dark"
              aria-label={lang === "en" ? "Scroll left" : "เลื่อนซ้าย"}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy("right")}
              className="rounded-full border border-brand-dark/20 p-1.5 text-brand-dark/60 transition-colors hover:bg-brand-dark/10 hover:text-brand-dark"
              aria-label={lang === "en" ? "Scroll right" : "เลื่อนขวา"}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* carousel container */}
        <div className="relative mt-8">
          {/* fade gradient ด้านซ้าย */}
          {showLeftFade && (
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-linear-to-r from-brand-cream to-transparent" />
          )}

          <div
            ref={scrollRef}
            className="scrollbar-hide overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch]"
            onMouseEnter={pause}
            onMouseLeave={resume}
            onTouchStart={pause}
            onTouchEnd={resumeAfterDelay}
            onScroll={updateFadeIndicators}
          >
            <div className="flex gap-3 md:gap-4">
              {duplicatedBooks.map((book, idx) => (
                <BookCard key={`${book.id}-${idx}`} book={book} lang={lang} />
              ))}
            </div>
          </div>

          {/* fade gradient ด้านขวา */}
          {showRightFade && (
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-linear-to-l from-brand-cream to-transparent" />
          )}
        </div>

        {/* swipe hint — แสดงเฉพาะ mobile */}
        <p className="mt-2 text-center text-xs text-brand-dark/40 md:hidden">
          {lang === "en" ? "← Swipe to see more →" : "← เลื่อนเพื่อดูเพิ่มเติม →"}
        </p>
      </div>
    </section>
  );
}
