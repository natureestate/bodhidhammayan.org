import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/masteren")({
  component: MasterEnPage,
});

function MasterEnPage() {
  return (
    <>
      <SeoHead
        title="Ajahn Acharawadee Wongsakon - Bodhi Dhammayan Retreat"
        canonical="/en/masteren/"
        alternateUrls={{ th: "/th/masterth/", en: "/en/masteren/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Ajahn Acharawadee Wongsakon", url: "/en/masteren/" },
        ]}
      />
      <section className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-2xl font-bold">
          Ajahn Acharawadee Wongsakon
        </h1>
        <p className="text-muted-foreground">
          Content about Ajahn Acharawadee will be displayed here.
        </p>
      </section>
    </>
  );
}
