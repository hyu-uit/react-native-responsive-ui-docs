import { ReactNode } from "react";
import { Smartphone, Tablet, Monitor } from "lucide-react";

interface Prop {
  name: string;
  type: string;
  description: string;
  required?: boolean;
  icon?: "mobile" | "tablet" | "desktop";
}

interface PropsListProps {
  props: Prop[];
}

const iconMap = {
  mobile: <Smartphone className="w-4 h-4 text-blue-400" />,
  tablet: <Tablet className="w-4 h-4 text-purple-400" />,
  desktop: <Monitor className="w-4 h-4 text-green-400" />,
};

export function PropsList({ props }: PropsListProps) {
  return (
    <div className="bg-[#131620] border border-border rounded-xl p-5 space-y-6">
      {props.map((prop) => (
        <div key={prop.name} className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0 mt-0.5">
            {prop.icon ? iconMap[prop.icon] : iconMap.mobile}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-foreground">{prop.name}</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              <span className="text-primary-hover">{prop.type}</span>.{" "}
              {prop.required ? "Required. " : "Optional. "}
              {prop.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
