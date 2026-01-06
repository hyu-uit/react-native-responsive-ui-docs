import { Lightbulb, Box, Disc, Code2, Calculator } from "lucide-react";
import { ApiHeader } from "@/components/docs/ApiHeader";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { UseCaseList } from "@/components/docs/UseCaseList";
import { ScaleExamplesTable } from "@/components/docs/ScaleExamplesTable";
import { InteractiveDemo } from "@/components/docs/InteractiveDemo";
import { PageNavigation } from "@/components/docs/PageNavigation";

const basicUsageCode = `<span class="text-syntax-keyword">import</span> React <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'react'</span>;
<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> View <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'react-native'</span>;
<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> Ionicons <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'@expo/vector-icons'</span>;
<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> s <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'react-native-responsive-ui'</span>;

<span class="text-syntax-keyword">const</span> <span class="text-syntax-function">HeaderIcon</span> <span class="text-syntax-operator">=</span> () <span class="text-syntax-operator">=></span> <span class="text-syntax-bracket">{</span>
  <span class="text-syntax-keyword">return</span> <span class="text-syntax-bracket">(</span>
    <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">View</span> style<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{{</span> <span class="text-syntax-property">marginTop</span>: <span class="text-syntax-function">s</span>(<span class="text-syntax-number">10</span>) <span class="text-syntax-bracket">}}</span><span class="text-syntax-operator">&gt;</span>
      <span class="text-syntax-comment">{/* Perfect for props that expect numbers */}</span>
      <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">Ionicons</span>
        name<span class="text-syntax-operator">=</span><span class="text-syntax-string">"settings"</span>
        size<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span><span class="text-syntax-function">s</span>(<span class="text-syntax-number">24</span>)<span class="text-syntax-bracket">}</span>
        color<span class="text-syntax-operator">=</span><span class="text-syntax-string">"black"</span>
      /<span class="text-syntax-operator">&gt;</span>

      <span class="text-syntax-comment">{/* Or inline styles */}</span>
      <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">View</span> style<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{{</span>
        <span class="text-syntax-property">width</span>: <span class="text-syntax-function">s</span>(<span class="text-syntax-number">100</span>),
        <span class="text-syntax-property">height</span>: <span class="text-syntax-function">s</span>(<span class="text-syntax-number">1</span>), <span class="text-syntax-comment">// Scaled hairline separator</span>
        <span class="text-syntax-property">backgroundColor</span>: <span class="text-syntax-string">'#ccc'</span>
      <span class="text-syntax-bracket">}}</span> /<span class="text-syntax-operator">&gt;</span>
    <span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">View</span><span class="text-syntax-operator">&gt;</span>
  <span class="text-syntax-bracket">)</span>;
<span class="text-syntax-bracket">}</span>;

<span class="text-syntax-keyword">export default</span> HeaderIcon;`;

const useCases = [
  {
    icon: <Box className="w-4 h-4 text-blue-400" />,
    iconBg: "bg-blue-500/20",
    title: "Props like `iconSize`, `avatarSize`",
  },
  {
    icon: <Disc className="w-4 h-4 text-pink-400" />,
    iconBg: "bg-pink-500/20",
    title: "Animated.Value initialization",
  },
  {
    icon: <Code2 className="w-4 h-4 text-orange-400" />,
    iconBg: "bg-orange-500/20",
    title: "Inline `style={{ width: s(50) }}`",
  },
  {
    icon: <Calculator className="w-4 h-4 text-purple-400" />,
    iconBg: "bg-purple-500/20",
    title: "Custom layout calculations",
  },
];

const scaleExamples = [
  { input: "s(16)", output: "~17.2", device: "iPhone 14" },
  { input: "s(50)", output: "~54", device: "iPhone 14" },
  { input: "s(50) on iPad", output: "~75", device: "iPad Pro" },
];

const interactiveDemoCode = `<span class="text-syntax-comment">// s() works inline or in variables</span>

<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> s <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'rn-responsive'</span>;

<span class="text-syntax-keyword">export default</span> () <span class="text-syntax-operator">=></span> <span class="text-syntax-bracket">(</span>
  <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">View</span>
    style<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{{</span>
      <span class="text-syntax-property">flex</span>: <span class="text-syntax-number">1</span>,
      <span class="text-syntax-property">justifyContent</span>: <span class="text-syntax-string">'center'</span>,
      <span class="text-syntax-property">alignItems</span>: <span class="text-syntax-string">'center'</span>,
    <span class="text-syntax-bracket">}}</span>
  <span class="text-syntax-operator">&gt;</span>
    <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">View</span>
      style<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{{</span>
        <span class="text-syntax-property">width</span>: <span class="text-syntax-function">s</span>(<span class="text-syntax-number">200</span>),
        <span class="text-syntax-property">height</span>: <span class="text-syntax-function">s</span>(<span class="text-syntax-number">200</span>),
        <span class="text-syntax-property">borderRadius</span>: <span class="text-syntax-function">s</span>(<span class="text-syntax-number">20</span>),
        <span class="text-syntax-property">backgroundColor</span>: <span class="text-syntax-string">'#3b82f6'</span>,
        <span class="text-syntax-property">alignItems</span>: <span class="text-syntax-string">'center'</span>,
        <span class="text-syntax-property">justifyContent</span>: <span class="text-syntax-string">'center'</span>,
        ...
      <span class="text-syntax-bracket">}}</span>
    /<span class="text-syntax-operator">&gt;</span>
  <span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">View</span><span class="text-syntax-operator">&gt;</span>
<span class="text-syntax-bracket">)</span>;`;

export function SFunctionPage() {
  return (
    <div>
      {/* Header */}
      <ApiHeader
        title="s() Function"
        badge="Core Utility"
        description="A low-level utility to wrap a number and return a scaled value based on the device's screen dimensions. Ideal for inline styles, component props, and manual calculations."
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
              While{" "}
              <code className="text-primary-hover">createScaledStyles</code> is
              great for StyleSheet objects, sometimes you need to pass a raw
              number to a component. The{" "}
              <code className="text-primary-hover">s()</code> function lets you
              apply the same scaling logic to icon sizes, animation constants,
              or conditional layout values.
            </p>
          </div>
        </div>
      </div>

      {/* Basic Usage */}
      <section className="mb-12">
        <SectionHeading>Basic Usage</SectionHeading>
        <p className="text-muted text-sm mb-4 leading-relaxed">
          Import <code className="text-primary-hover">s</code> (short for scale)
          and wrap your numeric values.
        </p>
        <div className="text-xs text-muted mb-2 text-right">
          components/HeaderIcon.tsx
        </div>
        <CodeBlock filename="components/HeaderIcon.tsx" code={basicUsageCode} />
      </section>

      {/* Where to use */}
      <section className="mb-12">
        <SectionHeading>Where to use</SectionHeading>
        <p className="text-muted text-sm mb-6 leading-relaxed">
          The <code className="text-primary-hover">s()</code> function gives you
          manual control. It&apos;s best used in places where standard
          StyleSheet objects aren&apos;t applicable.
        </p>
        <div className="grid lg:grid-cols-2 gap-6">
          <UseCaseList useCases={useCases} />
          <ScaleExamplesTable examples={scaleExamples} />
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="mb-12">
        <SectionHeading>Interactive Demo</SectionHeading>
        <InteractiveDemo
          code={interactiveDemoCode}
          snackUrl="https://snack.expo.dev"
        />
      </section>

      {/* Navigation */}
      <PageNavigation
        previous={{
          title: "createScaledStyles",
          href: "/docs/auto-scale/create-scaled-styles",
        }}
        next={{
          title: "Design Tokens",
          href: "/docs/auto-scale/design-tokens",
        }}
      />
    </div>
  );
}
