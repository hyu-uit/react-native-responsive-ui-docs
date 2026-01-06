import { ReactNode } from "react";
import { Info, AlertTriangle } from "lucide-react";

interface InfoCardProps {
  variant?: "info" | "warning";
  title: string;
  children: ReactNode;
}

export function InfoCard({ variant = "info", title, children }: InfoCardProps) {
  const Icon = variant === "warning" ? AlertTriangle : Info;
  const iconColor = variant === "warning" ? "text-amber-500" : "text-primary";
  const iconBg = variant === "warning" ? "bg-amber-500/10" : "bg-primary/10";

  return (
    <div className="bg-[#131620] border border-border rounded-xl p-5">
      <div className="flex items-start gap-4">
        <div className={`w-8 h-8 rounded-lg ${iconBg} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-4 h-4 ${iconColor}`} />
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-1">{title}</h4>
          <div className="text-sm text-muted leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

