import { NavItem } from "@/lib/docs-navigation";
import { SidebarLink } from "./SidebarLink";

interface SidebarSectionProps {
  title: string;
  items: NavItem[];
}

export function SidebarSection({ title, items }: SidebarSectionProps) {
  return (
    <div className="mb-6">
      <h3 className="px-3 mb-2 text-xs font-semibold text-muted tracking-wider">
        {title}
      </h3>
      <nav className="space-y-1">
        {items.map((item) => (
          <SidebarLink key={item.slug} href={`/docs/${item.slug}`}>
            {item.title}
          </SidebarLink>
        ))}
      </nav>
    </div>
  );
}
