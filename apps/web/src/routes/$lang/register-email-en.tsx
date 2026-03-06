import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";

export const Route = createFileRoute("/$lang/register-email-en")({
  component: RegisterEmailEnPage,
});

function RegisterEmailEnPage() {
  return (
    <>
      <SeoHead
        title="Register - Bodhi Dhammayan Retreat"
        description="Register for meditation courses at Bodhi Dhammayan Retreat"
        canonical="/en/register-email-en/"
        alternateUrls={{
          th: "/th/register-email-th/",
          en: "/en/register-email-en/",
        }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "Register", url: "/en/register-email-en/" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-display text-3xl font-bold text-dharma-900">
          Register
        </h1>
        <p className="mt-4 text-dharma-600">
          Content will be fetched from Sanity CMS
        </p>
      </section>
    </>
  );
}
