import { createFileRoute } from "@tanstack/react-router";
import { SeoHead } from "~/components/SeoHead";
import { BreadcrumbLd } from "~/components/JsonLd";
import { Breadcrumb } from "~/components/Breadcrumb";
import { siteConfig, master } from "~/data";

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
      <Breadcrumb items={[{ label: "หน้าแรก", href: "/th/hometh/" }, { label: "เกี่ยวกับเรา" }]} />

      <div className="relative bg-brand-dark px-4 py-20">
        <img
          src={siteConfig.images.hero}
          alt="โพธิธรรมญาณสถาน"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-3xl font-bold text-white md:text-4xl">
            เกี่ยวกับเรา
          </h1>
          <p className="mt-4 font-thai text-lg text-white/70">
            {siteConfig.tagline}
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-12">
          <blockquote className="border-l-4 border-brand-gold-600 bg-brand-cream/60 px-8 py-10 text-center">
            <p className="font-thai text-lg leading-relaxed text-brand-dark italic md:text-xl">
              &ldquo;ความกตัญญูมีพลังวิเศษเสมอ นำพาชีวิตให้เดินอยู่บนทางสว่าง
              ความรัก ความกตัญญู เป็นพลังเกื้อหนุนโลก
              หากไร้ซึ่งพลังนี้ โลกก็คงแตกสลายไปนานแล้ว&rdquo;
            </p>
            <footer className="mt-6">
              <p className="font-serif text-base font-semibold text-brand-dark">
                {master.name}
              </p>
              <p className="text-sm text-brand-text-muted">
                ประธานมูลนิธิโรงเรียนแห่งชีวิต
              </p>
            </footer>
          </blockquote>

          <div>
            <h2 className="font-serif text-2xl font-bold text-brand-dark">
              มูลนิธิโรงเรียนแห่งชีวิต
            </h2>
            <p className="mt-4 font-thai text-base leading-relaxed text-brand-text-secondary">
              ก่อตั้งเมื่อปี พ.ศ.2549 โดย {master.name}{" "}
              ประธานมูลนิธิโรงเรียนแห่งชีวิต
              ซึ่งได้สละทรัพย์ส่วนตนเป็นจำนวนมาก
              เพื่อประโยชน์สำหรับเด็กและเยาวชนที่จะเติบโตเป็นกำลังสำคัญของประเทศ
              ให้ดำรงอยู่ในศีลธรรมโดยยึดหลักการสอนธรรมจากบทเรียนในชีวิตของนักเรียนเอง
              แทนการท่องจำตำรา ให้เยาวชนมีแนวทางในการดำเนินชีวิต
              มองโลกอย่างถูกต้อง ซึ่งได้รับความสนใจและประสบความสำเร็จอย่างมาก
              เป็นที่กล่าวขานในสังคมเป็นวงกว้าง
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-brand-dark">
              รางวัลและเกียรติคุณ
            </h2>
            <div className="mt-6 space-y-6">
              <div className="rounded-xl border border-brand-gold-100/50 bg-brand-cream p-6">
                <h3 className="font-serif text-lg font-semibold text-brand-dark">
                  LIFETIME ACHIEVEMENT AWARD
                </h3>
                <p className="mt-3 font-thai text-base leading-relaxed text-brand-text-secondary">
                  {master.name} ได้รับรางวัล &ldquo;LIFETIME ACHIEVEMENT
                  AWARD&rdquo;
                  จากการได้รับเชิญไปแสดงปาฐกถาพิเศษในหัวข้อ HEAL AT THE CORE
                  ในงานประชุม World Congress ประจำปีครั้งที่ 31 Longevity Fest
                  2023: Leveling Up Healthcare ให้กับแพทย์ชั้นนำร่วม 3,000 คน
                  ซึ่งจัดโดย The American Academy of Anti-Aging Medicine (A4M)
                </p>
              </div>
              <div className="rounded-xl border border-brand-gold-100/50 bg-brand-cream p-6">
                <h3 className="font-serif text-lg font-semibold text-brand-dark">
                  Grand Collar Rank
                </h3>
                <p className="mt-3 font-thai text-base leading-relaxed text-brand-text-secondary">
                  ได้รับเกียรติสูงสุดจากเจ้าชายการิออส เอล เชมอร์ อัล-นุมาน ที่
                  8 (Gharios El Chemor Al-Numan VIII) แห่งราชวงศ์กาซาน
                  พระราชทานรางวัล Grand Collar Rank
                  อันทรงเกียรติสูงสุดที่ราชวงศ์กาซานมอบให้แก่บุคคลระดับผู้นำประเทศ
                  และบุคคลทรงคุณค่าเพียงเท่านั้น
                  เดิมทีเจ้าชายการิออสจะพระราชทานให้ด้วยพระองค์เอง
                  แต่ด้วยติดพระราชกิจบรรยายที่มหาวิทยาลัยพริ้นซ์ตัน
                  ดร.โกลด์แมนจึงเป็นตัวแทนรับพระราชทานเกียรติบัตรแทน
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-brand-dark">
              ความหมายของ &quot;โพธิธรรมญาณ&quot;
            </h2>
            <p className="mt-4 font-thai text-base leading-relaxed text-brand-text-secondary">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-brand-dark">
              มูลนิธิที่ดำเนินงาน
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {siteConfig.organizations.map((org) => (
                <div
                  key={org.name}
                  className="rounded-xl border border-brand-gold-100/50 bg-brand-cream p-6"
                >
                  <h3 className="font-serif text-lg font-semibold text-brand-dark">
                    {org.name}
                  </h3>
                  <p className="mt-1 text-sm text-brand-text-muted">{org.nameEn}</p>
                  <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-brand-gold-600 hover:text-gold-700"
                  >
                    เยี่ยมชมเว็บไซต์ &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
