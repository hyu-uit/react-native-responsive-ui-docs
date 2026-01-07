import { ReactNode } from "react";

interface UseCaseCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
}

export function UseCaseCard({ icon, title, description }: UseCaseCardProps) {
  return (
    <div className="p-6 bg-[#131620] border border-border rounded-xl hover:border-muted/50 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h4 className="font-medium text-foreground mb-2">{title}</h4>
      {description && (
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
