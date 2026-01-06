import { ReactNode } from "react";

interface UseCaseCardProps {
  icon: ReactNode;
  title: string;
}

export function UseCaseCard({ icon, title }: UseCaseCardProps) {
  return (
    <div className="p-6 bg-[#131620] border border-border rounded-xl hover:border-muted/50 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h4 className="font-medium text-foreground">{title}</h4>
    </div>
  );
}

