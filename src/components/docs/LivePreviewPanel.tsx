"use client";

import { useState } from "react";
import Link from "next/link";
import { Smartphone, Tablet, Monitor, ExternalLink } from "lucide-react";

type DeviceMode = "phone" | "tablet" | "desktop";

interface LivePreviewPanelProps {
  snackUrl?: string;
  children?: React.ReactNode;
}

export function LivePreviewPanel({ snackUrl, children }: LivePreviewPanelProps) {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>("desktop");

  const deviceModes: { mode: DeviceMode; icon: React.ReactNode }[] = [
    { mode: "phone", icon: <Smartphone className="w-4 h-4" /> },
    { mode: "tablet", icon: <Tablet className="w-4 h-4" /> },
    { mode: "desktop", icon: <Monitor className="w-4 h-4" /> },
  ];

  // Get columns based on device mode
  const getColumns = () => {
    switch (deviceMode) {
      case "phone":
        return 1;
      case "tablet":
        return 2;
      case "desktop":
        return 4;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-semibold text-muted tracking-wider">
          LIVE PREVIEW
        </h3>
        {snackUrl && (
          <Link
            href={snackUrl}
            target="_blank"
            className="flex items-center gap-1.5 text-xs text-primary-hover hover:text-primary transition-colors"
          >
            Open in Snack
            <ExternalLink className="w-3 h-3" />
          </Link>
        )}
      </div>

      {/* Preview panel */}
      <div className="bg-[#131620] border border-border rounded-xl overflow-hidden">
        {/* Device mode selector */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <span className="text-xs text-muted">Preview Mode</span>
          <div className="flex items-center gap-1">
            {deviceModes.map(({ mode, icon }) => (
              <button
                key={mode}
                onClick={() => setDeviceMode(mode)}
                className={`p-2 rounded-lg transition-colors ${
                  deviceMode === mode
                    ? "bg-primary/20 text-primary-hover"
                    : "text-muted hover:text-foreground hover:bg-secondary"
                }`}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* Preview area */}
        <div className="p-6 min-h-[300px] flex items-center justify-center">
          {children || (
            <ResponsiveGridPreview columns={getColumns()} />
          )}
        </div>
      </div>
    </div>
  );
}

function ResponsiveGridPreview({ columns }: { columns: number }) {
  return (
    <div
      className="w-full max-w-md grid gap-3"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {[1, 2, 3, 4].map((num) => (
        <div
          key={num}
          className="aspect-square bg-[#1e2235] border border-[#2a2a4a] rounded-lg flex items-center justify-center relative overflow-hidden"
        >
          {/* Grid pattern background */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />
          <span className="text-primary-hover font-medium relative z-10">
            {num}
          </span>
        </div>
      ))}
    </div>
  );
}

