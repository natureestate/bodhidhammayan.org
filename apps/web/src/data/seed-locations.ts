export interface Location {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  shortName: string;
  shortNameEn: string;
  district: string;
  province: string;
  courseUrl: string;
  image: string;
  description: string;
  descriptionEn: string;
  facebook: string;
  coursesAvailable: string[];
}

export const locations: Location[] = [
  {
    id: "loc-bangkok",
    slug: "bangkok",
    name: "ห้องภาวนามูลนิธิโนอิ้ง บุดด้า",
    nameEn: "Meditation Room, Knowing Buddha Foundation",
    shortName: "มูลนิธิฯ อ่อนนุช กรุงเทพฯ",
    shortNameEn: "On Nut Foundation, Bangkok",
    district: "อ่อนนุช",
    province: "กรุงเทพฯ",
    courseUrl: "https://bodhidhammayan.org/course-bangkok-th",
    image: "/images/locations/bangkok.webp",
    description:
      "มูลนิธิโนอิ้ง บุดด้าฯ เปิดห้องภาวนาไว้สำหรับผู้ที่สนใจเรียนรู้การปฏิบัติสมาธิขั้นต้น ได้เรียนสมาธิอานาปานสติ 1 วัน ตั้งแต่เวลา 8.15-17.30 น. โดยไม่คิดค่าใช้จ่ายใดๆ สอนโดยพระภิกษุและอาจารย์ผู้ช่วยสอน 2 ภาษา ไทย-อังกฤษ",
    descriptionEn:
      "Knowing Buddha Foundation opens a meditation room for those interested in basic meditation. One-day Anapanasati course from 8:15 AM to 5:30 PM, free of charge. Taught by monks and assistant teachers in Thai and English.",
    facebook: "KnowingBuddha",
    coursesAvailable: ["course-jtm"],
  },
  {
    id: "loc-saraburi",
    slug: "saraburi",
    name: "โพธิธรรมญาณสถานเตชะชัยสิทธิ",
    nameEn: "Bodhidhammayan Tejachaisit Retreat, Saraburi",
    shortName: "แก่งคอย สระบุรี",
    shortNameEn: "Kaeng Khoi, Saraburi",
    district: "อ.แก่งคอย",
    province: "จ.สระบุรี",
    courseUrl: "https://bodhidhammayan.org/course-saraburi-th",
    image: "/images/locations/saraburi.webp",
    description:
      "ตั้งอยู่ที่ ตำบลพระพุทธบาทน้อย อำเภอแก่งคอย จังหวัดสระบุรี ณ เชิงเขาพระพุทธบาทน้อยอันศักดิ์สิทธิ์ เป็นที่สงบ สัปปายะ เพื่อการมุ่งหวังสู่มรรคผลนิพพาน สอนการปฏิบัติสมาธิอานาปานสติ และวิปัสสนากรรมฐาน ตามหลักสติปัฏฐานสี่ เปิดอบรมครั้งแรกในวันที่ 25 มกราคม พ.ศ. 2554",
    descriptionEn:
      "Located at the foot of the sacred Phra Phutthabat Noi mountain in Kaeng Khoi, Saraburi. A serene retreat for Anapanasati and Vipassana meditation based on Satipatthana. First opened on January 25, 2011.",
    facebook: "BodhidhammayanRetreat",
    coursesAvailable: ["course-jtm", "course-anapanasati", "course-vipassana"],
  },
  {
    id: "loc-hatyai",
    slug: "hatyai",
    name: "โพธิธรรมญาณสถาน หาดใหญ่",
    nameEn: "Bodhidhammayan Hat Yai Retreat",
    shortName: "หาดใหญ่ สงขลา",
    shortNameEn: "Hat Yai, Songkhla",
    district: "อ.หาดใหญ่",
    province: "จ.สงขลา",
    courseUrl: "https://bodhidhammayan.org/course-hatyai-th",
    image: "/images/locations/hatyai.webp",
    description:
      "ตั้งอยู่ที่ บ้านโป๊ะหมอ ตำบลบ้านพรุ อำเภอหาดใหญ่ จังหวัดสงขลา ดร.ไพร พัฒโน อดีตนายกเทศมนตรีเทศบาลนครหาดใหญ่ ได้บริจาคที่ดินประมาณ 5 ไร่ และสิ่งปลูกสร้าง เมื่อปี พ.ศ.2561 เพื่อเป็นสถานปฏิบัติธรรมให้ผู้ปรารถนาการหลุดพ้นในภาคใต้",
    descriptionEn:
      "Located in Ban Po Mo, Ban Phru, Hat Yai, Songkhla. Dr. Prai Pattano donated approximately 5 rai of land in 2018 as a meditation retreat for those seeking liberation in southern Thailand.",
    facebook: "BodhidhammayanHatyai",
    coursesAvailable: ["course-jtm", "course-anapanasati", "course-vipassana"],
  },
  {
    id: "loc-phuket",
    slug: "phuket",
    name: "โพธิธรรมญาณสถานเตชะชัยสิทธิ ภูเก็ต",
    nameEn: "Bodhidhammayan Tejachaisit Retreat, Phuket",
    shortName: "ภูเก็ต",
    shortNameEn: "Phuket",
    district: "อ.ถลาง",
    province: "จ.ภูเก็ต",
    courseUrl: "https://bodhidhammayan.org/course-phuket-th",
    image: "/images/locations/phuket.webp",
    description:
      "สถานปฏิบัติธรรมตั้งอยู่ท่ามกลางธรรมชาติอันเงียบสงบใน อ.ถลาง จ.ภูเก็ต ออกแบบมาเพื่อรองรับผู้ปฏิบัติชาวไทยและชาวต่างชาติ เปิดสอนคอร์สแรกเดือนมกราคม พ.ศ. 2568 ดำเนินการสอนทั้งภาษาไทยและภาษาอังกฤษ โดยไม่มีค่าใช้จ่ายใดๆ",
    descriptionEn:
      "A retreat center nestled in the tranquil nature of Thalang, Phuket. Designed for both Thai and international practitioners. First course opened in January 2025, taught in Thai and English, free of charge.",
    facebook: "BodhiDhammayanRetreatPhuket",
    coursesAvailable: ["course-jtm", "course-anapanasati"],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
