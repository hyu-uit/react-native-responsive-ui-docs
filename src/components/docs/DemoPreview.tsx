interface DemoPreviewProps {
  title: string;
  description: string;
}

export function DemoPreview({ title, description }: DemoPreviewProps) {
  return (
    <div className="bg-[#131620] border border-border rounded-2xl overflow-hidden">
      {/* Device visualization */}
      <div className="p-8 flex items-end justify-center gap-4 bg-[#0D0F1B]">
        {/* iOS */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-24 bg-primary rounded-lg" />
          <span className="text-xs text-muted">iOS</span>
        </div>
        {/* Android */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-20 h-28 bg-primary rounded-lg" />
          <span className="text-xs text-muted">Android</span>
        </div>
        {/* Web */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-28 h-20 bg-primary rounded-lg" />
          <span className="text-xs text-muted">Web</span>
        </div>
      </div>

      {/* ONE CODEBASE label */}
      <div className="py-3 text-center border-t border-border">
        <span className="text-sm font-medium text-muted tracking-wider">
          ONE CODEBASE
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
