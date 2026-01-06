# Change: Add createScaledStyles Documentation Page

## Why

The createScaledStyles page is currently a placeholder. We need a comprehensive documentation page that explains the API with code examples, smart exclusion rules, and an interactive demo.

## What Changes

- Create createScaledStyles page content with full documentation
- Add `ApiHeader` component for title with badge and action buttons
- Add `SectionHeading` component for section titles with blue accent line
- Add `PropertyList` component for displaying excluded properties
- Add `ConversionTable` component for showing scaling examples
- Add `InteractiveDemo` component with code editor and phone preview
- Add `PageNavigation` component for previous/next page links

## Impact

- Affected specs: `docs-page` (modification)
- Affected code:
  - `src/app/docs/[...slug]/content/create-scaled-styles.tsx` - New page content
  - `src/components/docs/ApiHeader.tsx` - Header with badge and buttons
  - `src/components/docs/SectionHeading.tsx` - Section title component
  - `src/components/docs/PropertyList.tsx` - Property list with checkmarks
  - `src/components/docs/ConversionTable.tsx` - Conversion examples table
  - `src/components/docs/InteractiveDemo.tsx` - Code + phone preview
  - `src/components/docs/PageNavigation.tsx` - Prev/next navigation
  - `src/app/docs/[...slug]/page.tsx` - Add routing

