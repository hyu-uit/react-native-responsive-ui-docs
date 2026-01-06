# Change: Add Installation Page Content

## Why

The installation page is currently a placeholder. We need to create a proper installation guide with step-by-step instructions, code examples, and troubleshooting tips to help developers get started quickly.

## What Changes

- Create Installation page content with step cards
- Add `StepCard` component for numbered installation steps
- Add `TabbedCodeBlock` component for package manager tabs (NPM, YARN, EXPO)
- Add `InfoCard` component for notices and troubleshooting tips
- Add `TroubleshootingCard` component for common issues

## Impact

- Affected specs: `docs-page` (modification)
- Affected code:
  - `src/app/docs/[...slug]/content/installation.tsx` - New installation page content
  - `src/components/docs/StepCard.tsx` - Step card component
  - `src/components/docs/TabbedCodeBlock.tsx` - Tabbed code block component
  - `src/components/docs/InfoCard.tsx` - Info/notice card component
  - `src/app/docs/[...slug]/page.tsx` - Add installation page routing

