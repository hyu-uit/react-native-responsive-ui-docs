"use client";

import Link from "next/link";

export default function Home() {
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
            <Link
              href="/docs"
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              Docs
            </Link>
            <Link
              href="https://github.com/hyu-uit/react-native-responsive-ui"
              target="_blank"
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.npmjs.com/package/@vincent-huy-uit/react-native-responsive-ui"
              target="_blank"
              className="px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-lg transition-colors text-sm font-medium"
            >
              npm
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--secondary)] rounded-full text-sm text-[var(--muted)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]"></span>
            Zero Configuration Required
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Responsive Design</span>
            <br />
            for React Native
          </h1>

          <p className="text-xl text-[var(--muted)] mb-10 max-w-2xl mx-auto leading-relaxed">
            Build beautiful UIs that look perfect on{" "}
            <strong className="text-[var(--foreground)]">phones</strong>,{" "}
            <strong className="text-[var(--foreground)]">tablets</strong>, and{" "}
            <strong className="text-[var(--foreground)]">iPads</strong> with
            minimal code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs"
              className="px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-xl transition-colors font-medium glow"
            >
              Get Started
            </Link>
            <code className="px-6 py-3 bg-[var(--code-bg)] border border-[var(--border)] rounded-xl text-sm font-mono">
              npm install @vincent-huy-uit/react-native-responsive-ui
            </code>
          </div>
        </div>
      </section>

      {/* Code Preview */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--code-bg)] border border-[var(--border)] rounded-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-[var(--muted)]">App.tsx</span>
            </div>
            <pre className="p-6 text-sm leading-relaxed overflow-x-auto border-0 rounded-none">
              <code>{`import { createScaledStyles, responsive } from '@vincent-huy-uit/react-native-responsive-ui';

function ProductGrid() {
  const columns = responsive({ mobile: 2, tablet: 3, desktop: 4 });
  
  return (
    <FlatList
      data={products}
      numColumns={columns}
      renderItem={({ item }) => <ProductCard {...item} />}
    />
  );
}

// All numeric values auto-scaled!
const styles = createScaledStyles({
  container: { padding: 16, gap: 12 },
  title: { fontSize: 24, fontWeight: 'bold' },
  card: { borderRadius: 12, padding: 16 },
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-[var(--secondary)] border border-[var(--border)] rounded-2xl card-hover"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {feature.description}
                </p>
                <code className="inline-block mt-4 text-xs text-[var(--primary-hover)] bg-[var(--code-bg)] px-3 py-1 rounded-md">
                  {feature.code}
                </code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-[var(--muted)] mb-8">
            Install the package and start building responsive UIs in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/docs"
              className="px-8 py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white rounded-xl transition-colors font-medium"
            >
              Read the Docs
            </Link>
            <Link
              href="https://github.com/hyu-uit/react-native-responsive-ui"
              target="_blank"
              className="px-8 py-3 bg-[var(--secondary)] border border-[var(--border)] hover:border-[var(--muted)] text-white rounded-xl transition-colors font-medium"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted)]">
            © 2024 React Native Responsive UI. MIT License.
          </p>
          <div className="flex items-center gap-6 text-sm text-[var(--muted)]">
            <Link href="/docs" className="hover:text-[var(--foreground)]">
              Documentation
            </Link>
            <Link
              href="https://github.com/hyu-uit/react-native-responsive-ui"
              target="_blank"
              className="hover:text-[var(--foreground)]"
            >
              GitHub
            </Link>
            <Link
              href="https://www.npmjs.com/package/@vincent-huy-uit/react-native-responsive-ui"
              target="_blank"
              className="hover:text-[var(--foreground)]"
            >
              npm
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: "📐",
    title: "Auto Scaling",
    description:
      "Scale all your sizes automatically. Just use createScaledStyles() and everything works on all devices.",
    code: "createScaledStyles({ padding: 16 })",
  },
  {
    icon: "📱",
    title: "Device Detection",
    description:
      "Detect mobile, tablet, or desktop automatically. Get different values per device type.",
    code: 'useDeviceType() → "tablet"',
  },
  {
    icon: "🎯",
    title: "Responsive Values",
    description:
      "Pick different values for each breakpoint. Mobile-first with smart fallbacks.",
    code: "responsive({ mobile: 2, tablet: 4 })",
  },
  {
    icon: "🔄",
    title: "Layout Split",
    description:
      "Render completely different components per device. Perfect for master-detail layouts.",
    code: "<ResponsiveSwitch mobile={...} />",
  },
  {
    icon: "🎨",
    title: "Design Tokens",
    description:
      "Pre-built spacing, font, and radius tokens. Customizable via Provider.",
    code: "space.md, font.body, radius.lg",
  },
  {
    icon: "⚡",
    title: "Aspect-Aware",
    description:
      "Smart scaling that works on iPads and unusual aspect ratios. Zero config needed.",
    code: 'scalingStrategy: "aspectAware"',
  },
];
