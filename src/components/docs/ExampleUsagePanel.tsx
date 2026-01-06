import { ReactNode } from "react";

interface ExampleUsagePanelProps {
  title?: string;
  badge?: string;
  filename: string;
  children: ReactNode;
}

export function ExampleUsagePanel({
  title = "EXAMPLE USAGE",
  badge,
  filename,
  children,
}: ExampleUsagePanelProps) {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-semibold text-muted tracking-wider">
          {title}
        </h3>
        {badge && (
          <span className="px-2 py-1 text-xs font-medium bg-secondary border border-border text-muted rounded">
            {badge}
          </span>
        )}
      </div>

      {/* Code editor */}
      <div className="bg-[#131620] border border-border rounded-xl overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-xs text-muted">{filename}</span>
        </div>

        {/* Code content */}
        <div className="p-4 overflow-x-auto">
          <pre className="text-sm leading-relaxed !bg-transparent !border-0 !p-0">
            <code>{children}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

