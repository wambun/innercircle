# Complete Design Reference - Insurance Company Framer Template

## Template Overview

**Source**: [Insurance Template on Framer](https://www.framer.com/marketplace/templates/insurance/)

### Pages Included (9 Total)
1. **Home** - Landing page with hero, features, testimonials
2. **About Us** - Company information and story
3. **Team CMS** - Dynamic team member listings
4. **Services CMS** - Dynamic service offerings
5. **Pricing** - Service pricing tiers
6. **Showcases CMS** - Portfolio/case studies
7. **Blog CMS** - Dynamic blog post listings
8. **Contact Us** - Contact form and information
9. **404** - Error page

### Key Features
- Accessibility optimized (semantic tags, ARIA labels)
- Animations & Effects (Framer Motion compatible)
- SEO built-in
- Analytics integration ready
- CMS-ready structure
- Reusable components
- Form handling
- Responsive design (visual breakpoints)

---

## Page-by-Page Layout Breakdown

### 1. Homepage Layout

#### Section 1: Navigation Header
- Fixed positioning at top
- Logo (160px × 35px)
- Horizontal nav links
- CTA button (teal)
- Max-width: 1280px, centered

#### Section 2: Hero
- Padding: 200px top, 100px bottom
- Max-width: 1200px for content
- Structure:
  - Badge/label (mint pill)
  - Main headline (48-64px, bold)
  - Subheadline paragraph
  - Primary CTA button
  - Secondary link (optional)
- Background: White or subtle gradient

#### Section 3: Featured Image/Media
- Aspect ratio: 2.78:1
- Height: 450px desktop, 300px mobile
- Border radius: 8px
- Full-width within container

#### Section 4: Features/Benefits Grid
- Two-column layout (desktop)
- Stacked layout (mobile)
- Gap: 70px desktop, 40px mobile
- Feature cards with icons

#### Section 5: Services Grid
- 3-column grid layout
- 30px gaps between items
- White background cards
- Border radius: 8px
- Shadow: 0 18px 30px rgba(0,49,39,0.1)
- Card content: Icon, title, description, link

#### Section 6: Testimonials Section
- Light background (#fafafa)
- Card-based arrangement
- Flexible/carousel layout
- Quote, author, title format

#### Section 7: Stats/Numbers (Optional)
- Dark or teal background
- 4-column layout
- Large numbers with labels

#### Section 8: CTA Section
- Dark navy background (#003127)
- Padding: 100px vertical
- Headline + subtext + button
- Optional newsletter form

#### Section 9: Footer
- Dark navy background (#003127)
- Multi-column layout
- Logo, nav links, contact info, social
- Copyright line

---

### 2. About Us Page Layout

#### Section 1: Page Hero
- Smaller than homepage hero
- Page title + brief description
- Optional background image/pattern

#### Section 2: Mission/Story
- Two-column layout (text | image)
- Company narrative
- Key milestones

#### Section 3: Values Grid
- 3-4 column grid
- Icon + title + description per value
- Consistent card styling

#### Section 4: Timeline (Optional)
- Vertical timeline for company history
- Year markers with descriptions

#### Section 5: Team Preview
- Featured team member(s)
- Photo + name + title + bio
- Link to full team page

#### Section 6: CTA Section
- Contact invitation

---

### 3. Team Page Layout

#### Section 1: Page Hero
- Team headline
- Brief team description

#### Section 2: Team Grid
- Responsive grid layout
- Card design:
  - Photo (varying heights: 145-390px)
  - Name (bold)
  - Title
  - Bio (optional)
- Hover effects for interactivity

#### Section 3: Join Team CTA
- Careers invitation
- Link to careers page

---

### 4. Services Page Layout

#### Section 1: Page Hero
- Services overview headline
- Brief description

#### Section 2: Services Grid
- 3-column grid (desktop)
- 2-column (tablet), 1-column (mobile)
- Card content:
  - Service icon
  - Service title
  - Short description
  - "Learn More" link
- Cards: white bg, shadow, 8px radius

#### Section 3: Process Steps
- How we work section
- Numbered or icon-based steps
- Horizontal or vertical layout

#### Section 4: CTA Section
- Get started invitation

---

### 5. Individual Service Page Layout

#### Section 1: Service Hero
- Service name
- Overview paragraph
- Optional hero image

#### Section 2: Features/Benefits
- Grid of service features
- Icon + title + description

#### Section 3: How It Works
- Process steps specific to service

#### Section 4: Pricing (Optional)
- If applicable to service

#### Section 5: FAQ Accordion
- Common questions
- Expandable answers

#### Section 6: Related Services
- Links to other services

#### Section 7: CTA
- Contact/consultation invitation

---

### 6. Pricing Page Layout

#### Section 1: Page Hero
- Pricing headline
- Brief value proposition

#### Section 2: Pricing Cards
- Min-height: 618px
- Vertical flex layout
- Structure per card:
  - Plan name
  - Price (large)
  - Description
  - Divider line (5px, teal)
  - Feature list (checkmarks)
  - CTA button
- Highlighted "popular" tier

#### Section 3: Comparison Table (Optional)
- Feature comparison across tiers

#### Section 4: FAQ Section
- Pricing-related questions

#### Section 5: CTA
- Still have questions? Contact us

---

### 7. Blog Page Layout

#### Section 1: Page Hero
- Blog/Insights headline
- Category filters (optional)

#### Section 2: Featured Post
- Larger card for latest/featured
- Image, title, excerpt, date

#### Section 3: Posts Grid
- 3-column grid (desktop)
- Card design:
  - Featured image
  - Category badge
  - Title
  - Excerpt
  - Date/author
  - Read more link

#### Section 4: Pagination
- Page numbers or load more

---

### 8. Contact Page Layout

#### Section 1: Page Hero
- Contact headline
- Brief invitation text

#### Section 2: Two-Column Layout
- Column 1: Contact Form
  - Full name input
  - Email input
  - Phone input (optional)
  - Message textarea
  - Submit button (teal)
- Column 2: Contact Info
  - Address
  - Phone
  - Email
  - Office hours

#### Form Input Styling:
```css
background: #ffffff1a; /* on dark */
border-radius: 10px;
font-size: 18px;
padding: 14px 24px;
border: 1px solid transparent;
transition: all 0.3s cubic-bezier(0.44, 0, 0.56, 1);
```

#### Section 3: Map (Optional)
- Embedded Google Map

#### Section 4: Additional Info
- Social links
- FAQ about contacting

---

### 9. 404 Error Page

- Centered layout
- 404 graphic/illustration
- "Page not found" message
- Return to home button
- Optional search bar

---

## Responsive Breakpoints Summary

| Breakpoint | Width | Adaptations |
|------------|-------|-------------|
| Desktop | 1280px+ | Full layouts, all columns |
| Tablet | 992px - 1279px | Reduced padding, some columns collapse |
| Small Tablet | 768px - 991px | 2-column max, stacking begins |
| Mobile | < 768px | Single column, full stacking |

### Key Responsive Changes:
- Hero padding: 200px → 100px → 60px
- Grid columns: 3 → 2 → 1
- Gap spacing: 70px → 50px → 40px
- Font sizes: Headlines scale down 30-40%
- Navigation: Hamburger menu on mobile

---

## Animation Patterns

### Page Transitions
```javascript
// Framer Motion
initial: { opacity: 0, y: 20 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.5, ease: "easeOut" }
```

### Scroll Animations
- Fade up on scroll enter
- Staggered children animations
- Scale on hover for cards

### Micro-interactions
- Button hover: brightness/scale
- Card hover: slight lift + shadow increase
- Link hover: underline animation
- Input focus: border color transition

---

## Mapping to Inner Circle Advisors

| Template Page | Inner Circle Page | Notes |
|---------------|-------------------|-------|
| Home | Homepage | Full adaptation |
| About Us | About | Greg bio + company story |
| Team | About (section) | Greg as featured member |
| Services | Services | Tax, Virtual CFO, Business |
| Pricing | Skip | Not applicable |
| Showcases | Skip | Not applicable |
| Blog | Blog | Insights/articles |
| Contact Us | Contact | Full contact page |
| 404 | 404 | Error page |

**Total Pages to Build: 7 main pages + service detail pages**
