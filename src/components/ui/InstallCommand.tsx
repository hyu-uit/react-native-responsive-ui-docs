"use client";

import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface InstallCommandProps {
  command: string;
}

export function InstallCommand({ command }: InstallCommandProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-secondary border border-border rounded-xl">
      <span className="text-primary">$</span>
      <code className="text-sm text-muted font-mono flex-1">{command}</code>
      <button
        onClick={handleCopy}
        className="text-muted hover:text-foreground transition-colors"
        aria-label={copied ? "Copied" : "Copy to clipboard"}
      >
        {copied ? (
          <Check className="w-4 h-4 text-accent" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    </div>
  );
}
