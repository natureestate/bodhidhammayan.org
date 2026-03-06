import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { Breadcrumb } from "~/components/Breadcrumb";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/course-saraburi-en")({
  component: CourseSaraburiEnPage,
});

function CourseSaraburiEnPage() {
  return (
    <>
      <SeoHead
        title="Meditation Course Schedule Saraburi - Bodhi Dhammayan Retreat"
        description="Meditation course schedule at Bodhi Dhammayan Retreat Saraburi"
        canonical="/en/course-saraburi-en/"
        alternateUrls={{
          th: "/th/course-saraburi-th/",
          en: "/en/course-saraburi-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Course Schedule Saraburi", url: "/en/course-saraburi-en/" },
        ]}
      />
      <Breadcrumb items={[{ label: "Home", href: "/en/homeen/" }, { label: "Courses" }, { label: "Saraburi" }]} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-serif text-3xl font-bold text-brand-dark">
          Meditation Course Schedule Saraburi
        </h1>
        <p className="mt-4 text-brand-text-secondary">
          Content will be fetched from Sanity CMS
        </p>
      </section>
    </>
  );
}
