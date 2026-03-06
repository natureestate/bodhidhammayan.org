import { Link } from "@tanstack/react-router";

interface LocationCardProps {
  name: string;
  imageUrl?: string;
  href?: string;
}

export function LocationCard({ name, imageUrl, href }: LocationCardProps) {
  const inner = (
    <div className="group overflow-hidden rounded-xl border border-brand-gold-100/50 bg-white transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-4/3 bg-brand-cream">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-4 text-center">
        <h3 className="font-serif text-lg font-semibold text-brand-dark group-hover:text-brand-gold-600">
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
