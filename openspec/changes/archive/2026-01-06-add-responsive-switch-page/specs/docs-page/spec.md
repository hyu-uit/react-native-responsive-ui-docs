## ADDED Requirements

### Requirement: ResponsiveSwitch Page Content

The ResponsiveSwitch page SHALL display comprehensive component documentation containing:
- Title "ResponsiveSwitch" with "Component" badge
- Description about rendering different children based on device breakpoint
- Action buttons for "Live Demo" and "View Source"
- "Why use this?" info card explaining the benefit over scattered if-checks
- "Basic Usage" section with code example showing mobile/tablet props
- "Component Props" section with props list and visual logic diagram
- "Interactive Demo" section with code editor and phone preview
- Previous/Next page navigation

#### Scenario: Page displays component header
- **WHEN** user visits `/docs/responsive-switch/component`
- **THEN** the page title "ResponsiveSwitch" is displayed
- **AND** a "Component" badge is shown next to the title
- **AND** "Live Demo" and "View Source" buttons are visible

#### Scenario: Page shows component props
- **WHEN** user views the "Component Props" section
- **THEN** a props list shows mobile, tablet, and desktop props with icons
- **AND** each prop has a description of its purpose
- **AND** a visual logic diagram shows breakpoint → render logic

#### Scenario: Page shows visual logic diagram
- **WHEN** user views the visual logic section
- **THEN** the diagram shows "< 768px Width → Render <Mobile />"
- **AND** the diagram shows "≥ 768px Width → Render <Tablet />"

#### Scenario: Page displays interactive demo
- **WHEN** user views the Interactive Demo section
- **THEN** a code editor is displayed on the left
- **AND** a phone preview showing a feed UI is displayed on the right
- **AND** an "Open in Snack" button is available

#### Scenario: Page navigation works
- **WHEN** user views the bottom of the page
- **THEN** Previous link shows "useBreakpoint"
- **AND** Next link shows "Layout Patterns"


