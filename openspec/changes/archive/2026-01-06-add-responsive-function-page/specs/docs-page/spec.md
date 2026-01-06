## ADDED Requirements

### Requirement: responsive() Function Page Content

The responsive() function page SHALL display documentation with a side-by-side layout containing:
- Title "Responsive Values" with description about changing layout values by device
- Left panel: "EXAMPLE USAGE" section with TypeScript badge and code example
- Right panel: "LIVE PREVIEW" section with device mode switcher (phone, tablet, desktop icons) and "Open in Snack" link
- Code example showing responsive() usage for columns and spacing
- Grid preview visualization showing responsive column layout
- Previous/Next page navigation

#### Scenario: Page displays side-by-side layout
- **WHEN** user visits `/docs/responsive/responsive-function`
- **THEN** the page title "Responsive Values" is displayed
- **AND** a description about changing layout values is shown
- **AND** content is displayed in a two-column layout

#### Scenario: Example usage panel shows code
- **WHEN** user views the left panel
- **THEN** "EXAMPLE USAGE" header is displayed with "TypeScript" badge
- **AND** a code example shows responsive() function usage
- **AND** the code demonstrates mobile, tablet, and desktop breakpoints

#### Scenario: Live preview panel has device switcher
- **WHEN** user views the right panel
- **THEN** "LIVE PREVIEW" header is displayed with "Open in Snack" link
- **AND** device mode icons for phone, tablet, and desktop are shown
- **AND** a preview area shows a responsive grid visualization

#### Scenario: Page navigation works
- **WHEN** user views the bottom of the page
- **THEN** Previous link shows "Design Tokens"
- **AND** Next link shows "useDeviceType"


