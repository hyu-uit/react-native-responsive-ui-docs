# Design: Home Page with Navigation Bar and Hero Section

## Context

The documentation website needs a home page that matches the provided design mockup. The design features a dark theme with a navigation bar at the top and a hero section with a side-by-side layout (content on left, code preview on right).

**Stakeholders:** React Native developers visiting the documentation site

## Goals / Non-Goals

**Goals:**
- Match the visual design from the mockup
- Create reusable components for maintainability
- Use server components to optimize initial page load
- Define consistent color system via CSS variables

**Non-Goals:**
- Implementing the full docs/blog pages (separate changes)
- Adding actual search functionality (visual only for now)
- Mobile responsive layout (can be addressed later)

## Decisions

### Component Architecture

**Decision:** Extract components into `src/components/` directory with flat structure initially.

**Rationale:** The design has clear component boundaries (navbar, hero, code preview). Extracting them improves maintainability and allows server/client component optimization.

**Structure:**
```
src/
├── app/
│   ├── globals.css      # Extended color variables
│   ├── layout.tsx       # Root layout (server)
│   └── page.tsx         # Home page (server)
└── components/
    ├── navbar/
    │   ├── Navbar.tsx       # Server component
    │   ├── Logo.tsx         # Server component
    │   └── SearchBar.tsx    # Client component (keyboard shortcut)
    ├── hero/
    │   ├── HeroSection.tsx  # Server component
    │   ├── CodePreview.tsx  # Server component
    │   └── TypeSafeBadge.tsx # Server component
    └── ui/
        ├── Badge.tsx        # Server component
        ├── Button.tsx       # Server component
        └── InstallCommand.tsx # Client component (copy)
```

### Server vs Client Components

**Decision:** Default to server components; use client components only for interactivity.

| Component | Type | Reason |
|-----------|------|--------|
| Navbar | Server | Static navigation links |
| Logo | Server | No interactivity |
| SearchBar | Client | Keyboard shortcut (Ctrl+K) |
| HeroSection | Server | Static content |
| CodePreview | Server | Static code display |
| Badge | Server | Static display |
| Button | Server | Links only, no JS needed |
| InstallCommand | Client | Copy to clipboard |

### Color System

**Decision:** Extend existing CSS variables with additional colors for new design elements.

**New variables needed:**
- `--syntax-*` colors for code highlighting
- `--gradient-start`, `--gradient-end` for gradient text
- `--badge-bg`, `--badge-text` for announcement badge

### Icons

**Decision:** Use Lucide React for all icons.

**Rationale:** Lucide is lightweight, tree-shakeable, and has all icons needed (search, arrow, play, github, check).

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| SearchBar client component increases JS bundle | Keep component minimal, lazy load if needed |
| Code preview without actual syntax highlighting | Use simple color spans or integrate lightweight highlighter later |

## Open Questions

- Should the search bar have actual functionality or remain visual-only for v1?
- Should we add responsive mobile layout in this change or defer?

