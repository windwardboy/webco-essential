export type AboutSection = {
  id: string;
  heading: string;
  paragraphs: readonly string[];
};

export const aboutIntro = {
  eyebrow: "About",
  title: "Training from one local base",
  lede: "How a small provider introduces the people, the vehicle and the area. Every paragraph on this page is example copy. It does not describe a real instructor or a real business.",
};

export const aboutSections: readonly AboutSection[] = [
  {
    id: "who",
    heading: "Who we are",
    paragraphs: [
      "This is the introduction a small HGV training provider would write in their own words: what they teach, who they usually teach, and where the training runs from.",
      "The demonstration keeps that space, and leaves the real introduction empty of invented history.",
    ],
  },
  {
    id: "team",
    heading: "Instructor and team",
    paragraphs: [
      "A live site names the instructor, or the small team, and says who does the training.",
      "No person is named here.",
    ],
  },
  {
    id: "experience",
    heading: "Experience and qualifications",
    paragraphs: [
      "This is where a provider can describe experience they can stand behind, in plain language.",
      "No career history, pass rate, number of drivers, or qualification is shown, because none has been supplied. Logos and approval statements belong here only when they are true.",
    ],
  },
  {
    id: "approach",
    heading: "Training approach",
    paragraphs: [
      "Explain the licence, the practical work and the next step before anyone is asked to commit.",
      "Time in the vehicle matters more than a list of claims.",
    ],
  },
  {
    id: "vehicles",
    heading: "Vehicles and facilities",
    paragraphs: [
      "A provider describes the lorry, the trailer and the yard they actually use.",
      "This demonstration does not name a make, a model, a yard or a facility.",
    ],
  },
  {
    id: "local",
    heading: "Local knowledge",
    paragraphs: [
      "Training is presented as running from one base. On a live site, the routes match that area.",
      "Nearby towns are not given their own pages.",
    ],
  },
];
