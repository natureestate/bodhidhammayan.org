import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { getPosts } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { PostListPage } from "~/components/PostListPage";

const searchSchema = z.object({
  page: z.coerce.number().min(1).optional().default(1),
});

export const Route = createFileRoute("/$lang/newsth")({
  validateSearch: searchSchema,
  loader: async ({ params, search }) => {
    return getPosts("news", params.lang, search.page);
  },
  component: NewsThPage,
});

function NewsThPage() {
  const { lang } = Route.useParams();
  const loaderData = Route.useLoaderData();

  return (
    <>
      <SeoHead
        title="ข่าวสารอัพเดท - โพธิธรรมญาณสถาน"
        canonical="/th/newsth/"
        alternateUrls={{ th: "/th/newsth/", en: "/en/newsen/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "ข่าวสารอัพเดท", url: "/th/newsth/" },
        ]}
      />
      <PostListPage
        category="news"
        lang={lang}
        basePath="/th/newsth"
        data={loaderData}
      />
    </>
  );
}
