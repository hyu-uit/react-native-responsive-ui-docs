# Home Page Specification

## ADDED Requirements

### Requirement: Navigation Bar

The home page SHALL display a fixed navigation bar at the top of the viewport with the following elements:
- Logo with "RN UI" text on the left
- Navigation links: "Docs", "Components", "Blog"
- Search bar with keyboard shortcut hint (Ctrl+K)
- Version badge displaying current library version
- GitHub icon link to repository

#### Scenario: Navigation bar renders correctly
- **WHEN** user visits the home page
- **THEN** the navigation bar is fixed at the top
- **AND** displays the logo, navigation links, search bar, version, and GitHub link
- **AND** uses a semi-transparent background with backdrop blur

#### Scenario: Navigation links are clickable
- **WHEN** user clicks on "Docs" link
- **THEN** user is navigated to `/docs` route

#### Scenario: GitHub link opens in new tab
- **WHEN** user clicks on the GitHub icon
- **THEN** the GitHub repository opens in a new browser tab

---

### Requirement: Hero Section Layout

The hero section SHALL display a two-column layout with:
- Left column: announcement badge, headline, description, CTA buttons, install command
- Right column: code preview with syntax highlighting

#### Scenario: Hero section displays content
- **WHEN** user visits the home page
- **THEN** the hero section displays below the navigation bar
- **AND** shows the announcement badge "v1.0 is now available"
- **AND** shows the headline "Universal UI for React Native & Expo"
- **AND** shows the description text
- **AND** shows "View Examples" and "Try Demos" buttons
- **AND** shows the npm install command

---

### Requirement: Code Preview Panel

The hero section SHALL include a code preview panel that displays:
- Window chrome with traffic light buttons (red, yellow, green)
- File name indicator ("App.tsx")
- Syntax-highlighted code example
- "Type Safe" floating badge

#### Scenario: Code preview displays example code
- **WHEN** user views the hero section
- **THEN** a code preview panel is visible on the right side
- **AND** displays syntax-highlighted TypeScript/React code
- **AND** shows a "Type Safe" badge with checkmark icon

---

### Requirement: Install Command with Copy

The hero section SHALL include an install command display that:
- Shows the npm install command
- Provides a copy button to copy the command to clipboard

#### Scenario: User copies install command
- **WHEN** user clicks the copy button on the install command
- **THEN** the command text is copied to the clipboard
- **AND** visual feedback indicates successful copy

---

### Requirement: Call-to-Action Buttons

The hero section SHALL display two CTA buttons:
- Primary button "View Examples" with arrow icon, linking to examples
- Secondary button "Try Demos" with play icon, linking to demos

#### Scenario: Primary CTA button is prominent
- **WHEN** user views the hero section
- **THEN** the "View Examples" button is displayed with primary styling (filled, blue)
- **AND** includes a right-arrow icon

#### Scenario: Secondary CTA button is visible
- **WHEN** user views the hero section
- **THEN** the "Try Demos" button is displayed with secondary styling (outlined)
- **AND** includes a play icon

---

### Requirement: Design Token Colors

The CSS SHALL define reusable color variables for:
- Background and foreground colors
- Primary and accent colors
- Border and muted text colors
- Code syntax highlighting colors
- Gradient colors for headline text

#### Scenario: Colors are consistently applied
- **WHEN** components render on the home page
- **THEN** all colors reference CSS custom properties
- **AND** no hardcoded color values are used in component styles

---

### Requirement: Component Architecture

The home page SHALL be built using modular, reusable components:
- Components are organized in `src/components/` directory
- Server components are used by default
- Client components are used only when interactivity is required (copy, keyboard shortcuts)

#### Scenario: Server components optimize performance
- **WHEN** the home page is rendered
- **THEN** static components (Navbar, Logo, HeroSection, CodePreview, Badge, Button) are server components
- **AND** only interactive components (SearchBar, InstallCommand) are client components

---

### Requirement: Lucide Icons Integration

The home page SHALL use Lucide React icons for all iconography including:
- Search icon in the search bar
- Arrow icon in the primary CTA button
- Play icon in the secondary CTA button
- GitHub icon in the navigation
- Check icon in the "Type Safe" badge
- Copy icon in the install command

#### Scenario: Icons render correctly
- **WHEN** user views the home page
- **THEN** all icons are rendered using Lucide React components
- **AND** icons are appropriately sized and colored

