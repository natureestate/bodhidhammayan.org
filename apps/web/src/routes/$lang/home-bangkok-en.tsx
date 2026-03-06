import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/home-bangkok-en")({
  component: HomeBangkokEnPage,
});

function HomeBangkokEnPage() {
  return (
    <>
      <SeoHead
        title="Foundation Meditation Room Bangkok"
        description="Foundation Meditation Room Bangkok - Anapanasati and Vipassana meditation retreat"
        canonical="/en/home-bangkok-en/"
        alternateUrls={{
          th: "/th/home-bangkok-th/",
          en: "/en/home-bangkok-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Foundation Meditation Room Bangkok", url: "/en/home-bangkok-en/" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-serif text-3xl font-bold text-brand-dark">
          Foundation Meditation Room Bangkok
        </h1>
        <p className="mt-4 text-brand-text-secondary">
          Content will be fetched from Sanity CMS
        </p>
      </section>
    </>
  );
}
