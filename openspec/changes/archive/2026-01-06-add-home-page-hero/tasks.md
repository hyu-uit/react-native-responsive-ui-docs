# Tasks: Add Home Page with Navigation Bar and Hero Section

## 1. Setup & Dependencies
- [x] 1.1 Install lucide-react package
- [x] 1.2 Extend CSS color variables in globals.css (add gradient colors, syntax highlighting colors)

## 2. Navigation Components
- [x] 2.1 Create `Logo` component (server component) with icon and text
- [x] 2.2 Create `SearchBar` component (client component for keyboard shortcut)
- [x] 2.3 Create `Navbar` component (server component) with navigation links, search, version badge, and GitHub link

## 3. Hero Section Components
- [x] 3.1 Create `Badge` component (server component) for version announcement
- [x] 3.2 Create `Button` component (server component) with variants (primary, secondary/outline)
- [x] 3.3 Create `CodePreview` component (server component) with syntax highlighting and window chrome
- [x] 3.4 Create `TypeSafeBadge` component (server component) for the floating badge
- [x] 3.5 Create `InstallCommand` component (client component for copy functionality)
- [x] 3.6 Create `HeroSection` component (server component) composing headline, description, CTAs, and code preview

## 4. Page Assembly
- [x] 4.1 Refactor `src/app/page.tsx` to use new components as server component
- [x] 4.2 Remove unused code and features grid (focus on hero for now)
