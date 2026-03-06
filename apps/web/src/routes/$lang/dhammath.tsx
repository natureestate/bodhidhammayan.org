import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { getPosts } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { PostListPage } from "~/components/PostListPage";

const searchSchema = z.object({
  page: z.coerce.number().min(1).optional().default(1),
});

export const Route = createFileRoute("/$lang/dhammath")({
  validateSearch: searchSchema,
  loader: async ({ params, search }) => {
    return getPosts("dhamma", params.lang, search.page);
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
      <PostListPage
        category="dhamma"
        lang={lang}
        basePath="/th/dhammath"
        data={loaderData}
      />
    </>
  );
}
