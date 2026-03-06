import type { Language } from "@bodhidhammayan/api-client";
import { t } from "@bodhidhammayan/api-client";
import { MapPin } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

interface LocationsSectionProps {
  lang: Language;
}

const locations = [
  { key: "location.bangkok" },
  { key: "location.saraburi" },
  { key: "location.hatyai" },
  { key: "location.phuket" },
];

export function LocationsSection({ lang }: LocationsSectionProps) {
  return (
    <section className="bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl font-bold text-dharma-900 md:text-3xl">
          {t(lang, "section.locations")}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {locations.map((loc) => (
            <Card key={loc.key} className="overflow-hidden p-0">
              <div className="aspect-video w-full bg-dharma-100" aria-hidden />
              <CardContent className="flex items-center gap-3 p-5">
                <MapPin className="h-5 w-5 shrink-0 text-gold-500" />
                <h3 className="font-display text-lg font-semibold text-dharma-800">
                  {t(lang, loc.key)}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
