# Documentation Page Specification

## ADDED Requirements

### Requirement: createScaledStyles Page Content

The createScaledStyles page SHALL display comprehensive API documentation containing:
- Title "createScaledStyles" with "Core API" badge
- Description of the function as a drop-in replacement for StyleSheet.create
- Action buttons for "Live Demo" and "View Source"
- "Why use this?" info card explaining the benefit
- "Basic Usage" section with code example
- "Smart Exclusion" section with excluded properties list and conversion examples
- "Interactive Demo" section with code editor and phone preview
- Previous/Next page navigation

#### Scenario: Page displays API header
- **WHEN** user visits `/docs/auto-scale/create-scaled-styles`
- **THEN** the page title "createScaledStyles" is displayed
- **AND** a "Core API" badge is shown next to the title
- **AND** "Live Demo" and "View Source" buttons are visible

#### Scenario: Page shows smart exclusion rules
- **WHEN** user views the createScaledStyles page
- **THEN** a "Smart Exclusion" section is displayed
- **AND** a list of excluded properties (flex, opacity, etc.) is shown with checkmarks
- **AND** a conversion examples table shows scaled vs ignored values

#### Scenario: Page displays interactive demo
- **WHEN** user views the Interactive Demo section
- **THEN** a code editor is displayed on the left
- **AND** a phone preview showing "Scaled Box" is displayed on the right
- **AND** an "Open in Snack" button is available

#### Scenario: Page navigation works
- **WHEN** user views the bottom of the page
- **THEN** Previous link shows "Installation"
- **AND** Next link shows "s() Function"

