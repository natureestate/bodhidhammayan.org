import { createFileRoute } from "@tanstack/react-router";
import { getPosts } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { Breadcrumb } from "~/components/Breadcrumb";
import { BreadcrumbLd } from "~/components/JsonLd";
import { PostListPage } from "~/components/PostListPage";

export const Route = createFileRoute("/$lang/newsen")({
  loader: async ({ params }) => {
    return getPosts("news", params.lang, 1);
  },
  component: NewsEnPage,
});

function NewsEnPage() {
  const { lang } = Route.useParams();
  const loaderData = Route.useLoaderData();

  return (
    <>
      <SeoHead
        title="News & Updates - Bodhi Dhammayan Retreat"
        canonical="/en/newsen/"
        alternateUrls={{ th: "/th/newsth/", en: "/en/newsen/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "News & Updates", url: "/en/newsen/" },
        ]}
      />
      <Breadcrumb items={[{ label: "Home", href: "/en/homeen/" }, { label: "News & Updates" }]} />
      <PostListPage
        category="news"
        lang={lang}
        basePath="/en/newsen"
        data={loaderData}
      />
    </>
  );
}
