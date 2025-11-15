# Design Guidelines for PrimeShine Cleaning Co. Website

## Design System

**Typography**
- Primary Font: Google Font "Poppins" or "Inter"
- Premium, modern hierarchy with clean readability

**Color Palette** (CSS Variables)
- Background: #F8FAFC (off-white)
- Primary: #0F172A (dark navy)
- Accent: #22C55E (fresh green) or #38BDF8 (aqua)
- Text: #0B1120
- Muted: #64748B

**Visual Style**
- Premium $2,000 custom website aesthetic
- Generous white space with clean layouts
- Rounded corners throughout
- Box-shadow for depth on cards
- Smooth hover transitions on all interactive elements
- Fully responsive, mobile-first approach
- Flexbox/CSS Grid for all layouts

## Page Structure & Sections

**1. Sticky Navigation Bar**
- Sticks to top on scroll
- Left: "PrimeShine" text logo
- Right: Nav links (Home, Services, Pricing, About, Reviews, FAQ, Contact)
- Mobile: Hamburger menu with slide-down animation

**2. Hero Section**
- Full-width with background image (cleaning-related)
- Dark overlay for text readability
- Vertically centered content
- Headline: "Spotless Spaces. Stress-Free Living."
- Subheadline: "Professional residential and commercial cleaning in Tampa with flexible plans and 5-star service."
- Two buttons: Primary "Get a Free Quote" + Secondary "View Services"
- Fade-in animation on page load
- Mobile: Floating "Get a Free Quote" button (bottom-right corner)

**3. Trust Bar**
- Horizontal strip below hero
- 4 items: "5+ Years Experience", "100+ Happy Clients", "Licensed & Insured", "100% Satisfaction Guarantee"
- Icons/badges with simple styling

**4. Services Section**
- 6 service cards in responsive grid (3 columns desktop, 1 mobile)
- Services: Residential Cleaning, Deep Cleaning, Move-In/Move-Out, Office & Commercial, AirBnB Turnover, Post-Construction
- Each card: Icon, title, 1-2 sentence description, "Learn More" button (opens modal)

**5. Pricing Section**
- 3 pricing cards: Basic Maintenance, Standard Deep Clean, Premium VIP Plan
- Middle plan highlighted as "Most Popular" with badge
- Each card: Plan name, tagline, "Starting at" price, 4-6 bullets, "Book Now" button

**6. About + Why Choose Us**
- Two-column layout (stacked mobile)
- Left: Company mission and promise text
- Right: "Why Choose Us" list with icons (Vetted cleaners, Eco-friendly products, Reliable scheduling, Fully insured, Transparent pricing)
- Badge: "Locally owned in Tampa, FL"

**7. Testimonials**
- Title: "What Our Clients Say"
- 3-5 testimonials with name, star rating (★ symbols), quote
- Carousel slider (auto-rotate 6-8 seconds + manual controls)

**8. FAQ Section**
- 6-8 questions with accordion behavior
- Click to toggle answer (one open at a time on desktop)

**9. Contact/Booking Section**
- Two-column desktop layout
- Left: Text, phone, email, service area
- Right: Contact form with fields (Full Name, Phone, Email, Property Type, Service Type, Preferred Date, Message)
- Professional form styling with labels above inputs, focus states, error message areas

**10. Footer**
- Logo/brand name, phone, email, location
- Small nav links
- Copyright with current year
- "Back to top" link

## Interactions & Animations

- Smooth scrolling for all navigation
- Service modals with overlay and close functionality
- FAQ accordion expand/collapse
- Testimonials auto-rotation with next/prev controls
- Scroll reveal effects (fade/slide in when sections enter viewport)
- Button hover: slight scale + enhanced shadow
- Card hover: raise with shadow
- Form validation with inline errors and success banner
- Pricing cards pre-select service type when "Book Now" clicked

## Images

**Hero Section**: Large background image of professional cleaning in action (bright, clean home or office space). Dark overlay (30-40% opacity) to ensure text readability. Image should convey professionalism and cleanliness.