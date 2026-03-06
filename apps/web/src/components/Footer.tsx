import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Instagram, Music2 } from "lucide-react";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface FooterProps {
  lang: Language;
}

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/bodhidhammayan" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@ThamLaewDee" },
  { icon: Music2, label: "TikTok", href: "https://www.tiktok.com/@thamlaewdee" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/thamlaewdee" },
];

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="border-t border-dharma-100 bg-dharma-950 text-dharma-200">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-gold-400">
              {t(lang, "meta.siteName")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-dharma-300">
              {t(lang, "footer.foundation")}
            </p>
            <p className="mt-3 text-sm text-dharma-400">
              {t(lang, "footer.address")}
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-gold-400">
              {lang === "th" ? "ติดต่อเรา" : "Contact Us"}
            </h3>
            <div className="mt-3 space-y-2 text-sm text-dharma-300">
              <p>{t(lang, "footer.hours")}</p>
              <p>{t(lang, "footer.phone")}</p>
              <p>{t(lang, "footer.fax")}</p>
              <p>
                <a
                  href="mailto:info@bodhidhammayan.org"
                  className="text-gold-400 hover:text-gold-300"
                >
                  {t(lang, "footer.email")}
                </a>
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-dharma-400 hover:bg-dharma-800 hover:text-gold-400"
                  asChild
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-gold-400">
              {lang === "th" ? "ลิงก์ด่วน" : "Quick Links"}
            </h3>
            <div className="mt-3 flex flex-col gap-1">
              {[
                { key: "nav.about", page: "about" },
                { key: "nav.dhamma", page: "dhamma" },
                { key: "nav.experience", page: "experience" },
                { key: "nav.news", page: "news" },
              ].map((item) => {
                const url = PAGE_URL_MAP[item.page]?.[lang];
                if (!url) return null;
                return (
                  <Button
                    key={item.key}
                    variant="link"
                    className="h-auto justify-start p-0 text-dharma-300 hover:text-gold-400"
                    asChild
                  >
                    <Link to={url}>{t(lang, item.key)}</Link>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-dharma-800" />

        <div>
          <h3 className="font-display text-center text-lg font-semibold text-gold-400">
            {t(lang, "section.donation")}
          </h3>
          <div className="mt-4 grid gap-4 text-center text-sm text-dharma-300 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-dharma-200">
                {lang === "th"
                  ? "มูลนิธิโนอิ้ง บุดด้า เพื่อการปกป้องพระพุทธศาสนา"
                  : "Knowing Buddha Foundation"}
              </p>
              <p>
                {lang === "th" ? "ธนาคารกสิกรไทย" : "Kasikorn Bank"} 003-2-79877-4
              </p>
              <p>
                {lang === "th" ? "ธนาคารไทยพาณิชย์" : "SCB"} 428-179929-8
              </p>
              <p className="text-dharma-400">SWIFT: SICOTHBK</p>
            </div>
            <div>
              <p className="font-semibold text-dharma-200">
                {lang === "th"
                  ? "มูลนิธิโรงเรียนแห่งชีวิต"
                  : "School of Life Foundation"}
              </p>
              <p>
                {lang === "th" ? "ธนาคารกสิกรไทย" : "Kasikorn Bank"} 003-2-41586-7
              </p>
              <p>
                {lang === "th" ? "ธนาคารไทยพาณิชย์" : "SCB"} 428-179580-4
              </p>
              <p className="text-dharma-400">SWIFT: SICOTHBK</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-dharma-800" />

        <p className="text-center text-xs text-dharma-500">
          {t(lang, "footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
