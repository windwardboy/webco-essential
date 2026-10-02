import { trainingLinks, trainingOverviewPath } from "../content/courses";

/**
 * Site-wide facts for an Essential client site.
 *
 * This repository is the Webco Essential demonstration. Leave unknown
 * values empty, and replace the example phone, email and town when
 * cloning for a real provider. Do not invent a street address,
 * accreditation, rating, fee, duration or testimonial.
 *
 * `url` is baked into canonical links and the sitemap at build time.
 */
export const site = {
  name: "Webco Essential",
  url: "https://webco-essential.co.uk",
  description:
    "Demonstration website for a fictional HGV training provider: Category C, Category C+E and Driver CPC from one local base, with a simple enquiry.",
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
    summary: "All our training runs from one base.",
    addressLines: [] as readonly string[],
    /** Shown when no street address is configured. */
    addressNote: "We share the full address and directions when your training is booked.",
    mapNote: "There's no map on this page yet. Directions are sent with your booking confirmation.",
    hours: [
      { label: "Monday to Friday", value: "8:00am to 5:00pm" },
      { label: "Saturday", value: "By arrangement" },
      { label: "Sunday", value: "Closed" },
    ],
    hoursNote: "When to reach us by phone or email. Training sessions are arranged individually.",
    areasServed: ["Example Town", "Nearby towns and villages"],
    areasNote: "Learners travel to our base from across the local area. Ask if you're unsure whether it's within reach.",
  },
  /** HTTPS map embed URL. Empty shows a labelled placeholder, not a pin. */
  mapEmbedUrl: "",
  /** Empty until the provider shares a Google reviews URL. No rating is stored here. */
  googleReviewsUrl: "",
  googleReviewsNote:
    "No Google reviews profile is connected to this demonstration website, so no rating or review count is shown.",
  /** Google Search Console verification token. Leave empty until issued. */
  googleSiteVerification: "",
  /** GA4 measurement id, such as G-XXXXXXXX. Leave empty until issued. */
  analyticsId: "",
  /**
   * Home page hero photo. Concept image for this demonstration only.
   * A real provider replaces these with their own vehicle photo (wide, with the
   * vehicle on the right and dark space on the left), or leaves `src` empty.
   * `webp` and `avif` are srcset strings.
   */
  heroImage: {
    src: "/images/hero-truck-2048.jpg",
    webp: "/images/hero-truck-1024.webp 1024w, /images/hero-truck-2048.webp 2048w",
    avif: "/images/hero-truck-1024.avif 1024w, /images/hero-truck-2048.avif 2048w",
    alt: "A navy articulated lorry with amber chevron livery driving along a wet road at dusk.",
    width: 2048,
    height: 682,
  },
} as const;

export type NavItem = {
  href: string;
  label: string;
  children?: readonly { href: string; label: string }[];
};

export const nav: readonly NavItem[] = [
  { href: trainingOverviewPath, label: "HGV training", children: trainingLinks },
  { href: "/about/", label: "About" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/contact/", label: "Contact" },
];
