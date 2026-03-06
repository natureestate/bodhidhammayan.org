export interface Course {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  duration: string;
  durationEn: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
}

export const courses: Course[] = [
  {
    id: "course-jtm",
    slug: "journey-to-the-mind",
    title: "การเดินทางสู่จิตใจ",
    titleEn: "Journey to the Mind",
    duration: "คอร์ส 1 วัน และ 3 วัน 2 คืน",
    durationEn: "1-day and 3-day (2 nights) courses",
    description:
      "คอร์สสำหรับผู้เริ่มต้น เรียนรู้พื้นฐานการฝึกสติและสมาธิ ค้นพบศักยภาพภายในจิตใจ ผ่านการฝึกปฏิบัติอย่างเป็นระบบ",
    level: "beginner",
  },
  {
    id: "course-anapanasati",
    slug: "anapanasati",
    title: "สมาธิอานาปานสติ",
    titleEn: "Anapanasati and Journey to the Mind",
    duration: "คอร์ส 4 วัน 3 คืน",
    durationEn: "4-day (3 nights) course",
    description:
      "ฝึกสมาธิอานาปานสติ หลักการเพ่งดูลมหายใจเข้าออกอย่างเป็นธรรมชาติเพื่อทำให้จิตสงบ ทำให้จิตมีกำลังสติ สมาธิ ความจำดี การทำงานมีประสิทธิภาพ",
    level: "intermediate",
  },
  {
    id: "course-vipassana",
    slug: "vipassana",
    title: "วิปัสสนากรรมฐาน สติปัฏฐานสี่",
    titleEn: "Vipassana Advanced Meditation",
    duration: "คอร์ส 8 วัน 7 คืน",
    durationEn: "8-day (7 nights) course",
    description:
      "การภาวนาขั้นสูง มีจุดหมายเพื่อการพ้นทุกข์ โดยการชำระกิเลสความโลภ โกรธ หลง ด้วยเทคนิคเตโชวิปัสสนา การจุดธาตุไฟในกายมาเผากิเลส อานิสงส์สูงสุดถึงขั้นนิพพาน",
    level: "advanced",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
