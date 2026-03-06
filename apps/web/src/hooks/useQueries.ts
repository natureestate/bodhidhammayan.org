import { useQuery } from "@tanstack/react-query";
import type { Language } from "@bodhidhammayan/api-client";
import {
  getHomePage,
  getPosts,
  getPostBySlug,
  getCourses,
  getLocations,
  getBooks,
  getFaqs,
  getSiteSettings,
} from "@bodhidhammayan/api-client";

export function useHomePage(lang: Language) {
  return useQuery({
    queryKey: ["homePage", lang],
    queryFn: () => getHomePage(lang),
  });
}

export function usePosts(category: string, lang: Language, page = 1) {
  return useQuery({
    queryKey: ["posts", category, lang, page],
    queryFn: () => getPosts(category, lang, page),
  });
}

export function usePost(slug: string, lang: Language) {
  return useQuery({
    queryKey: ["post", slug, lang],
    queryFn: () => getPostBySlug(slug, lang),
    enabled: !!slug,
  });
}

export function useCourses(lang: Language) {
  return useQuery({
    queryKey: ["courses", lang],
    queryFn: () => getCourses(lang),
  });
}

export function useLocations(lang: Language) {
  return useQuery({
    queryKey: ["locations", lang],
    queryFn: () => getLocations(lang),
  });
}

export function useBooks(lang: Language) {
  return useQuery({
    queryKey: ["books", lang],
    queryFn: () => getBooks(lang),
  });
}

export function useFaqs(lang: Language) {
  return useQuery({
    queryKey: ["faqs", lang],
    queryFn: () => getFaqs(lang),
  });
}

export function useSiteSettings() {
  return useQuery({
    queryKey: ["siteSettings"],
    queryFn: getSiteSettings,
    staleTime: 5 * 60 * 1000,
  });
}
