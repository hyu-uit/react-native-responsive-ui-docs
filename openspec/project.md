# Project Context

## Purpose

Documentation & Demo Website for the `@vincent-huy-uit/react-native-responsive-ui` library.

**Primary Goals:**
- Educate React Native & Expo developers on responsive UI patterns
- Demonstrate the library's value through live, interactive demos
- Drive adoption by making the library easy to understand and use

**Core Philosophy:**
> "Scale sizes by default, adjust layout values when needed, and split layouts only when the UX is fundamentally different."

**Success Criteria:**
- Users understand the library within 2 minutes
- Every major feature has at least one runnable demo
- Text explanations are short (1–2 sentences max per section)

## Tech Stack

- **Framework:** Next.js
- **Content Format:** Markdown (MDX)
- **Live Demos:** Expo Snack embeds
- **Deployment:** Vercel / Netlify / GitHub Pages
- **Theme:** Clean, minimal, developer-focused (light & dark mode)

## Project Conventions

### Code Style

- Code-first layout: code blocks appear before explanatory text
- Minimal paragraphs, short sentences only
- Copy-paste friendly code blocks
- Clear visual changes in demos

### Architecture Patterns

**Page Template Structure:**
1. Title
2. One-sentence explanation
3. Code example (primary content)
4. Live demo (Expo Snack embed)
5. "When to use" (2–3 bullet points)

**Information Architecture:**
- Top Navigation: Docs | Demos | GitHub | npm
- Footer: GitHub repository link | npm package link | Author credit

### Testing Strategy

- All demos must be runnable and visually demonstrate the feature
- Each demo page includes: short explanation, editable code, visual response to screen size changes

### Git Workflow

[To be defined based on team preferences]

## Domain Context

**Target Users:**

Primary:
- React Native developers
- Expo developers
- Frontend engineers building mobile & tablet apps

Secondary:
- Tech leads evaluating UI architecture
- Designers collaborating with developers

**Library Features (3-Layer Approach):**
1. **Scaling (`s()`)** - Scale font sizes and spacing automatically based on screen size
2. **Responsive Values (`responsive()`)** - Change layout-related values by device without creating new files
3. **Layout Split (`responsiveComponent`)** - Split layouts only when mobile and tablet UX are fundamentally different

**Design Tokens:** Use design tokens instead of magic numbers for consistency

## Important Constraints

**Non-Goals (Must Avoid):**
- Marketing-heavy landing pages
- Overly animated or flashy UI
- Complex configuration UI

**Content Constraints:**
- Minimize reading; maximize copying, running, and visual understanding
- Every major feature needs at least one runnable demo
- Text explanations limited to 1–2 sentences per section

## External Dependencies

- **Library:** `@vincent-huy-uit/react-native-responsive-ui` (npm package)
- **Demo Platform:** Expo Snack (for embedded live demos)
- **Source Code:** GitHub repository

## Future Enhancements

- Versioned documentation
- CLI documentation
- Figma integration guides
- Community examples showcase
