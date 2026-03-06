import type { Language } from "@bodhidhammayan/api-client";
import { t } from "@bodhidhammayan/api-client";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";

interface DonationSectionProps {
  lang: Language;
}

const donationAccounts = [
  {
    foundationKey: "donation.foundation1",
    accounts: [
      { bankKey: "donation.kbank", number: "003-2-79877-4" },
      { bankKey: "donation.scb", number: "428-179929-8" },
    ],
  },
  {
    foundationKey: "donation.foundation2",
    accounts: [
      { bankKey: "donation.kbank", number: "003-2-41586-7" },
      { bankKey: "donation.scb", number: "428-179580-4" },
    ],
  },
];

const SWIFT_CODE = "SICOTHBK";

export function DonationSection({ lang }: DonationSectionProps) {
  return (
    <section className="bg-brand-cream section-padding py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl lg:text-4xl">
          {t(lang, "section.donation")}
        </h2>

        <div className="mt-12 space-y-6">
          {donationAccounts.map((foundation) => (
            <Card key={foundation.foundationKey}>
              <CardHeader>
                <CardTitle className="text-brand-gold-700">
                  {t(lang, foundation.foundationKey)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {foundation.accounts.map((acc) => (
                    <li
                      key={acc.number}
                      className="flex flex-wrap items-center gap-2 text-sm text-brand-text-secondary"
                    >
                      <span className="font-medium text-brand-dark">
                        {t(lang, acc.bankKey)}:
                      </span>
                      <Badge variant="nature" className="font-mono">
                        {acc.number}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          <Separator />

          <Card>
            <CardContent className="pt-6">
              <p className="font-serif text-sm font-semibold text-brand-text-secondary">
                {t(lang, "donation.swift")}:{" "}
                <Badge variant="secondary" className="font-mono">
                  {SWIFT_CODE}
                </Badge>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
