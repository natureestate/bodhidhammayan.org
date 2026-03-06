import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * คอมโพเนนต์ breadcrumb แสดงเส้นทางนำทาง
 * แยกจาก JSON-LD breadcrumb - ใช้สำหรับ UI เท่านั้น
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 py-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-dharma-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="h-3 w-3 flex-shrink-0" />}
            {item.href ? (
              <Link
                to={item.href}
                className="transition-colors hover:text-gold-600"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-dharma-800">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
