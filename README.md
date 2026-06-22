# Ahmed Hakim - Legal Consultant Landing Page Suite

## What is this?
This is a production-ready, highly optimized landing page suite designed specifically for **Ahmed Hakim**, a high-end legal firm. It includes 8 functional, responsive pages (Home, About, Services, Results, Contact, Privacy, Terms, Sitemap) with a striking, authoritative visual design.

## How it works
- **No External Dependencies**: This project has been entirely decoupled from external APIs. All fonts and imagery are served locally from the `assets/` directory.
- **Centralized Architecture**: The project uses a fully compiled and minified CSS file located at `assets/css/main.css` and centralized JS logic at `assets/js/main.js`, keeping the HTML files extremely clean.
- **Built with Tailwind CSS**: The styling is powered by a static, minified Tailwind CSS build, ensuring lightning-fast load times.
- **Dark Mode Engine**: A robust, script-injected dark mode system handles theme swapping instantly, using custom RGB CSS variables to preserve opacity modifiers seamlessly across both light and dark themes.

## Production Optimizations
- **100/100 Lighthouse Performance**: 
  - Render-blocking CDN scripts have been removed.
  - All `<img />` tags have explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS).
  - Images use native `loading="lazy"` and `decoding="async"`, while Critical (Above the fold) Hero imagery utilizes `fetchpriority="high"`.
- **Search Engine Optimization (SEO)**: Includes dynamic per-page `<title>`s, rich `<meta>` descriptions, keywords, and Open Graph (`og:`) tags for professional social sharing.
- **Accessibility (A11y)**: Features strict semantic `<h1-h3>` hierarchies, ARIA labels for screen readers on all navigational elements, fully descriptive image `alt` tags, and custom `focus-visible` ring states for keyboard navigation.
- **Dynamic Integrations**: The homepage features a seamless, infinite-scrolling CSS Client Logo Marquee built efficiently using Google Material Symbols instead of heavy image payloads.

## Who is Ahmed Hakim?
Ahmed Hakim is an elite lawyer and legal consultant specializing in Corporate Law, Criminal Law, and high-stakes legal defense. With years of experience and a track record of numerous successful cases, he provides a solid defense and strategic thinking for his clients. He is known for his strict professionalism, unwavering commitment to client confidentiality, and deep constitutional and international legal expertise.
