# docs-page Specification

## Purpose
TBD - created by archiving change add-docs-page. Update Purpose after archive.
## Requirements
### Requirement: Sidebar Navigation

The docs page SHALL display a fixed left sidebar with categorized navigation containing:
- "GETTING STARTED" section with Introduction and Installation links
- "CORE CONCEPTS" section with Scaling, Vertical Scale, and Moderate Scale links
- "API REFERENCE" section with Hooks and Utilities links

#### Scenario: Sidebar renders with all sections
- **WHEN** user visits any docs page
- **THEN** the sidebar displays all navigation sections
- **AND** each section shows its title in uppercase
- **AND** each section contains its child navigation links

#### Scenario: Active link is highlighted
- **WHEN** user is viewing a specific docs page
- **THEN** the corresponding sidebar link is highlighted with primary color background
- **AND** other links remain in default muted style

---

### Requirement: Breadcrumb Navigation

The docs page SHALL display a breadcrumb showing the current page location in the format "CATEGORY > PAGE_TITLE".

#### Scenario: Breadcrumb shows current location
- **WHEN** user views the Scaling page under Core Concepts
- **THEN** the breadcrumb displays "CORE CONCEPTS > SCALING"
- **AND** the category name is clickable

---

### Requirement: Page Title and Description

Each docs page SHALL display a title and one-sentence description at the top of the content area.

#### Scenario: Title and description render
- **WHEN** user views a docs page
- **THEN** the page title is displayed in large bold text
- **AND** a brief description follows immediately below

---

### Requirement: Code Block with Copy

The docs page SHALL display code examples in styled code blocks with:
- File name indicator (e.g., "Example.js")
- Syntax-colored code content
- Copy button to copy code to clipboard

#### Scenario: User copies code
- **WHEN** user clicks the copy button on a code block
- **THEN** the code content is copied to clipboard
- **AND** visual feedback indicates successful copy

---

### Requirement: Demo Preview Section

The docs page SHALL include a demo preview section displaying:
- Platform visualization (iOS, Android, Web as visual rectangles)
- "ONE CODEBASE" label showing cross-platform capability
- Feature title and description (e.g., "Write once, scale everywhere")

#### Scenario: Demo preview displays platform visualization
- **WHEN** user views a docs page with a demo
- **THEN** three platform representations are shown (iOS, Android, Web)
- **AND** "ONE CODEBASE" label is displayed below the devices
- **AND** a feature description section is shown

---

### Requirement: When to Use Section

The docs page SHALL include a "When to use" section with feature cards showing:
- Icon for each use case
- Title (e.g., "Typography", "Spacing & Layout", "Iconography")

#### Scenario: Use case cards display
- **WHEN** user scrolls to the "When to use" section
- **THEN** three or more use case cards are displayed in a grid
- **AND** each card has an icon and title

---

### Requirement: Docs Layout Structure

The docs layout SHALL use a two-column structure:
- Fixed sidebar on the left (260px width)
- Main content area with the Navbar at top
- Content area scrolls independently of sidebar

#### Scenario: Layout renders correctly
- **WHEN** user visits any docs page
- **THEN** the Navbar is displayed at the top
- **AND** the sidebar is fixed on the left
- **AND** the main content scrolls independently

---

### Requirement: Dynamic Routing

The docs page SHALL support dynamic routing based on URL slugs to render different documentation pages.

#### Scenario: Route to specific page
- **WHEN** user navigates to `/docs/core-concepts/scaling`
- **THEN** the Scaling page content is displayed
- **AND** the sidebar shows Scaling as the active link

---

### Requirement: Introduction Page Content

The Introduction page SHALL be the default docs landing page containing:
- Philosophy quote in italic style
- Brief library description
- Code example showing imports and basic usage (Philosophy.js)
- Platform demo preview with iOS/Android/Web visualization
- "Write once, scale everywhere" feature section

#### Scenario: Introduction page displays philosophy
- **WHEN** user visits `/docs` or `/docs/introduction`
- **THEN** the page displays the philosophy quote: "Scale sizes by default, adjust layout values when needed, and split layouts only when the UX is fundamentally different."
- **AND** the quote is styled in italic

#### Scenario: Introduction page shows code example
- **WHEN** user views the Introduction page
- **THEN** a code block labeled "Philosophy.js" is displayed
- **AND** the code shows imports for scale, verticalScale, and moderateScale
- **AND** the code demonstrates basic usage patterns

### Requirement: Installation Page Content

The Installation page SHALL display a complete installation guide containing:
- Page title "Installation" with description
- Step 1: Install dependency card with tabbed package manager commands (NPM, YARN, EXPO)
- Step 2: Verify installation card with code example
- Expo Compatible info card
- Troubleshooting section with TypeScript Definitions and Reset Cache cards

#### Scenario: Installation page displays step cards
- **WHEN** user visits `/docs/installation`
- **THEN** the page displays numbered step cards
- **AND** Step 1 shows "Install dependency" with tabbed code block
- **AND** Step 2 shows "Verify Installation" with code example

#### Scenario: User switches package manager tab
- **WHEN** user clicks on YARN tab in Step 1
- **THEN** the code block displays the yarn install command
- **AND** the YARN tab is highlighted as active

#### Scenario: Installation page shows info cards
- **WHEN** user views the Installation page
- **THEN** an "Expo Compatible" info card is displayed
- **AND** a Troubleshooting section with warning/info cards is shown

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

### Requirement: Design Tokens Page Content

The Design Tokens page SHALL display comprehensive configuration documentation containing:
- Title "Design Tokens" with "Configuration" badge
- Description explaining semantic spacing, typography, and sizing values
- Action buttons for "Configure" and "API Reference"
- Feature cards section with "Pre-defined Values" and "Fully Customizable" cards
- "Using Tokens" section with code example showing token strings in createScaledStyles
- "Customizing via Provider" section with ResponsiveProvider code example
- "Default Token Map" section with table showing token names, base values, and scaled values
- Previous/Next page navigation

#### Scenario: Page displays header with configuration badge
- **WHEN** user visits `/docs/auto-scale/design-tokens`
- **THEN** the page title "Design Tokens" is displayed
- **AND** a "Configuration" badge is shown next to the title
- **AND** "Configure" and "API Reference" buttons are visible

#### Scenario: Page shows feature cards
- **WHEN** user views the Design Tokens page
- **THEN** two feature cards are displayed side by side
- **AND** "Pre-defined Values" card explains semantic keys like sm, md, lg
- **AND** "Fully Customizable" card explains ResponsiveProvider customization

#### Scenario: Page shows token usage examples
- **WHEN** user views the "Using Tokens" section
- **THEN** a code example shows token strings in createScaledStyles
- **AND** tokens like 'md', 'sm', 'lg', 'xs', 'xl' are demonstrated

#### Scenario: Page displays default token map
- **WHEN** user views the "Default Token Map" section
- **THEN** a table displays token names (xs, sm, md, lg, xl)
- **AND** base values in pixels are shown
- **AND** scaled values for iPhone 14 and iPad Pro are shown

#### Scenario: Page navigation works
- **WHEN** user views the bottom of the page
- **THEN** Previous link shows "s() Function"
- **AND** Next link shows "responsive()"

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

