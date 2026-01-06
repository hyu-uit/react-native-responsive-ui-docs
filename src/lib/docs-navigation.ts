export interface NavItem {
  title: string;
  slug: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const docsNavigation: NavSection[] = [
  {
    title: "GETTING STARTED",
    items: [
      { title: "Introduction", slug: "introduction" },
      { title: "Installation", slug: "installation" },
    ],
  },
  {
    title: "AUTO SCALE",
    items: [
      { title: "createScaledStyles", slug: "auto-scale/create-scaled-styles" },
      { title: "s() Function", slug: "auto-scale/s-function" },
      { title: "Design Tokens", slug: "auto-scale/design-tokens" },
    ],
  },
  {
    title: "RESPONSIVE",
    items: [
      { title: "responsive()", slug: "responsive/responsive-function" },
      { title: "useDeviceType", slug: "responsive/use-device-type" },
      { title: "useBreakpoint", slug: "responsive/use-breakpoint" },
    ],
  },
  {
    title: "RESPONSIVE SWITCH",
    items: [
      { title: "ResponsiveSwitch", slug: "responsive-switch/component" },
      { title: "Layout Patterns", slug: "responsive-switch/layout-patterns" },
    ],
  },
];

export function findNavItem(
  slug: string
): { section: NavSection; item: NavItem } | null {
  for (const section of docsNavigation) {
    const item = section.items.find((i) => i.slug === slug);
    if (item) {
      return { section, item };
    }
  }
  return null;
}
