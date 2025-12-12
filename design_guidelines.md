# TRUMPF Elektrowerkzeuge - Design Guidelines

## Design Approach
**Reference-Based: Premium Industrial Product Showcase**
Drawing inspiration from Apple, Porsche Design, and premium B2B product sites that balance engineering precision with modern aesthetics. This is a professional-grade tool manufacturer targeting metal fabrication experts, not consumer DIY—the design must convey Swiss/German engineering excellence, reliability, and industrial heritage.

## Core Design Principles
1. **Precision First**: Clean geometry, aligned grids, exact spacing reflect manufacturing quality
2. **Professional Authority**: Bold but restrained—confidence without gimmicks
3. **Engineering Heritage**: Subtle nods to 100+ years of TRUMPF innovation
4. **B2B Clarity**: Information hierarchy prioritizes specs, applications, and professional use cases

---

## Typography System
- **Display/Headers**: Inter or Montserrat (700-800 weight) - strong, geometric, modern industrial feel
- **Body/Content**: Inter (400-500 weight) for excellent readability across technical specs
- **Accent/Labels**: DM Mono or JetBrains Mono (500 weight) for product codes, specifications

**Hierarchy**:
- Hero Headlines: text-6xl lg:text-7xl xl:text-8xl, tracking-tight, font-bold
- Section Headers: text-4xl lg:text-5xl, font-bold
- Product Titles: text-2xl lg:text-3xl, font-semibold
- Body Text: text-base lg:text-lg, leading-relaxed
- Technical Specs: text-sm, font-mono, tracking-wide

---

## Layout & Spacing System
**Tailwind Units**: Primary spacing rhythm uses 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-6 to p-8 (mobile), p-12 to p-16 (desktop)
- Section spacing: py-16 lg:py-24 xl:py-32
- Grid gaps: gap-6 lg:gap-8 xl:gap-12
- Container max-width: max-w-7xl with px-6 lg:px-8

**Grid Strategy**:
- Product grids: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature comparison: lg:grid-cols-2 (spec-heavy content)
- Full-width hero, alternating single/multi-column sections for rhythm

---

## Component Library

### Navigation
- Fixed header with semi-transparent backdrop blur
- Logo left, main nav center, CTA (Request Quote/Contact) right
- Mega-menu for product categories with thumbnail previews
- Mobile: hamburger menu with full-screen overlay

### Hero Section
- Full-viewport height (min-h-screen) with large background image
- TRUMPF nibbler or shear in professional workshop setting
- Centered headline + subheading + dual CTA (Shop Tools / Learn More)
- CTAs with backdrop-blur-md bg-white/20 treatment over image
- Subtle scroll indicator at bottom

### Product Showcase Grid
- Large product cards with professional photography on neutral backgrounds
- Product image, title, category tag, starting price, "View Details" link
- Hover: subtle scale (scale-105) and shadow elevation
- Badge overlays for "Swiss Made" or "New Product"

### Product Detail Layout
- Two-column: Left = image gallery (main + thumbnails), Right = specs/description
- Tabbed interface: Overview | Technical Specs | Applications | Documentation
- Prominent "Request Quote" CTA with dealer locator link
- Related products carousel at bottom

### Feature Sections
- Alternating image-left/text-right layouts for key differentiators
- "Swiss Precision Engineering" | "Cordless Power" | "Industrial Durability"
- Icons for stats (100+ years, 86 countries, Swiss manufacturing)
- Use diagrams/technical illustrations where applicable

### Trust Builders
- Client logos section (metal fabrication, construction firms)
- Case study cards with before/after metal cutting examples
- Certification badges (ISO, Swiss Made, safety standards)

### Contact/Quote Form
- Two-column: Form left (Name, Company, Tool Interest, Message) | Info right (dealer network, response time, support hours)
- Industry/Application dropdown (Sheet Metal, Welding, Construction, etc.)
- File upload for project specifications

### Footer
- Four columns: Products | Resources (manuals, videos) | Company | Contact
- Newsletter signup for professional updates
- Dealer locator link, phone support
- Trust elements: Swiss Made badge, 100+ years established

---

## Animations & Interactions
**Minimal, Purposeful Motion**:
- Scroll-triggered fade-in-up for section entries (once, subtle)
- Product card hover transforms (scale, shadow)
- Smooth page transitions between product categories
- NO autoplay video, NO parallax, NO scroll-jacking
- Focus on fast loading and immediate usability

---

## Images Strategy

**Required Images**:

1. **Hero Background** (1920x1080+): 
   - TRUMPF nibbler or panel shear cutting sheet metal in professional workshop
   - Sharp focus on tool, slight depth-of-field on background
   - Industrial setting with metal sparks/cutting action
   - Professional lighting showcasing Swiss precision

2. **Product Grid Images** (800x800, square):
   - Individual tool shots on white/light gray background
   - Clean product photography showing full tool profile
   - Consistent lighting and angle across all products
   - One image per main product: Nibblers, Shears, Bevelers, Laser Cleaner

3. **Feature Section Images** (1200x800, landscape):
   - Close-up of cutting edge showing precision
   - Battery pack detail for cordless models
   - Tool in heavy-duty industrial application
   - Swiss manufacturing facility (if available)

4. **Case Study/Application Images** (variable):
   - Metal fabrication examples showing cut quality
   - Construction site professional using TRUMPF tool
   - Before/after metal edge comparisons

5. **Logo/Badge Graphics**:
   - Swiss Made certification badge
   - TRUMPF heritage logo/emblem
   - Safety/quality certification icons

All images should convey: Premium quality, industrial precision, professional-grade durability, Swiss/German engineering heritage.

---

## Page Structure

**Homepage Sections** (7 sections):
1. Hero with dramatic tool imagery + bold value proposition
2. Product category grid (4-6 main product lines)
3. "Why TRUMPF" feature blocks (Swiss Made, 100 years, precision)
4. Featured product spotlight with tech specs
5. Industry applications showcase
6. Client testimonials/case studies
7. CTA section (Find a Dealer / Request Catalog)

**Product Pages**: Image gallery, specs table, applications, documentation downloads, dealer CTA

**About Page**: Heritage timeline, manufacturing process, quality standards, global reach

This design positions TRUMPF as the premium choice for professional metal fabricators—engineering excellence meets modern digital experience.