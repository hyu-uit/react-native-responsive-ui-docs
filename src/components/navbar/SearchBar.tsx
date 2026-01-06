"use client";

import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <button
      className="flex items-center gap-3 px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-muted hover:border-muted transition-colors min-w-[240px]"
      onClick={() => {
        // TODO: Implement search functionality
        console.log("Search clicked");
      }}
    >
      <Search className="w-4 h-4" />
      <span>Search documentation...</span>
      <kbd className="ml-auto px-2 py-0.5 bg-background border border-border rounded text-xs">
        Ctrl K
      </kbd>
    </button>
  );
}
