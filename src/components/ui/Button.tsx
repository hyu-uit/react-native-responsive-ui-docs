import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  children,
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all text-sm";

  const variantStyles = {
    primary:
      "bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/20",
    secondary:
      "bg-secondary border border-border hover:border-muted text-foreground",
  };

  const props = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <Link {...props} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </Link>
  );
}
