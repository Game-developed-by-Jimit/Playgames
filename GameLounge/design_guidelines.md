# Gaming Website Design Guidelines

## Design Approach: Reference-Based (Gaming Platform Aesthetic)

**Primary References**: Steam, Epic Games Store, Xbox Game Pass, itch.io
**Design Philosophy**: Bold, immersive gaming aesthetic with high contrast and energy

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background Base: 220 15% 8% (deep charcoal blue)
- Surface: 220 12% 12% (elevated cards)
- Surface Elevated: 220 10% 16% (hover states)
- Primary Accent: 265 100% 65% (vibrant purple - gaming energy)
- Secondary Accent: 190 95% 55% (electric cyan - highlights)
- Success: 150 70% 50% (play/active states)
- Text Primary: 0 0% 98%
- Text Secondary: 220 10% 70%

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary: 265 80% 55%
- Text: 220 20% 15%

### B. Typography

**Font Stack:**
- Primary: 'Inter' (Google Fonts) - Clean, modern readability
- Display/Headers: 'Orbitron' or 'Rajdhana' (Google Fonts) - Gaming tech aesthetic for game titles

**Hierarchy:**
- Hero Title: 3.5rem bold, tight tracking (-0.02em)
- Page Title: 2.5rem bold
- Game Card Title: 1.25rem semibold
- Body: 1rem regular, line-height 1.6
- Category Tags: 0.875rem medium, uppercase tracking

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Card gaps: gap-6 (desktop), gap-4 (mobile)
- Container max-width: max-w-7xl

**Grid System:**
- Game Library: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
- Responsive breakpoints align with content density

### D. Component Library

**Hero Section:**
- Full-width gradient overlay on gaming-themed background image
- Centered heading + tagline + prominent search bar
- Height: 60vh on desktop, adaptive on mobile
- Gradient overlay: from bottom (dark) to transparent for text readability

**Game Cards:**
- Aspect ratio: 16:9 thumbnail
- Hover effect: Subtle lift (translateY -4px), surface elevation increase, glowing border using primary accent
- Card structure: Thumbnail → Title → Category tags → Description → Play button
- Rounded corners: rounded-xl
- Border: 1px border with surface-elevated color, glows on hover

**Search Bar:**
- Prominent placement in hero or sticky header
- Icon prefix (search icon)
- Pill-shaped (rounded-full) or rounded-lg
- Dark background with subtle border
- Real-time filtering with smooth transitions

**Game Player Page:**
- Full-width iframe container with 16:9 aspect ratio
- Back navigation in top-left
- Game info sidebar (collapsible on mobile): Title, description, category, controls guide
- Loading state: Animated spinner with "Loading game..." text

**Navigation:**
- Sticky header: Logo left, dark mode toggle right
- Backdrop blur effect: backdrop-blur-md bg-opacity-90
- Minimal but present: Don't overshadow content

**Loading Indicators:**
- Spinner: Rotating gradient ring using primary/secondary accent colors
- Skeleton loaders for game cards during search/filter
- Smooth fade-in when content loads

**Dark Mode Toggle:**
- Icon-based switch (sun/moon icons from Heroicons)
- Position: Top-right header
- Smooth transition: all elements transition colors over 200ms

### E. Visual Enhancements

**Animations** (Minimal, purposeful):
- Card hover: transform + glow (150ms ease)
- Page transitions: fade-in opacity (200ms)
- Search results: stagger fade-in for filtered games
- No autoplay carousels or excessive motion

**Effects:**
- Subtle gradient overlays on game thumbnails for text contrast
- Box shadows: Multi-layer for depth (small + large blur)
- Glassmorphism on modals/overlays: backdrop-blur + semi-transparent background

## Images

**Hero Background Image:**
- Large hero image required: Yes
- Description: Abstract gaming-themed background - neon circuits, digital grid patterns, or collage of popular game genres
- Placement: Full-width hero section with gradient overlay
- Style: High contrast, vibrant colors matching accent palette

**Game Thumbnails:**
- 16:9 aspect ratio placeholder images
- For sample games: Use colorful abstract patterns or game genre representations
- Ensure text remains readable over thumbnails with gradient overlays

## Sample Games Integration

Include 3+ embedded HTML5 games via iframe from sources like:
- itch.io embeds
- HTML5 game repositories
- Open-source game engines (Phaser examples)

Each game card links to dedicated player page with full iframe embedding and responsive container.