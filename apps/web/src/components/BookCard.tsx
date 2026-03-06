interface BookCardProps {
  title: string;
  coverUrl?: string;
}

export function BookCard({ title, coverUrl }: BookCardProps) {
  return (
    <div className="w-40 shrink-0 snap-start">
      <div className="aspect-2/3 overflow-hidden rounded-lg bg-brand-cream shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
        {coverUrl && (
          <img
            src={coverUrl}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        )}
      </div>
      <h3 className="mt-2 line-clamp-2 text-center font-serif text-sm font-medium text-brand-dark">
        {title}
      </h3>
    </div>
  );
}
