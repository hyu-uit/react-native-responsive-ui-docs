import Link from "next/link";
import { Github } from "lucide-react";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

const navLinks = [
  { href: "/docs", label: "Docs" },
  // { href: "/components", label: "Components" },
  // { href: "/blog", label: "Blog" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted hover:text-foreground transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <SearchBar />
          <span className="text-sm text-muted">v1.0.4</span>
          <Link
            href="https://github.com/hyu-uit/react-native-responsive-ui"
            target="_blank"
            className="text-muted hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
