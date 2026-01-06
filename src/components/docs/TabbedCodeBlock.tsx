"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  code: string;
}

interface TabbedCodeBlockProps {
  tabs: Tab[];
  filename?: string;
}

export function TabbedCodeBlock({ tabs, filename }: TabbedCodeBlockProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
  const [copied, setCopied] = useState(false);

  const activeCode = tabs.find((t) => t.id === activeTab)?.code || "";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex items-center gap-1 mb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              activeTab === tab.id
                ? "bg-primary/20 text-primary-hover"
                : "text-muted hover:text-foreground hover:bg-secondary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Code block */}
      <div className="bg-code-bg border border-border rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-border">
          {filename && <span className="text-xs text-muted">{filename}</span>}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors ml-auto"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-accent" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy
              </>
            )}
          </button>
        </div>
        <pre className="p-4 text-sm overflow-x-auto bg-transparent border-0 rounded-none">
          <code className="text-foreground">{activeCode}</code>
        </pre>
      </div>
    </div>
  );
}

