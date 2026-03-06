import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/placeen")({
  component: PlaceEnPage,
});

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
      <section className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-2xl font-bold">Retreat Locations</h1>
        <p className="text-muted-foreground">
          Content about retreat locations will be displayed here.
        </p>
      </section>
    </>
  );
}
