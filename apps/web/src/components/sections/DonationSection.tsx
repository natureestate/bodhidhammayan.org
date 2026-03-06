import { useCallback } from "react";
import type { Language } from "@bodhidhammayan/api-client";
import { t } from "@bodhidhammayan/api-client";
import { Heart, Globe, Copy, Check } from "lucide-react";
import { toast } from "sonner";

interface DonationSectionProps {
  lang: Language;
}

const donationAccounts = [
  {
    foundationKey: "donation.foundation1",
    logo: "/images/foundations/kbo-logo.jpg",
    url: "https://www.knowingbuddha.org/",
    accounts: [
      { bankKey: "donation.kbank", number: "003-2-79877-4", icon: "/images/banks/KBANK.png" },
      { bankKey: "donation.scb", number: "428-179929-8", icon: "/images/banks/SCB.png" },
    ],
  },
  {
    foundationKey: "donation.foundation2",
    logo: "/images/foundations/sol-logo.webp",
    url: "https://www.schooloflifethailand.org/",
    accounts: [
      { bankKey: "donation.kbank", number: "003-2-41586-7", icon: "/images/banks/KBANK.png" },
      { bankKey: "donation.scb", number: "428-179580-4", icon: "/images/banks/SCB.png" },
    ],
  },
];

const SWIFT_CODE = "SICOTHBK";

function CopyButton({ text, lang }: { text: string; lang: Language }) {
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text.replace(/-/g, ""));
      toast.success(
        lang === "th" ? "คัดลอกเลขบัญชีแล้ว" : "Account number copied",
        {
          icon: <Check className="h-4 w-4 text-green-600" />,
          duration: 2000,
        }
      );
    } catch {
      toast.error(
        lang === "th" ? "คัดลอกไม่สำเร็จ" : "Failed to copy"
      );
    }
  }, [text, lang]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-brand-text-muted transition-all duration-200 hover:bg-brand-gold-100 hover:text-brand-gold-700 active:scale-90"
      aria-label={lang === "th" ? "คัดลอกเลขบัญชี" : "Copy account number"}
    >
      <Copy className="h-3.5 w-3.5" />
    </button>
  );
}

export function DonationSection({ lang }: DonationSectionProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-cream to-brand-gold-50/40 section-padding py-16 md:py-24">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A951' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold-100">
            <Heart className="h-6 w-6 text-brand-gold-600" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl">
            {t(lang, "section.donation")}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {donationAccounts.map((foundation) => (
            <div
              key={foundation.foundationKey}
              className="rounded-2xl border border-brand-gold-100/60 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <a
                  href={foundation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-brand-gold-100/60 transition-shadow hover:shadow-md"
                >
                  <img
                    src={foundation.logo}
                    alt={t(lang, foundation.foundationKey)}
                    className="h-full w-full object-contain"
                  />
                </a>
                <h3 className="text-sm font-semibold text-brand-gold-700">
                  <a
                    href={foundation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-brand-gold-500"
                  >
                    {t(lang, foundation.foundationKey)}
                  </a>
                </h3>
              </div>

              <div className="mt-5 space-y-3">
                {foundation.accounts.map((acc) => (
                  <div
                    key={acc.number}
                    className="flex items-center gap-3 rounded-xl bg-brand-cream/60 px-4 py-3"
                  >
                    <img src={acc.icon} alt="" className="h-7 w-7 shrink-0 rounded-lg" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-brand-text-muted">
                        {t(lang, acc.bankKey)}
                      </p>
                      <p className="font-mono text-sm font-semibold tracking-wider text-brand-dark">
                        {acc.number}
                      </p>
                    </div>
                    <CopyButton text={acc.number} lang={lang} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 rounded-xl border border-brand-gold-100/60 bg-white/80 px-5 py-3 shadow-sm backdrop-blur-sm">
          <Globe className="h-4 w-4 text-brand-gold-500" />
          <p className="text-sm text-brand-text-secondary">
            <span className="font-medium">{t(lang, "donation.swift")}:</span>{" "}
            <span className="font-mono font-semibold tracking-wider text-brand-dark">{SWIFT_CODE}</span>
          </p>
          <CopyButton text={SWIFT_CODE} lang={lang} />
        </div>
      </div>
    </section>
  );
}
