import { ArrowRightLeft } from "lucide-react";
import { ApiHeader } from "@/components/docs/ApiHeader";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsList } from "@/components/docs/PropsList";
import { VisualLogicDiagram } from "@/components/docs/VisualLogicDiagram";
import { PhonePreviewDemo } from "@/components/docs/PhonePreviewDemo";
import { PageNavigation } from "@/components/docs/PageNavigation";

const basicUsageCode = `<span class="text-syntax-keyword">import</span> React <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'react'</span>;
<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> ResponsiveSwitch <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'react-native-responsive-ui'</span>;
<span class="text-syntax-keyword">import</span> MobileFeed <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'./MobileFeed'</span>;
<span class="text-syntax-keyword">import</span> TabletDashboard <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'./TabletDashboard'</span>;

<span class="text-syntax-keyword">export default function</span> <span class="text-syntax-function">FeedScreen</span>() <span class="text-syntax-bracket">{</span>
  <span class="text-syntax-keyword">return</span> <span class="text-syntax-bracket">(</span>
    <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">ResponsiveSwitch</span>
      mobile<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span><span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">MobileFeed</span> showAds<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span><span class="text-syntax-keyword">true</span><span class="text-syntax-bracket">}</span> /<span class="text-syntax-operator">&gt;</span><span class="text-syntax-bracket">}</span>
      tablet<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span><span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">TabletDashboard</span> columns<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span><span class="text-syntax-number">3</span><span class="text-syntax-bracket">}</span> /<span class="text-syntax-operator">&gt;</span><span class="text-syntax-bracket">}</span>
    /<span class="text-syntax-operator">&gt;</span>
  <span class="text-syntax-bracket">)</span>;
<span class="text-syntax-bracket">}</span>`;

const componentProps = [
  {
    name: "mobile",
    type: "ReactNode",
    description: "The component to render on phone-sized screens.",
    required: true,
    icon: "mobile" as const,
  },
  {
    name: "tablet",
    type: "ReactNode",
    description:
      "The component for tablet screens. Falls back to 'mobile' if unspecified.",
    required: false,
    icon: "tablet" as const,
  },
  {
    name: "desktop",
    type: "ReactNode",
    description: "For large web screens or desktop apps.",
    required: false,
    icon: "desktop" as const,
  },
];

const logicRules = [
  { condition: "< 768px Width", result: "Render <Mobile />" },
  { condition: "≥ 768px Width", result: "Render <Tablet />" },
];

const interactiveDemoCode = `<span class="text-syntax-comment">// Hover over the device on the right to simulate a tablet!</span>

<span class="text-syntax-keyword">const</span> <span class="text-syntax-function">App</span> <span class="text-syntax-operator">=</span> () <span class="text-syntax-operator">=></span> <span class="text-syntax-bracket">(</span>
  <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">ResponsiveSwitch</span>
    mobile<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span>
      <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">View</span> style<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span>styles.list<span class="text-syntax-bracket">}</span><span class="text-syntax-operator">&gt;</span>
        <span class="text-syntax-comment">// Mobile: Single column list</span>
        data.<span class="text-syntax-function">map</span>(item <span class="text-syntax-operator">=></span> <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">Card</span> ... /<span class="text-syntax-operator">&gt;</span>)
      <span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">View</span><span class="text-syntax-operator">&gt;</span>
    <span class="text-syntax-bracket">}</span>
    tablet<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span>
      <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">View</span> style<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{</span>styles.grid<span class="text-syntax-bracket">}</span><span class="text-syntax-operator">&gt;</span>
        <span class="text-syntax-comment">// Tablet: 2-column grid</span>
        data.<span class="text-syntax-function">map</span>(item <span class="text-syntax-operator">=></span> <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">GridCard</span> ... /<span class="text-syntax-operator">&gt;</span>)
      <span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">View</span><span class="text-syntax-operator">&gt;</span>
    <span class="text-syntax-bracket">}</span>
  /<span class="text-syntax-operator">&gt;</span>
<span class="text-syntax-bracket">)</span>;`;

export function ResponsiveSwitchPage() {
  return (
    <div>
      {/* Header */}
      <ApiHeader
        title="ResponsiveSwitch"
        badge="Component"
        description="A declarative component that renders different children based on the current device breakpoint (mobile vs. tablet), simplifying platform-specific UI logic."
        demoUrl="https://snack.expo.dev"
        sourceUrl="https://github.com"
      />

      {/* Why use this? */}
      <div className="bg-[#131620] border border-border rounded-xl p-6 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center shrink-0">
            <ArrowRightLeft className="w-5 h-5 text-violet-400" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground mb-2">
              Why use this?
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Universal apps often require completely different navigation
              structures or layouts for phones and tablets. Instead of
              scattering{" "}
              <code className="text-primary-hover">if (isTablet)</code> checks
              throughout your JSX, <code className="text-primary-hover">ResponsiveSwitch</code> lets
              you clearly define platform-specific variants in a clean, readable
              way.
            </p>
          </div>
        </div>
      </div>

      {/* Basic Usage */}
      <section className="mb-12">
        <SectionHeading>Basic Usage</SectionHeading>
        <p className="text-muted text-sm mb-4 leading-relaxed">
          Import the component and provide your mobile and tablet specific
          layouts as props. The library handles the detection and switching
          automatically.
        </p>
        <div className="text-xs text-muted mb-2 text-right">
          screens/FeedScreen.tsx
        </div>
        <CodeBlock filename="screens/FeedScreen.tsx" code={basicUsageCode} />
      </section>

      {/* Component Props */}
      <section className="mb-12">
        <SectionHeading>Component Props</SectionHeading>
        <p className="text-muted text-sm mb-6 leading-relaxed">
          Configure how your component behaves across different screen sizes.
        </p>
        <div className="grid lg:grid-cols-2 gap-6">
          <PropsList props={componentProps} />
          <VisualLogicDiagram rules={logicRules} />
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="mb-12">
        <SectionHeading>Interactive Demo</SectionHeading>
        <PhonePreviewDemo
          code={interactiveDemoCode}
          filename="App.js"
          snackUrl="https://snack.expo.dev"
        />
      </section>

      {/* Navigation */}
      <PageNavigation
        previous={{
          title: "useBreakpoint",
          href: "/docs/responsive/use-breakpoint",
        }}
        next={{
          title: "Layout Patterns",
          href: "/docs/responsive-switch/layout-patterns",
        }}
      />
    </div>
  );
}

