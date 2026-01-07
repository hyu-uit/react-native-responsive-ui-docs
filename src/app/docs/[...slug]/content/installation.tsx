import { StepCard } from "@/components/docs/StepCard";
import { TabbedCodeBlock } from "@/components/docs/TabbedCodeBlock";
import { InfoCard } from "@/components/docs/InfoCard";
import { CodeBlock } from "@/components/docs/CodeBlock";

const installTabs = [
  {
    id: "npm",
    label: "NPM",
    code: "npm install @vincent-huy-uit/react-native-responsive-ui",
  },
  {
    id: "yarn",
    label: "YARN",
    code: "yarn add @vincent-huy-uit/react-native-responsive-ui",
  },
  {
    id: "expo",
    label: "EXPO",
    code: "npx expo install @vincent-huy-uit/react-native-responsive-ui",
  },
];

const verifyCode = `<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> s, useDeviceType <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">"@vincent-huy-uit/react-native-responsive-ui"</span>;
<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> View, Text <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">"react-native"</span>;

<span class="text-syntax-keyword">export default function</span> <span class="text-syntax-function">App</span>() <span class="text-syntax-bracket">{</span>
  <span class="text-syntax-keyword">const</span> device = <span class="text-syntax-function">useDeviceType</span>();

  <span class="text-syntax-keyword">return</span> <span class="text-syntax-bracket">(</span>
    <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">View</span> style<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{{</span> <span class="text-syntax-property">flex</span>: <span class="text-syntax-number">1</span>, <span class="text-syntax-property">justifyContent</span>: <span class="text-syntax-string">"center"</span>, <span class="text-syntax-property">alignItems</span>: <span class="text-syntax-string">"center"</span> <span class="text-syntax-bracket">}}</span><span class="text-syntax-operator">&gt;</span>
      <span class="text-syntax-operator">&lt;</span><span class="text-syntax-component">Text</span> style<span class="text-syntax-operator">=</span><span class="text-syntax-bracket">{{</span> <span class="text-syntax-property">fontSize</span>: <span class="text-syntax-function">s</span>(<span class="text-syntax-number">24</span>) <span class="text-syntax-bracket">}}</span><span class="text-syntax-operator">&gt;</span>
        ✅ Library works! Device: <span class="text-syntax-bracket">{</span>device<span class="text-syntax-bracket">}</span>
      <span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">Text</span><span class="text-syntax-operator">&gt;</span>
    <span class="text-syntax-operator">&lt;</span>/<span class="text-syntax-component">View</span><span class="text-syntax-operator">&gt;</span>
  <span class="text-syntax-bracket">)</span>;
<span class="text-syntax-bracket">}</span>`;

export function InstallationPage() {
  return (
    <div>
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Installation
      </h1>

      {/* Description */}
      <p className="text-muted text-lg mb-10 leading-relaxed">
        Get up and running with react-native-responsive-ui in seconds. No native
        linking required.
      </p>

      {/* Steps grid */}
      <div className="grid lg:grid-cols-2 gap-6 mb-12">
        {/* Left column: Step 1 + Expo info */}
        <div className="flex flex-col gap-6">
          <StepCard step={1} title="Install dependency">
            <TabbedCodeBlock tabs={installTabs} />
          </StepCard>

          {/* Expo Compatible info */}
          <InfoCard variant="info" title="Expo Compatible">
            This library is a pure JavaScript solution. It works perfectly with
            Expo Go, Expo Dev Client, and bare React Native projects without any
            linking.
          </InfoCard>
        </div>

        {/* Right column: Step 2 */}
        <StepCard step={2} title="Verify Installation" className="h-fit">
          <CodeBlock filename="Verify.js" code={verifyCode} />
        </StepCard>
      </div>

      {/* Troubleshooting section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Troubleshooting
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard variant="warning" title="TypeScript Definitions">
            If you are using TypeScript, types are included in the package. No
            additional type definitions required.
          </InfoCard>
          <InfoCard variant="info" title="Reset Cache">
            If you encounter resolution errors after installing, try resetting
            your metro bundler cache:{" "}
            <code className="text-primary-hover">npx expo start -c</code>.
          </InfoCard>
        </div>
      </section>
    </div>
  );
}
