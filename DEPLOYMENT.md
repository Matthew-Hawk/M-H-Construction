# Deployment status and next steps

No production deployment has been performed. The exact Hostinger arrangement is unverified: the owner believes it is Business Web Hosting plus Website Builder and transferred the domain from GoDaddy.

## Current architecture

Astro static output in `dist/`; no runtime database or server-side form handling. Local preview is independent of the existing website. All preview routes are blocked from indexing.

## Verify before choosing a deployment path

1. Read the exact Hostinger plan and identify whether the domain is attached to a Builder-managed website or ordinary web hosting.
2. Confirm File Manager/public_html access and whether a separate staging website is available.
3. Inventory current URLs; inspect DNS and business email dependencies without changing them.
4. Export/back up the current website where supported and save a recovery copy. Confirm how it can be restored.
5. Select a secure inquiry service, configure secrets outside source control, confirm email delivery and retention/deletion practices.
6. Approve real content, privacy notice and launch configuration. Configure metadata, sitemap, redirects, and headers for the confirmed host.

## Conditional static hosting deployment

If ordinary static file hosting is confirmed, run `npm ci`, `npm run check`, `npm run build`, verify the output on staging, and upload the contents of `dist/` to the correct document root. This is a proposed path, not authorization to overwrite the Builder site. A Builder-managed website may require a different arrangement.

Obtain explicit launch authorization before any live domain, DNS, or document-root change. Preserve MX/SPF/DKIM/DMARC and other records. Verify HTTPS, routing, inquiry delivery, redirects, cache behavior, and crawl configuration after launch.

## Rollback

Restore the verified backup of the former document root or Builder website through the confirmed Hostinger recovery workflow. If authorized DNS changes were made, restore only those changed records from the saved snapshot. Recheck HTTPS, business email, and the old contact route. Exact steps depend on the verified Hostinger setup.
