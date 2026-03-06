interface CourseCardProps {
  title: string;
  subtitle: string;
  duration: string;
  icon?: React.ReactNode;
}

/**
 * การ์ดแสดงหลักสูตรหรือคอร์ส
 * รองรับ responsive และใช้ custom colors (gold-*, dharma-*)
 */
export function CourseCard({
  title,
  subtitle,
  duration,
  icon,
}: CourseCardProps) {
  return (
    <div className="rounded-xl border border-dharma-100 bg-white p-6 text-center transition-shadow hover:shadow-lg">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold-50 text-gold-600">
        {icon ?? <span className="text-2xl">🧘</span>}
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-dharma-900">
        {title}
      </h3>
      <p className="mt-1 text-sm font-medium text-gold-600">{subtitle}</p>
      <p className="mt-2 text-sm text-dharma-500">{duration}</p>
    </div>
  );
}
