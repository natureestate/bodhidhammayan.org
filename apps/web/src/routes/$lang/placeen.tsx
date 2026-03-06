import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Card, CardContent } from "~/components/ui/card";
import { siteConfig } from "~/data";

export const Route = createFileRoute("/$lang/placeen")({
  component: PlaceEnPage,
});

const locations = [
  {
    name: "Bodhidhammayan Retreat, Saraburi",
    description: "Main retreat center surrounded by peaceful nature, ideal for short and long-term practice.",
    image: "/images/hero/bodhidhammayan-hero.webp",
    page: "home-saraburi",
  },
  {
    name: "Foundation Office, Bangkok",
    description: "Foundation headquarters and meditation course venue in the heart of Bangkok.",
    image: "/images/news/journey-1day-bangkok.webp",
    page: "home-bangkok",
  },
  {
    name: "Hat Yai, Songkhla",
    description: "Southern branch providing meditation training for practitioners in the south.",
    image: "/images/news/dhamma-3d.webp",
    page: "home-hatyai",
  },
  {
    name: "Phuket",
    description: "Andaman branch welcoming both Thai and international practitioners.",
    image: "/images/news/dhamma-3d-phuket.webp",
    page: "home-phuket",
  },
];

function PlaceEnPage() {
  return (
    <>
      <SeoHead
        title="Retreat Locations - Bodhi Dhammayan Retreat"
        canonical="/en/placeen/"
        alternateUrls={{ th: "/th/placeth/", en: "/en/placeen/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Retreat Locations", url: "/en/placeen/" },
        ]}
      />

      <div className="relative bg-dharma-950 px-4 py-20">
        <img
          src={siteConfig.images.hero}
          alt="Retreat Locations"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            Retreat Locations
          </h1>
          <p className="mt-4 text-lg text-dharma-200">
            4 meditation centers across Thailand
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {locations.map((loc) => {
            const url = PAGE_URL_MAP[loc.page]?.en ?? "#";
            return (
              <Link key={loc.name} to={url} className="group">
                <Card className="overflow-hidden p-0 transition-shadow group-hover:shadow-lg">
                  <div className="aspect-video w-full bg-dharma-100">
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 shrink-0 text-gold-500" />
                      <h2 className="font-display text-xl font-bold text-dharma-900 group-hover:text-gold-600">
                        {loc.name}
                      </h2>
                    </div>
                    <p className="mt-2 text-sm text-dharma-600">
                      {loc.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
