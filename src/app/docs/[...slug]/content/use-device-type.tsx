import { Lightbulb } from "lucide-react";
import { ApiHeader } from "@/components/docs/ApiHeader";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PageNavigation } from "@/components/docs/PageNavigation";

const basicUsageCode = `<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span> useDeviceType <span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">"@vincent-huy-uit/react-native-responsive-ui"</span>;

<span class="text-syntax-keyword">const</span> device = <span class="text-syntax-function">useDeviceType</span>();
<span class="text-syntax-comment">// Returns: "mobile" | "tablet" | "desktop"</span>`;

const returnValues = [
  {
    value: '"mobile"',
    description: "Screen width < 768px (phones)",
  },
  {
    value: '"tablet"',
    description: "Screen width ≥ 768px and < 1024px",
  },
  {
    value: '"desktop"',
    description: "Screen width ≥ 1024px (web, large tablets)",
  },
];

export function UseDeviceTypePage() {
  return (
    <div>
      {/* Header */}
      <ApiHeader
        title="useDeviceType"
        badge="Hook"
        description="A React hook that returns the current device type based on screen width. Use it to conditionally render content or apply device-specific logic."
        demoUrl="https://snack.expo.dev"
        sourceUrl="https://github.com"
        hasButtons={false}
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
              When you need to know the device type for conditional logic but
              don&apos;t need to render completely different components. Perfect
              for adjusting behavior, showing/hiding elements, or customizing
              content based on device category.
            </p>
          </div>
        </div>
      </div>

      {/* Basic Usage */}
      <section className="mb-12">
        <SectionHeading>Basic Usage</SectionHeading>
        <p className="text-muted text-sm mb-4 leading-relaxed">
          Import the hook and call it in your component. It automatically
          updates when the screen size changes.
        </p>
        <CodeBlock filename="App.tsx" code={basicUsageCode} />
      </section>

      {/* Return Values */}
      <section className="mb-12">
        <SectionHeading>Return Values</SectionHeading>
        <p className="text-muted text-sm mb-6 leading-relaxed">
          The hook returns one of three string values based on the current
          screen width.
        </p>
        <div className="bg-[#131620] border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {returnValues.map((item, index) => (
                <tr
                  key={index}
                  className={
                    index !== returnValues.length - 1
                      ? "border-b border-border"
                      : ""
                  }
                >
                  <td className="px-6 py-4">
                    <code className="text-primary-hover font-mono text-sm">
                      {item.value}
                    </code>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted">
                    {item.description}
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
          title: "responsive()",
          href: "/docs/responsive/responsive-function",
        }}
        next={{
          title: "ResponsiveProvider",
          href: "/docs/config/provider",
        }}
      />
    </div>
  );
}
