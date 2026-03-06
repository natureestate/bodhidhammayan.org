import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { siteConfig } from "~/data";

export const Route = createFileRoute("/$lang/about-us-th")({
  component: AboutUsThPage,
});

function AboutUsThPage() {
  return (
    <>
      <SeoHead
        title="เกี่ยวกับเรา - โพธิธรรมญาณสถาน"
        canonical="/th/about-us-th/"
        alternateUrls={{ th: "/th/about-us-th/", en: "/en/about-us-en/" }}
      />
      <BreadcrumbLd
        items={[
          { name: "หน้าแรก", url: "/th/hometh/" },
          { name: "เกี่ยวกับเรา", url: "/th/about-us-th/" },
        ]}
      />

      <div className="relative bg-dharma-950 px-4 py-20">
        <img
          src={siteConfig.images.hero}
          alt="โพธิธรรมญาณสถาน"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">
            เกี่ยวกับเรา
          </h1>
          <p className="mt-4 font-thai text-lg text-dharma-200">
            {siteConfig.tagline}
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-dharma-900">
              ความหมายของ &quot;โพธิธรรมญาณ&quot;
            </h2>
            <p className="mt-4 font-thai text-base leading-relaxed text-dharma-700">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-dharma-900">
              มูลนิธิที่ดำเนินงาน
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {siteConfig.organizations.map((org) => (
                <div
                  key={org.name}
                  className="rounded-xl border border-dharma-100 bg-dharma-50 p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-dharma-800">
                    {org.name}
                  </h3>
                  <p className="mt-1 text-sm text-dharma-500">{org.nameEn}</p>
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-gold-600 hover:text-gold-700"
                  >
                    เยี่ยมชมเว็บไซต์ &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-dharma-900">
              ติดต่อเรา
            </h2>
            <div className="mt-4 space-y-2 font-thai text-base text-dharma-700">
              <p>{siteConfig.contact.address}</p>
              <p>โทร: {siteConfig.contact.phone.join(", ")}</p>
              <p>แฟกซ์: {siteConfig.contact.fax}</p>
              <p>อีเมล: {siteConfig.contact.email}</p>
              <p>เวลาทำการ: {siteConfig.contact.hours}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
