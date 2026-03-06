import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Breadcrumb } from "~/components/Breadcrumb";

export const Route = createFileRoute("/$lang/course-phuket-th")({
  component: CoursePhuketThPage,
});

function CoursePhuketThPage() {
  return (
    <>
      <SeoHead
        title="ตารางคอร์สปฏิบัติธรรม ภูเก็ต - โพธิธรรมญาณสถาน"
        description="ตารางคอร์สปฏิบัติธรรม ณ โพธิธรรมญาณสถาน ภูเก็ต"
        canonical="/th/course-phuket-th/"
        alternateUrls={{
          th: "/th/course-phuket-th/",
          en: "/en/course-phuket-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "ตารางคอร์ส ภูเก็ต", url: "/th/course-phuket-th/" },
        ]}
      />
      <Breadcrumb items={[{ label: "หน้าแรก", href: "/th/hometh/" }, { label: "คอร์ส" }, { label: "ภูเก็ต" }]} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-serif text-3xl font-bold text-brand-dark">
          ตารางคอร์สปฏิบัติธรรม ภูเก็ต
        </h1>
        <p className="mt-4 text-brand-text-secondary">
          เนื้อหาจะถูกดึงจาก Sanity CMS
        </p>
      </section>
    </>
  );
}
