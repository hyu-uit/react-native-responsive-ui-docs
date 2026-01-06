import { Check } from "lucide-react";

interface PropertyListProps {
  properties: string[];
}

export function PropertyList({ properties }: PropertyListProps) {
  return (
    <div className="bg-[#131620] border border-border rounded-xl p-5 space-y-3">
      {properties.map((prop) => (
        <div key={prop} className="flex items-center gap-3">
          <Check className="w-4 h-4 text-accent flex-shrink-0" />
          <code className="text-sm text-muted font-mono">{prop}</code>
        </div>
      ))}
    </div>
  );
}

