import { Link } from "@tanstack/react-router";
import { Mail, Phone, Facebook, ArrowUp } from "lucide-react";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { Separator } from "./ui/separator";

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-brand-gold-100/30 bg-brand-dark text-white/80">
      <div className="section-padding mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* ข้อมูลติดต่อ */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-brand-gold-400">
              {lang === "th" ? "ติดต่อเรา" : "Contact with us"}
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <p className="font-medium text-white/90">
                {t(lang, "meta.siteName")}
              </p>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand-gold-500" />
                <a
                  href="mailto:info@bodhidhammayan.org"
                  className="transition-colors hover:text-brand-gold-400"
                >
                  {t(lang, "footer.email")}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="h-4 w-4 shrink-0 text-brand-gold-500" />
                <a
                  href="https://www.facebook.com/bodhidhammayan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-brand-gold-400"
                >
                  {t(lang, "meta.siteName")}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-gold-500" />
                <span>{t(lang, "footer.phone")}</span>
              </div>
              <p className="text-xs text-white/50">
                {t(lang, "footer.hours")}
              </p>
            </div>
          </div>

          {/* ลิงก์ด่วน */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-brand-gold-400">
              {lang === "th" ? "ลิงก์ด่วน" : "Quick Links"}
            </h3>
            <div className="mt-4 flex flex-col gap-2">
              {[
                { key: "nav.about", page: "about" },
                { key: "nav.dhamma", page: "dhamma" },
                { key: "nav.experience", page: "experience" },
                { key: "nav.news", page: "news" },
              ].map((item) => {
                const url = PAGE_URL_MAP[item.page]?.[lang];
                if (!url) return null;
                return (
                  <Link
                    key={item.key}
                    to={url}
                    className="text-sm transition-colors hover:text-brand-gold-400"
                  >
                    {t(lang, item.key)}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ข้อมูลสถานปฏิบัติธรรม */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-brand-gold-400">
              {t(lang, "meta.siteName")}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {t(lang, "footer.foundation")}
            </p>
            <p className="mt-3 text-xs text-white/40">
              {t(lang, "footer.address")}
            </p>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        {/* บริจาค */}
        <div>
          <h3 className="text-center font-serif text-lg font-semibold text-brand-gold-400">
            {t(lang, "section.donation")}
          </h3>
          <div className="mt-4 grid gap-4 text-center text-sm text-white/70 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-white/90">
                {lang === "th"
                  ? "มูลนิธิโนอิ้ง บุดด้า เพื่อการปกป้องพระพุทธศาสนา"
                  : "Knowing Buddha Foundation"}
              </p>
              <p>
                {lang === "th" ? "ธนาคารกสิกรไทย" : "Kasikorn Bank"}{" "}
                003-2-79877-4
              </p>
              <p>
                {lang === "th" ? "ธนาคารไทยพาณิชย์" : "SCB"} 428-179929-8
              </p>
              <p className="text-white/40">SWIFT: SICOTHBK</p>
            </div>
            <div>
              <p className="font-semibold text-white/90">
                {lang === "th"
                  ? "มูลนิธิโรงเรียนแห่งชีวิต"
                  : "School of Life Foundation"}
              </p>
              <p>
                {lang === "th" ? "ธนาคารกสิกรไทย" : "Kasikorn Bank"}{" "}
                003-2-41586-7
              </p>
              <p>
                {lang === "th" ? "ธนาคารไทยพาณิชย์" : "SCB"} 428-179580-4
              </p>
              <p className="text-white/40">SWIFT: SICOTHBK</p>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex items-center justify-between">
          <p className="text-xs text-white/40">
            {t(lang, "footer.copyright")} bodhidhammayan.org
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-brand-gold-500/30 px-4 py-2 text-sm text-brand-gold-400 transition-colors hover:bg-brand-gold-500/10 hover:text-brand-gold-300"
          >
            <ArrowUp className="h-4 w-4" />
            <span>{lang === "th" ? "กลับด้านบน" : "Back to top"}</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
