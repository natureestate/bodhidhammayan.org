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
    <section className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl font-bold text-dharma-900 md:text-3xl">
          {t(lang, "section.founder")}
        </h2>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
          <div className="shrink-0 md:w-1/3">
            <div className="aspect-square w-full max-w-xs overflow-hidden rounded-xl bg-dharma-100">
              <img
                src={master.image}
                alt={master.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-display text-xl font-bold text-dharma-900">
              {master.name}
            </h3>
            <p className="mt-2 font-thai text-base leading-relaxed text-dharma-800 md:text-lg">
              {master.title}
            </p>
            <p className="mt-4 font-thai text-sm leading-relaxed text-dharma-600 line-clamp-4">
              {master.bio.split("\n\n")[0]}
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-dharma-100 hover:bg-gold-100 hover:text-gold-600"
                  asChild
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>

            <Button className="mt-6" size="lg" asChild>
              <Link to={masterUrl}>{t(lang, "founder.readMore")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
