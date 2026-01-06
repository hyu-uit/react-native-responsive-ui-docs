import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PageNavItem {
  title: string;
  href: string;
}

interface PageNavigationProps {
  previous?: PageNavItem;
  next?: PageNavItem;
}

export function PageNavigation({ previous, next }: PageNavigationProps) {
  return (
    <div className="flex items-center justify-between pt-12 mt-12 border-t border-border">
      {previous ? (
        <Link
          href={previous.href}
          className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <div>
            <div className="text-xs text-muted mb-0.5">PREVIOUS</div>
            <div className="text-primary-hover font-medium">
              {previous.title}
            </div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors text-right"
        >
          <div>
            <div className="text-xs text-muted mb-0.5">NEXT</div>
            <div className="text-primary-hover font-medium">{next.title}</div>
          </div>
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}

