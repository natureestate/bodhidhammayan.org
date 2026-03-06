import { Link } from "@tanstack/react-router";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

interface LocationsSectionProps {
  lang: Language;
}

const locations = [
  {
    key: "location.bangkok",
    page: "home-bangkok",
    image: "/images/news/journey-1day-bangkok.webp",
  },
  {
    key: "location.saraburi",
    page: "home-saraburi",
    image: "/images/hero/bodhidhammayan-hero.webp",
  },
  {
    key: "location.hatyai",
    page: "home-hatyai",
    image: "/images/news/dhamma-3d.webp",
  },
  {
    key: "location.phuket",
    page: "home-phuket",
    image: "/images/news/dhamma-3d-phuket.webp",
  },
];

export function LocationsSection({ lang }: LocationsSectionProps) {
  return (
    <section className="bg-white section-padding py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl lg:text-4xl">
          {t(lang, "section.locations")}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {locations.map((loc) => {
            const url = PAGE_URL_MAP[loc.page]?.[lang] ?? "#";
            return (
              <Link key={loc.key} to={url} className="group">
                <Card className="overflow-hidden p-0 transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="aspect-video w-full bg-brand-cream">
                    <img
                      src={loc.image}
                      alt={t(lang, loc.key)}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="flex items-center gap-3 p-5">
                    <MapPin className="h-5 w-5 shrink-0 text-brand-gold-500" />
                    <h3 className="font-serif text-lg font-semibold text-brand-dark group-hover:text-brand-gold-600">
                      {t(lang, loc.key)}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
