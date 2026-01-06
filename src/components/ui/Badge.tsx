import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  dot?: boolean;
}

export function Badge({ children, dot = false }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-badge-bg border border-border rounded-full text-sm text-badge-text">
      {dot && <span className="w-2 h-2 rounded-full bg-badge-dot" />}
      {children}
    </div>
  );
}
