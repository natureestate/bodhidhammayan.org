export { siteConfig, master } from "./seed-site";
export { courses, getCourseBySlug } from "./seed-courses";
export type { Course } from "./seed-courses";
export { locations, getLocationBySlug } from "./seed-locations";
export type { Location } from "./seed-locations";
export {
  testimonials,
  getRecentTestimonials,
} from "./seed-testimonials";
export type { Testimonial } from "./seed-testimonials";
export { books } from "./seed-books";
export type { Book } from "./seed-books";
export { faqs } from "./seed-faq";
export type { FAQ } from "./seed-faq";
export {
  seedPosts,
  getPostsByCategory,
  getPostBySlug,
  getRecentPosts,
} from "./seed-posts";
export type { SeedPost } from "./seed-posts";
