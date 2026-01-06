import { StepCard } from "@/components/docs/StepCard";
import { TabbedCodeBlock } from "@/components/docs/TabbedCodeBlock";
import { InfoCard } from "@/components/docs/InfoCard";
import { CodeBlock } from "@/components/docs/CodeBlock";

const installTabs = [
  { id: "npm", label: "NPM", code: "npm install react-native-size-matters" },
  { id: "yarn", label: "YARN", code: "yarn add react-native-size-matters" },
  {
    id: "expo",
    label: "EXPO",
    code: "npx expo install react-native-size-matters",
  },
];

const verifyCode = `<span class="text-syntax-keyword">import</span> React <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'react'</span>;
<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> View, Text <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'react-native'</span>;

<span class="text-syntax-comment">// Import the functions</span>
<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> scale, verticalScale <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">'react-native-size-matters'</span>;

<span class="text-syntax-keyword">const</span> <span class="text-syntax-function">App</span> = () <span class="text-syntax-operator">=></span> <span class="text-syntax-bracket">(</span>
  <span class="text-syntax-bracket">&lt;</span><span class="text-syntax-component">View</span> style=<span class="text-syntax-bracket">{{</span>
    <span class="text-syntax-property">width</span>: <span class="text-syntax-function">scale</span>(<span class="text-syntax-number">300</span>),
    <span class="text-syntax-property">height</span>: <span class="text-syntax-function">verticalScale</span>(<span class="text-syntax-number">50</span>),
    <span class="text-syntax-property">backgroundColor</span>: <span class="text-syntax-string">'red'</span>
  <span class="text-syntax-bracket">}}</span> /&gt;
<span class="text-syntax-bracket">)</span>;

<span class="text-syntax-keyword">export default</span> App;`;

export function InstallationPage() {
  return (
    <div>
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Installation
      </h1>

      {/* Description */}
      <p className="text-muted text-lg mb-10 leading-relaxed">
        Get up and running with RN Size Matters in seconds. No native linking
        required.
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
          <CodeBlock filename="App.js" code={verifyCode} />
        </StepCard>
      </div>

      {/* Troubleshooting section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">
          Troubleshooting
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard variant="warning" title="TypeScript Definitions">
            If you are using TypeScript, types are included in the package. You
            don&apos;t need to install{" "}
            <code className="text-primary-hover">
              @types/react-native-size-matters
            </code>
            .
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
