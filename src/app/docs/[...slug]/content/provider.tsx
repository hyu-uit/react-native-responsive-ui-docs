import { Lightbulb } from "lucide-react";
import { ApiHeader } from "@/components/docs/ApiHeader";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PageNavigation } from "@/components/docs/PageNavigation";

const basicUsageCode = `<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> ResponsiveProvider <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">"@vincent-huy-uit/react-native-responsive-ui"</span>;

<span class="text-syntax-keyword">export default function</span> <span class="text-syntax-function">App</span>() <span class="text-syntax-bracket">{</span>
  <span class="text-syntax-keyword">return</span> <span class="text-syntax-bracket">(</span>
    <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">ResponsiveProvider</span><span class="text-syntax-operator">&gt;</span>
      <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">YourApp</span> /<span class="text-syntax-operator">&gt;</span>
    <span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">ResponsiveProvider</span><span class="text-syntax-operator">&gt;</span>
  <span class="text-syntax-bracket">)</span>;
<span class="text-syntax-bracket">}</span>`;

const customBreakpointsCode = `<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> ResponsiveProvider <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">"@vincent-huy-uit/react-native-responsive-ui"</span>;

<span class="text-syntax-keyword">const</span> customConfig = <span class="text-syntax-bracket">{</span>
  <span class="text-syntax-property">breakpoints</span>: <span class="text-syntax-bracket">{</span>
    <span class="text-syntax-property">mobile</span>: <span class="text-syntax-number">0</span>,      <span class="text-syntax-comment">// 0 - 599px</span>
    <span class="text-syntax-property">tablet</span>: <span class="text-syntax-number">600</span>,    <span class="text-syntax-comment">// 600 - 1023px</span>
    <span class="text-syntax-property">desktop</span>: <span class="text-syntax-number">1024</span>,  <span class="text-syntax-comment">// 1024px+</span>
  <span class="text-syntax-bracket">}</span>,
<span class="text-syntax-bracket">}</span>;

<span class="text-syntax-keyword">export default function</span> <span class="text-syntax-function">App</span>() <span class="text-syntax-bracket">{</span>
  <span class="text-syntax-keyword">return</span> <span class="text-syntax-bracket">(</span>
    <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">ResponsiveProvider</span> config<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span>customConfig<span class="text-syntax-bracket">}</span><span class="text-syntax-operator">&gt;</span>
      <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">YourApp</span> /<span class="text-syntax-operator">&gt;</span>
    <span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">ResponsiveProvider</span><span class="text-syntax-operator">&gt;</span>
  <span class="text-syntax-bracket">)</span>;
<span class="text-syntax-bracket">}</span>`;

const customScalingCode = `<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> ResponsiveProvider <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">"@vincent-huy-uit/react-native-responsive-ui"</span>;

<span class="text-syntax-keyword">const</span> customConfig = <span class="text-syntax-bracket">{</span>
  <span class="text-syntax-comment">// Base width for scaling calculations (default: 375)</span>
  <span class="text-syntax-property">baseWidth</span>: <span class="text-syntax-number">390</span>,

  <span class="text-syntax-comment">// Custom spacing tokens</span>
  <span class="text-syntax-property">space</span>: <span class="text-syntax-bracket">{</span>
    <span class="text-syntax-property">xs</span>: <span class="text-syntax-number">4</span>,
    <span class="text-syntax-property">sm</span>: <span class="text-syntax-number">8</span>,
    <span class="text-syntax-property">md</span>: <span class="text-syntax-number">16</span>,
    <span class="text-syntax-property">lg</span>: <span class="text-syntax-number">24</span>,
    <span class="text-syntax-property">xl</span>: <span class="text-syntax-number">32</span>,
    <span class="text-syntax-property">xxl</span>: <span class="text-syntax-number">48</span>,
  <span class="text-syntax-bracket">}</span>,

  <span class="text-syntax-comment">// Custom font size tokens</span>
  <span class="text-syntax-property">font</span>: <span class="text-syntax-bracket">{</span>
    <span class="text-syntax-property">caption</span>: <span class="text-syntax-number">12</span>,
    <span class="text-syntax-property">body</span>: <span class="text-syntax-number">14</span>,
    <span class="text-syntax-property">title</span>: <span class="text-syntax-number">18</span>,
    <span class="text-syntax-property">heading</span>: <span class="text-syntax-number">24</span>,
    <span class="text-syntax-property">hero</span>: <span class="text-syntax-number">32</span>,
  <span class="text-syntax-bracket">}</span>,

  <span class="text-syntax-comment">// Custom border radius tokens</span>
  <span class="text-syntax-property">radius</span>: <span class="text-syntax-bracket">{</span>
    <span class="text-syntax-property">sm</span>: <span class="text-syntax-number">4</span>,
    <span class="text-syntax-property">md</span>: <span class="text-syntax-number">8</span>,
    <span class="text-syntax-property">lg</span>: <span class="text-syntax-number">16</span>,
    <span class="text-syntax-property">full</span>: <span class="text-syntax-number">9999</span>,
  <span class="text-syntax-bracket">}</span>,
<span class="text-syntax-bracket">}</span>;

<span class="text-syntax-keyword">export default function</span> <span class="text-syntax-function">App</span>() <span class="text-syntax-bracket">{</span>
  <span class="text-syntax-keyword">return</span> <span class="text-syntax-bracket">(</span>
    <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">ResponsiveProvider</span> config<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span>customConfig<span class="text-syntax-bracket">}</span><span class="text-syntax-operator">&gt;</span>
      <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">YourApp</span> /<span class="text-syntax-operator">&gt;</span>
    <span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">ResponsiveProvider</span><span class="text-syntax-operator">&gt;</span>
  <span class="text-syntax-bracket">)</span>;
<span class="text-syntax-bracket">}</span>`;

const configOptions = [
  {
    name: "baseWidth",
    type: "number",
    default: "375",
    description: "Base screen width for scaling calculations",
  },
  {
    name: "breakpoints",
    type: "object",
    default: "{ mobile: 0, tablet: 768, desktop: 1024 }",
    description: "Custom breakpoint thresholds",
  },
  {
    name: "space",
    type: "object",
    default: "{ xs: 4, sm: 8, md: 16, lg: 24, xl: 32 }",
    description: "Custom spacing tokens",
  },
  {
    name: "font",
    type: "object",
    default: "{ body: 14, title: 18, heading: 24 }",
    description: "Custom font size tokens",
  },
  {
    name: "radius",
    type: "object",
    default: "{ sm: 4, md: 8, lg: 16 }",
    description: "Custom border radius tokens",
  },
];

export function ProviderPage() {
  return (
    <div>
      {/* Header */}
      <ApiHeader
        title="ResponsiveProvider"
        badge="Config"
        description="Wrap your app with ResponsiveProvider to customize breakpoints, scaling base width, and design tokens for your entire application."
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
              The default values work great for most apps, but when you need to
              match your design system or support custom breakpoints,{" "}
              <code className="text-primary-hover">ResponsiveProvider</code>{" "}
              lets you override any configuration globally.
            </p>
          </div>
        </div>
      </div>

      {/* Basic Usage */}
      <section className="mb-12">
        <SectionHeading>Basic Usage</SectionHeading>
        <p className="text-muted text-sm mb-4 leading-relaxed">
          Wrap your app root with the provider. Without a config prop, it uses
          default values.
        </p>
        <CodeBlock filename="App.tsx" code={basicUsageCode} />
      </section>

      {/* Custom Breakpoints */}
      <section className="mb-12">
        <SectionHeading>Custom Breakpoints</SectionHeading>
        <p className="text-muted text-sm mb-4 leading-relaxed">
          Override the default breakpoints to match your design requirements.
        </p>
        <CodeBlock filename="App.tsx" code={customBreakpointsCode} />
      </section>

      {/* Custom Design Tokens */}
      <section className="mb-12">
        <SectionHeading>Custom Design Tokens</SectionHeading>
        <p className="text-muted text-sm mb-4 leading-relaxed">
          Define your own spacing, typography, and radius tokens that align with
          your design system.
        </p>
        <CodeBlock filename="App.tsx" code={customScalingCode} />
      </section>

      {/* Config Options */}
      <section className="mb-12">
        <SectionHeading>Config Options</SectionHeading>
        <div className="bg-[#131620] border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                  Option
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                  Default
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {configOptions.map((option, index) => (
                <tr
                  key={index}
                  className={
                    index !== configOptions.length - 1
                      ? "border-b border-border"
                      : ""
                  }
                >
                  <td className="px-6 py-4">
                    <code className="text-primary-hover font-mono text-sm">
                      {option.name}
                    </code>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted font-mono">
                    {option.type}
                  </td>
                  <td className="px-6 py-4 text-xs text-muted font-mono">
                    {option.default}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted">
                    {option.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Navigation */}
      <PageNavigation
        previous={{
          title: "useDeviceType",
          href: "/docs/responsive/use-device-type",
        }}
        next={{
          title: "ResponsiveSwitch",
          href: "/docs/responsive-switch/component",
        }}
      />
    </div>
  );
}
