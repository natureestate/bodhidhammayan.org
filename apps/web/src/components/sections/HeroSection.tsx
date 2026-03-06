import type { Language } from "@bodhidhammayan/api-client";
import { AnimatedHero } from "~/components/ui/animated-hero";

interface HeroSectionProps {
  lang: Language;
}

export function HeroSection({ lang }: HeroSectionProps) {
  return <AnimatedHero lang={lang} />;
}
