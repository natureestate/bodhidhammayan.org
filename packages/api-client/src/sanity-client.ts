import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID ?? "";
const dataset = process.env.SANITY_DATASET ?? "production";

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2026-03-06",
      useCdn: true,
    })
  : null;

export function sanityImageUrl(ref: string): string {
  const pid = process.env.SANITY_PROJECT_ID ?? "";
  const ds = process.env.SANITY_DATASET ?? "production";
  const [, id, dimensions, format] = ref.split("-");
  return `https://cdn.sanity.io/images/${pid}/${ds}/${id}-${dimensions}.${format}`;
}
