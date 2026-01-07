# Change: Add useDeviceType and useBreakpoint Documentation Pages

## Why

The navigation already has placeholders for `useDeviceType` and `useBreakpoint` hooks under the RESPONSIVE section, but the actual content pages are missing. Users clicking these links get a placeholder page. These hooks are essential parts of the library and need proper documentation.

## What Changes

- Add `useDeviceType` documentation page at `/docs/responsive/use-device-type`
- Add `useBreakpoint` documentation page at `/docs/responsive/use-breakpoint`
- Both pages follow the existing API documentation pattern (title, badge, description, code examples, interactive demo, navigation)

## Impact

- Affected specs: `docs-page`
- Affected code: 
  - `src/app/docs/[...slug]/content/use-device-type.tsx` (new)
  - `src/app/docs/[...slug]/content/use-breakpoint.tsx` (new)
  - `src/app/docs/[...slug]/page.tsx` (add routing)

