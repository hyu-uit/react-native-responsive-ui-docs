import { ExampleUsagePanel } from "@/components/docs/ExampleUsagePanel";
import { LivePreviewPanel } from "@/components/docs/LivePreviewPanel";
import { PageNavigation } from "@/components/docs/PageNavigation";

const exampleCode = `import { responsive } from 'rn-responsive';

const ResponsiveGrid = () => {
  // Define values for each breakpoint directly
  const columns = responsive({
    mobile: 1,
    tablet: 2,
    desktop: 4
  });

  const spacing = responsive({
    mobile: 16,
    desktop: 32
  });

  return (
    <Grid
      numColumns={columns}
      gap={spacing}
    >
      {/* Items will reflow automatically */}
    </Grid>
  );
};`;

export function ResponsiveFunctionPage() {
  return (
    <div>
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Responsive Values
      </h1>

      {/* Description */}
      <p className="text-muted text-lg mb-10 leading-relaxed max-w-2xl">
        Change layout-related values by device without creating new files or
        complex conditional logic.
      </p>

      {/* Side-by-side layout */}
      <div className="grid lg:grid-cols-2 gap-6 mb-12">
        {/* Left: Example Usage */}
        <ExampleUsagePanel filename="App.tsx" badge="TypeScript">
          <span
            dangerouslySetInnerHTML={{
              __html: formatCode(exampleCode),
            }}
          />
        </ExampleUsagePanel>

        {/* Right: Live Preview */}
        <LivePreviewPanel snackUrl="https://snack.expo.dev" />
      </div>

      {/* Navigation */}
      <PageNavigation
        previous={{
          title: "Design Tokens",
          href: "/docs/auto-scale/design-tokens",
        }}
        next={{
          title: "useDeviceType",
          href: "/docs/responsive/use-device-type",
        }}
      />
    </div>
  );
}

function formatCode(code: string): string {
  return code
    .replace(
      /import\s*\{([^}]+)\}\s*from\s*'([^']+)'/g,
      '<span class="text-syntax-keyword">import</span> <span class="text-syntax-bracket">{</span>$1<span class="text-syntax-bracket">}</span> <span class="text-syntax-keyword">from</span> <span class="text-syntax-string">\'$2\'</span>'
    )
    .replace(
      /const\s+(\w+)\s*=/g,
      '<span class="text-syntax-keyword">const</span> <span class="text-syntax-function">$1</span> <span class="text-syntax-operator">=</span>'
    )
    .replace(/(\w+):/g, '<span class="text-syntax-property">$1</span>:')
    .replace(/(\d+)/g, '<span class="text-syntax-number">$1</span>')
    .replace(
      /\/\*([^*]+)\*\//g,
      '<span class="text-syntax-comment">/*$1*/</span>'
    )
    .replace(
      /\/\/([^\n]+)/g,
      '<span class="text-syntax-comment">//$1</span>'
    )
    .replace(
      /return\s*\(/g,
      '<span class="text-syntax-keyword">return</span> ('
    )
    .replace(/<Grid/g, '&lt;<span class="text-syntax-component">Grid</span>')
    .replace(/<\/Grid>/g, '&lt;/<span class="text-syntax-component">Grid</span>&gt;')
    .replace(/\{columns\}/g, '<span class="text-syntax-bracket">{</span>columns<span class="text-syntax-bracket">}</span>')
    .replace(/\{spacing\}/g, '<span class="text-syntax-bracket">{</span>spacing<span class="text-syntax-bracket">}</span>');
}

