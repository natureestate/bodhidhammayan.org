import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/course-phuket-en")({
  component: CoursePhuketEnPage,
});

function CoursePhuketEnPage() {
  return (
    <>
      <SeoHead
        title="Meditation Course Schedule Phuket - Bodhi Dhammayan Retreat"
        description="Meditation course schedule at Bodhi Dhammayan Retreat Phuket"
        canonical="/en/course-phuket-en/"
        alternateUrls={{
          th: "/th/course-phuket-th/",
          en: "/en/course-phuket-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Course Schedule Phuket", url: "/en/course-phuket-en/" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-display text-3xl font-bold text-dharma-900">
          Meditation Course Schedule Phuket
        </h1>
        <p className="mt-4 text-dharma-600">
          Content will be fetched from Sanity CMS
        </p>
      </section>
    </>
  );
}
