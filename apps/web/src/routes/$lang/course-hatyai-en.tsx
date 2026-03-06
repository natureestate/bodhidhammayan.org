import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { Breadcrumb } from "~/components/Breadcrumb";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/course-hatyai-en")({
  component: CourseHatYaiEnPage,
});

function CourseHatYaiEnPage() {
  return (
    <>
      <SeoHead
        title="Meditation Course Schedule Hat Yai - Bodhi Dhammayan Retreat"
        description="Meditation course schedule at Bodhi Dhammayan Retreat Hat Yai"
        canonical="/en/course-hatyai-en/"
        alternateUrls={{
          th: "/th/course-hatyai-th/",
          en: "/en/course-hatyai-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Course Schedule Hat Yai", url: "/en/course-hatyai-en/" },
        ]}
      />
      <Breadcrumb items={[{ label: "Home", href: "/en/homeen/" }, { label: "Courses" }, { label: "Hat Yai" }]} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-serif text-3xl font-bold text-brand-dark">
          Meditation Course Schedule Hat Yai
        </h1>
        <p className="mt-4 text-brand-text-secondary">
          Content will be fetched from Sanity CMS
        </p>
      </section>
    </>
  );
}
