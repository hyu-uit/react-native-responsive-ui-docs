# Change: Add Home Page with Navigation Bar and Hero Section

## Why

The current home page implementation is a single large client component with all UI elements inline. We need to refactor it to match the new design, improve maintainability through component extraction, and optimize performance using server components where possible.

## What Changes

- Refactor home page to match the new design (navigation, hero with code preview)
- Extract reusable components: `Navbar`, `Logo`, `SearchBar`, `HeroSection`, `CodePreview`, `Badge`, `Button`
- Consolidate and extend CSS color variables for consistent theming
- Install and integrate Lucide icons for iconography
- Convert to server components where possible (navbar, layout elements)
- Add syntax highlighting support for code preview

## Impact

- Affected specs: `home-page` (new capability)
- Affected code:
  - `src/app/page.tsx` - Refactor to use extracted components
  - `src/app/globals.css` - Extend color definitions
  - `src/components/` - New component directory (Navbar, HeroSection, CodePreview, etc.)
  - `package.json` - Add lucide-react dependency

