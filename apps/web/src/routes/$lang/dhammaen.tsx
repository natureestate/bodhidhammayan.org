import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { getPosts } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { PostListPage } from "~/components/PostListPage";

const searchSchema = z.object({
  page: z.coerce.number().min(1).optional().default(1),
});

export const Route = createFileRoute("/$lang/dhammaen")({
  validateSearch: searchSchema,
  loader: async ({ params, search }) => {
    return getPosts("dhamma", params.lang, search.page);
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
      <PostListPage
        category="dhamma"
        lang={lang}
        basePath="/en/dhammaen"
        data={loaderData}
      />
    </>
  );
}
