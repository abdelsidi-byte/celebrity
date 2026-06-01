# Style & Society - Celebrity News Website

## 1. Concept& Vision

A premium celebrity gossip and entertainment news website with a bold, dark aesthetic that prioritizes content discovery. The design feels urgent and fresh — like breaking news meets glossy magazine. Every element communicates "this is where the real stories are."

## 2. Design Language

### Aesthetic Direction
Dark mode tabloid aesthetic — bold headlines, high contrast, editorial urgency. Inspired by New York Post's digital presence but elevated for a more sophisticated audience.

### Color Palette
```
--color-black: #000000
--color-white: #FFFFFF
--color-red: #E52D2D (accent - breaking news, CTAs)
--color-gray-100: #F5F5F5
--color-gray-200: #E5E5E5
--color-gray-300: #D4D4D4
--color-gray-400: #A3A3A3
--color-gray-500: #737373
--color-gray-600: #525252
--color-gray-700: #404040
--color-gray-800: #262626
--color-gray-900: #171717
--color-accent: #FF3B3B (vibrant red for highlights)
```

### Typography
- **Headlines**: Playfair Display (serif) - Bold, editorial authority
- **Subheads**: Inter (sans-serif) - Clean, modern
- **Body**: Inter - Readable at small sizes
- **Accent/Labels**: Inter Uppercase - Categories, timestamps

### Spatial System
- Base unit: 4px
- Section padding: 24px mobile, 48px desktop
- Card gaps: 16px-24px
- Max content width: 1280px
- Grid: 12-column with 24px gutters

### Motion Philosophy
- Instant hover feedback (150ms)
- Subtle image scale on hover (1.02x, 300ms)
- Smooth scroll behavior
- Breaking news badge pulse animation
- No page transitions (news site = urgency)

## 3. Layout & Structure

### Header
- Sticky header with blur backdrop
- Logo left, navigation center, utilities right
- Hamburger menu on mobile
- Breaking news ticker below nav (optional)

### Homepage Structure
1. **Hero Section**: Featured story with large image, overlay headline
2. **Main Content Grid**: 2/3 width articles + 1/3 sidebar
3. **Article Cards**: Image + headline + metadata
4. **Category Sections**: Horizontal scroll on mobile, grid on desktop
5. **Footer**: Newsletter signup, social links, legal

### Responsive Strategy
- Mobile-first approach
- Single column on mobile (<768px)
- Two columns on tablet (768px-1024px)
- Three columns on desktop (>1024px)
- Sidebar collapses to bottom on mobile

## 4. Features & Interactions

### Core Features
- **Breaking News Banner**: Red accent, pulse animation
- **Article Cards**: Hover zoom, underline reveal
- **Category Navigation**: Horizontal scroll with snap
- **Search**: Slide-in overlay with instant results
- **Newsletter Popup**: Triggered after 30s or scroll depth
- **Dark Mode**: System preference detection (default dark)

### Interactions
- **Card Hover**: Image scale 1.02x, shadow lift, headline color change
- **Navigation**: Underline slide animation
- **Buttons**: Scale 0.98x on press, background shift on hover
- **Mobile Menu**: Full-screen overlay with staggered animation

### States
- **Loading**: Skeleton screens with shimmer
- **Empty**: "No articles found" with suggested searches
- **Error**: Graceful fallback with retry option

## 5. Component Inventory

### Navigation
- Logo (SVG or text)
- Nav links with hover underline
- Search icon button
- Mobile hamburger
- States: default, scrolled (compact), mobile-open

### ArticleCard
- Image container with aspect ratio
- Category badge (red accent)
- Headline (Playfair)
- Excerpt (optional)
- Author + timestamp
- States: default, hover, loading

### HeroArticle
- Full-width image with gradient overlay
- Large headline overlay
- Category + timestamp
- Call-to-action link

### SidebarWidget
- Newsletter signup form
- Trending articles list (numbered)
- Social links
- Ad placeholder

### Footer
- Multi-column links
- Newsletter form
- Social icons
- Copyright

## 6. Technical Approach

### Framework
- Next.js 15 App Router
- TypeScript (strict mode)
- Tailwind CSS 4
- Framer Motion (minimal - only for complex animations)

### Architecture
```
/app
  /layout.tsx (root layout with nav/footer)
  /page.tsx (homepage)
  /category/[slug]/page.tsx
  /article/[slug]/page.tsx
  /search/page.tsx
/components
  /navigation/Navigation.tsx
  /navigation/MobileMenu.tsx
  /articles/ArticleCard.tsx
  /articles/HeroArticle.tsx
  /sections/Sidebar.tsx
  /sections/Newsletter.tsx
  /sections/Footer.tsx
  /ui/Button.tsx
  /ui/Input.tsx
/lib
  /data/articles.ts
  /utils/cn.ts
```

### Performance
- Static generation for articles
- Image optimization with next/image
- Lazy loading for below-fold content
- Font optimization with next/font
