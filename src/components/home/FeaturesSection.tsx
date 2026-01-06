import { Maximize2, RefreshCw, LayoutGrid } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: <Maximize2 className="w-6 h-6 text-white" />,
    iconBg: "bg-primary",
    title: "Scaling",
    description:
      "Automatic size adaptation based on device density and screen dimensions.",
    code: "scale(16) → 20.5px",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-white" />,
    iconBg: "bg-violet-500",
    title: "Responsive Values",
    description:
      "Define values for specific breakpoints directly in your component hooks.",
    code: "responsive({ m: 2, t: 4, d: 6 })",
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-white" />,
    iconBg: "bg-orange-500",
    title: "Layout Split",
    description:
      "Completely swap component trees for radically different form factors.",
    code: "<Mobile /> | <Desktop />",
  },
];

export function FeaturesSection() {
  return (
    <section className="min-h-[80vh] flex items-center py-20 px-6 bg-[#0D0F1B]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            The 3-Layer Approach
          </h2>
          <p className="text-muted max-w-xl">
            A comprehensive system designed to handle the complexity of
            cross-platform scaling without the boilerplate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
