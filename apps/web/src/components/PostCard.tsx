import { Link } from "@tanstack/react-router";

interface PostCardProps {
  title: string;
  excerpt?: string;
  date: string;
  imageUrl?: string;
  href: string;
}

/**
 * การ์ดแสดงโพสต์สำหรับรายการธรรมะ ข่าว หรือประสบการณ์
 * รองรับ responsive และใช้ custom colors (gold-*, dharma-*)
 */
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
      className="group block overflow-hidden rounded-xl border border-dharma-100 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="aspect-video bg-dharma-100">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4">
        <time className="text-xs text-dharma-400">{date}</time>
        <h3 className="mt-1 font-display text-lg font-semibold text-dharma-900 line-clamp-2 group-hover:text-gold-600">
          {title}
        </h3>
        {excerpt && (
          <p className="mt-2 line-clamp-2 text-sm text-dharma-500">{excerpt}</p>
        )}
      </div>
    </Link>
  );
}
