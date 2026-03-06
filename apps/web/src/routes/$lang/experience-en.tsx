import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { getPosts } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { PostListPage } from "~/components/PostListPage";

const searchSchema = z.object({
  page: z.coerce.number().min(1).optional().default(1),
});

export const Route = createFileRoute("/$lang/experience-en")({
  validateSearch: searchSchema,
  loader: async ({ params, search }) => {
    return getPosts("experience", params.lang, search.page);
  },
  component: ExperienceEnPage,
});

function ExperienceEnPage() {
  const { lang } = Route.useParams();
  const loaderData = Route.useLoaderData();

  return (
    <>
      <SeoHead
        title="Experience & Testimonials - Bodhi Dhammayan Retreat"
        canonical="/en/experience-en/"
        alternateUrls={{ th: "/th/experience-th/", en: "/en/experience-en/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Experience & Testimonials", url: "/en/experience-en/" },
        ]}
      />
      <PostListPage
        category="experience"
        lang={lang}
        basePath="/en/experience-en"
        data={loaderData}
      />
    </>
  );
}
