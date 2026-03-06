export interface Book {
  id: string;
  title: string;
  titleEn?: string;
  year?: number;
  author: string;
}

export const books: Book[] = [
  {
    id: "book-01",
    title: "ตื่นจากมายา ณ 2024",
    titleEn: "Awakening from Illusion 2024",
    year: 2024,
    author: "อาจารย์อัจฉราวดี วงศ์สกล",
  },
  {
    id: "book-02",
    title: "มหันตภัยโลกร้อน กับความจริงที่ไม่มีใครพูดถึง",
    titleEn: "Global Warming Crisis and the Truth No One Talks About",
    author: "อาจารย์อัจฉราวดี วงศ์สกล",
  },
  {
    id: "book-03",
    title: "ฆราวาสบรรลุธรรม 2",
    titleEn: "Lay People Achieving Enlightenment 2",
    author: "อาจารย์อัจฉราวดี วงศ์สกล",
  },
  {
    id: "book-04",
    title: "ฆราวาสบรรลุธรรม",
    titleEn: "Lay People Achieving Enlightenment",
    author: "อาจารย์อัจฉราวดี วงศ์สกล",
  },
  {
    id: "book-05",
    title: "สิ้นชาติ ขาดภพ",
    titleEn: "End of Birth, End of Existence",
    author: "อาจารย์อัจฉราวดี วงศ์สกล",
  },
  {
    id: "book-06",
    title: "รู้แล้วลุย",
    titleEn: "Know and Go",
    author: "อาจารย์อัจฉราวดี วงศ์สกล",
  },
  {
    id: "book-07",
    title: "วิปัสสนา…ฆ่ากิเลส",
    titleEn: "Vipassana: Destroying Defilements",
    author: "อาจารย์อัจฉราวดี วงศ์สกล",
  },
  {
    id: "book-08",
    title: "เตโชวิปัสสนา เปิดประตูนิพพาน",
    titleEn: "Techo Vipassana: Opening the Door to Nirvana",
    author: "อาจารย์อัจฉราวดี วงศ์สกล",
  },
  {
    id: "book-09",
    title: "มีศีล..ก่อนจะสาย",
    titleEn: "Have Morality Before It's Too Late",
    author: "อาจารย์อัจฉราวดี วงศ์สกล",
  },
];
