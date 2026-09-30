# Webco Essential

Demonstration site for the Webco Essential website package. Static Astro site for a single-location HGV training provider. Business facts live in configuration, not in the layout.

## Edit

- Identity, phone, email, town and optional form endpoint: `src/config/site.ts`
- Courses: `src/content/courses.ts`
- Sample testimonials: `src/content/testimonials.ts`
- About copy: `src/content/about.ts`

The phone, email and town in this repository are placeholders. Do not add a street address, accreditation, or a real testimonial unless it belongs to the client.

The live domain is `https://webco-essential.co.uk`, set as `site.url`. Canonical links and the sitemap are generated from that value.

Optional client photos go in `public/images/`. Point `site.heroImage` at the file. Leave `src` empty to show no photo. WebP and AVIF paths are optional.

Leave `enquiryEndpoint` empty on the demonstration. When a client site has a form handler, set it to a same-site path or an `https://` URL.

## Build

```bash
npm install
npm run check
npm run build
```

`npm run build` writes the static site to `dist/`. That folder is committed so 20i can deploy it. Point the package document root at `dist`. No Node process, database or CMS is required on the server.
