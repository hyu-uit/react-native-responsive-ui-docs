## ADDED Requirements

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


