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

