# First preview verification

October 11, 2026. These checks cover the development preview, not a production accessibility or legal audit.

- Astro/TypeScript diagnostics: 16 files, zero errors, warnings, or hints.
- Static build: nine routes built successfully; responsive WebP image variants generated.
- Built HTML check: all local link and asset targets exist, local fragment targets exist, one H1 per page.
- Browser: homepage images loaded; desktop layout inspected at 1440px and mobile at 390px.
- Narrow viewport: homepage and contact checked at 320px; document width did not exceed viewport width.
- Mobile menu: opens, closes with Escape, and returns focus to the toggle.
- FAQ: expands and exposes its answer.
- Contact: kitchen selection populated from query parameter; empty required fields, absent reply method, and malformed email show errors and focus the relevant field.
- No inquiry was sent and no live domain/DNS changes were made.

Remaining: real-device tests, broader assistive-technology/contrast checks, production form delivery/failure/spam testing, Hostinger staging/deployment verification, and final content/SEO/privacy review. The email draft launch path has not been tested through an actual email client.

Screenshot: `qa/homepage-desktop.jpg` (local, ignored development artifact).

## Motion and journal update

- Astro diagnostics: 21 files, zero errors, warnings, or hints.
- Static build: 14 pages, including journal index and four article pages.
- All built internal links, assets, heading counts, and article table-of-contents anchors pass the static check.
- Journal categories: Bathroom Planning shows one guide, Getting Started shows two, All Guides restores four; counts are announced through a live status region.
- Journal index and bathroom article checked at 320px with no horizontal document overflow.
- Shared entry effects progressively enhance visible content. CSS and script both honor reduced-motion preference, including changes while the page is open. Reduced-motion behavior has been reviewed in source, not tested by changing the device preference.
- Desktop journal screenshot: `qa/journal-desktop.jpg`.
- Animated FAQ height is a progressive browser feature; unsupported browsers retain normal expansion.

## Fade refinement

- Content entrances now use opacity only over 900 ms, without positional transforms, zoom, card lift, or staggered timing.
- Related columns/cards fade as coherent groups. Initially visible content is not hidden by the observer; offscreen content is prepared before entering the viewport.
- Browser scroll check captured the contact group fading in with opacity approximately 0.05 and transform `none`; its pending state was cleared on intersection.
- Keyboard focus immediately reveals a prepared group. Reduced motion keeps prepared groups visible and disables initial CSS animations.
- Astro diagnostics and the 14-page build pass after the change.

## Initial viewport sequence

- Only elements intersecting the initial viewport are selected for individual entry fades, sorted by vertical position and then horizontal position for elements on the same row.
- Native opacity animations use 900 ms duration with starts up to 140 ms apart. Below-viewport grouped scroll fades remain unchanged.
- Browser navigation to About captured the top eyebrow at opacity 0.014 while the lower heading and description remained at opacity 0; all three had transform `none`. The bootstrap mask was already released and below-viewport scroll preparation was still active.
- Reduced-motion changes finish initial animations and reveal prepared groups. Keyboard focus completes an element's entry animation; pagehide finishes the sequence for history restoration.
- Astro diagnostics: 21 files with zero errors/warnings/hints. All 14 pages build successfully.

## Design refinement after hosted-preview review

- Larger typography: 16–17px body and inputs, 14px navigation/buttons, 11–12px editorial labels. Palette retained.
- Clearer homepage/service headings, tighter section spacing, compact Journal introduction, and category controls above the featured guide.
- ProjectStory component adds concept goals, design details, a main photo and cropped concept details. Homepage includes a compact featured concept. About includes an explicitly labeled team-portrait placeholder.
- Contact has native Kitchen/Bathroom/Both radios and optional planning fields in a native details disclosure. Query-string selection, required-field errors, missing reply-method errors, and invalid email were verified. Optional details expand correctly. No inquiry sent.
- Initial opacity animations are 450ms with at most 65ms between starts and a 450ms maximum start delay. Approved 900ms grouped scroll fades remain.
- Astro diagnostics: 23 files, zero errors, warnings, or hints. Static build: 14 routes. Built links/assets/fragments, unique IDs and one H1 per page passed.
- Browser checks: desktop 1440px, header breakpoint 1121px, mobile 390px, and narrow 320px. No horizontal overflow on Home, About, Our Work, Journal, an article, or Contact at 320px. Menu Escape restores focus; Journal Bathroom filter shows one guide.
- At 390×844, contact form starts around 581px (previously 899px); homepage services heading around 1005px (previously 1048px). At 1440×900, Journal library starts around 933px (previously 1110px). Measurements include the design-preview banner and browser scrollbar.
- Screenshots: qa/design-portfolio-desktop.png and qa/design-about-desktop.png. Changes are local; hosted Cloudflare preview has not been redeployed.
