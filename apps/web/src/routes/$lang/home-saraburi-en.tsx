import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/home-saraburi-en")({
  component: HomeSaraburiEnPage,
});

function HomeSaraburiEnPage() {
  return (
    <>
      <SeoHead
        title="Bodhi Dhammayan Retreat Saraburi"
        description="Bodhi Dhammayan Retreat Saraburi - Anapanasati and Vipassana meditation retreat"
        canonical="/en/home-saraburi-en/"
        alternateUrls={{
          th: "/th/home-saraburi-th/",
          en: "/en/home-saraburi-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Bodhi Dhammayan Retreat Saraburi", url: "/en/home-saraburi-en/" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-display text-3xl font-bold text-dharma-900">
          Bodhi Dhammayan Retreat Saraburi
        </h1>
        <p className="mt-4 text-dharma-600">
          Content will be fetched from Sanity CMS
        </p>
      </section>
    </>
  );
}
