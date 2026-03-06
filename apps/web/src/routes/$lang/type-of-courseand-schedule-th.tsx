import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/type-of-courseand-schedule-th")({
  component: TypeOfCourseAndScheduleThPage,
});

function TypeOfCourseAndScheduleThPage() {
  return (
    <>
      <SeoHead
        title="ประเภทคอร์สและตารางปฏิบัติธรรม - โพธิธรรมญาณสถาน"
        description="ประเภทคอร์สและตารางปฏิบัติธรรม โพธิธรรมญาณสถาน"
        canonical="/th/type-of-courseand-schedule-th/"
        alternateUrls={{
          th: "/th/type-of-courseand-schedule-th/",
          en: "/en/type-of-courseand-schedule-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          {
            name: "ประเภทคอร์สและตารางปฏิบัติธรรม",
            url: "/th/type-of-courseand-schedule-th/",
          },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-display text-3xl font-bold text-dharma-900">
          ประเภทคอร์สและตารางปฏิบัติธรรม
        </h1>
        <p className="mt-4 text-dharma-600">
          เนื้อหาจะถูกดึงจาก Sanity CMS
        </p>
      </section>
    </>
  );
}
