# Financial Blueprint Dashboard - Design Guidelines

## Design Approach: Modern Fintech System

**Selected Approach:** Design System with Fintech Influences

**Primary References:** Monzo (UK fintech), Personal Capital (financial planning), Linear (dashboard structure)

**Rationale:** Financial dashboards demand trust, clarity, and efficient data comprehension. This utility-focused tool requires professional aesthetics with emphasis on data hierarchy and scanability over visual flair.

**Design Principles:**
1. Data First - Information architecture prioritizes quick comprehension
2. Progressive Disclosure - Complex data revealed through interaction
3. Trust Through Clarity - Professional, consistent visual language
4. UK Context - British English, £ symbol prominence, UK-specific terminology

---

## Typography System

**Font Families:**
- Primary: Inter (via Google Fonts) - Clean, professional, excellent for data
- Monospace: JetBrains Mono - For financial figures, percentages

**Hierarchy:**
- Page Titles: text-3xl md:text-4xl font-bold
- Section Headers: text-2xl font-semibold
- Subsection Headers: text-xl font-semibold
- Card Titles: text-lg font-semibold
- Body Text: text-base font-normal
- Labels/Captions: text-sm font-medium
- Financial Figures: text-2xl md:text-3xl font-bold font-mono
- Metrics: text-xl font-semibold font-mono
- Small Data: text-sm font-mono

---

## Layout System

**Spacing Primitives:** Tailwind units of 2, 4, 6, 8, 12, 16
- Micro spacing (within components): 2, 4
- Component padding: 6, 8
- Section spacing: 12, 16
- Page margins: 8, 12, 16

**Grid System:**
- Main container: max-w-7xl mx-auto px-6 lg:px-8
- Dashboard layout: Two-column sidebar navigation (sidebar: w-64, main: flex-1)
- Card grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

**Responsive Breakpoints:**
- Mobile: Single column stacking
- Tablet (md:): 2-column grids
- Desktop (lg:): 3-column grids, persistent sidebar

---

## Component Library

### Navigation Structure
**Sidebar Navigation:**
- Fixed sidebar (hidden on mobile, slides in via menu button)
- Logo/title at top (p-6)
- Navigation items with icons (py-3 px-4 rounded-lg)
- Active state indication (font-semibold)
- Icons: Heroicons outline style

**Mobile Navigation:**
- Hamburger menu button (top-left)
- Slide-in drawer overlay
- Close button in drawer

### Dashboard Cards
**Standard Card:**
- Rounded corners: rounded-xl
- Padding: p-6
- Shadow: shadow-sm hover:shadow-md transition
- Border: border

**Stat Card:**
- Header with icon + label (text-sm font-medium)
- Large value (text-3xl font-bold font-mono)
- Trend indicator (text-sm with up/down icon)
- Optional sparkline chart

**Section Card:**
- Larger padding: p-8
- Section title with divider (border-b pb-4 mb-6)
- Content area with proper spacing

### Data Visualization Components

**Chart Containers:**
- Full-width responsive containers
- Height: h-64 md:h-80 for standard charts
- Height: h-96 for featured charts
- Padding around charts: p-6

**Progress Bars:**
- Height: h-2 rounded-full
- Container with percentage label
- Used for savings goals, allowance tracking

**Metric Displays:**
- Label above value pattern
- Icon + Label + Value horizontal layout
- Grid of 2-4 metrics per row

### Profile Overview Section
**Layout:**
- Hero card with user details (p-8)
- Grid of key metrics (grid-cols-2 lg:grid-cols-4 gap-4)
- Quick stats: Income, Net Worth, Savings Rate, Tax Paid

**Profile Card Content:**
- Avatar placeholder (w-20 h-20 rounded-full)
- Name + employment status
- Location + age range

### Quantitative Analysis Section
**Multi-Column Layout:**
- Income vs Expenses comparison (2-column)
- Savings breakdown cards (3-column grid)
- ISA Allowance tracker (progress bar + remaining amount)
- Pension contribution status
- Net worth chart (full-width)
- Tax breakdown table

**Chart Types:**
- Donut chart for expense categories
- Bar chart for income streams
- Line chart for net worth over time
- Stacked bars for tax analysis

### Qualitative Analysis Section
**Card-Based Layout:**
- Financial goals cards (grid-cols-1 md:grid-cols-2 gap-6)
- Risk tolerance assessment (single card with scale)
- Lifestyle priorities ranking (ordered list cards)
- Timeline visualization for major goals

### Financial Protection Section
**Coverage Display:**
- Insurance types grid (grid-cols-1 md:grid-cols-3)
- Coverage amount vs recommended (comparison bars)
- Gap analysis callout boxes
- Emergency fund meter (circular progress indicator)

**Protection Cards:**
- Life insurance status
- Income protection
- Critical illness cover
- Home/contents insurance
- Emergency fund (6-12 months expenses)

### Financial Mindset Section
**Assessment Display:**
- Score cards for each dimension (grid-cols-1 md:grid-cols-3)
- Radar/spider chart for overall profile
- Behavioral indicators with icons
- Strengths/areas for improvement lists

**Categories:**
- Spending habits score (/10)
- Saving discipline score (/10)
- Investment confidence score (/10)
- Financial literacy score (/10)

### Action Plan Section
**Priority-Based Layout:**
- Timeline view (vertical on mobile, horizontal on desktop)
- Action cards with priority badges
- Grouped by timeframe: Immediate, Short-term (3-6mo), Medium-term (6-12mo), Long-term (1yr+)
- Progress checkboxes

**Action Card:**
- Priority indicator (High/Medium/Low badge)
- Action title + description
- Expected impact note
- Timeframe tag
- Checkbox for completion

### Tables
**Financial Data Tables:**
- Responsive table with horizontal scroll on mobile
- Alternating row treatment
- Header: font-semibold text-sm uppercase
- Cell padding: px-4 py-3
- Alignment: Numbers right-aligned, text left-aligned

### Form Elements (if needed for inputs)
**Input Fields:**
- Height: h-12
- Padding: px-4
- Rounded: rounded-lg
- Border: border-2
- Label above input (text-sm font-medium mb-2)

### Icons
**Icon Library:** Heroicons (outline style)
- Consistent size: w-5 h-5 for inline, w-6 h-6 for headers
- Used for: Navigation, stat cards, categories, actions

### Badges & Tags
**Badges:**
- Rounded: rounded-full px-3 py-1
- Sizes: text-xs for tags, text-sm for status
- Use for: Priority levels, status indicators, categories

---

## Images

**No hero image required** - This is a dashboard application focused on data display.

**Optional Icons/Illustrations:**
- Empty state illustrations for sections without data
- Small decorative icons for categories (optional, use Heroicons instead)
- Avatar placeholder for profile section

---

## Special Considerations

**UK Financial Context:**
- Display all currency in GBP (£) with proper formatting (£45,000 not £45000)
- ISA allowance: £20,000/year clearly displayed
- Pension annual allowance: £60,000 tracking
- Tax-free personal allowance: £12,570 referenced
- National Insurance categories labeled

**Data Density Management:**
- Use collapsible sections for detailed breakdowns
- Summary cards at top, detailed views below
- Tooltips for explaining complex metrics
- "View Details" expandable sections

**Accessibility:**
- High contrast ratios for all text
- Sufficient touch targets (min 44x44px)
- Keyboard navigation throughout
- Screen reader labels for charts
- Focus indicators on all interactive elements

**Performance:**
- Lazy load chart libraries
- Skeleton loaders for data sections
- Optimistic UI for interactions