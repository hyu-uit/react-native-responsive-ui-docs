import { Quote } from "lucide-react";
import Image from "next/image";

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
              &ldquo;This library removed 90% of the styling boilerplate we used
              to write for our Expo apps. The responsive hooks are a game
              changer.&rdquo;
            </blockquote>

            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-muted/30 overflow-hidden">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=alex"
                  alt="Alex Chen"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-medium text-foreground">Alex Chen</div>
                <div className="text-sm text-muted">
                  Senior React Native Engineer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
