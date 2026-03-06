import { Link } from "@tanstack/react-router";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { locations } from "~/data/seed-locations";

interface LocationsSectionProps {
  lang: Language;
}

const locationPageMap: Record<string, string> = {
  "loc-bangkok": "home-bangkok",
  "loc-saraburi": "home-saraburi",
  "loc-hatyai": "home-hatyai",
  "loc-phuket": "home-phuket",
};

export function LocationsSection({ lang }: LocationsSectionProps) {
  return (
    <section className="bg-white section-padding py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl lg:text-4xl">
          {t(lang, "section.locations")}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {locations.map((loc) => {
            const page = locationPageMap[loc.id] ?? "home-saraburi";
            const url = PAGE_URL_MAP[page]?.[lang] ?? "#";
            const displayName = lang === "th" ? loc.shortName : loc.shortNameEn;
            return (
              <Link key={loc.id} to={url} className="group">
                <Card className="overflow-hidden p-0 transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="aspect-video w-full bg-brand-cream">
                    <img
                      src={loc.image}
                      alt={displayName}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="flex items-center gap-3 p-5">
                    <MapPin className="h-5 w-5 shrink-0 text-brand-gold-500" />
                    <h3 className="font-serif text-lg font-semibold text-brand-dark group-hover:text-brand-gold-600">
                      {displayName}
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
