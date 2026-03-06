import { createFileRoute } from "@tanstack/react-router";
import { getPosts } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { PostListPage } from "~/components/PostListPage";

export const Route = createFileRoute("/$lang/newsth")({
  loader: async ({ params }) => {
    return getPosts("news", params.lang, 1);
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
