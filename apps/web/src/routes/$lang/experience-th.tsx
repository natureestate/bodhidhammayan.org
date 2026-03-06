import { createFileRoute } from "@tanstack/react-router";
import { getPosts } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { PostListPage } from "~/components/PostListPage";

export const Route = createFileRoute("/$lang/experience-th")({
  loader: async ({ params }) => {
    return getPosts("experience", params.lang, 1);
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
