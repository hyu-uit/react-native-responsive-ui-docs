# Change: Add Design Tokens Documentation Page

## Why

The Design Tokens page is currently a placeholder. We need comprehensive documentation that explains how to use semantic token strings for spacing and typography, customize tokens via provider, and shows the default token map.

## What Changes

- Create Design Tokens page content with full documentation
- Add `FeatureCardGrid` component for side-by-side feature cards with icons
- Add `TokenTable` component for displaying the default token map

## Impact

- Affected specs: `docs-page` (modification)
- Affected code:
  - `src/app/docs/[...slug]/content/design-tokens.tsx` - New page content
  - `src/components/docs/FeatureCardGrid.tsx` - Feature cards layout
  - `src/components/docs/TokenTable.tsx` - Token map table
  - `src/app/docs/[...slug]/page.tsx` - Add routing


