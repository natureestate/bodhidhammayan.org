import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Breadcrumb } from "~/components/Breadcrumb";

export const Route = createFileRoute("/$lang/course-saraburi-th")({
  component: CourseSaraburiThPage,
});

function CourseSaraburiThPage() {
  return (
    <>
      <SeoHead
        title="ตารางคอร์สปฏิบัติธรรม สระบุรี - โพธิธรรมญาณสถาน"
        description="ตารางคอร์สปฏิบัติธรรม ณ โพธิธรรมญาณสถาน สระบุรี"
        canonical="/th/course-saraburi-th/"
        alternateUrls={{
          th: "/th/course-saraburi-th/",
          en: "/en/course-saraburi-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "ตารางคอร์ส สระบุรี", url: "/th/course-saraburi-th/" },
        ]}
      />
      <Breadcrumb items={[{ label: "หน้าแรก", href: "/th/hometh/" }, { label: "คอร์ส" }, { label: "สระบุรี" }]} />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-serif text-3xl font-bold text-brand-dark">
          ตารางคอร์สปฏิบัติธรรม สระบุรี
        </h1>
        <p className="mt-4 text-brand-text-secondary">
          เนื้อหาจะถูกดึงจาก Sanity CMS
        </p>
      </section>
    </>
  );
}
