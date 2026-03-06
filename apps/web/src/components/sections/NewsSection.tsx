import { Link } from "@tanstack/react-router";
import type { Language } from "@bodhidhammayan/api-client";
import { t, PAGE_URL_MAP } from "@bodhidhammayan/api-client";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { getPostsByCategory } from "~/data";

interface NewsSectionProps {
  lang: Language;
}

export function NewsSection({ lang }: NewsSectionProps) {
  const newsUrl = PAGE_URL_MAP.news?.[lang] ?? "#";
  const posts = getPostsByCategory("news").slice(0, 6);

  return (
    <section className="bg-dharma-50 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-2xl font-bold text-dharma-900 md:text-3xl">
          {t(lang, "section.news")}
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/${lang}/${post.slug}`}
              className="group"
            >
              <Card className="overflow-hidden p-0 transition-shadow group-hover:shadow-lg">
                <div className="aspect-4/3 w-full bg-dharma-100">
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                </div>
                <CardContent className="p-4">
                  <p className="font-display text-sm font-semibold text-dharma-800 line-clamp-2 group-hover:text-gold-600">
                    {post.title}
                  </p>
                  <p className="mt-1 font-thai text-xs text-dharma-500">
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

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to={newsUrl}>{t(lang, "cta.viewAll")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
