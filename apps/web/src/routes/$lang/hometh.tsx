import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd, FaqLd } from "~/components/JsonLd";
import { HeroSection } from "~/components/sections/HeroSection";
import { CourseTypesSection } from "~/components/sections/CourseTypesSection";
import { LocationsSection } from "~/components/sections/LocationsSection";
import { ExperienceSection } from "~/components/sections/ExperienceSection";
import { DhammaSection } from "~/components/sections/DhammaSection";
import { NewsSection } from "~/components/sections/NewsSection";
import { FounderSection } from "~/components/sections/FounderSection";
import { BooksSection } from "~/components/sections/BooksSection";
import { FaqSection } from "~/components/sections/FaqSection";
import { DonationSection } from "~/components/sections/DonationSection";

export const Route = createFileRoute("/$lang/hometh")({
  head: () => ({
    meta: [
      {
        title:
          "โพธิธรรมญาณสถาน-สถานปฏิบัติธรรมในไทย พบความสงบภายในที่แท้จริง",
      },
    ],
  }),
  component: HomeThPage,
});

function HomeThPage() {
  return (
    <>
      <SeoHead
        title="โพธิธรรมญาณสถาน-สถานปฏิบัติธรรมในไทย พบความสงบภายในที่แท้จริง"
        description="สถานปฏิบัติธรรมอานาปานสติ และวิปัสสนากรรมฐาน ตามหลักสติปัฏฐานสี่ อบรมฟรี ดำเนินการโดยมูลนิธิโนอิ้ง บุดด้าฯ และมูลนิธิโรงเรียนแห่งชีวิต"
        canonical="/th/hometh/"
        alternateUrls={{ th: "/th/hometh/", en: "/en/homeen/" }}
      />
      <BreadcrumbLd
        items={[{ name: "หน้าแรก", url: "/th/hometh/" }]}
      />
      <FaqLd
        items={[
          {
            question: "สมาธิ กับวิปัสสนาต่างกันอย่างไร?",
            answer:
              "การปฏิบัติสมาธิ คือการฝึกจิตให้ตั้งมั่นอยู่ในอารมณ์เดียว ส่วนวิปัสสนากรรมฐาน เป็นการภาวนาขั้นสูง มีจุดหมายเพื่อการพ้นทุกข์",
          },
          {
            question:
              "ทำไมต้องออกปฏิบัติธรรมที่วัดหรือธรรมสถาน ปฏิบัติอยู่ที่บ้านไม่ได้หรือ?",
            answer:
              "การปฏิบัติเองที่บ้านโดยไม่มีครูบาอาจารย์ จะขาดผู้ชี้ทางและจิตจะขาดพลัง การออกปฏิบัติธรรมเพียงปีละครั้ง จะทำให้ได้พบทางอันประเสริฐ",
          },
          {
            question: "ทำไมต้องปฏิบัติธรรม เสียเวลาทำมาหากิน?",
            answer:
              "การปฏิบัติธรรมเพื่อยกจิตใจให้บริสุทธิ์ พ้นจากกิเลส เป็นการเพิ่มคุณค่าให้แก่ชีวิต",
          },
          {
            question: "ภาวะหมดบุญคืออะไร?",
            answer:
              "การที่คนเรามาเกิดได้ ก็ด้วยแรงส่งของบุญกุศลและบาป หากทำบุญมามากก็จะทำให้เกิดมามีพื้นฐานชีวิตดี",
          },
        ]}
      />

      <HeroSection lang="th" />
      <CourseTypesSection lang="th" />
      <LocationsSection lang="th" />
      <ExperienceSection lang="th" />
      <DhammaSection lang="th" />
      <NewsSection lang="th" />
      <FounderSection lang="th" />
      <BooksSection lang="th" />
      <FaqSection lang="th" />
      <DonationSection lang="th" />
    </>
  );
}
