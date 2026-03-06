import type { Language } from "@bodhidhammayan/api-client";
import { t } from "@bodhidhammayan/api-client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";

interface FaqSectionProps {
  lang: Language;
}

const faqItems = [
  { qKey: "faq.q1", aKey: "faq.a1" },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
  { qKey: "faq.q4", aKey: "faq.a4" },
];

export function FaqSection({ lang }: FaqSectionProps) {
  return (
    <section className="bg-white section-padding py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl lg:text-4xl">
          {t(lang, "section.faq")}
        </h2>

        <Accordion type="single" collapsible className="mt-12">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.qKey} value={`item-${index}`}>
              <AccordionTrigger className="px-1 text-left font-serif">
                {t(lang, item.qKey)}
              </AccordionTrigger>
              <AccordionContent className="px-1">
                <p className="text-sm leading-relaxed text-brand-text-secondary">
                  {t(lang, item.aKey)}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
