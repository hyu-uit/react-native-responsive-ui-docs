import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface InteractiveDemoProps {
  code: string;
  snackUrl?: string;
}

export function InteractiveDemo({ code, snackUrl }: InteractiveDemoProps) {
  return (
    <div className="bg-[#131620] border border-border rounded-xl overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Code editor side */}
        <div className="border-r border-border">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs text-muted">App.js</span>
            </div>
            {snackUrl && (
              <Link
                href={snackUrl}
                target="_blank"
                className="flex items-center gap-1.5 px-3 py-1 text-xs text-primary-hover hover:text-primary transition-colors"
              >
                Open in Snack
                <ExternalLink className="w-3 h-3" />
              </Link>
            )}
          </div>
          {/* Code */}
          <pre className="p-4 text-sm leading-relaxed overflow-x-auto max-h-[400px] overflow-y-auto">
            <code dangerouslySetInnerHTML={{ __html: code }} />
          </pre>
        </div>

        {/* Phone preview side */}
        <div className="flex items-center justify-center p-8 bg-[#0D0F1B]">
          <div className="relative">
            {/* Phone frame */}
            <div className="w-[200px] h-[400px] bg-[#1a1a2e] rounded-[32px] border-4 border-[#2a2a3e] p-3 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#0D0F1B] rounded-full" />
              {/* Screen */}
              <div className="w-full h-full bg-[#0D0F1B] rounded-[24px] flex items-center justify-center">
                {/* Demo box */}
                <div className="w-[120px] h-[120px] bg-primary rounded-3xl flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-white text-sm font-medium">
                    Scaled Box
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

