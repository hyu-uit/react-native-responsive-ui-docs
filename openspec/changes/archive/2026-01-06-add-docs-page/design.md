# Design: Documentation Page with Sidebar Navigation

## Context

The documentation website needs a full docs section with sidebar navigation, code examples, and live demos. The design follows the project's code-first philosophy where code appears before explanatory text.

**Stakeholders:** React Native developers learning the library

## Goals / Non-Goals

**Goals:**
- Match the visual design from the mockup
- Create reusable components for docs pages
- Follow code-first layout principle
- Enable easy content addition through file-based routing

**Non-Goals:**
- MDX content system (can be added later)
- Full-text search functionality (visual only for now)
- Mobile-optimized sidebar (basic responsive behavior only)

## Decisions

### Component Architecture

**Structure:**
```
src/
├── app/docs/
│   ├── layout.tsx           # Docs layout with sidebar
│   ├── page.tsx             # Docs index (redirect to first page)
│   └── [...slug]/
│       └── page.tsx         # Dynamic docs pages
└── components/docs/
    ├── Sidebar.tsx          # Main sidebar with navigation
    ├── SidebarSection.tsx   # Collapsible section group
    ├── SidebarLink.tsx      # Navigation link with active state
    ├── Breadcrumb.tsx       # Page location breadcrumb
    ├── CodeBlock.tsx        # Code with copy button
    ├── DemoPreview.tsx      # Device visualization + Expo Snack link
    └── UseCaseCard.tsx      # Feature card for "when to use"
```

### Navigation Structure

```typescript
const docsNavigation = [
  {
    title: "GETTING STARTED",
    items: [
      { title: "Introduction", slug: "introduction" },
      { title: "Installation", slug: "installation" },
    ],
  },
  {
    title: "CORE CONCEPTS",
    items: [
      { title: "Scaling", slug: "core-concepts/scaling" },
      { title: "Vertical Scale", slug: "core-concepts/vertical-scale" },
      { title: "Moderate Scale", slug: "core-concepts/moderate-scale" },
    ],
  },
  {
    title: "API REFERENCE",
    items: [
      { title: "Hooks", slug: "api/hooks" },
      { title: "Utilities", slug: "api/utilities" },
    ],
  },
];
```

### Layout Grid

- **Sidebar:** Fixed width 260px, fixed position
- **Main content:** Flexible, max-width ~800px for readability
- **Demo preview:** Card on right side within content area

### Server vs Client Components

| Component | Type | Reason |
|-----------|------|--------|
| Sidebar | Server | Static navigation |
| SidebarSection | Server | Static content |
| SidebarLink | Client | Active state detection (usePathname) |
| Breadcrumb | Client | Route-based (usePathname) |
| CodeBlock | Client | Copy to clipboard functionality |
| DemoPreview | Server | Static demo visualization |
| UseCaseCard | Server | Static content |

### Demo Preview Component

The DemoPreview shows three platform representations:
- iOS device (blue rectangle)
- Android device (blue rectangle)
- Web (blue rectangle)

With "ONE CODEBASE" label and description section showing:
- Title (e.g., "Write once, scale everywhere")
- Description text explaining the behavior

### Introduction Page Structure

The Introduction page is the default landing page for docs with:
1. Breadcrumb: "GETTING STARTED > INTRODUCTION"
2. Title: "Introduction"
3. Philosophy quote in italic: "Scale sizes by default, adjust layout values when needed, and split layouts only when the UX is fundamentally different."
4. Description: Brief library overview
5. Code block: Philosophy.js showing import and usage example
6. Demo preview: Platform visualization with "ONE CODEBASE"
7. Feature section: "Write once, scale everywhere" with description

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Hard-coded content vs MDX | Start with hard-coded, migrate to MDX later |
| Sidebar not mobile-friendly | Add basic responsive behavior, enhance later |

## Open Questions

- Should sidebar sections be collapsible? (Design shows them expanded)
- Should we add syntax highlighting library or use simple CSS coloring?

