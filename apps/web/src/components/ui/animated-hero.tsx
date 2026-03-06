import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, ArrowDown, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { siteConfig } from "~/data";

interface AnimatedHeroProps {
  lang: Language;
}

const ROTATING_WORDS = {
  th: ["อานาปานสติ", "วิปัสสนา", "สติปัฏฐานสี่"],
  en: ["Anapanasati", "Vipassana", "Satipatthana"],
} as const;

function AnimatedHero({ lang }: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ROTATING_WORDS[lang], [lang]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-brand-dark md:min-h-screen">
      <img
        src={siteConfig.images.hero}
        alt="โพธิธรรมญาณสถาน"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      <div className="absolute inset-0 bg-linear-to-b from-brand-dark/40 via-brand-dark/50 to-brand-dark/80" />

      <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-4 text-center md:min-h-screen">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
            <div className="flex flex-col gap-4">
              <h1 className="max-w-2xl font-serif text-4xl font-medium tracking-tight text-white/95 md:text-6xl lg:text-7xl">
                <motion.span
                  className="block py-[25px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="block text-[32px] text-brand-gold-400/80 md:text-[40px]">
                    {lang === "th" ? "สถานปฏิบัติธรรม" : "Meditation Retreat"}
                  </span>
                  <motion.span
                    className="mt-3 inline-block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 120 }}
                  >
                    <Badge
                      className="gap-2 border-brand-gold-400/40 bg-brand-gold-400/15 px-5 py-2.5 text-lg font-bold text-brand-gold-200 shadow-[0_0_30px_rgba(200,169,81,0.25)] backdrop-blur-sm md:px-6 md:py-3 md:text-xl"
                      variant="outline"
                    >
                      <Sparkles className="h-4 w-4 text-brand-gold-300 md:h-5 md:w-5" />
                      {lang === "th" ? "อบรมฟรี" : "Free Retreat"}
                    </Badge>
                  </motion.span>
                </motion.span>
                <span className="relative flex w-full justify-center overflow-hidden pt-2 pb-2.5 text-center md:pt-3 md:pb-5">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-serif font-semibold text-white/80"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? { y: 0, opacity: 1 }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>

              <motion.p
                className="mx-auto max-w-2xl font-serif text-base font-medium leading-relaxed tracking-wide text-brand-gold-400 md:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {t(lang, "hero.subtitle")}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col items-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button size="lg" className="gap-4" asChild>
                <a href="#course-types">
                  {t(lang, "cta.register")} <MoveRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-4 border-white/30 text-white hover:bg-white/10 hover:text-white"
                asChild
              >
                <Link to={PAGE_URL_MAP["about"]?.[lang] ?? "#"}>
                  {lang === "th" ? "เรียนรู้เพิ่มเติม" : "Discover More"}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#about"
          className="absolute bottom-10 mb-2 text-white/50 transition-colors hover:text-brand-gold-400"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
}

export { AnimatedHero };
