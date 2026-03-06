import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/course-hatyai-th")({
  component: CourseHatYaiThPage,
});

function CourseHatYaiThPage() {
  return (
    <>
      <SeoHead
        title="ตารางคอร์สปฏิบัติธรรม หาดใหญ่ - โพธิธรรมญาณสถาน"
        description="ตารางคอร์สปฏิบัติธรรม ณ โพธิธรรมญาณสถาน หาดใหญ่"
        canonical="/th/course-hatyai-th/"
        alternateUrls={{
          th: "/th/course-hatyai-th/",
          en: "/en/course-hatyai-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "ตารางคอร์ส หาดใหญ่", url: "/th/course-hatyai-th/" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-display text-3xl font-bold text-dharma-900">
          ตารางคอร์สปฏิบัติธรรม หาดใหญ่
        </h1>
        <p className="mt-4 text-dharma-600">
          เนื้อหาจะถูกดึงจาก Sanity CMS
        </p>
      </section>
    </>
  );
}
