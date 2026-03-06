import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/home-phuket-en")({
  component: HomePhuketEnPage,
});

function HomePhuketEnPage() {
  return (
    <>
      <SeoHead
        title="Bodhi Dhammayan Retreat Phuket"
        description="Bodhi Dhammayan Retreat Phuket - Anapanasati and Vipassana meditation retreat"
        canonical="/en/home-phuket-en/"
        alternateUrls={{
          th: "/th/home-phuket-th/",
          en: "/en/home-phuket-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Bodhi Dhammayan Retreat Phuket", url: "/en/home-phuket-en/" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-serif text-3xl font-bold text-brand-dark">
          Bodhi Dhammayan Retreat Phuket
        </h1>
        <p className="mt-4 text-brand-text-secondary">
          Content will be fetched from Sanity CMS
        </p>
      </section>
    </>
  );
}
