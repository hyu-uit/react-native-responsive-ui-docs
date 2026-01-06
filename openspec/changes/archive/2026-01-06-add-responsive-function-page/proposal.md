# Change: Add responsive() Function Documentation Page

## Why

The responsive() function page is currently a placeholder. We need comprehensive documentation with a side-by-side layout showing example code and a live preview with device mode switcher to demonstrate responsive values.

## What Changes

- Create responsive() function page with side-by-side layout
- Add `LivePreviewPanel` component with device mode switcher (phone, tablet, desktop)
- Add `ExampleUsagePanel` component for code display with language badge

## Impact

- Affected specs: `docs-page` (modification)
- Affected code:
  - `src/app/docs/[...slug]/content/responsive-function.tsx` - New page content
  - `src/components/docs/LivePreviewPanel.tsx` - Preview panel with device switcher
  - `src/components/docs/ExampleUsagePanel.tsx` - Code example panel with badge
  - `src/app/docs/[...slug]/page.tsx` - Add routing


