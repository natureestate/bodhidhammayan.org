import { Link } from "@tanstack/react-router";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { getPostsByCategory } from "~/data";

interface DhammaSectionProps {
  lang: Language;
}

export function DhammaSection({ lang }: DhammaSectionProps) {
  const dhammaUrl = PAGE_URL_MAP.dhamma?.[lang] ?? "#";
  const posts = getPostsByCategory("teachings").slice(0, 6);

  return (
    <section className="bg-white section-padding py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-2xl font-bold text-brand-dark md:text-3xl lg:text-4xl">
          {t(lang, "section.dhamma")}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/${lang}/${post.slug}`}
              className="group"
            >
              <Card className="overflow-hidden p-0 transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="aspect-4/3 w-full bg-brand-cream">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                </div>
                <CardContent className="p-5">
                  <p className="font-serif text-sm font-semibold text-brand-dark line-clamp-2 group-hover:text-brand-gold-600">
                    {post.title}
                  </p>
                  <p className="mt-2 text-xs text-brand-text-muted">
                    {new Date(post.date).toLocaleDateString("th-TH", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to={dhammaUrl}>{t(lang, "cta.viewAll")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
