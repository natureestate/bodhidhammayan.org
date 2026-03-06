import { Link } from "@tanstack/react-router";

interface PostCardProps {
  title: string;
  excerpt?: string;
  date: string;
  imageUrl?: string;
  href: string;
}

export function PostCard({
  title,
  excerpt,
  date,
  imageUrl,
  href,
}: PostCardProps) {
  return (
    <Link
      to={href}
      className="group block overflow-hidden rounded-xl border border-brand-gold-100/50 bg-white transition-all hover:shadow-lg hover:-translate-y-1"
    >
      <div className="aspect-video bg-brand-cream">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-5">
        <time className="text-xs text-brand-text-muted">{date}</time>
        <h3 className="mt-1 font-serif text-lg font-semibold text-brand-dark line-clamp-2 group-hover:text-brand-gold-600">
          {title}
        </h3>
        {excerpt && (
          <p className="mt-2 line-clamp-2 text-sm text-brand-text-secondary">{excerpt}</p>
        )}
      </div>
    </Link>
  );
}
