import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { getPosts } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { PostListPage } from "~/components/PostListPage";

const searchSchema = z.object({
  page: z.coerce.number().min(1).optional().default(1),
});

export const Route = createFileRoute("/$lang/experience-th")({
  validateSearch: searchSchema,
  loader: async ({ params, search }) => {
    return getPosts("experience", params.lang, search.page);
  },
  component: ExperienceThPage,
});

function ExperienceThPage() {
  const { lang } = Route.useParams();
  const loaderData = Route.useLoaderData();

  return (
    <>
      <SeoHead
        title="ประสบการณ์จากผู้ปฏิบัติ - โพธิธรรมญาณสถาน"
        canonical="/th/experience-th/"
        alternateUrls={{ th: "/th/experience-th/", en: "/en/experience-en/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "ประสบการณ์จากผู้ปฏิบัติ", url: "/th/experience-th/" },
        ]}
      />
      <PostListPage
        category="experience"
        lang={lang}
        basePath="/th/experience-th"
        data={loaderData}
      />
    </>
  );
}
