export type AboutSection = {
  id: string;
  heading: string;
  paragraphs: readonly string[];
};

export const aboutSections: readonly AboutSection[] = [
  {
    id: "background",
    heading: "Example background",
    paragraphs: [
      "The wording on this page is an example. It does not describe a real instructor or a real business.",
      "On a live Essential site, this is where the provider introduces the vehicles they train in, the drivers they usually teach, and how to get in touch.",
    ],
  },
  {
    id: "philosophy",
    heading: "Training philosophy",
    paragraphs: [
      "Keep the advice plain. Explain the licence, the training and the next step before anyone is asked to commit.",
      "Time in the vehicle matters more than a long list of claims.",
    ],
  },
  {
    id: "experience",
    heading: "Experience",
    paragraphs: [
      "A provider can describe their instruction in their own words here. This demonstration does not invent a career history, a pass rate, or a number of drivers trained.",
    ],
  },
  {
    id: "local",
    heading: "Local knowledge",
    paragraphs: [
      "Training is presented as running from one base in Example Town. On a live site, meeting points and routes would reflect that area. No street address is shown here.",
    ],
  },
];
