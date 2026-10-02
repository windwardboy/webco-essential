/** Example legal pages for the demonstration. Not a live provider's documents. */
export const legalPages = {
  privacy: { href: "/privacy/", label: "Privacy policy" },
  cookies: { href: "/cookies/", label: "Cookie policy" },
  terms: { href: "/terms/", label: "Website terms" },
} as const;

export const legalLinks = [legalPages.privacy, legalPages.cookies, legalPages.terms] as const;
