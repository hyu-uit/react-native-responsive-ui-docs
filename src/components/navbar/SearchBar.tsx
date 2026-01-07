"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { SearchModal } from "./SearchModal";

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle Ctrl+K / Cmd+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button
        className="flex items-center gap-3 px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-muted hover:border-muted transition-colors min-w-[240px]"
        onClick={() => setIsOpen(true)}
      >
        <Search className="w-4 h-4" />
        <span>Search documentation...</span>
        <kbd className="ml-auto px-2 py-0.5 bg-background border border-border rounded text-xs">
          ⌘K
        </kbd>
      </button>

      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
