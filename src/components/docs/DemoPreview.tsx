interface DemoPreviewProps {
  title: string;
  description: string;
}

export function DemoPreview({ title, description }: DemoPreviewProps) {
  return (
    <div className="bg-[#131620] border border-border rounded-2xl overflow-hidden">
      {/* Device visualization */}
      <div className="p-8 flex items-end justify-center gap-6 bg-[#0D0F1B]">
        {/* Phone */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-20 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-[8px] text-white font-medium">375px</span>
          </div>
          <span className="text-xs text-muted">Phone</span>
        </div>
        {/* Tablet */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-28 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-[10px] text-white font-medium">768px</span>
          </div>
          <span className="text-xs text-muted">Tablet</span>
        </div>
        {/* Desktop */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-32 h-20 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-xs text-white font-medium">1440px</span>
          </div>
          <span className="text-xs text-muted">Desktop</span>
        </div>
      </div>

      {/* AUTO SCALE label */}
      <div className="py-3 text-center border-t border-border">
        <span className="text-sm font-medium text-muted tracking-wider">
          AUTO SCALE
        </span>
      </div>

      {/* Description section */}
      <div className="p-6 border-t border-border">
        <h4 className="text-lg font-semibold text-foreground mb-2">{title}</h4>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
