export interface Course {
  id: string;
  slug: string;
  title: string;
  titleEn: string;
  duration: string;
  durationEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  ageRange: string;
  level: "beginner" | "intermediate" | "advanced";
  activities: string[];
  activitiesEn: string[];
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
      "เป็นคอร์สฝึกสติและสมาธิ ปรับสมดุล เพื่อค้นพบความสุขจากภายใน เติมพลังชีวิตและความสำเร็จ ดูแลจิตใจ ให้อายุยืนยาว",
    descriptionEn:
      "A mindfulness and meditation course to find inner happiness, recharge your life energy, and nurture mental well-being for longevity.",
    image: "/images/courses/journey-to-the-mind.webp",
    ageRange: "16–80 ปี",
    level: "beginner",
    activities: [
      "เรียนรู้และเข้าใจเรื่องพลังจิตและพลังกาย",
      "ฝึกสติ เพื่อความตื่นรู้ ด้วยกิจกรรมเคลื่อนไหว",
      "ฝึกนั่งสมาธิอานาปานสติ ให้เกิดพลังจิต",
      "ฝึกเดินจงกรมลับสติ และถ่ายเทกระแสลบออกจากร่างกาย",
      "ฝึกอ่านหนังสือ เพิ่มพลังโฟกัส แก้ปัญหาสมาธิสั้น",
      "ฟังธรรมเพื่อเป็นบุญกุศล ให้ข้อคิดและเกิดแรงบันดาลใจ",
      "สื่อสารกับจิตไร้สำนึกผ่านพลังของสี",
      "การปรับมายด์เซ็ท เพิ่มพลังบวก ฝึกการส่งกระแสจิต",
      "ปลูกต้นไม้ด้วยความรัก Tree Planting with Love",
      "นั่งสมาธิแผ่กระแสความรักความเมตตา Loving Kindness Meditation ยามค่ำคืนกับแสงเทียนที่ใต้ต้นโพธิ์",
    ],
    activitiesEn: [
      "Learn about mind energy and body energy",
      "Mindfulness training through movement activities",
      "Anapanasati sitting meditation for mental power",
      "Walking meditation to release negative energy",
      "Reading practice to improve focus",
      "Dhamma listening for inspiration",
      "Communicate with the subconscious through color energy",
      "Mindset adjustment and positive energy training",
      "Tree Planting with Love",
      "Loving Kindness Meditation under candlelight beneath the Bodhi tree",
    ],
  },
  {
    id: "course-anapanasati",
    slug: "anapanasati",
    title: "สมาธิอานาปานสติ",
    titleEn: "Anapanasati and Journey to the Mind",
    duration: "คอร์ส 4 วัน 3 คืน",
    durationEn: "4-day (3 nights) course",
    description:
      "เป็นคอร์สฝึกสติและสมาธิ ปรับสมดุล เพื่อค้นพบความสุขจากภายใน มีชั่วโมงการปฏิบัติสมาธิที่เพิ่มมากขึ้นในวันท้ายๆ เพื่อเพิ่มพลังจิตและทักษะ ไปสู่การปฏิบัติธรรมขั้นสูง",
    descriptionEn:
      "An intensive mindfulness and meditation course with increasing practice hours to build mental strength and skills for advanced Vipassana practice.",
    image: "/images/courses/anapanasati.webp",
    ageRange: "20–80 ปี",
    level: "intermediate",
    activities: [
      "เรียนรู้และเข้าใจเรื่องพลังจิตและพลังกาย",
      "ฝึกสติ เพื่อความตื่นรู้ ด้วยกิจกรรมเคลื่อนไหว",
      "ฝึกนั่งสมาธิอานาปานสติ ให้เกิดพลังจิต",
      "ฝึกเดินจงกรมลับสติ เพิ่มพลังการโฟกัส รับพลังธรรมชาติ",
      "ฝึกการอ่านหนังสือ แก้ปัญหาสมาธิสั้น",
      "ฟังธรรมเพื่อเป็นบุญกุศล ให้ข้อคิดและเกิดแรงบันดาลใจ",
      "สื่อสารกับจิตไร้สำนึกผ่านงานศิลปะ",
      "เรียนรู้หลักการตั้งจิตอธิษฐานให้สัมฤทธิ์ผล",
      "ปลูกต้นไม้ด้วยความรัก Tree Planting with Love",
      "นั่งสมาธิแผ่กระแสความรักความเมตตา Loving Kindness Meditation ยามค่ำคืนกับแสงเทียนที่ใต้ต้นโพธิ์",
    ],
    activitiesEn: [
      "Learn about mind energy and body energy",
      "Mindfulness training through movement activities",
      "Anapanasati sitting meditation for mental power",
      "Walking meditation for focus and nature energy",
      "Reading practice to improve attention span",
      "Dhamma listening for inspiration",
      "Communicate with the subconscious through art",
      "Learn the principles of effective intention setting",
      "Tree Planting with Love",
      "Loving Kindness Meditation under candlelight beneath the Bodhi tree",
    ],
  },
  {
    id: "course-vipassana",
    slug: "vipassana",
    title: "วิปัสสนากรรมฐาน สติปัฏฐานสี่",
    titleEn: "Vipassana Advanced Meditation",
    duration: "คอร์ส 8 วัน 7 คืน",
    durationEn: "8-day (7 nights) course",
    description:
      "เป็นคอร์สวิปัสสนาขั้นสูง เป็นการฝึกตนอย่างเข้มข้น มีเป้าหมายเพื่อการชำระกิเลส เพื่อความรู้แจ้ง และให้มีพลังเผาวิบาก และเกิดเป็นพลังบุญกุศลสูงสุด",
    descriptionEn:
      "An advanced Vipassana course with intensive practice aimed at purifying defilements, gaining insight, and generating the highest merit.",
    image: "/images/courses/vipassana.webp",
    ageRange: "20–75 ปี",
    level: "advanced",
    activities: [
      "การฝึกตนอย่างเข้มข้นเพื่อการชำระกิเลส",
      "ปฏิบัติวิปัสสนากรรมฐานตามหลักสติปัฏฐานสี่",
      "เผากิเลสด้วยเทคนิคเตโชวิปัสสนา",
      "สวดมนต์ใหญ่ พระคาถาชินบัญชร",
      "สมาธิอานาปานสติขั้นสูง",
      "แก้ไขภาวะจิตซึมเศร้า Depression ได้อย่างทรงพลัง",
    ],
    activitiesEn: [
      "Intensive self-training for purifying defilements",
      "Vipassana meditation based on Satipatthana",
      "Burning defilements through Tejo Vipassana technique",
      "Grand chanting of Chinabanchorn prayer",
      "Advanced Anapanasati meditation",
      "Powerful remedy for depression",
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
