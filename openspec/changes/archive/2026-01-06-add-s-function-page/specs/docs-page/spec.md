## ADDED Requirements

### Requirement: s() Function Page Content

The s() Function page SHALL display comprehensive utility documentation containing:
- Title "s() Function" with "Core Utility" badge
- Description of the function as a low-level utility for inline scaling
- Action buttons for "Live Demo" and "View Source"
- "Why use this?" info card explaining when to use s() vs createScaledStyles
- "Basic Usage" section with code example showing inline styles and props
- "Where to use" section with use case list and scale examples table
- "Interactive Demo" section with code editor and phone preview
- Previous/Next page navigation

#### Scenario: Page displays API header
- **WHEN** user visits `/docs/auto-scale/s-function`
- **THEN** the page title "s() Function" is displayed
- **AND** a "Core Utility" badge is shown next to the title
- **AND** "Live Demo" and "View Source" buttons are visible

#### Scenario: Page shows where to use section
- **WHEN** user views the s() Function page
- **THEN** a "Where to use" section is displayed
- **AND** a list of use cases with icons is shown (Props, Animated.Value, Inline styles, Custom calculations)
- **AND** a scale examples table shows input values and their scaled results on different devices

#### Scenario: Page displays interactive demo
- **WHEN** user views the Interactive Demo section
- **THEN** a code editor is displayed on the left showing s() usage
- **AND** a phone preview showing a scaled component is displayed on the right
- **AND** an "Open in Snack" button is available

#### Scenario: Page navigation works
- **WHEN** user views the bottom of the page
- **THEN** Previous link shows "createScaledStyles"
- **AND** Next link shows "Design Tokens"


