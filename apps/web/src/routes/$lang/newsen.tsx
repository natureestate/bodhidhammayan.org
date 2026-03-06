import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { getPosts } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { PostListPage } from "~/components/PostListPage";

const searchSchema = z.object({
  page: z.coerce.number().min(1).optional().default(1),
});

export const Route = createFileRoute("/$lang/newsen")({
  validateSearch: searchSchema,
  loader: async ({ params, search }) => {
    return getPosts("news", params.lang, search.page);
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
      <PostListPage
        category="news"
        lang={lang}
        basePath="/en/newsen"
        data={loaderData}
      />
    </>
  );
}
