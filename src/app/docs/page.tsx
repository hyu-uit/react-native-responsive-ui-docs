import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center text-white font-bold">
              R
            </div>
            <span className="font-semibold">Responsive UI</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/docs" className="text-[var(--foreground)] font-medium">
              Docs
            </Link>
            <Link
              href="https://github.com/hyu-uit/react-native-responsive-ui"
              target="_blank"
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-[var(--muted)] text-lg mb-8">
            Learn how to use React Native Responsive UI in your projects.
          </p>

          {/* Quick Start */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>

            <div className="bg-[var(--code-bg)] border border-[var(--border)] rounded-xl p-6 mb-6">
              <p className="text-sm text-[var(--muted)] mb-2">
                Install the package:
              </p>
              <code className="text-[var(--primary-hover)]">
                npm install @vincent-huy-uit/react-native-responsive-ui
              </code>
            </div>

            <div className="bg-[var(--code-bg)] border border-[var(--border)] rounded-xl overflow-hidden">
              <div className="px-4 py-2 border-b border-[var(--border)] text-sm text-[var(--muted)]">
                Basic Usage
              </div>
              <pre className="p-4 text-sm overflow-x-auto">
                <code>{`import { createScaledStyles, s, space, font } from '@vincent-huy-uit/react-native-responsive-ui';

// Option 1: Auto-scale entire StyleSheet (recommended)
const styles = createScaledStyles({
  container: { padding: 16, gap: 12 },
  title: { fontSize: 24 },
});

// Option 2: Scale individual values
<View style={{ padding: s(16) }} />

// Option 3: Use design tokens
<View style={{ padding: space.md, fontSize: font.body }} />`}</code>
              </pre>
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Core Features</h2>

            <div className="grid gap-4">
              {[
                {
                  title: "createScaledStyles()",
                  desc: "Drop-in replacement for StyleSheet.create() that auto-scales all numeric values.",
                },
                {
                  title: "s(value)",
                  desc: "Scale any individual value. Use for inline styles or dynamic values.",
                },
                {
                  title: "responsive({ mobile, tablet, desktop })",
                  desc: "Get different values based on device type.",
                },
                {
                  title: "useDeviceType()",
                  desc: "Hook that returns 'mobile', 'tablet', or 'desktop'.",
                },
                {
                  title: "<ResponsiveSwitch />",
                  desc: "Render different components per device type.",
                },
                {
                  title: "Design Tokens",
                  desc: "space.md, font.body, radius.lg - pre-scaled design tokens.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-4 bg-[var(--secondary)] border border-[var(--border)] rounded-xl"
                >
                  <code className="text-[var(--primary-hover)] font-medium">
                    {feature.title}
                  </code>
                  <p className="text-sm text-[var(--muted)] mt-1">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Coming Soon */}
          <section className="p-6 bg-[var(--secondary)] border border-[var(--border)] rounded-xl text-center">
            <p className="text-[var(--muted)]">
              📚 Full documentation coming soon...
            </p>
            <p className="text-sm text-[var(--muted)] mt-2">
              For now, check out the{" "}
              <Link
                href="https://github.com/hyu-uit/react-native-responsive-ui#readme"
                target="_blank"
                className="text-[var(--primary-hover)] hover:underline"
              >
                README on GitHub
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
