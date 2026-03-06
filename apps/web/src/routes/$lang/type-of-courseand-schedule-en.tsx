import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/type-of-courseand-schedule-en")({
  component: TypeOfCourseAndScheduleEnPage,
});

function TypeOfCourseAndScheduleEnPage() {
  return (
    <>
      <SeoHead
        title="Course Types & Schedule - Bodhi Dhammayan Retreat"
        description="Course types and meditation schedule at Bodhi Dhammayan Retreat"
        canonical="/en/type-of-courseand-schedule-en/"
        alternateUrls={{
          th: "/th/type-of-courseand-schedule-th/",
          en: "/en/type-of-courseand-schedule-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          {
            name: "Course Types & Schedule",
            url: "/en/type-of-courseand-schedule-en/",
          },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-display text-3xl font-bold text-dharma-900">
          Course Types & Schedule
        </h1>
        <p className="mt-4 text-dharma-600">
          Content will be fetched from Sanity CMS
        </p>
      </section>
    </>
  );
}
