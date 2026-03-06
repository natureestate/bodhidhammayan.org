interface BookCardProps {
  title: string;
  coverUrl?: string;
}

/**
 * การ์ดแสดงหนังสือ/เอกสารสำหรับ carousel หรือ horizontal scroll
 * รองรับ responsive และใช้ custom colors (dharma-*)
 */
export function BookCard({ title, coverUrl }: BookCardProps) {
  return (
    <div className="w-40 shrink-0 snap-start">
      <div className="aspect-2/3 overflow-hidden rounded-lg bg-dharma-100 shadow-md">
        {coverUrl && (
          <img
            src={coverUrl}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}
      </div>
      <h3 className="mt-2 line-clamp-2 text-center text-sm font-medium text-dharma-800 font-display">
        {title}
      </h3>
    </div>
  );
}
