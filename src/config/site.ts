import { trainingLinks } from "../content/courses";

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
    "Demonstration of a Webco Essential website for a small HGV training provider: Category C, Category C+E and Driver CPC, one training base, and a simple enquiry path.",
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
      "Training is arranged from one base. The town is a placeholder. No street address is published on this demonstration.",
    addressLines: [] as readonly string[],
    mapNote:
      "A map is placed here when the provider publishes a training address. This demonstration does not.",
    hours: [
      { label: "Monday to Friday", value: "Example hours" },
      { label: "Saturday and Sunday", value: "Example hours" },
    ],
    hoursNote: "Replace these with the provider’s real contact hours.",
    areasServed: ["Example Town", "The surrounding area"],
    areasNote:
      "Example areas for one base. A live site names the places the provider covers. It does not add a page for each town.",
  },
  /** HTTPS map embed URL. Empty shows a labelled placeholder, not a pin. */
  mapEmbedUrl: "",
  /** Empty until the provider shares a Google reviews URL. No rating is stored here. */
  googleReviewsUrl: "",
  googleReviewsNote:
    "A link to the provider’s Google reviews is added here when they choose to share a profile. This demonstration does not show a rating or a review count.",
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

export type NavItem = {
  href: string;
  label: string;
  children?: readonly { href: string; label: string }[];
};

export const nav: readonly NavItem[] = [
  { href: "/hgv-training/", label: "HGV training", children: trainingLinks },
  { href: "/about/", label: "About" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/contact/", label: "Contact" },
];
