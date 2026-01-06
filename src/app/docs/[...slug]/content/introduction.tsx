import { Type, Layout, Diamond } from "lucide-react";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { DemoPreview } from "@/components/docs/DemoPreview";
import { UseCaseCard } from "@/components/docs/UseCaseCard";

const introCode = `<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span>
  <span class="text-syntax-property">scale</span>,
  <span class="text-syntax-property">verticalScale</span>,
  <span class="text-syntax-property">moderateScale</span>
<span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'react-native-size-matters'</span>;

<span class="text-syntax-keyword">const</span> styles = StyleSheet.<span class="text-syntax-function">create</span>(<span class="text-syntax-bracket">{</span>
  <span class="text-syntax-property">container</span>: <span class="text-syntax-bracket">{</span>
    <span class="text-syntax-comment">// 1. Scale width & margin</span>
    <span class="text-syntax-property">width</span>: <span class="text-syntax-function">scale</span>(<span class="text-syntax-number">300</span>),
    <span class="text-syntax-comment">// 2. Scale height vertically</span>
    <span class="text-syntax-property">height</span>: <span class="text-syntax-function">verticalScale</span>(<span class="text-syntax-number">200</span>),
    <span class="text-syntax-comment">// 3. Scale padding moderately</span>
    <span class="text-syntax-property">padding</span>: <span class="text-syntax-function">moderateScale</span>(<span class="text-syntax-number">10</span>, <span class="text-syntax-number">0.3</span>)
  <span class="text-syntax-bracket">}</span>,
  <span class="text-syntax-property">text</span>: <span class="text-syntax-bracket">{</span>
    <span class="text-syntax-comment">// Scales font perfectly</span>
    <span class="text-syntax-property">fontSize</span>: <span class="text-syntax-function">scale</span>(<span class="text-syntax-number">14</span>)
  <span class="text-syntax-bracket">}</span>
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
        &ldquo;Scale sizes by default, adjust layout values when needed, and
        split layouts only when the UX is fundamentally different.&rdquo;
      </blockquote>

      {/* Description */}
      <p className="text-muted text-lg mb-10 leading-relaxed">
        A lightweight, zero-dependency utility for creating responsive layouts
        in React Native and Expo.
      </p>

      {/* Main content grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* Code block */}
        <CodeBlock filename="Philosophy.js" code={introCode} />

        {/* Demo preview */}
        <DemoPreview
          title="Write once, scale everywhere"
          description="Your UI automatically adapts to different screen densities and aspect ratios, maintaining the visual integrity of your design without manual media queries."
        />
      </div>

      {/* When to use section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          When to use linear scaling
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <UseCaseCard icon={<Type className="w-6 h-6" />} title="Typography" />
          <UseCaseCard
            icon={<Layout className="w-6 h-6" />}
            title="Spacing & Layout"
          />
          <UseCaseCard
            icon={<Diamond className="w-6 h-6" />}
            title="Iconography"
          />
        </div>
      </section>
    </div>
  );
}

