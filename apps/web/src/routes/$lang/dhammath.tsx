import { createFileRoute } from "@tanstack/react-router";
import { getPosts } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Breadcrumb } from "~/components/Breadcrumb";
import { PostListPage } from "~/components/PostListPage";

export const Route = createFileRoute("/$lang/dhammath")({
  loader: async ({ params }) => {
    return getPosts("dhamma", params.lang, 1);
  },
  component: DhammaThPage,
});

function DhammaThPage() {
  const { lang } = Route.useParams();
  const loaderData = Route.useLoaderData();

  return (
    <>
      <SeoHead
        title="รวมธรรมคำสอน - โพธิธรรมญาณสถาน"
        canonical="/th/dhammath/"
        alternateUrls={{ th: "/th/dhammath/", en: "/en/dhammaen/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "รวมธรรมคำสอน", url: "/th/dhammath/" },
        ]}
      />
      <Breadcrumb items={[{ label: "หน้าแรก", href: "/th/hometh/" }, { label: "รวมธรรมคำสอน" }]} />
      <PostListPage
        category="dhamma"
        lang={lang}
        basePath="/th/dhammath"
        data={loaderData}
      />
    </>
  );
}
