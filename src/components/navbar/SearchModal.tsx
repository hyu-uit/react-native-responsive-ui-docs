"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, ArrowRight, X } from "lucide-react";
import { docsNavigation, NavItem, NavSection } from "@/lib/docs-navigation";

interface SearchResult {
  item: NavItem;
  section: NavSection;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Get all searchable items
  const getAllItems = useCallback((): SearchResult[] => {
    const items: SearchResult[] = [];
    for (const section of docsNavigation) {
      for (const item of section.items) {
        items.push({ item, section });
      }
    }
    return items;
  }, []);

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults(getAllItems());
      setSelectedIndex(0);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = getAllItems().filter(
      ({ item, section }) =>
        item.title.toLowerCase().includes(searchQuery) ||
        section.title.toLowerCase().includes(searchQuery) ||
        item.slug.toLowerCase().includes(searchQuery)
    );

    setResults(filtered);
    setSelectedIndex(0);
  }, [query, getAllItems]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults(getAllItems());
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen, getAllItems]);

  // Scroll selected item into view
  useEffect(() => {
    const container = resultsRef.current;
    if (!container) return;

    const selectedElement = container.querySelector(
      `[data-index="${selectedIndex}"]`
    );
    if (selectedElement) {
      selectedElement.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [selectedIndex]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < results.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          e.preventDefault();
          if (results[selectedIndex]) {
            router.push(`/docs/${results[selectedIndex].item.slug}`);
            onClose();
          }
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    },
    [results, selectedIndex, router, onClose]
  );

  // Navigate to result
  const handleResultClick = (result: SearchResult) => {
    router.push(`/docs/${result.item.slug}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative max-w-2xl mx-auto mt-[15vh]">
        <div className="bg-[#131620] border border-border rounded-xl shadow-2xl overflow-hidden">
          {/* Search input */}
          <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
            <Search className="w-5 h-5 text-muted" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search documentation..."
              className="flex-1 bg-transparent text-foreground placeholder:text-muted outline-none text-base"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
            />
            <button
              onClick={onClose}
              className="p-1 text-muted hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results */}
          <div ref={resultsRef} className="max-h-[400px] overflow-y-auto">
            {results.length === 0 ? (
              <div className="px-4 py-8 text-center text-muted">
                <p>No results found for &ldquo;{query}&rdquo;</p>
              </div>
            ) : (
              <div className="py-2">
                {results.map((result, index) => (
                  <button
                    key={result.item.slug}
                    data-index={index}
                    onClick={() => handleResultClick(result)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      index === selectedIndex
                        ? "bg-primary/10 text-foreground"
                        : "text-muted hover:bg-secondary"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        index === selectedIndex
                          ? "bg-primary/20 text-primary"
                          : "bg-secondary text-muted"
                      }`}
                    >
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">
                        {result.item.title}
                      </div>
                      <div className="text-xs text-muted truncate">
                        {result.section.title}
                      </div>
                    </div>
                    {index === selectedIndex && (
                      <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-border bg-secondary/50">
            <div className="flex items-center gap-4 text-xs text-muted">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-background border border-border rounded">
                  ↑
                </kbd>
                <kbd className="px-1.5 py-0.5 bg-background border border-border rounded">
                  ↓
                </kbd>
                <span className="ml-1">to navigate</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-background border border-border rounded">
                  ↵
                </kbd>
                <span className="ml-1">to select</span>
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-background border border-border rounded">
                  esc
                </kbd>
                <span className="ml-1">to close</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
