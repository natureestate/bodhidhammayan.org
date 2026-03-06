import { Link } from "@tanstack/react-router";
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
    <section className="relative min-h-[70vh] bg-dharma-950 px-4 py-16 md:min-h-[80vh] md:py-24">
      <img
        src={siteConfig.images.hero}
        alt="โพธิธรรมญาณสถาน"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-linear-to-b from-dharma-950/60 via-dharma-950/70 to-dharma-950/90"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center text-center">
        <h1 className="font-display text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl lg:text-5xl">
          {t(lang, "hero.title")}
        </h1>
        <p className="mt-4 font-thai text-base text-dharma-100 drop-shadow-md md:text-lg">
          {t(lang, "hero.subtitle")}
        </p>
        <Button size="xl" className="mt-8" asChild>
          <Link to={registerUrl}>{t(lang, "cta.register")}</Link>
        </Button>
      </div>
    </section>
  );
}
