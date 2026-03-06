import { Link } from "@tanstack/react-router";

interface LocationCardProps {
  name: string;
  imageUrl?: string;
  href?: string;
}

/**
 * การ์ดแสดงสถานที่/สถานที่ปฏิบัติธรรม
 * รองรับ responsive และใช้ custom colors (gold-*, dharma-*)
 */
export function LocationCard({ name, imageUrl, href }: LocationCardProps) {
  const inner = (
    <div className="group overflow-hidden rounded-xl border border-dharma-100 bg-white transition-shadow hover:shadow-lg">
      <div className="aspect-4/3 bg-dharma-100">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4 text-center">
        <h3 className="font-display text-lg font-semibold text-dharma-900 group-hover:text-gold-600">
          {name}
        </h3>
      </div>
    </div>
  );

  if (href) {
    return <Link to={href}>{inner}</Link>;
  }
  return inner;
}
