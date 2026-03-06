interface CourseCardProps {
  title: string;
  subtitle: string;
  duration: string;
  icon?: React.ReactNode;
}

export function CourseCard({
  title,
  subtitle,
  duration,
  icon,
}: CourseCardProps) {
  return (
    <div className="rounded-xl border border-brand-gold-100/50 bg-white p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold-50 text-brand-gold-600">
        {icon ?? <span className="text-2xl">🧘</span>}
      </div>
      <h3 className="mt-4 font-serif text-xl font-semibold text-brand-dark">
        {title}
      </h3>
      <p className="mt-1 text-sm font-medium text-brand-gold-600">{subtitle}</p>
      <p className="mt-2 text-sm text-brand-text-muted">{duration}</p>
    </div>
  );
}
