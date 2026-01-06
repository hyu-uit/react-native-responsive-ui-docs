# Change: Add s() Function Documentation Page

## Why

The s() Function page is currently a placeholder. We need comprehensive documentation that explains this core utility for inline scaling with code examples, use cases, scale examples, and an interactive demo.

## What Changes

- Create s() Function page content with full documentation
- Add `UseCaseList` component for displaying use cases with icons
- Add `ScaleExamplesTable` component for showing scaling calculations

## Impact

- Affected specs: `docs-page` (modification)
- Affected code:
  - `src/app/docs/[...slug]/content/s-function.tsx` - New page content
  - `src/components/docs/UseCaseList.tsx` - Use cases with icons
  - `src/components/docs/ScaleExamplesTable.tsx` - Scale examples table
  - `src/app/docs/[...slug]/page.tsx` - Add routing


