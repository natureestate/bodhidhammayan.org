import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { Breadcrumb } from "~/components/Breadcrumb";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/course-bangkok-en")({
  component: CourseBangkokEnPage,
});

function CourseBangkokEnPage() {
  return (
    <>
      <SeoHead
        title="Meditation Course Schedule Bangkok - Bodhi Dhammayan Retreat"
        description="Meditation course schedule at Bodhi Dhammayan Retreat Bangkok"
        canonical="/en/course-bangkok-en/"
        alternateUrls={{
          th: "/th/course-bangkok-th/",
          en: "/en/course-bangkok-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Course Schedule Bangkok", url: "/en/course-bangkok-en/" },
        ]}
      />
      <Breadcrumb items={[{ label: "Home", href: "/en/homeen/" }, { label: "Courses" }, { label: "Bangkok" }]} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-serif text-3xl font-bold text-brand-dark">
          Meditation Course Schedule Bangkok
        </h1>
        <p className="mt-4 text-brand-text-secondary">
          Content will be fetched from Sanity CMS
        </p>
      </section>
    </>
  );
}
