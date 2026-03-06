export interface Testimonial {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  date: string;
  excerpt: string;
  image: string;
  nationality?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-jtm",
    slug: "journey-to-the-mind-impression",
    name: "ความประทับใจในคอร์ส Journey to the Mind",
    nameEn: "Impressions from Journey to the Mind Course",
    date: "2025-09-25",
    excerpt:
      "ผู้เข้าอบรมแบ่งปันความประทับใจจากการเข้าร่วมคอร์ส Journey to the Mind ที่เปลี่ยนมุมมองชีวิตและค้นพบความสงบภายใน",
    image: "/images/testimonials/journey-to-mind-impression.webp",
  },
  {
    id: "testimonial-ong",
    slug: "experience-khun-ong",
    name: "ประสบการณ์ คุณอ๋อง",
    nameEn: "Experience of Khun Ong",
    date: "2025-02-19",
    excerpt:
      "คุณอ๋องแบ่งปันประสบการณ์การฝึกปฏิบัติสมาธิและวิปัสสนาที่โพธิธรรมญาณสถาน ที่เปลี่ยนแปลงชีวิตและมุมมองต่อโลก",
    image: "/images/testimonials/ong.webp",
  },
  {
    id: "testimonial-spiritual-exhibition",
    slug: "spiritual-life-exhibition",
    name: "ความประทับใจจากผู้มาเยี่ยมชมนิทรรศการ Spiritual Life Exhibition ที่วัดอรุณฯ",
    nameEn:
      "Impressions from Spiritual Life Exhibition visitors at Wat Arun",
    date: "2025-02-18",
    excerpt:
      "ผู้เข้าชมนิทรรศการ Spiritual Life Exhibition ณ วัดอรุณราชวรารามราชวรมหาวิหาร แบ่งปันความประทับใจในศิลปะและธรรมะ",
    image: "/images/testimonials/spiritual-life-exhibition.webp",
  },
  {
    id: "testimonial-dimple",
    slug: "experience-khun-dimple",
    name: "ประสบการณ์ คุณดิมเพิล",
    nameEn: "Experience of Dimple Agarwal",
    date: "2025-01-31",
    excerpt:
      "คุณดิมเพิล ชาวต่างชาติผู้มาฝึกปฏิบัติธรรมที่โพธิธรรมญาณสถาน แบ่งปันประสบการณ์อันน่าประทับใจจากการปฏิบัติวิปัสสนา",
    image: "/images/testimonials/dimple-agarwal.webp",
    nationality: "India",
  },
  {
    id: "testimonial-sith",
    slug: "experience-khun-sith",
    name: "ประสบการณ์ คุณสิทธิ์",
    nameEn: "Experience of Khun Sith",
    date: "2025-01-23",
    excerpt:
      "คุณสิทธิ์แบ่งปันการเปลี่ยนแปลงในชีวิตหลังจากฝึกปฏิบัติสมาธิและวิปัสสนากรรมฐานอย่างต่อเนื่อง",
    image: "/images/testimonials/sith.webp",
  },
  {
    id: "testimonial-betty",
    slug: "experience-khun-betty",
    name: "ประสบการณ์ คุณเบ็ตตี้",
    nameEn: "Experience of Betty",
    date: "2024-12-13",
    excerpt:
      "คุณเบ็ตตี้ นักบำบัดด้วยป่าจากสิงคโปร์ ค้นพบโพธิธรรมญาณสถานและได้ประสบการณ์วิปัสสนาที่เปลี่ยนชีวิต",
    image: "/images/testimonials/betty-singapore.webp",
    nationality: "Singapore",
  },
  {
    id: "testimonial-foreigners",
    slug: "first-meditation-foreigners",
    name: "ความประทับใจในการปฏิบัติธรรมครั้งแรกของชาวต่างชาติ",
    nameEn: "First Meditation Experience of Foreigners",
    date: "2024-04-02",
    excerpt:
      "ชาวต่างชาติหลายท่านแบ่งปันความประทับใจจากการเข้าร่วมปฏิบัติธรรมครั้งแรกที่โพธิธรรมญาณสถาน",
    image: "/images/testimonials/first-meditation-foreigners.webp",
  },
];

export function getRecentTestimonials(limit = 4): Testimonial[] {
  return [...testimonials]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
