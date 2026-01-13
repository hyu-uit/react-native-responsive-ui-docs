import { Lightbulb } from "lucide-react";
import { ApiHeader } from "@/components/docs/ApiHeader";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropertyList } from "@/components/docs/PropertyList";
import { ConversionTable } from "@/components/docs/ConversionTable";
import { InteractiveDemo } from "@/components/docs/InteractiveDemo";
import { PageNavigation } from "@/components/docs/PageNavigation";

const basicUsageCode = `<span class="text-syntax-keyword">const</span> styles <span class="text-syntax-operator">=</span> <span class="text-syntax-function">createScaledStyles</span><span class="text-syntax-bracket">({</span>
  <span class="text-syntax-property">box</span>: <span class="text-syntax-bracket">{</span>
    <span class="text-syntax-property">width</span>: <span class="text-syntax-number">150</span>,           <span class="text-syntax-comment">// Auto-scales!</span>
    <span class="text-syntax-property">height</span>: <span class="text-syntax-number">150</span>,
    <span class="text-syntax-property">borderRadius</span>: <span class="text-syntax-number">24</span>,
    <span class="text-syntax-property">backgroundColor</span>: <span class="text-syntax-string">'#6366f1'</span>,
  <span class="text-syntax-bracket">}</span>,
<span class="text-syntax-bracket">}</span>);`;

const excludedProperties = [
  "flex, flexGrow, zIndex",
  "opacity, shadowOpacity",
  "elevation",
  "aspectRatio",
];

const conversionExamples = [
  { property: "padding", value: 20, result: "21.5", isScaled: true },
  { property: "flex", value: 1, result: "1", isScaled: false },
  { property: "opacity", value: 0.8, result: "0.8", isScaled: false },
];

const interactiveDemoCode = `<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> createScaledStyles <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">"@vincent-huy-uit/react-native-responsive-ui"</span>;
<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> View, Text <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">"react-native"</span>;

<span class="text-syntax-keyword">export default function</span> <span class="text-syntax-function">Card</span>() <span class="text-syntax-bracket">{</span>
  <span class="text-syntax-keyword">return</span> <span class="text-syntax-bracket">(</span>
    <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">View</span> style<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span>styles.card<span class="text-syntax-bracket">}</span><span class="text-syntax-operator">&gt;</span>
      <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">Text</span> style<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span>styles.title<span class="text-syntax-bracket">}</span><span class="text-syntax-operator">&gt;</span>Hello World<span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">Text</span><span class="text-syntax-operator">&gt;</span>
      <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">Text</span> style<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span>styles.subtitle<span class="text-syntax-bracket">}</span><span class="text-syntax-operator">&gt;</span>This scales automatically!<span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">Text</span><span class="text-syntax-operator">&gt;</span>
    <span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">View</span><span class="text-syntax-operator">&gt;</span>
  <span class="text-syntax-bracket">)</span>;
<span class="text-syntax-bracket">}</span>

<span class="text-syntax-comment">// All numeric values are auto-scaled based on screen width</span>
<span class="text-syntax-keyword">const</span> styles <span class="text-syntax-operator">=</span> <span class="text-syntax-function">createScaledStyles</span><span class="text-syntax-bracket">({</span>
  <span class="text-syntax-property">card</span>: <span class="text-syntax-bracket">{</span>
    <span class="text-syntax-property">padding</span>: <span class="text-syntax-number">16</span>,        <span class="text-syntax-comment">// Scales: 16 → ~18 on larger screens</span>
    <span class="text-syntax-property">borderRadius</span>: <span class="text-syntax-number">12</span>,   <span class="text-syntax-comment">// Scales: 12 → ~14</span>
    <span class="text-syntax-property">backgroundColor</span>: <span class="text-syntax-string">"#1E293B"</span>,
  <span class="text-syntax-bracket">}</span>,
  <span class="text-syntax-property">title</span>: <span class="text-syntax-bracket">{</span>
    <span class="text-syntax-property">fontSize</span>: <span class="text-syntax-number">24</span>,       <span class="text-syntax-comment">// Scales: 24 → ~27</span>
    <span class="text-syntax-property">fontWeight</span>: <span class="text-syntax-string">"700"</span>,
    <span class="text-syntax-property">color</span>: <span class="text-syntax-string">"#F8FAFC"</span>,
  <span class="text-syntax-bracket">}</span>,
  <span class="text-syntax-property">subtitle</span>: <span class="text-syntax-bracket">{</span>
    <span class="text-syntax-property">fontSize</span>: <span class="text-syntax-number">14</span>,       <span class="text-syntax-comment">// Scales: 14 → ~16</span>
    <span class="text-syntax-property">color</span>: <span class="text-syntax-string">"#94A3B8"</span>,
    <span class="text-syntax-property">marginTop</span>: <span class="text-syntax-number">8</span>,       <span class="text-syntax-comment">// Scales: 8 → ~9</span>
  <span class="text-syntax-bracket">}</span>,
<span class="text-syntax-bracket">}</span>);`;

export function CreateScaledStylesPage() {
  return (
    <div>
      {/* Header */}
      <ApiHeader
        title="createScaledStyles"
        badge="Core API"
        description="A drop-in replacement for React Native's StyleSheet.create that automatically scales your numeric values based on device dimensions."
        demoUrl="https://snack.expo.dev"
        sourceUrl="https://github.com"
      />

      {/* Why use this? */}
      <div className="bg-[#131620] border border-border rounded-xl p-6 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
            <Lightbulb className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              Why use this?
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Designing for mobile often requires tedious calculations to ensure
              your UI looks consistent across phones and tablets.{" "}
              <code className="text-primary-hover">createScaledStyles</code>{" "}
              handles this automatically by interpreting your numeric style
              values and scaling them proportionally to the user&apos;s screen
              width.
            </p>
          </div>
        </div>
      </div>

      {/* Basic Usage */}
      <section className="mb-12">
        <SectionHeading>Basic Usage</SectionHeading>
        <p className="text-muted text-sm mb-4 leading-relaxed">
          Simply replace your existing StyleSheet import with our scaled
          version. It returns a standard React Native style object.
        </p>
        <div className="text-xs text-muted mb-2 text-right">
          components/Card.tsx
        </div>
        <CodeBlock filename="components/Card.tsx" code={basicUsageCode} />
      </section>

      {/* Smart Exclusion */}
      <section className="mb-12">
        <SectionHeading>Smart Exclusion</SectionHeading>
        <p className="text-muted text-sm mb-6 leading-relaxed">
          Not every number should be scaled.{" "}
          <code className="text-primary-hover">createScaledStyles</code> is
          intelligent enough to ignore properties that are typically unitless or
          fixed ratios.
        </p>
        <div className="grid lg:grid-cols-2 gap-6">
          <PropertyList properties={excludedProperties} />
          <ConversionTable examples={conversionExamples} />
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="mb-12">
        <SectionHeading>Interactive Demo</SectionHeading>
        <InteractiveDemo
          code={interactiveDemoCode}
          snackUrl="https://snack.expo.dev/@vincent232/createscaledstyle"
          previewType="card"
        />
      </section>

      {/* Navigation */}
      <PageNavigation
        previous={{
          title: "s() Function",
          href: "/docs/auto-scale/s-function",
        }}
        next={{
          title: "Design Tokens",
          href: "/docs/auto-scale/design-tokens",
        }}
      />
    </div>
  );
}
