# Webco Essential

Demonstration site and reusable template for the Webco Essential website package. Static Astro site for a single-location HGV training provider. Business facts live in configuration, not in the layout.

## Pages

- `/` home
- `/hgv-training/` overview and licence comparison
- `/category-c-training/`
- `/category-ce-training/`
- `/driver-cpc/`
- `/about/`
- `/reviews/`
- `/contact/`

`/training/` redirects to `/hgv-training/` with a 301 in `public/.htaccess`. Category C1 is not part of the core sitemap.

## Edit

- Identity, phone, email, town, hours, areas and optional form endpoint: `src/config/site.ts`
- Course routes and page facts: `src/content/courses.ts`
- Questions: `src/content/faqs.ts`
- Journey and after-enquiry steps: `src/content/process.ts`
- Sample testimonials: `src/content/testimonials.ts`
- About copy: `src/content/about.ts`
- Trust points: `src/content/trust.ts`

The phone, email and town in this repository are placeholders. Do not add a street address, a fee, a duration, a rating, an accreditation, or a real testimonial unless it belongs to the client.

The live domain is `https://webco-essential.co.uk`, set as `site.url`. Canonical links and the sitemap are generated from that value.

Optional client photos go in `public/images/`. Point `site.heroImage` at the file. Leave `src` empty to show no photo. WebP and AVIF paths are optional.

Leave `enquiryEndpoint`, `mapEmbedUrl` and `googleReviewsUrl` empty on the demonstration. A map embed or Google reviews link is used only when it is an `https://` URL. No rating is stored in config.

## Build

```bash
npm install
npm run check
npm run build
```

`npm run build` writes the static site to `dist/`. That folder is committed so 20i can deploy it. Point the package document root at `dist`. No Node process, database or CMS is required on the server.
