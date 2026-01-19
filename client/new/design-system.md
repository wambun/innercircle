# Insurance Company Framer Template - Design System

## Overview
Modern, sleek website template designed for professional services. Features a clean layout, easy navigation, and premium aesthetic suitable for financial/advisory services.

## Color Palette

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| White | `#ffffff` | Primary background |
| Teal/Turquoise | `#11dba3` | Primary accent, CTAs, buttons |
| Dark Teal | `#1a6a59` | Secondary accent |
| Dark Navy | `#003127` | Footer, dark sections |
| Light Mint | `#c6fbec` | Highlights, badges, tags |

### Neutral Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Gray | `#696e77` | Body text |
| Soft Gray | `#fafafa` | Alternate backgrounds |
| Shadow | `#0031271a` | Box shadows |
| Semi-transparent White | `#ffffff1a` | Dark section inputs |

## Typography

### Font Families
- **Primary**: DM Sans (weights: 400, 500, 600, 700, 900)
- **Secondary**: Inter (weights: 400, 600, 700, 900)

### Font Sizes
- Headlines: 48-64px
- Subheadlines: 24-32px
- Body: 16-20px
- Small/Labels: 12-14px

### Line Heights
- Headlines: 1.2em
- Body: 1.5em

## Spacing System

### Section Padding
- **Hero sections**: 200px top, 100px bottom
- **Major content sections**: 130px vertical
- **Standard sections**: 80-100px vertical

### Component Spacing
- Card internal padding: 40-80px
- Grid gaps: 30px
- Element gaps: 20-50px
- Stack gaps: CSS variables `--stack-gap-y` and `--stack-gap-x`

### Layout Constraints
- Max content width: 1200px
- Max container width: 1280px

## Components

### Navigation
- Fixed header position
- Flex-row horizontal layout
- Centered content alignment
- Max-width: 1280px

### Buttons/CTAs
```css
background: #11dba3;
padding: 14px 24px;
border-radius: 8-10px;
font-weight: 600;
```

### Cards
```css
background: #ffffff;
box-shadow: 0 18px 30px #0031271a;
border-radius: 8px;
padding: 40-80px;
```

### Badges/Labels
```css
background: #c6fbec;
border-radius: 30px;
padding: 8px 16px;
```

### Form Inputs
```css
background: #ffffff1a; /* dark sections */
border: 1px solid transparent;
border-radius: 8px;
transition: all .3s cubic-bezier(.44,0,.56,1);
```
- Focus state: teal border color

## Grid Layouts

### Feature Grid
- 3 columns on desktop
- 30px gap
- Responsive to single column on mobile

### Testimonials Grid
- 3 columns
- Card height: 220px
- 30px gap

## Responsive Breakpoints
- Large: 1280px+
- Medium: 992px - 1279px
- Small: 768px - 991px
- Mobile: < 768px

## Animations & Transitions

### Standard Transition
```css
transition: all .3s cubic-bezier(.44,0,.56,1);
```

### Input Focus
```css
transition: border-color .3s cubic-bezier(.44,0,.56,1);
```

### Visual Effects
- Background brightness filter: `brightness(.4)` for overlays
- Opacity transitions for hover states
- Border animations on interactive elements

## Visual Hierarchy

### Page Structure
1. Fixed navigation (top)
2. Hero section (200px+ top padding)
3. Content sections (130px padding)
4. Feature/service grids
5. Testimonials
6. CTA section
7. Footer (dark navy background)

### Emphasis Patterns
- Large hero typography
- Teal accent for CTAs and important elements
- Light mint for highlighting features
- Consistent card shadows for depth
