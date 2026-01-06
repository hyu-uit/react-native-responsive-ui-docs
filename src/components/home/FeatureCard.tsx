import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  iconBg: string;
  title: string;
  description: string;
  code: string;
}

export function FeatureCard({
  icon,
  iconBg,
  title,
  description,
  code,
}: FeatureCardProps) {
  return (
    <div className="relative group rounded-2xl p-[1px] overflow-hidden">
      {/* Animated border gradient */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, rgba(99, 102, 241, 0.5), transparent 30%)",
          animation: "spin 3s linear infinite",
        }}
      />

      {/* Card content */}
      <div className="relative p-6 bg-[#131620] rounded-2xl h-full">
        <div
          className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-5`}
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted text-sm leading-relaxed mb-4">{description}</p>
        <code className="text-xs text-primary-hover font-mono">{code}</code>
      </div>
    </div>
  );
}
