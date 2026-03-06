import type { Language } from "./zod-schemas";
import th from "./translations/th.json";
import en from "./translations/en.json";

const translations: Record<Language, Record<string, string>> = { th, en };

export function t(lang: Language, key: string): string {
  return translations[lang]?.[key] ?? key;
}

export function getAlternateLanguage(lang: Language): Language {
  return lang === "th" ? "en" : "th";
}

export function getLanguageFromPath(path: string): Language {
  if (path.startsWith("/en")) return "en";
  return "th";
}

export const SUPPORTED_LANGUAGES: Language[] = ["th", "en"];

export const LANGUAGE_NAMES: Record<Language, string> = {
  th: "ไทย",
  en: "English",
};

export const HREFLANG_MAP: Record<Language, string> = {
  th: "th",
  en: "en",
};

type UrlPair = { th: string; en: string };

export const PAGE_URL_MAP: Record<string, UrlPair> = {
  home: { th: "/th/hometh/", en: "/en/homeen/" },
  about: { th: "/th/about-us-th/", en: "/en/about-us-en/" },
  master: { th: "/th/masterth/", en: "/en/masteren/" },
  dhamma: { th: "/th/dhammath/", en: "/en/dhammaen/" },
  news: { th: "/th/newsth/", en: "/en/newsen/" },
  experience: { th: "/th/experience-th/", en: "/en/experience-en/" },
  place: { th: "/th/placeth/", en: "/en/placeen/" },
  "course-saraburi": {
    th: "/th/course-saraburi-th/",
    en: "/en/course-saraburi-en/",
  },
  "course-phuket": {
    th: "/th/course-phuket-th/",
    en: "/en/course-phuket-en/",
  },
  "course-hatyai": {
    th: "/th/course-hatyai-th/",
    en: "/en/course-hatyai-en/",
  },
  "course-bangkok": {
    th: "/th/course-bangkok-th/",
    en: "/en/course-bangkok-en/",
  },
  "home-saraburi": {
    th: "/th/home-saraburi-th/",
    en: "/en/home-saraburi-en/",
  },
  "home-phuket": { th: "/th/home-phuket-th/", en: "/en/home-phuket-en/" },
  "home-hatyai": { th: "/th/home-hatyai-th/", en: "/en/home-hatyai-en/" },
  "home-bangkok": {
    th: "/th/home-bangkok-th/",
    en: "/en/home-bangkok-en/",
  },
  "course-schedule": {
    th: "/th/type-of-courseand-schedule-th/",
    en: "/en/type-of-courseand-schedule-en/",
  },
  register: { th: "/th/register-email-th/", en: "/en/register-email-en/" },
};

export function getAlternateUrl(
  pageKey: string,
  currentLang: Language,
): string | undefined {
  const pair = PAGE_URL_MAP[pageKey];
  if (!pair) return undefined;
  const alt = getAlternateLanguage(currentLang);
  return pair[alt];
}
