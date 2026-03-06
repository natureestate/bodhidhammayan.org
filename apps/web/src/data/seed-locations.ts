export interface Location {
  id: string;
  slug: string;
  name: string;
  nameEn: string;
  shortName: string;
  district: string;
  province: string;
  courseUrl: string;
}

export const locations: Location[] = [
  {
    id: "loc-saraburi",
    slug: "saraburi",
    name: "โพธิธรรมญาณสถาน สระบุรี",
    nameEn: "Bodhidhammayan Saraburi",
    shortName: "แก่งคอย สระบุรี",
    district: "อ.แก่งคอย",
    province: "จ.สระบุรี",
    courseUrl: "https://bodhidhammayan.org/course-saraburi-th",
  },
  {
    id: "loc-phuket",
    slug: "phuket",
    name: "โพธิธรรมญาณสถาน ภูเก็ต",
    nameEn: "Bodhidhammayan Phuket",
    shortName: "ภูเก็ต",
    district: "",
    province: "จ.ภูเก็ต",
    courseUrl: "https://bodhidhammayan.org/course-phuket-th",
  },
  {
    id: "loc-hatyai",
    slug: "hatyai",
    name: "โพธิธรรมญาณสถาน หาดใหญ่",
    nameEn: "Bodhidhammayan Hat Yai",
    shortName: "หาดใหญ่ สงขลา",
    district: "อ.หาดใหญ่",
    province: "จ.สงขลา",
    courseUrl: "https://bodhidhammayan.org/course-hatyai-th",
  },
  {
    id: "loc-bangkok",
    slug: "bangkok",
    name: "ห้องภาวนามูลนิธิฯ",
    nameEn: "Meditation Room, Foundation Office",
    shortName: "อ่อนนุช กรุงเทพฯ",
    district: "อ่อนนุช",
    province: "กรุงเทพฯ",
    courseUrl: "https://bodhidhammayan.org/course-bangkok-th",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
