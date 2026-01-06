import { ReactNode } from "react";

interface FeatureCard {
  icon: ReactNode;
  iconBg: string;
  title: string;
  description: ReactNode;
}

interface FeatureCardGridProps {
  cards: FeatureCard[];
}

export function FeatureCardGrid({ cards }: FeatureCardGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-10">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-[#131620] border border-border rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div
              className={`w-10 h-10 rounded-lg ${card.iconBg} flex items-center justify-center shrink-0`}
            >
              {card.icon}
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

