import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Youtube, Instagram, Music2 } from "lucide-react";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Button } from "~/components/ui/button";
import { master, siteConfig } from "~/data";

export const Route = createFileRoute("/$lang/masteren")({
  component: MasterEnPage,
});

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: siteConfig.social.facebook },
  { icon: Music2, label: "TikTok", href: siteConfig.social.tiktok },
  { icon: Youtube, label: "YouTube", href: siteConfig.social.youtube },
  { icon: Instagram, label: "Instagram", href: siteConfig.social.instagram },
];

function MasterEnPage() {
  return (
    <>
      <SeoHead
        title="Master Acharavadee Wongsakon - Bodhi Dhammayan Retreat"
        canonical="/en/masteren/"
        alternateUrls={{ th: "/th/masterth/", en: "/en/masteren/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Master Acharavadee Wongsakon", url: "/en/masteren/" },
        ]}
      />

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <div className="shrink-0 md:w-2/5">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={master.image}
                alt={master.nameEn}
                className="aspect-3/4 w-full object-cover"
              />
            </div>
            <div className="mt-6 flex justify-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-dharma-100 hover:bg-gold-100 hover:text-gold-600"
                  asChild
                >
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <h1 className="font-display text-3xl font-bold text-dharma-900 md:text-4xl">
              {master.nameEn}
            </h1>
            <p className="mt-2 text-sm text-dharma-500">
              Meditation hours: {master.meditationHours.toLocaleString()}+
            </p>

            <hr className="my-6 border-dharma-100" />

            <div className="space-y-4">
              {master.bio.split("\n\n").map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-dharma-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
