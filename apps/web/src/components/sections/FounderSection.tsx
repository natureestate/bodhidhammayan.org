import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Instagram, Music2 } from "lucide-react";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { Button } from "~/components/ui/button";
import { master, siteConfig } from "~/data";

interface FounderSectionProps {
  lang: Language;
}

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: siteConfig.social.facebook },
  { icon: Music2, label: "TikTok", href: siteConfig.social.tiktok },
  { icon: Youtube, label: "YouTube", href: siteConfig.social.youtube },
  { icon: Instagram, label: "Instagram", href: siteConfig.social.instagram },
];

export function FounderSection({ lang }: FounderSectionProps) {
  const masterUrl = PAGE_URL_MAP.master?.[lang] ?? "#";

  return (
    <section id="about" className="bg-white section-padding py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl lg:text-4xl">
          {t(lang, "section.founder")}
        </h2>

        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
          <div className="shrink-0 md:w-1/3">
            <div className="aspect-square w-full max-w-xs overflow-hidden rounded-2xl bg-brand-cream shadow-lg">
              <img
                src={master.image}
                alt={master.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-serif text-xl font-bold text-brand-dark lg:text-2xl">
              {master.name}
            </h3>
            <p className="mt-2 text-base leading-relaxed text-brand-text-secondary md:text-lg">
              {master.title}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-brand-text-muted line-clamp-4">
              {master.bio.split("\n\n")[0]}
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold-50 text-brand-gold-600 transition-colors hover:bg-brand-gold-100 hover:text-brand-gold-700"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <Button className="mt-8" size="lg" asChild>
              <Link to={masterUrl}>{t(lang, "founder.readMore")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
