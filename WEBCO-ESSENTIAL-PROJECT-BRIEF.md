# Webco Essential — Project Brief

## Purpose

`webco-essential` is the demonstration site and reusable master prototype for the **Webco Essential Website** package.

This package is for independent instructors and smaller HGV / transport training providers with a straightforward training offer and one main training location.

**Package price: £595**

Essential is a complete, high-quality website. It includes the dedicated core training pages and the SEO foundations a small provider needs. It is not a reduced or placeholder package.

The site must be clearly presented as a **Webco Essential demonstration website**, not as a fictional real training business. It should show prospects what this package can look like and later become the basis for real client sites through cloning and configuration.

## Core goals

The site must:

- look like a polished real training-provider website
- demonstrate what a £595 Essential site includes
- feel simple, professional and trustworthy
- be mobile-first
- generate enquiries
- be easy to clone and customise
- remain technically lightweight
- deploy cleanly to 20i shared Linux hosting
- carry a real information architecture and technical SEO from the start

A prospect should immediately understand: **“This is the kind of website I would get with Webco Essential.”**

## Intended customer

Typical Essential customers are:

- independent HGV instructors
- small local training companies
- providers with one principal training base
- businesses offering a small number of core courses
- providers primarily wanting enquiries rather than complex online booking
- businesses that do not want to manage a CMS

This package is not intended for large multi-location providers or complex booking/ecommerce/customer portals.

## Technology

Use:

- Astro
- static output
- minimal JavaScript
- GitHub source control
- 20i Linux hosting
- the same deployment pattern proven for Webco Cloud: local development → GitHub → committed production `dist/` → 20i Git deployment → document root points at `dist`

Do not add a database, CMS, authentication, ecommerce, booking engine, or framework islands unless there is a genuine requirement.

## Reusability requirement

This is not a disposable demo. Structure it so a real client site can be created by cloning the project and changing configuration/content.

Prefer something broadly like:

```text
src/
  components/
  layouts/
  pages/
  content/
  config/
    site.ts
```

Keep business-specific content out of reusable layout components wherever practical.

## Demo identity

The site name is **Webco Essential**.

Do not invent a fake training-company name. Keep a discreet statement such as:

> Demonstration website by Webco Media

Realistic sample course structure is fine. Company names, street addresses, testimonials, phone numbers, fees, durations, ratings, pass rates and accreditation claims must be obviously fictional, marked as examples, or left empty. Do not use real provider branding. Do not invent provider claims to fill a section.

## Visual direction

Aim for:

- clean
- professional
- competent
- practical
- modern industrial, without a finished brand system
- strong mobile usability
- clear calls to action
- structured grids and restrained borders
- deep slate / charcoal, white / off-white, and one restrained accent
- prominent contact/enquiry options
- genuine local-service-business feel

The first build is structural. Section-level visual refinement comes afterwards. Avoid generic SaaS styling, excessive gradients, AI aesthetics, visual clutter, fake awards, fake review scores, stock-photo overload and unnecessary animation.

## Site structure

```text
/
/hgv-training/
/category-c-training/
/category-ce-training/
/driver-cpc/
/about/
/reviews/
/contact/
```

`/training/` permanently redirects to `/hgv-training/` with a 301.

Header navigation is HGV training, About, Reviews, Contact, and Enquire. HGV training opens a submenu: HGV training overview, Category C, Category C+E, Driver CPC. Those courses also stay prominent in the homepage training-route section.

Category C1 is not part of the core sitemap. It can be added later as an optional course when a provider genuinely offers it.

Do not create town or location landing pages, and do not duplicate course copy across thin pages.

## Homepage

Include:

1. Header and navigation
2. Hero stating what the provider offers, where, and a primary and secondary action
3. Compact trust strip
4. Choose your training route: Category C, Category C+E, Driver CPC, and “not sure?”
5. Why train with us
6. How HGV training works, in a few steps
7. Learner proof, clearly marked when it is sample copy
8. Training location and area served
9. FAQ
10. Final enquiry CTA
11. Footer

Do not invent statistics or claims.

## HGV training overview

Explain the core offer without repeating each course page in full:

- introduction
- licence comparison
- which licence is right for me
- typical training journey
- what training includes, linking to the course pages
- how pricing is handled, without inventing a fee
- training location
- FAQ
- CTA

## Course pages

Category C, Category C+E and Driver CPC each have a dedicated page. Cover who it is for, what the entitlement or qualification allows, eligibility as general guidance, what the training includes, how it is arranged, and how a driver asks for a quote.

Duration and price sections exist so a live site can fill them. On the demonstration they state that no length or fee is published.

Driver CPC explains initial and periodic CPC, and lists only the courses the template actually offers. This demonstration lists periodic training. It does not invent a course code, approval, date or centre number.

## About

Show how a provider can present background, the instructor or team, experience, the training approach, vehicles and facilities, and local knowledge.

Leave qualifications and accreditation empty unless they are true for that provider. This demonstration shows neither.

## Reviews

Provide the structure for proof a provider can stand behind:

- an overview with no invented rating
- sample testimonials, marked as samples
- a place for a Google reviews link when one is configured
- a small set of longer sample notes
- an enquiry CTA

Do not show a star score, a review count, or review schema.

## Contact

Demonstrate:

- a short headline
- the enquiry form
- phone and email
- optional WhatsApp
- the training address, left unpublished on the demonstration
- a map slot, empty until a real embed URL is configured
- contact hours, marked as examples
- areas served, as text, not as separate pages
- what happens after an enquiry, with no promised response time

Do not invent live contact details. Use obvious configurable placeholders.

## Forms

The eventual production pattern may use a small PHP endpoint on 20i.

For the demo:

- build the form UI
- keep implementation simple
- expose no secrets
- use no database
- avoid third-party form SaaS unless explicitly requested

If no live destination is configured, prevent real submissions or return a clear demo response.

## SEO foundations

Include:

- unique title and meta description on each page
- one H1 and a logical H2 / H3 hierarchy
- canonical URLs
- XML sitemap
- robots.txt
- Open Graph basics
- semantic HTML
- responsive, replaceable images
- internal links between the overview, the course pages, reviews and contact
- visible local business information, using only configured facts
- breadcrumbs on inner pages
- fast static output

Use structured data only where the configured facts support it. `WebSite` and `BreadcrumbList` are appropriate. Do not emit aggregate ratings, review schema, course offers, FAQ schema, or `LocalBusiness` markup while the address, prices and reviews are placeholders.

Do not create thin town pages or duplicate course copy for search coverage.

Model good practice without exaggerated SEO promises.

## Accessibility

Include baseline accessibility by default:

- keyboard-friendly navigation
- form labels
- visible focus states
- alt-text support
- sensible contrast
- reduced-motion consideration
- semantic landmarks
- logical heading order

## Images

Support optimised, replaceable client imagery with responsive image sizing, WebP/AVIF where practical and meaningful alt text. Avoid hard dependency on a specific stock library. The structural template does not require a hero photograph.

## Package scope represented

### Webco Essential — £595

Expected scope:

- professional responsive website
- one main training location
- homepage, HGV training overview, Category C, Category C+E, Driver CPC, about, reviews and contact
- enquiry/contact flow
- click-to-call
- optional WhatsApp
- trust and testimonial sections, without invented proof
- technical SEO foundations, including sitemap, metadata, canonicals and breadcrumbs
- analytics/Search Console readiness
- first-year hosting
- SSL
- domain setup/registration where applicable
- professional domain email setup

Not included by default:

- ecommerce
- advanced booking
- customer portal
- large content migration
- custom integrations
- bespoke applications
- multi-location or town-page architecture
- Category C1, unless added later because that provider offers it

## Relationship to Webco Professional

Essential includes the dedicated core training pages and full SEO foundations. Professional does not differentiate by withholding those basics.

**Essential:** one main location, the core course pages, reviews, a single enquiry path, and solid technical SEO.

**Professional:** broader and deeper content, stronger search architecture, and room for a wider training and location structure when a provider actually needs it.

Do not add town landing pages or a second copy of a course in order to make Essential look larger.

## Current milestone

The current build is the structural template:

1. site shell, header with the HGV training submenu, and footer
2. homepage in the section order above
3. HGV training overview
4. Category C, Category C+E and Driver CPC pages
5. about, reviews and contact
6. responsive layout
7. demo enquiry form
8. technical SEO basics, sitemap, robots.txt, canonicals and breadcrumbs
9. `/training/` 301 to `/hgv-training/`
10. favicon and 404
11. clear demonstration-site treatment
12. no invented pass rates, ratings, accreditations, prices, durations, addresses or other provider claims

Visual refinement of each major section follows after the full site can be reviewed. Do not treat this pass as the finished visual identity.
