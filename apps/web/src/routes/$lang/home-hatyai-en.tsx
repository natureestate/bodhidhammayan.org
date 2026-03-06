import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/home-hatyai-en")({
  component: HomeHatYaiEnPage,
});

function HomeHatYaiEnPage() {
  return (
    <>
      <SeoHead
        title="Bodhi Dhammayan Retreat Hat Yai"
        description="Bodhi Dhammayan Retreat Hat Yai - Anapanasati and Vipassana meditation retreat"
        canonical="/en/home-hatyai-en/"
        alternateUrls={{
          th: "/th/home-hatyai-th/",
          en: "/en/home-hatyai-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Bodhi Dhammayan Retreat Hat Yai", url: "/en/home-hatyai-en/" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-serif text-3xl font-bold text-brand-dark">
          Bodhi Dhammayan Retreat Hat Yai
        </h1>
        <p className="mt-4 text-brand-text-secondary">
          Content will be fetched from Sanity CMS
        </p>
      </section>
    </>
  );
}
