/**
 * Site-wide facts for an Essential client site.
 *
 * This repository is the Webco Essential demonstration. Leave unknown
 * values empty, and replace the example phone, email and town when
 * cloning for a real provider. Do not invent a street address,
 * accreditation, testimonial or company name.
 *
 * `url` is baked into canonical links and the sitemap at build time.
 */
export const site = {
  name: "Webco Essential",
  url: "https://webco-essential.co.uk",
  description:
    "Demonstration of a Webco Essential website for a small HGV training provider, with sample courses, one training base and a simple enquiry path.",
  demoLine: "Demonstration website by Webco Media",
  webcoMediaUrl: "",
  phoneDisplay: "01632 960960",
  phoneHref: "tel:+441632960960",
  email: "training@example.com",
  whatsappDisplay: "07700 900123",
  whatsappHref: "https://wa.me/447700900123",
  showWhatsApp: true,
  /** POST URL for a small PHP form handler. Empty on this demonstration. */
  enquiryEndpoint: "",
  location: {
    town: "Example Town",
    county: "Example County",
    summary:
      "One training base. Replace the town and county when cloning this site. No street address is published on the demonstration.",
  },
  /** Google Search Console verification token. Leave empty until issued. */
  googleSiteVerification: "",
  /** GA4 measurement id, such as G-XXXXXXXX. Leave empty until issued. */
  analyticsId: "",
  heroImage: {
    src: "",
    webp: "",
    avif: "",
    alt: "",
    width: 1600,
    height: 1067,
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/training/", label: "Training" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;
