import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/about-us-en")({
  component: AboutUsEnPage,
});

function AboutUsEnPage() {
  return (
    <>
      <SeoHead
        title="About Us - Bodhi Dhammayan Retreat"
        canonical="/en/about-us-en/"
        alternateUrls={{ th: "/th/about-us-th/", en: "/en/about-us-en/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "About Us", url: "/en/about-us-en/" },
        ]}
      />
      <section className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-2xl font-bold">About Us</h1>
        <p className="text-muted-foreground">
          Content about the foundation will be displayed here.
        </p>
      </section>
    </>
  );
}
