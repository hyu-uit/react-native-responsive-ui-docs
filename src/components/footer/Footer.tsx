import Link from "next/link";
import { Github, Twitter, LayoutGrid } from "lucide-react";

const footerLinks = [
  { href: "/docs/installation", label: "Installation" },
  { href: "/docs/api", label: "API Reference" },
  { href: "/community", label: "Community" },
  { href: "https://github.com/sponsors/hyu-uit", label: "GitHub Sponsors" },
];

const socialLinks = [
  {
    href: "https://twitter.com/vincent_huy",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://github.com/hyu-uit/react-native-responsive-ui",
    icon: Github,
    label: "GitHub",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo and description */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <LayoutGrid className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-foreground">
                RN Responsive UI
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              Built for the community, open source and free forever. Licensed
              under MIT.
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                className="text-muted hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} React Native Responsive UI. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

