import { docsNavigation } from "@/lib/docs-navigation";
import { SidebarSection } from "./SidebarSection";

export function Sidebar() {
  return (
    <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-background border-r border-border overflow-y-auto py-6 px-4">
      {docsNavigation.map((section) => (
        <SidebarSection
          key={section.title}
          title={section.title}
          items={section.items}
        />
      ))}
    </aside>
  );
}
