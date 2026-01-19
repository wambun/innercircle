# Product Requirements Document: Inner Circle Advisors Website Redesign

## Phase 1: Architecture & Planning

---

## 1. Executive Summary

Transform the existing Inner Circle Advisors WordPress website into a modern, premium Next.js application following the design philosophy from the Insurance Company Framer Template. This redesign will maintain all existing content and functionality while dramatically improving the user experience, performance, and visual appeal.

---

## 2. Current Site Analysis (client/old)

### 2.1 Site Overview
| Attribute | Value |
|-----------|-------|
| Domain | innercircle.cpa |
| Platform | WordPress + Divi |
| Company | Inner Circle Advisors |
| Tagline | A Business Advisor You Can Trust |
| Location | Independence, OH |
| Service Area | Northern Ohio, US, Canada |

### 2.2 Owner/Leadership
**Gregory D. Hostelley, CPA, CGMA**
- 40+ years accounting experience
- Cleveland native, St. Ignatius alumnus
- Baldwin-Wallace University graduate
- One of youngest accountants in Northeast Ohio (historically)

### 2.3 Company History
- Founded: April 16, 1970 (by Greg's father)
- Original focus: Healthcare industry
- Current: Comprehensive tax/business advisory
- Clients: Thousands served across US and Canada

---

## 3. Complete Sitemap

### 3.1 Primary Navigation Structure

```
/                           → Homepage
├── /about                  → About (Greg Hostelley bio, company story)
├── /services               → Services Overview
│   ├── /services/tax-planning        → Tax Planning Services
│   ├── /services/virtual-cfo         → Virtual CFO Services
│   └── /services/business-advisory   → Business Advisory Services
├── /blog                   → Blog/Insights
│   └── /blog/[slug]        → Individual blog posts
├── /careers                → Careers Page
│   └── /careers/[position] → Individual job listings
└── /contact                → Contact Page
```

### 3.2 Page Inventory

| Page | Route | Priority | Content Source |
|------|-------|----------|----------------|
| Homepage | `/` | High | New design + old content |
| About | `/about` | High | `/about-greg-hostelley` |
| Services | `/services` | High | `/services` overview |
| Tax Planning | `/services/tax-planning` | High | `/tax-planning-for-big-savings` |
| Virtual CFO | `/services/virtual-cfo` | High | `/virtual-cfo` |
| Business Advisory | `/services/business-advisory` | Medium | `/business-services-for-small-businesses` |
| Blog Index | `/blog` | Medium | `/blog` |
| Blog Post | `/blog/[slug]` | Medium | Individual posts |
| Careers | `/careers` | Low | `/careers` |
| Career Detail | `/careers/[position]` | Low | Position details |
| Contact | `/contact` | High | `/contact-us` |

### 3.3 Footer Links Structure

```
Company          Services              Resources         Legal
--------         --------              ---------         -----
About            Tax Planning          Blog              Privacy Policy
Careers          Virtual CFO           Insights          Terms of Service
Contact          Business Advisory     Newsletter
```

---

## 4. Design Target Analysis (client/new)

### 4.1 Visual Identity

#### Color System
```css
/* Primary Palette */
--color-primary: #11dba3;         /* Teal - CTAs, accents */
--color-primary-dark: #1a6a59;    /* Dark teal - secondary */
--color-background-dark: #003127; /* Navy - footer, dark sections */
--color-accent-light: #c6fbec;    /* Mint - badges, highlights */

/* Neutrals */
--color-white: #ffffff;
--color-gray: #696e77;            /* Body text */
--color-gray-light: #fafafa;      /* Alt backgrounds */
--color-shadow: rgba(0, 49, 39, 0.1);
```

#### Typography
```css
/* Fonts */
--font-primary: 'DM Sans', sans-serif;
--font-secondary: 'Inter', sans-serif;

/* Scales */
--text-hero: 48-64px;
--text-h1: 40-48px;
--text-h2: 32-40px;
--text-h3: 24-28px;
--text-body: 16-18px;
--text-small: 14px;

/* Line Heights */
--leading-tight: 1.2;
--leading-normal: 1.5;
```

### 4.2 Spacing System

```css
/* Section Spacing */
--section-hero-pt: 200px;
--section-hero-pb: 100px;
--section-major: 130px;
--section-standard: 80px;

/* Component Spacing */
--card-padding: 40px;
--card-padding-lg: 80px;
--grid-gap: 30px;
--stack-gap: 20px;

/* Layout */
--max-width-content: 1200px;
--max-width-container: 1280px;
```

### 4.3 Component Patterns

#### Buttons
- Primary: Teal bg (#11dba3), white text, 14px 24px padding, 8px radius
- Secondary: Transparent/outline, teal text
- Hover: Brightness/opacity change

#### Cards
- White background
- Shadow: `0 18px 30px rgba(0, 49, 39, 0.1)`
- Border radius: 8px
- Padding: 40-80px

#### Badges/Labels
- Light mint background (#c6fbec)
- Dark teal text
- Border radius: 30px (pill shape)
- Padding: 8px 16px

#### Forms
- Inputs: Semi-transparent on dark, solid on light
- Focus: Teal border with smooth transition
- Transition: `all .3s cubic-bezier(.44,0,.56,1)`

### 4.4 Animation Specifications

```css
/* Standard Transition */
transition: all 0.3s cubic-bezier(0.44, 0, 0.56, 1);

/* Hover Effects */
opacity: 0.8 → 1;
transform: translateY(0) → translateY(-2px);

/* Page Transitions (Framer Motion) */
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.5, ease: "easeOut" }
```

---

## 5. Content Mapping Strategy

### 5.1 Homepage Content Map

| Section | Old Content Source | New Design Component |
|---------|-------------------|---------------------|
| Hero | Homepage hero | HeroSection with badge, headline, CTA |
| Services | Service snippets | ServicesGrid (3-column cards) |
| About | Company overview | AboutPreview (2-column with image) |
| Why Choose Us | Value props | FeaturesSection |
| Testimonials | (Add new) | TestimonialsCarousel |
| CTA | Contact prompt | CTASection (dark bg) |

### 5.2 About Page Content Map

| Section | Old Content Source | New Design Component |
|---------|-------------------|---------------------|
| Hero | Page header | PageHero |
| Story | Company history blog | StorySection |
| Owner | Greg bio | TeamMember (featured) |
| Values | (Define new) | ValuesGrid |
| Timeline | Founded 1970 history | Timeline component |
| CTA | Contact prompt | CTASection |

### 5.3 Services Content Map

| Section | Old Content Source | New Design Component |
|---------|-------------------|---------------------|
| Hero | Services header | PageHero |
| Overview | Services list | ServicesGrid |
| Individual Service | Service page content | ServiceDetail |
| Process | (Add new) | ProcessSteps |
| CTA | Contact prompt | CTASection |

### 5.4 Contact Content Map

| Section | Old Content Source | New Design Component |
|---------|-------------------|---------------------|
| Hero | Contact header | PageHero |
| Info | Address, phone | ContactInfo |
| Form | Contact form | ContactForm |
| Map | (Add new) | MapEmbed |

---

## 6. Technical Implementation Plan

### 6.1 Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15 | Framework (App Router) |
| React | 19 | UI Library |
| TypeScript | 5.x | Type Safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11.x | Animations |
| Shadcn UI | Latest | Component Base |

### 6.2 Project Structure

```
app/
├── (marketing)/
│   ├── page.tsx                    # Homepage
│   ├── about/page.tsx              # About
│   ├── services/
│   │   ├── page.tsx                # Services index
│   │   ├── [slug]/page.tsx         # Individual service
│   ├── blog/
│   │   ├── page.tsx                # Blog index
│   │   └── [slug]/page.tsx         # Blog post
│   ├── careers/
│   │   ├── page.tsx                # Careers index
│   │   └── [position]/page.tsx     # Job detail
│   └── contact/page.tsx            # Contact
├── layout.tsx                      # Root layout
└── globals.css                     # Global styles

components/
├── landing/
│   ├── hero/
│   │   ├── HeroSection.tsx
│   │   └── PageHero.tsx
│   ├── features/
│   │   ├── FeaturesGrid.tsx
│   │   └── FeatureCard.tsx
│   ├── services/
│   │   ├── ServicesGrid.tsx
│   │   └── ServiceCard.tsx
│   ├── testimonials/
│   │   ├── TestimonialsSection.tsx
│   │   └── TestimonialCard.tsx
│   ├── cta/
│   │   └── CTASection.tsx
│   ├── about/
│   │   ├── AboutPreview.tsx
│   │   ├── StorySection.tsx
│   │   └── TeamMember.tsx
│   └── contact/
│       ├── ContactForm.tsx
│       └── ContactInfo.tsx
├── shared/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── Button.tsx
└── ui/
    └── (shadcn components)

data/
├── config/
│   ├── site.settings.js            # Site metadata
│   ├── headerNavLinks.ts           # Navigation config
│   └── footerLinks.ts              # Footer links
├── services.ts                     # Services data
├── testimonials.ts                 # Testimonials
└── team.ts                         # Team/owner data
```

### 6.3 Implementation Phases

#### Phase 2A: Foundation (Global Components)
1. Configure Tailwind with design system colors/fonts
2. Build Header/Navigation component
3. Build Footer component
4. Create shared Button variants
5. Set up Framer Motion page transitions

#### Phase 2B: Homepage
1. HeroSection with animations
2. ServicesGrid (preview cards)
3. AboutPreview section
4. FeaturesSection
5. TestimonialsSection
6. CTASection

#### Phase 2C: Core Pages
1. About page with all sections
2. Services index page
3. Individual service pages (3)
4. Contact page with form

#### Phase 2D: Secondary Pages
1. Blog index
2. Blog post template
3. Careers index
4. Career detail page

#### Phase 2E: Polish & Optimization
1. Responsive refinements
2. Animation polish
3. SEO optimization
4. Performance audit
5. Accessibility check

### 6.4 Data Structure Definitions

#### Service Type
```typescript
interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
}
```

#### Testimonial Type
```typescript
interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company?: string;
  image?: string;
}
```

#### Team Member Type
```typescript
interface TeamMember {
  id: string;
  name: string;
  title: string;
  credentials: string[];
  bio: string;
  image: string;
  featured?: boolean;
}
```

---

## 7. Success Criteria

### 7.1 Performance Targets
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 90+
- Lighthouse Best Practices: 90+
- Lighthouse SEO: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

### 7.2 Design Compliance
- All colors match design system
- Typography consistent with specs
- Spacing follows defined system
- Animations smooth and purposeful
- Mobile-first responsive design

### 7.3 Functionality
- All pages from sitemap implemented
- Contact form functional
- Newsletter signup working
- Blog with proper SEO
- Careers with job listings

---

## 8. Next Steps

1. **Review & Approve PRD** - Confirm sitemap and design direction
2. **Begin Phase 2A** - Global layout components
3. **Iterative Development** - Build section by section
4. **QA & Testing** - Per component and page
5. **Launch Preparation** - Content review, final polish

---

*Document Version: 1.0*
*Created: Phase 1 Analysis*
*Status: Ready for Approval*
