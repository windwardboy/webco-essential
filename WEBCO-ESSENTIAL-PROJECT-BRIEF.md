# Webco Essential — Project Brief

## Purpose

`webco-essential` is the demonstration site and reusable master prototype for the **Webco Essential Website** package.

This package is intended for independent instructors and smaller HGV / transport training providers with a straightforward training offer and one main training location.

**Package price: £595**

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
  courses/
  testimonials/
  faqs/

config/
  site.ts
```

The exact Astro structure may differ if there is a cleaner approach. Keep business-specific content out of reusable layout components wherever practical.

## Demo identity

The site name is **Webco Essential**.

Do not invent a fake training-company name. Add a discreet statement such as:

> Demonstration website by Webco Media

Realistic sample course content is fine, but company names, addresses, testimonials, phone numbers and accreditation claims must be obviously fictional or marked as examples. Do not use real provider branding.

## Visual direction

Aim for:

- clean
- professional
- approachable
- practical
- modern
- strong mobile usability
- clear calls to action
- useful whitespace
- prominent contact/enquiry options
- genuine local-service-business feel

Avoid generic SaaS styling, excessive gradients, AI aesthetics, visual clutter, fake awards, fake review widgets, stock-photo overload and unnecessary animation.

## Suggested site structure

Keep this package intentionally compact:

```text
/
/training
/about
/contact
```

An FAQ page is optional. If course detail pages are used, keep them limited and consistent with Essential scope.

## Homepage

Include:

- a clear hero stating what the provider does and where
- strong actions such as **Enquire now**, **Call us**, and **View training**
- a small number of example courses such as Category C+E, Category C, C1 and Driver CPC
- trust content such as experienced instructors, straightforward advice, practical training and local knowledge
- one main training location
- clearly labelled sample testimonials
- a strong enquiry CTA

Do not invent statistics or claims.

## Training page

Provide a simple overview of the core courses. Reusable course cards or sections are encouraged.

Show how a small provider can explain:

- who the course is for
- the licence/category
- what training includes
- how to enquire

Do not turn this into a large catalogue system.

## About page

Demonstrate how a provider can present:

- instructor/business background
- training philosophy
- experience
- local knowledge
- trust/accreditation areas

All content remains clearly demo/example content.

## Contact page

Demonstrate:

- phone
- email
- optional WhatsApp
- location
- enquiry form
- preferred contact method

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

- semantic HTML
- title/meta description support
- canonical support
- sitemap
- robots.txt
- Open Graph basics
- clean heading hierarchy
- useful internal links
- structured data where appropriate
- fast static output

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

Support optimised, replaceable client imagery with responsive image sizing, WebP/AVIF where practical and meaningful alt text. Avoid hard dependency on a specific stock library.

## Package scope represented

### Webco Essential — £595

Expected scope:

- professional responsive website
- one main training location
- core course/service information
- enquiry/contact flow
- click-to-call
- optional WhatsApp
- trust/accreditation/testimonial sections
- technical SEO foundations
- sitemap and metadata
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
- multi-location-page architecture

## Relationship to Webco Professional

Essential must remain deliberately simpler.

**Essential:** one main location, compact course structure, simpler navigation, simpler enquiry path.

**Professional:** multiple dedicated course pages, multiple dedicated location pages, stronger local-search architecture, richer content structure, fuller enquiry journeys.

Do not allow Essential to quietly grow into Professional during implementation.

## First milestone

Build a polished static demo containing:

1. site shell
2. header/navigation
3. footer
4. homepage
5. training page
6. about page
7. contact page
8. responsive layout
9. demo enquiry form UI
10. technical SEO basics
11. sitemap
12. robots.txt
13. favicon
14. 404 page
15. clear demonstration-site treatment

The first milestone should be polished enough to show prospects.

## Cursor instruction

Start by reading this brief fully, inspecting the repository, scaffolding a clean Astro project if needed, and proposing a concise implementation plan.

Keep the code reusable. Prefer obvious maintainable solutions over clever abstractions.

The finished project should be suitable for cloning into future Essential client websites with minimal structural changes.
