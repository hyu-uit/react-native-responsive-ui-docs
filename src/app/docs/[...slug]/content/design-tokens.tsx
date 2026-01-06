import Link from "next/link";
import { Settings, Sparkles, Palette, Sliders } from "lucide-react";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { FeatureCardGrid } from "@/components/docs/FeatureCardGrid";
import { TokenTable } from "@/components/docs/TokenTable";
import { PageNavigation } from "@/components/docs/PageNavigation";

const featureCards = [
  {
    icon: <Palette className="w-5 h-5 text-violet-400" />,
    iconBg: "bg-violet-500/20",
    title: "Pre-defined Values",
    description: (
      <>
        Use semantic keys like{" "}
        <code className="text-primary-hover">sm</code>,{" "}
        <code className="text-primary-hover">md</code>, or{" "}
        <code className="text-primary-hover">lg</code> instead of magic numbers.
        We handle the responsive calculation for you.
      </>
    ),
  },
  {
    icon: <Sliders className="w-5 h-5 text-purple-400" />,
    iconBg: "bg-purple-500/20",
    title: "Fully Customizable",
    description: (
      <>
        Override the default scale or introduce your own design system tokens
        using the{" "}
        <code className="text-primary-hover">ResponsiveProvider</code>.
      </>
    ),
  },
];

const usingTokensCode = `<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> createScaledStyles <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'react-native-responsive-ui'</span>;

<span class="text-syntax-keyword">const</span> styles <span class="text-syntax-operator">=</span> <span class="text-syntax-function">createScaledStyles</span><span class="text-syntax-bracket">({</span>
  <span class="text-syntax-property">container</span>: <span class="text-syntax-bracket">{</span>
    <span class="text-syntax-comment">// 'md' maps to 16, then scales (e.g., ~18 on larger screens)</span>
    <span class="text-syntax-property">padding</span>: <span class="text-syntax-string">'md'</span>,
    <span class="text-syntax-comment">// 'sm' maps to 8, then scales</span>
    <span class="text-syntax-property">marginBottom</span>: <span class="text-syntax-string">'sm'</span>,
    <span class="text-syntax-property">borderRadius</span>: <span class="text-syntax-string">'lg'</span>,
    <span class="text-syntax-property">gap</span>: <span class="text-syntax-string">'xs'</span>,
  <span class="text-syntax-bracket">}</span>,
  <span class="text-syntax-property">text</span>: <span class="text-syntax-bracket">{</span>
    <span class="text-syntax-comment">// Typography tokens work too</span>
    <span class="text-syntax-property">fontSize</span>: <span class="text-syntax-string">'xl'</span>,
    <span class="text-syntax-property">lineHeight</span>: <span class="text-syntax-string">'loose'</span>
  <span class="text-syntax-bracket">}</span>
<span class="text-syntax-bracket">}</span>);`;

const customizingCode = `<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> ResponsiveProvider <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'react-native-responsive-ui'</span>;

<span class="text-syntax-keyword">const</span> customTheme <span class="text-syntax-operator">=</span> <span class="text-syntax-bracket">{</span>
  <span class="text-syntax-property">spacing</span>: <span class="text-syntax-bracket">{</span>
    <span class="text-syntax-property">xs</span>: <span class="text-syntax-number">4</span>,
    <span class="text-syntax-property">sm</span>: <span class="text-syntax-number">8</span>,
    <span class="text-syntax-property">md</span>: <span class="text-syntax-number">16</span>,
    <span class="text-syntax-property">lg</span>: <span class="text-syntax-number">24</span>,
    <span class="text-syntax-property">xl</span>: <span class="text-syntax-number">32</span>,
    <span class="text-syntax-property">xxl</span>: <span class="text-syntax-number">48</span>
  <span class="text-syntax-bracket">}</span>,
  <span class="text-syntax-property">typography</span>: <span class="text-syntax-bracket">{</span>
    <span class="text-syntax-property">base</span>: <span class="text-syntax-number">16</span>,
    <span class="text-syntax-property">lg</span>: <span class="text-syntax-number">20</span>,
    <span class="text-syntax-property">header</span>: <span class="text-syntax-number">32</span>
  <span class="text-syntax-bracket">}</span>
<span class="text-syntax-bracket">}</span>;

<span class="text-syntax-keyword">export default function</span> <span class="text-syntax-function">App</span>() <span class="text-syntax-bracket">{</span>
  <span class="text-syntax-keyword">return</span> <span class="text-syntax-bracket">(</span>
    <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">ResponsiveProvider</span> config<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{{</span> <span class="text-syntax-property">theme</span>: customTheme <span class="text-syntax-bracket">}}</span><span class="text-syntax-operator">&gt;</span>
      <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">MainNavigation</span> /<span class="text-syntax-operator">&gt;</span>
    <span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">ResponsiveProvider</span><span class="text-syntax-operator">&gt;</span>
  <span class="text-syntax-bracket">)</span>;
<span class="text-syntax-bracket">}</span>`;

const defaultTokens = [
  { name: "xs", baseValue: 4, scaledIphone: "~4.3", scaledIpad: "~6" },
  { name: "sm", baseValue: 8, scaledIphone: "~8.6", scaledIpad: "~12" },
  { name: "md", baseValue: 16, scaledIphone: "~17.2", scaledIpad: "~24" },
  { name: "lg", baseValue: 24, scaledIphone: "~25.8", scaledIpad: "~36" },
  { name: "xl", baseValue: 32, scaledIphone: "~34.5", scaledIpad: "~48" },
];

export function DesignTokensPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Design Tokens
          </h1>
          <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary-hover rounded-full">
            Configuration
          </span>
        </div>
        <p className="text-muted text-lg mb-6 leading-relaxed max-w-2xl">
          Define standardized spacing, typography, and sizing values that
          automatically scale across devices, powered by a central configuration
          provider.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="#customizing"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Settings className="w-4 h-4" />
            Configure
          </Link>
          <Link
            href="#tokens"
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border border-border hover:border-muted text-foreground text-sm font-medium rounded-lg transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            API Reference
          </Link>
        </div>
      </div>

      {/* Feature cards */}
      <FeatureCardGrid cards={featureCards} />

      {/* Using Tokens */}
      <section className="mb-12">
        <SectionHeading>Using Tokens</SectionHeading>
        <p className="text-muted text-sm mb-4 leading-relaxed">
          Instead of raw numbers, you can use token strings in{" "}
          <code className="text-primary-hover">createScaledStyles</code>. These
          tokens map to pixel values that are then scaled based on the device
          width.
        </p>
        <div className="text-xs text-muted mb-2 text-right">
          components/Button.tsx
        </div>
        <CodeBlock filename="components/Button.tsx" code={usingTokensCode} />
      </section>

      {/* Customizing via Provider */}
      <section id="customizing" className="mb-12">
        <SectionHeading>Customizing via Provider</SectionHeading>
        <p className="text-muted text-sm mb-4 leading-relaxed">
          Wrap your application root with the{" "}
          <code className="text-primary-hover">ResponsiveProvider</code> to
          inject your own design system values.
        </p>
        <div className="text-xs text-muted mb-2 text-right">App.tsx</div>
        <CodeBlock filename="App.tsx" code={customizingCode} />
      </section>

      {/* Default Token Map */}
      <section id="tokens" className="mb-12">
        <SectionHeading>Default Token Map</SectionHeading>
        <TokenTable tokens={defaultTokens} />
      </section>

      {/* Navigation */}
      <PageNavigation
        previous={{ title: "s() Function", href: "/docs/auto-scale/s-function" }}
        next={{
          title: "responsive()",
          href: "/docs/responsive/responsive-function",
        }}
      />
    </div>
  );
}

