import { Type, Layout, Diamond } from "lucide-react";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { DemoPreview } from "@/components/docs/DemoPreview";
import { UseCaseCard } from "@/components/docs/UseCaseCard";

const introCode = `<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span>
  s, responsive, createScaledStyles,
  ResponsiveSwitch, useDeviceType,
<span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">"@vincent-huy-uit/react-native-responsive-ui"</span>;

<span class="text-syntax-keyword">export default function</span> <span class="text-syntax-function">Example</span>() <span class="text-syntax-bracket">{</span>
  <span class="text-syntax-keyword">const</span> device = <span class="text-syntax-function">useDeviceType</span>(); <span class="text-syntax-comment">// "mobile" | "tablet" | "desktop"</span>

  <span class="text-syntax-comment">// responsive() - different values per device</span>
  <span class="text-syntax-keyword">const</span> columns = <span class="text-syntax-function">responsive</span>(<span class="text-syntax-bracket">{</span> <span class="text-syntax-property">mobile</span>: <span class="text-syntax-number">1</span>, <span class="text-syntax-property">tablet</span>: <span class="text-syntax-number">2</span>, <span class="text-syntax-property">desktop</span>: <span class="text-syntax-number">3</span> <span class="text-syntax-bracket">}</span>);

  <span class="text-syntax-keyword">return</span> <span class="text-syntax-bracket">(</span>
    <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">View</span> style<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span>styles.container<span class="text-syntax-bracket">}</span><span class="text-syntax-operator">&gt;</span>
      <span class="text-syntax-comment">{/* s() - scale individual values */}</span>
      <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">Text</span> style<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{{</span> <span class="text-syntax-property">fontSize</span>: <span class="text-syntax-function">s</span>(<span class="text-syntax-number">20</span>) <span class="text-syntax-bracket">}}</span><span class="text-syntax-operator">&gt;</span>
        Device: <span class="text-syntax-bracket">{</span>device<span class="text-syntax-bracket">}</span> | Columns: <span class="text-syntax-bracket">{</span>columns<span class="text-syntax-bracket">}</span>
      <span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">Text</span><span class="text-syntax-operator">&gt;</span>

      <span class="text-syntax-comment">{/* ResponsiveSwitch - render different components */}</span>
      <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">ResponsiveSwitch</span>
        mobile<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span><span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">MobileCard</span> /<span class="text-syntax-operator">&gt;</span><span class="text-syntax-bracket">}</span>
        tablet<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span><span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">TabletCard</span> /<span class="text-syntax-operator">&gt;</span><span class="text-syntax-bracket">}</span>
      /<span class="text-syntax-operator">&gt;</span>
    <span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">View</span><span class="text-syntax-operator">&gt;</span>
  <span class="text-syntax-bracket">)</span>;
<span class="text-syntax-bracket">}</span>

<span class="text-syntax-comment">// createScaledStyles() - auto-scale all numeric values</span>
<span class="text-syntax-keyword">const</span> styles = <span class="text-syntax-function">createScaledStyles</span>(<span class="text-syntax-bracket">{</span>
  <span class="text-syntax-property">container</span>: <span class="text-syntax-bracket">{</span> <span class="text-syntax-property">flex</span>: <span class="text-syntax-number">1</span>, <span class="text-syntax-property">padding</span>: <span class="text-syntax-number">16</span> <span class="text-syntax-bracket">}</span>,
  <span class="text-syntax-property">card</span>: <span class="text-syntax-bracket">{</span> <span class="text-syntax-property">padding</span>: <span class="text-syntax-number">16</span>, <span class="text-syntax-property">borderRadius</span>: <span class="text-syntax-number">12</span> <span class="text-syntax-bracket">}</span>,
<span class="text-syntax-bracket">}</span>);`;

export function IntroductionPage() {
  return (
    <div>
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        Introduction
      </h1>

      {/* Philosophy quote */}
      <blockquote className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-6 border-l-4 border-primary pl-6">
        &ldquo;One codebase, every screen size. Scale automatically, adapt
        intelligently, switch layouts when needed.&rdquo;
      </blockquote>

      {/* Description */}
      <p className="text-muted text-lg mb-10 leading-relaxed">
        A lightweight, zero-dependency utility for creating responsive layouts
        in React Native and Expo.
      </p>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16 items-start">
        {/* Code block */}
        <CodeBlock filename="Example.tsx" code={introCode} />

        {/* Demo preview */}
        <DemoPreview
          title="One library, complete responsive toolkit"
          description="Scale values with s(), switch values per device with responsive(), auto-scale styles with createScaledStyles(), and render different layouts with ResponsiveSwitch."
        />
      </div>

      {/* When to use section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          When to use linear scaling
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <UseCaseCard
            icon={<Type className="w-6 h-6" />}
            title="Typography"
            description="Font sizes, line heights, and letter spacing that remain readable and proportional across all devices."
          />
          <UseCaseCard
            icon={<Layout className="w-6 h-6" />}
            title="Spacing & Layout"
            description="Padding, margins, gaps, and border radii that maintain visual harmony from phones to tablets."
          />
          <UseCaseCard
            icon={<Diamond className="w-6 h-6" />}
            title="Iconography"
            description="Icon sizes and touch targets that scale appropriately while staying crisp and tappable."
          />
        </div>
      </section>
    </div>
  );
}
