"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Smartphone, Tablet, Monitor } from "lucide-react";

type DeviceMode = "phone" | "tablet" | "desktop";

interface InteractiveDemoProps {
  code: string;
  snackUrl?: string;
  previewType?: "box" | "card";
}

export function InteractiveDemo({
  code,
  snackUrl,
  previewType = "box",
}: InteractiveDemoProps) {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>("phone");

  const deviceModes: { mode: DeviceMode; icon: React.ReactNode }[] = [
    { mode: "phone", icon: <Smartphone className="w-4 h-4" /> },
    { mode: "tablet", icon: <Tablet className="w-4 h-4" /> },
    { mode: "desktop", icon: <Monitor className="w-4 h-4" /> },
  ];

  // Box sizes scale based on device
  const getBoxSize = () => {
    switch (deviceMode) {
      case "phone":
        return { width: 120, height: 120, label: "s(200)" };
      case "tablet":
        return { width: 160, height: 160, label: "s(200)" };
      case "desktop":
        return { width: 200, height: 200, label: "s(200)" };
    }
  };

  // Card sizes scale based on device (simulating s() function)
  const getCardSize = () => {
    switch (deviceMode) {
      case "phone":
        return {
          padding: 12,
          borderRadius: 9,
          titleSize: 18,
          subtitleSize: 11,
          gap: 6,
        };
      case "tablet":
        return {
          padding: 15,
          borderRadius: 11,
          titleSize: 22,
          subtitleSize: 13,
          gap: 7,
        };
      case "desktop":
        return {
          padding: 18,
          borderRadius: 14,
          titleSize: 26,
          subtitleSize: 15,
          gap: 9,
        };
    }
  };

  const boxSize = getBoxSize();
  const cardSize = getCardSize();

  return (
    <div className="bg-[#131620] border border-border rounded-xl overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[450px]">
        {/* Code editor side */}
        <div className="border-r border-border flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs text-muted">Demo.js</span>
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
          <pre className="p-4 text-sm leading-relaxed overflow-x-auto overflow-y-auto flex-1">
            <code dangerouslySetInnerHTML={{ __html: code }} />
          </pre>
        </div>

        {/* Preview side */}
        <div className="bg-[#0D0F1B] flex flex-col">
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
          <div className="flex items-center justify-center p-8 flex-1">
            <div className="relative">
              {/* Device frame */}
              {deviceMode === "phone" && (
                <div className="w-[200px] h-[400px] bg-[#1a1a2e] rounded-[32px] border-4 border-[#2a2a3e] p-3 shadow-2xl">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#0D0F1B] rounded-full" />
                  <div className="w-full h-full bg-[#0D0F1B] rounded-[24px] flex items-center justify-center p-4">
                    {previewType === "card" ? (
                      <ScaledCard size={cardSize} />
                    ) : (
                      <ScaledBox size={boxSize} />
                    )}
                  </div>
                </div>
              )}

              {deviceMode === "tablet" && (
                <div className="w-[280px] h-[380px] bg-[#1a1a2e] rounded-[24px] border-4 border-[#2a2a3e] p-3 shadow-2xl">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#0D0F1B] rounded-full" />
                  <div className="w-full h-full bg-[#0D0F1B] rounded-[18px] flex items-center justify-center p-4">
                    {previewType === "card" ? (
                      <ScaledCard size={cardSize} />
                    ) : (
                      <ScaledBox size={boxSize} />
                    )}
                  </div>
                </div>
              )}

              {deviceMode === "desktop" && (
                <div className="w-[340px] h-[300px] bg-[#1a1a2e] rounded-[12px] border-4 border-[#2a2a3e] shadow-2xl overflow-hidden">
                  {/* Browser chrome */}
                  <div className="h-8 bg-[#2a2a3e] flex items-center px-3 gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="w-full h-[calc(100%-32px)] bg-[#0D0F1B] flex items-center justify-center p-4">
                    {previewType === "card" ? (
                      <ScaledCard size={cardSize} />
                    ) : (
                      <ScaledBox size={boxSize} />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScaledBox({
  size,
}: {
  size: { width: number; height: number; label: string };
}) {
  return (
    <div
      className="bg-primary rounded-3xl flex items-center justify-center shadow-lg shadow-primary/30 transition-all duration-300"
      style={{ width: size.width, height: size.height }}
    >
      <span className="text-white text-sm font-medium">Scaled Box</span>
    </div>
  );
}

function ScaledCard({
  size,
}: {
  size: {
    padding: number;
    borderRadius: number;
    titleSize: number;
    subtitleSize: number;
    gap: number;
  };
}) {
  return (
    <div
      className="bg-[#1E293B] w-full transition-all duration-300"
      style={{
        padding: size.padding,
        borderRadius: size.borderRadius,
      }}
    >
      <div
        className="text-white font-semibold transition-all duration-300"
        style={{ fontSize: size.titleSize }}
      >
        Hello World
      </div>
      <div
        className="text-[#94A3B8] transition-all duration-300"
        style={{ fontSize: size.subtitleSize, marginTop: size.gap }}
      >
        All sizes scale automatically!
      </div>
    </div>
  );
}
