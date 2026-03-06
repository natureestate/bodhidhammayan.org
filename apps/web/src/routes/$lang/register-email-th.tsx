import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react";
import { PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Breadcrumb } from "~/components/Breadcrumb";
import { Button } from "~/components/ui/button";
import { siteConfig } from "~/data";

export const Route = createFileRoute("/$lang/register-email-th")({
  component: RegisterEmailThPage,
});

const courseTypes = [
  {
    name: "Journey to the Mind (การเดินทางสู่จิตใจ)",
    duration: "1 วัน หรือ 3 วัน 2 คืน",
    description: "คอร์สเบื้องต้นสำหรับผู้เริ่มต้น ฝึกสติและสมาธิเบื้องต้น",
  },
  {
    name: "สมาธิอานาปานสติ (Anapanasati)",
    duration: "4 วัน 3 คืน",
    description: "คอร์สสมาธิขั้นกลาง ฝึกอานาปานสติอย่างเข้มข้น",
  },
  {
    name: "วิปัสสนากรรมฐาน (Vipassana)",
    duration: "8 วัน 7 คืน",
    description: "คอร์สขั้นสูง ฝึกวิปัสสนากรรมฐานตามหลักสติปัฏฐานสี่",
  },
];

function RegisterEmailThPage() {
  return (
    <>
      <SeoHead
        title="สมัครคอร์สปฏิบัติธรรม - โพธิธรรมญาณสถาน"
        description="สมัครคอร์สปฏิบัติธรรม อบรมฟรี ดำเนินการโดยมูลนิธิโนอิ้ง บุดด้าฯ และมูลนิธิโรงเรียนแห่งชีวิต"
        canonical="/th/register-email-th/"
        alternateUrls={{
          th: "/th/register-email-th/",
          en: "/en/register-email-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "สมัครคอร์ส", url: "/th/register-email-th/" },
        ]}
      />
      <Breadcrumb items={[{ label: "หน้าแรก", href: "/th/hometh/" }, { label: "สมัครคอร์สปฏิบัติธรรม" }]} />

      <div className="relative bg-brand-dark px-4 py-20">
        <img
          src={siteConfig.images.hero}
          alt="สมัครคอร์ส"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-3xl font-bold text-white md:text-4xl">
            สมัครคอร์สปฏิบัติธรรม
          </h1>
          <p className="mt-4 font-thai text-lg text-white/70">
            คอร์สอบรมทุกคอร์สดำเนินงานโดยมูลนิธิฯ ผู้เข้ารับการอบรมไม่เสียค่าใช้จ่ายใดๆ ทั้งสิ้น
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="font-serif text-2xl font-bold text-brand-dark">
          คอร์สที่เปิดรับสมัคร
        </h2>

        <div className="mt-8 space-y-6">
          {courseTypes.map((course) => (
            <div
              key={course.name}
              className="rounded-xl border border-brand-gold-100/50 bg-white p-6 shadow-sm"
            >
              <h3 className="font-serif text-lg font-bold text-brand-dark">
                {course.name}
              </h3>
              <p className="mt-1 text-sm text-brand-gold-600">{course.duration}</p>
              <p className="mt-2 font-thai text-sm text-brand-text-secondary">
                {course.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-brand-cream p-8">
          <h2 className="font-serif text-2xl font-bold text-brand-dark">
            ขั้นตอนการสมัคร
          </h2>
          <div className="mt-6 space-y-4">
            {[
              "เลือกคอร์สและสถานที่ที่ต้องการ",
              "กรอกข้อมูลสมัครผ่านแบบฟอร์มออนไลน์",
              "รอการยืนยันจากทีมงาน",
              "เตรียมตัวตามคำแนะนำที่ได้รับ",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-nature-500" />
                <p className="font-thai text-base text-brand-text-secondary">
                  {i + 1}. {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-thai text-sm text-brand-text-muted">
            สอบถามเพิ่มเติม: {siteConfig.contact.phone.join(", ")} | {siteConfig.contact.email}
          </p>
          <Button className="mt-6" size="lg" asChild>
            <Link to={PAGE_URL_MAP["course-schedule"]?.th ?? "#"}>
              ดูตารางคอร์สทั้งหมด
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
