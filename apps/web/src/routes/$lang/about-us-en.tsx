import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { siteConfig } from "~/data";

export const Route = createFileRoute("/$lang/about-us-en")({
  component: AboutUsEnPage,
});

function AboutUsEnPage() {
  return (
    <>
      <SeoHead
        title="About Us - Bodhi Dhammayan Retreat"
        canonical="/en/about-us-en/"
        alternateUrls={{ th: "/th/about-us-th/", en: "/en/about-us-en/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "Home", url: "/en/homeen/" },
          { name: "About Us", url: "/en/about-us-en/" },
        ]}
      />

      <div className="relative bg-brand-dark px-4 py-20">
        <img
          src={siteConfig.images.hero}
          alt="Bodhidhammayan"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-3xl font-bold text-white md:text-4xl">
            About Us
          </h1>
          <p className="mt-4 text-lg text-white/70">
            {siteConfig.taglineEn}
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-12">
          <div>
            <h2 className="font-serif text-2xl font-bold text-brand-dark">
              Our Foundations
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {siteConfig.organizations.map((org) => (
                <div
                  key={org.nameEn}
                  className="rounded-xl border border-brand-gold-100/50 bg-brand-cream p-6"
                >
                  <h3 className="font-serif text-lg font-semibold text-brand-dark">
                    {org.nameEn}
                  </h3>
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-brand-gold-600 hover:text-gold-700"
                  >
                    Visit website &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-brand-dark">
              Contact Us
            </h2>
            <div className="mt-4 space-y-2 text-base text-brand-text-secondary">
              <p>{siteConfig.contact.address}</p>
              <p>Tel: {siteConfig.contact.phone.join(", ")}</p>
              <p>Fax: {siteConfig.contact.fax}</p>
              <p>Email: {siteConfig.contact.email}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
