# Technology stack

## Website

- **Astro 7.3.8:** shared components and layouts compiled into static HTML pages. Production does not require a running Node server for these pages.
- **TypeScript 6.0.3:** checks the centralized business/service data, article metadata, and small browser scripts.
- **Semantic HTML and custom CSS:** responsive design, navy/ivory design tokens, system-font typography, menus, FAQ, and forms. `src/styles/design.css` supplies the current editorial, project-story, portrait-placeholder, and contact-layout refinements. Native radio inputs and a details disclosure simplify the inquiry form. No Tailwind, React, or large component framework.
- **Native browser JavaScript:** menu, inquiry draft preparation, journal filters, and scroll progress. No tracking or browser persistence.
- **Motion:** Native Web Animations API sequences individual visible content elements from top to bottom on page entry and fades the mobile menu. IntersectionObserver and CSS opacity transitions retain grouped fades when scrolling. CSS supplies color feedback and FAQ expansion where supported. Entrances use no movement or zoom. Reduced-motion support is built in, and keyboard-focused content appears immediately.

## Content and images

- **Markdown:** four articles in `src/content/journal/`, compiled at build time. Each generates a page, table of contents, and estimated reading time. No external CMS or database.
- **Astro image tooling + Sharp 0.35.5:** generates responsive WebP assets from the generated PNG concepts. SVG logos retain their original vector quality.
- **Fonts:** local system stacks (Georgia/Times New Roman for display, Segoe UI/Arial for body). No third-party font service or proprietary font files are distributed.

## Development and hosting

- **Node 24.19.0:** bundled development/build runtime on this computer; Astro requires Node 22.12+.
- **npm:** dependency management with package-lock.json for reproducible installation.
- **Astro check / TypeScript:** project diagnostics. Static build and browser/manual verification check routing and interactions.
- **Hostinger:** intended production host; exact Business Hosting/Builder arrangement remains unconfirmed. Static output is in `dist/`. No domain/DNS or hosting changes have been made.

## Lead handling and launch status

The form currently opens a draft in the visitor's email app. It is not a production submission service. Secure server/provider handling, delivery testing, retention practices, accurate production privacy copy, real photos, final SEO configuration, and explicit launch authorization remain pending. No analytics or marketing integration is enabled.
