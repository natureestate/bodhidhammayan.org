import { createFileRoute } from "@tanstack/react-router";
import { getPosts } from "@bodhidhammayan/api-client";
import { SeoHead } from "~/components/SeoHead";
import { Breadcrumb } from "~/components/Breadcrumb";
import { BreadcrumbLd } from "~/components/JsonLd";
import { PostListPage } from "~/components/PostListPage";

export const Route = createFileRoute("/$lang/experience-en")({
  loader: async ({ params }) => {
    return getPosts("experience", params.lang, 1);
  },
  component: ExperienceEnPage,
});

function ExperienceEnPage() {
  const { lang } = Route.useParams();
  const loaderData = Route.useLoaderData();

  return (
    <>
      <SeoHead
        title="Experience & Testimonials - Bodhi Dhammayan Retreat"
        canonical="/en/experience-en/"
        alternateUrls={{ th: "/th/experience-th/", en: "/en/experience-en/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Experience & Testimonials", url: "/en/experience-en/" },
        ]}
      />
      <Breadcrumb items={[{ label: "Home", href: "/en/homeen/" }, { label: "Experience & Testimonials" }]} />
      <PostListPage
        category="experience"
        lang={lang}
        basePath="/en/experience-en"
        data={loaderData}
      />
    </>
  );
}
