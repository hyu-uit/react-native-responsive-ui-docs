import Link from "next/link";
import { Play, FileCode } from "lucide-react";

interface ApiHeaderProps {
  title: string;
  badge?: string;
  description: string;
  demoUrl?: string;
  sourceUrl?: string;
}

export function ApiHeader({
  title,
  badge,
  description,
  demoUrl,
  sourceUrl,
}: ApiHeaderProps) {
  return (
    <div className="mb-10">
      {/* Title row */}
      <div className="flex items-center gap-3 mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          {title}
        </h1>
        {badge && (
          <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary-hover rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-muted text-lg mb-6 leading-relaxed max-w-2xl">
        {description}
      </p>

      {/* Action buttons */}
      <div className="flex items-center gap-3">
        {demoUrl && (
          <Link
            href={demoUrl}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Play className="w-4 h-4" />
            Live Demo
          </Link>
        )}
        {sourceUrl && (
          <Link
            href={sourceUrl}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border border-border hover:border-muted text-foreground text-sm font-medium rounded-lg transition-colors"
          >
            <FileCode className="w-4 h-4" />
            View Source
          </Link>
        )}
      </div>
    </div>
  );
}

