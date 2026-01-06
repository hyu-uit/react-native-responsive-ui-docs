import { Check } from "lucide-react";

export function TypeSafeBadge() {
  return (
    <div className="absolute -top-2 -right-2 flex items-center gap-2 px-3 py-2 bg-secondary border border-border rounded-lg shadow-xl">
      <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
        <Check className="w-3 h-3 text-white" />
      </div>
      <div className="text-left">
        <div className="text-xs font-medium text-foreground">Type Safe</div>
        <div className="text-[10px] text-muted">100% TypeScript</div>
      </div>
    </div>
  );
}
