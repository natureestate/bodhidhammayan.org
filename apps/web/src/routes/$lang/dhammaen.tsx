import { createFileRoute } from "@tanstack/react-router";
import { getPosts } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { Breadcrumb } from "~/components/Breadcrumb";
import { BreadcrumbLd } from "~/components/JsonLd";
import { PostListPage } from "~/components/PostListPage";

export const Route = createFileRoute("/$lang/dhammaen")({
  loader: async ({ params }) => {
    return getPosts("dhamma", params.lang, 1);
  },
  component: DhammaEnPage,
});

function DhammaEnPage() {
  const { lang } = Route.useParams();
  const loaderData = Route.useLoaderData();

  return (
    <>
      <SeoHead
        title="Dhamma Teaching - Bodhi Dhammayan Retreat"
        canonical="/en/dhammaen/"
        alternateUrls={{ th: "/th/dhammath/", en: "/en/dhammaen/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Dhamma Teaching", url: "/en/dhammaen/" },
        ]}
      />
      <Breadcrumb items={[{ label: "Home", href: "/en/homeen/" }, { label: "Dhamma Teachings" }]} />
      <PostListPage
        category="dhamma"
        lang={lang}
        basePath="/en/dhammaen"
        data={loaderData}
      />
    </>
  );
}
