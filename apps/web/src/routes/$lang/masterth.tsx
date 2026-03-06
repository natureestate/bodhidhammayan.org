import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Youtube, Instagram, Music2 } from "lucide-react";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Button } from "~/components/ui/button";
import { master, siteConfig } from "~/data";

export const Route = createFileRoute("/$lang/masterth")({
  component: MasterThPage,
});

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: siteConfig.social.facebook },
  { icon: Music2, label: "TikTok", href: siteConfig.social.tiktok },
  { icon: Youtube, label: "YouTube", href: siteConfig.social.youtube },
  { icon: Instagram, label: "Instagram", href: siteConfig.social.instagram },
];

function MasterThPage() {
  return (
    <>
      <SeoHead
        title="ท่านอาจารย์อัจฉราวดี วงศ์สกล - โพธิธรรมญาณสถาน"
        canonical="/th/masterth/"
        alternateUrls={{ th: "/th/masterth/", en: "/en/masteren/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "ท่านอาจารย์อัจฉราวดี วงศ์สกล", url: "/th/masterth/" },
        ]}
      />
      <Breadcrumb items={[{ label: "หน้าแรก", href: "/th/hometh/" }, { label: "ท่านอาจารย์อัจฉราวดี วงศ์สกล" }]} />

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <div className="shrink-0 md:w-2/5">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={master.image}
                alt={master.name}
                className="aspect-3/4 w-full object-cover"
              />
            </div>
            <div className="mt-6 flex justify-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-brand-cream hover:bg-brand-gold-100 hover:text-brand-gold-600"
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
            <h1 className="font-serif text-3xl font-bold text-brand-dark md:text-4xl">
              {master.name}
            </h1>
            <p className="mt-1 text-lg text-brand-text-muted">{master.nameEn}</p>
            <p className="mt-4 font-thai text-lg font-medium text-brand-gold-600">
              {master.title}
            </p>
            <p className="mt-2 text-sm text-brand-text-muted">
              ชั่วโมงภาวนา: {master.meditationHours.toLocaleString()}+ ชั่วโมง
            </p>

            <hr className="my-6 border-brand-gold-100/50" />

            <div className="space-y-4">
              {master.bio.split("\n\n").map((p, i) => (
                <p key={i} className="font-thai text-base leading-relaxed text-brand-text-secondary">
                  {p}
                </p>
              ))}
            </div>

            <hr className="my-6 border-brand-gold-100/50" />

            <h2 className="font-serif text-2xl font-bold text-brand-dark">
              ประวัติการปฏิบัติ
            </h2>
            <div className="mt-4 space-y-4">
              {master.history.split("\n\n").map((p, i) => (
                <p key={i} className="font-thai text-base leading-relaxed text-brand-text-secondary">
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
