"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ExternalLink,
  Home,
  Search,
  Settings,
  User,
  Image,
  Star,
  MessageSquare,
  Smartphone,
  Tablet,
} from "lucide-react";

type DeviceMode = "mobile" | "tablet";

interface PhonePreviewDemoProps {
  code: string;
  filename?: string;
  snackUrl?: string;
}

export function PhonePreviewDemo({
  code,
  filename = "App.js",
  snackUrl,
}: PhonePreviewDemoProps) {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>("mobile");

  const deviceModes: { mode: DeviceMode; icon: React.ReactNode }[] = [
    { mode: "mobile", icon: <Smartphone className="w-4 h-4" /> },
    { mode: "tablet", icon: <Tablet className="w-4 h-4" /> },
  ];

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
              <span className="ml-2 text-xs text-muted">{filename}</span>
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
          <pre className="p-4 text-sm leading-relaxed overflow-x-auto max-h-[450px] overflow-y-auto !bg-transparent !border-0">
            <code dangerouslySetInnerHTML={{ __html: code }} />
          </pre>
        </div>

        {/* Preview side */}
        <div className="bg-[#0D0F1B]">
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
          <div className="flex items-center justify-center p-8 min-h-[400px]">
            {deviceMode === "mobile" ? <MobileMockup /> : <TabletMockup />}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  const feedItems = [
    { icon: <User className="w-4 h-4" />, color: "bg-blue-500" },
    { icon: <Image className="w-4 h-4" />, color: "bg-pink-500" },
    { icon: <MessageSquare className="w-4 h-4" />, color: "bg-green-500" },
    { icon: <Star className="w-4 h-4" />, color: "bg-amber-500" },
  ];

  return (
    <div className="relative">
      {/* Phone frame */}
      <div className="w-[200px] bg-[#1a1a2e] rounded-[32px] border-4 border-[#2a2a3e] overflow-hidden shadow-2xl">
        {/* Status bar */}
        <div className="h-6 bg-[#0D0F1B] flex items-center justify-center">
          <div className="w-16 h-4 bg-[#1a1a2e] rounded-full" />
        </div>

        {/* Header */}
        <div className="px-4 py-3 bg-[#0D0F1B] flex items-center justify-between">
          <span className="text-white text-sm font-semibold">MY FEED</span>
          <span className="px-2 py-0.5 bg-primary/30 text-primary-hover text-[10px] font-medium rounded">
            MOBILE
          </span>
        </div>

        {/* Feed content - single column list */}
        <div className="p-3 space-y-3 bg-[#0D0F1B] min-h-[240px]">
          {feedItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 bg-[#1a1a2e] rounded-xl"
            >
              <div
                className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white`}
              >
                {item.icon}
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="h-2.5 bg-[#2a2a3e] rounded w-3/4" />
                <div className="h-2 bg-[#2a2a3e] rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="px-6 py-3 bg-[#1a1a2e] flex items-center justify-between border-t border-[#2a2a3e]">
          <Home className="w-5 h-5 text-primary-hover" />
          <Search className="w-5 h-5 text-muted" />
          <Settings className="w-5 h-5 text-muted" />
        </div>
      </div>
    </div>
  );
}

function TabletMockup() {
  const feedItems = [
    { icon: <User className="w-4 h-4" />, color: "bg-blue-500" },
    { icon: <Image className="w-4 h-4" />, color: "bg-pink-500" },
    { icon: <MessageSquare className="w-4 h-4" />, color: "bg-green-500" },
    { icon: <Star className="w-4 h-4" />, color: "bg-amber-500" },
  ];

  return (
    <div className="relative">
      {/* Tablet frame */}
      <div className="w-[320px] bg-[#1a1a2e] rounded-[24px] border-4 border-[#2a2a3e] overflow-hidden shadow-2xl">
        {/* Status bar */}
        <div className="h-5 bg-[#0D0F1B] flex items-center justify-center">
          <div className="w-12 h-3 bg-[#1a1a2e] rounded-full" />
        </div>

        {/* Header */}
        <div className="px-4 py-3 bg-[#0D0F1B] flex items-center justify-between">
          <span className="text-white text-sm font-semibold">MY FEED</span>
          <span className="px-2 py-0.5 bg-violet-500/30 text-violet-400 text-[10px] font-medium rounded">
            TABLET
          </span>
        </div>

        {/* Feed content - 2 column grid */}
        <div className="p-3 bg-[#0D0F1B] min-h-[200px]">
          <div className="grid grid-cols-2 gap-3">
            {feedItems.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-4 bg-[#1a1a2e] rounded-xl"
              >
                <div
                  className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white`}
                >
                  {item.icon}
                </div>
                <div className="w-full space-y-1.5">
                  <div className="h-2.5 bg-[#2a2a3e] rounded w-full" />
                  <div className="h-2 bg-[#2a2a3e] rounded w-2/3 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div className="px-8 py-3 bg-[#1a1a2e] flex items-center justify-between border-t border-[#2a2a3e]">
          <Home className="w-5 h-5 text-primary-hover" />
          <Search className="w-5 h-5 text-muted" />
          <Settings className="w-5 h-5 text-muted" />
        </div>
      </div>
    </div>
  );
}
