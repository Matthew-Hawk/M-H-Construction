# M&H Construction website preview

Local Astro + TypeScript build for the proposed M&H website. No production deployment or DNS changes have been made.

## Run

Use Node 22.12+ (the bundled Codex runtime is Node 24). Install dependencies with `npm ci`, then `npm run dev`. Open the printed localhost URL. `npm run check` checks Astro/TypeScript; `npm run build` produces `dist/`; `npm run preview` serves that output.

On this computer, the default Node is older. Use the included PowerShell helper to select the bundled compatible runtime and disable Astro CLI telemetry:

```powershell
.\Start-Preview.ps1
.\Start-Preview.ps1 -Mode check
.\Start-Preview.ps1 -Mode build
.\Start-Preview.ps1 -Mode preview
```

If dependencies need reinstalling on this computer, run the installed npm CLI with the bundled runtime:

```powershell
& 'C:\Users\matth\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' 'C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js' ci
```

## Edit

- Business details and service copy: `src/data/site.ts`.
- Branding: `src/styles/tokens.css`; layout styles: `src/styles/global.css`.
- Page copy: `src/pages/`; shared layout: `src/layouts/BaseLayout.astro`.
- Blog articles: `src/content/journal/*.md`. Add a Markdown file with title, description, category, order, image (kitchen/bathroom), and takeaway frontmatter; it is included automatically in `/resources/` and gets its own URL. Use the existing files as a template. Article reading times and tables of contents are generated from the content. All current articles are drafts for owner review.
- Shared motion: `src/components/Motion.astro` and `src/styles/motion.css`. On page navigation, visible content elements fade individually in screen order from top to bottom, using native opacity animations. Starts are spaced up to 140 ms apart, with the last start capped at 1.2 seconds. Scrolling retains the separate 900 ms grouped opacity fades using IntersectionObserver. There is no entrance translation or zoom. Reduced-motion preferences and keyboard focus keep content immediately visible. An early bootstrap avoids a flash before sequencing; a CSS fallback exposes content if the enhancement script fails. No animation library or tracking is used.
- Logos: `public/images/brand/` (copied from owner-supplied originals).
- Generated concepts: `src/assets/`. Their origin and prompts are recorded in `docs/IMAGE_SOURCES.md`.

## Preview behavior

All nine pages have `noindex,nofollow`, and robots.txt disallows crawling. Interior images are explicitly labeled as generated placeholders. No testimonials, credentials, dates in business, or specific project claims have been invented.

The inquiry form prepares a mailto draft in the visitor's email app. It never transmits or stores form data through this website, and never claims that an email was delivered. No analytics, photo upload, booking, or marketing systems are enabled. Journal filtering runs locally in the browser without storing preferences.

## Before launch

Read `BUILD_PLAN.md`, `DECISIONS.md`, and `DEPLOYMENT.md`. Real photography, business copy, secure lead processing, accurate privacy disclosures, hosting confirmation, and owner launch approval remain required. Remove preview banners/generated placeholders and staging crawl blocks only after launch readiness is confirmed. Add production canonical URLs, sitemap, truthful structured data and the verified redirect map at that milestone.
