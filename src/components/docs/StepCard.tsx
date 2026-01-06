import { ReactNode } from "react";

interface StepCardProps {
  step: number;
  title: string;
  children: ReactNode;
  className?: string;
}

export function StepCard({
  step,
  title,
  children,
  className = "",
}: StepCardProps) {
  return (
    <div
      className={`bg-[#131620] border border-border rounded-xl overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-sm font-semibold text-white">
          {step}
        </div>
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      {/* Content */}
      <div className="p-5">{children}</div>
    </div>
  );
}
