import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="min-h-[80vh] flex items-center py-20 px-6 relative overflow-hidden bg-[#0F1428]">
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Card with gradient border */}
        <div className="relative rounded-2xl p-[1px] overflow-hidden">
          {/* Gradient border */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.3))",
            }}
          />

          {/* Card content */}
          <div className="relative p-10 md:p-12 bg-[#0F1428] rounded-2xl text-center">
            <div className="flex justify-center mb-8">
              <Quote className="w-10 h-10 text-primary" />
            </div>

            <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
              &ldquo;I hope Expo team can create a function that can use .tablet
              or .mobile file name to render base on device&rdquo;
            </blockquote>

            <div className="flex items-center justify-center gap-3">
              <div className="text-center">
                <div className="font-medium text-foreground">Vincent Huynh</div>
                <div className="text-sm text-muted">
                  Author | React Native Engineer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
