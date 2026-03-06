import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { Button } from "~/components/ui/button";
import { siteConfig } from "~/data";

interface HeroSectionProps {
  lang: Language;
}

export function HeroSection({ lang }: HeroSectionProps) {
  const registerUrl = PAGE_URL_MAP.register?.[lang] ?? "#";

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-brand-dark md:min-h-screen">
      <img
        src={siteConfig.images.hero}
        alt="โพธิธรรมญาณสถาน"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      <div className="absolute inset-0 bg-linear-to-b from-brand-dark/50 via-brand-dark/60 to-brand-dark/80" />

      <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-4 text-center md:min-h-screen">
        <div className="mx-auto max-w-3xl">
          <img
            src={siteConfig.images.logo}
            alt={t(lang, "meta.siteName")}
            className="mx-auto mb-8 h-16 w-auto opacity-80 md:h-20"
          />

          <blockquote className="font-serif text-2xl font-medium leading-relaxed text-white/90 italic md:text-4xl lg:text-5xl">
            &ldquo;{t(lang, "hero.title")}&rdquo;
          </blockquote>

          <p className="mt-6 text-base font-medium tracking-wide text-brand-gold-400 md:text-lg">
            {t(lang, "hero.subtitle")}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link to={registerUrl}>{t(lang, "cta.register")}</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
              <a href="#about">
                {lang === "th" ? "เรียนรู้เพิ่มเติม" : "Discover More"}
              </a>
            </Button>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 animate-bounce text-white/50 transition-colors hover:text-brand-gold-400"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
