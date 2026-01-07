## ADDED Requirements

### Requirement: useDeviceType Page Content

The useDeviceType page SHALL display hook documentation containing:
- Title "useDeviceType" with "Hook" badge
- Description explaining the hook returns current device type ("mobile" | "tablet" | "desktop")
- Action buttons for "Live Demo" and "View Source"
- "Why use this?" info card explaining when to use device-specific logic
- "Basic Usage" section with code example showing the hook usage
- "Return Value" section documenting the possible return values
- "Interactive Demo" section with device type display
- Previous/Next page navigation

#### Scenario: Page displays hook header
- **WHEN** user visits `/docs/responsive/use-device-type`
- **THEN** the page title "useDeviceType" is displayed
- **AND** a "Hook" badge is shown next to the title
- **AND** "Live Demo" and "View Source" buttons are visible

#### Scenario: Page shows return value documentation
- **WHEN** user views the useDeviceType page
- **THEN** a "Return Value" section is displayed
- **AND** the section shows "mobile", "tablet", and "desktop" as possible values
- **AND** each value has a description of when it applies

#### Scenario: Page displays interactive demo
- **WHEN** user views the Interactive Demo section
- **THEN** a code editor is displayed on the left
- **AND** a device preview is displayed on the right
- **AND** an "Open in Snack" button is available

#### Scenario: Page navigation works
- **WHEN** user views the bottom of the page
- **THEN** Previous link shows "responsive()"
- **AND** Next link shows "useBreakpoint"

---

### Requirement: useBreakpoint Page Content

The useBreakpoint page SHALL display hook documentation containing:
- Title "useBreakpoint" with "Hook" badge
- Description explaining the hook returns current breakpoint information
- Action buttons for "Live Demo" and "View Source"
- "Why use this?" info card explaining fine-grained breakpoint control
- "Basic Usage" section with code example
- "Breakpoint Values" section with table showing breakpoint ranges
- "Interactive Demo" section
- Previous/Next page navigation

#### Scenario: Page displays hook header
- **WHEN** user visits `/docs/responsive/use-breakpoint`
- **THEN** the page title "useBreakpoint" is displayed
- **AND** a "Hook" badge is shown next to the title
- **AND** "Live Demo" and "View Source" buttons are visible

#### Scenario: Page shows breakpoint values table
- **WHEN** user views the useBreakpoint page
- **THEN** a "Breakpoint Values" section is displayed
- **AND** a table shows breakpoint names and their pixel ranges
- **AND** the table includes xs, sm, md, lg, xl breakpoints

#### Scenario: Page displays interactive demo
- **WHEN** user views the Interactive Demo section
- **THEN** a code editor is displayed on the left
- **AND** a breakpoint indicator preview is displayed on the right
- **AND** an "Open in Snack" button is available

#### Scenario: Page navigation works
- **WHEN** user views the bottom of the page
- **THEN** Previous link shows "useDeviceType"
- **AND** Next link shows "ResponsiveSwitch"

