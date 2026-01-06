# Change: Add Documentation Page with Sidebar Navigation

## Why

The current docs page is a placeholder with basic content. We need a full documentation layout with sidebar navigation, code examples with copy functionality, live demo previews, and "when to use" sections following the project's code-first philosophy.

## What Changes

- Create docs layout with fixed left sidebar navigation
- Add sidebar with categorized navigation (Getting Started, Core Concepts, API Reference)
- Create main content area with breadcrumb, title, description, and code examples
- Add interactive demo section with device preview visualization
- Add "When to use" section with feature cards
- Implement dynamic routing for docs pages (`/docs/[category]/[slug]`)
- Reuse existing Navbar component

## Impact

- Affected specs: `docs-page` (new capability)
- Affected code:
  - `src/app/docs/` - New layout and pages with dynamic routing
  - `src/components/docs/` - New components (Sidebar, Breadcrumb, CodeBlock, DemoPreview, UseCaseCard)
  - Reuses existing Navbar from `src/components/navbar/`

