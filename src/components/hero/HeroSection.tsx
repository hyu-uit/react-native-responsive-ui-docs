import { ArrowRight, Play } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { InstallCommand } from "../ui/InstallCommand";
import { CodePreview } from "./CodePreview";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 pb-20 px-6 relative overflow-hidden bg-[#0F1428]">
      {/* Light circle gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 50%, rgba(139, 92, 246, 0.1), transparent),
            radial-gradient(ellipse 50% 30% at 20% 80%, rgba(59, 130, 246, 0.08), transparent)
          `,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div>
            <Badge dot>v1.0 is now available</Badge>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6 leading-tight">
              Universal UI for{" "}
              <span className="gradient-text">React Native</span> &amp; Expo
            </h1>

            <p className="text-lg text-muted mb-8 leading-relaxed max-w-xl">
              Write once, scale perfectly. A code-first approach to responsive
              design handling scaling, values, and layouts automatically.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button href="/docs">
                View Examples
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/demos" variant="secondary">
                <Play className="w-4 h-4" />
                Try Demos
              </Button>
            </div>

            <InstallCommand command="npm install react-native-responsive-ui" />
          </div>

          {/* Right column - Code Preview */}
          <div className="hidden lg:block">
            <CodePreview />
          </div>
        </div>
      </div>
    </section>
  );
}
