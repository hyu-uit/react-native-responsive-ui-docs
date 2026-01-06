import Link from "next/link";
import { LayoutGrid } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
        <LayoutGrid className="w-4 h-4 text-white" />
      </div>
      <span className="font-semibold text-foreground">RN UI</span>
    </Link>
  );
}
