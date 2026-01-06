"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  children: React.ReactNode;
}

export function SidebarLink({ href, children }: SidebarLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
        isActive
          ? "bg-primary/20 text-primary-hover font-medium"
          : "text-muted hover:text-foreground hover:bg-secondary"
      }`}
    >
      {children}
    </Link>
  );
}
