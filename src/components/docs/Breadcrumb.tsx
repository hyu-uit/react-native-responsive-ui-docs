"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  category: string;
  page: string;
}

export function Breadcrumb({ category, page }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm mb-4">
      <Link
        href="/docs"
        className="text-primary hover:text-primary-hover transition-colors font-medium tracking-wide"
      >
        {category.toUpperCase()}
      </Link>
      <ChevronRight className="w-4 h-4 text-muted" />
      <span className="text-primary font-medium tracking-wide">
        {page.toUpperCase()}
      </span>
    </nav>
  );
}
