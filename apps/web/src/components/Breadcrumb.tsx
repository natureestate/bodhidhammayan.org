import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="section-padding mx-auto max-w-6xl py-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-text-muted">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            {index > 0 && <ChevronRight className="h-3 w-3 shrink-0" />}
            {item.href ? (
              <Link
                to={item.href}
                className="transition-colors hover:text-brand-gold-600"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-brand-dark">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
