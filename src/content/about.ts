export type AboutSection = {
  id: string;
  heading: string;
  paragraphs: readonly string[];
};

export const aboutIntro = {
  eyebrow: "About us",
  title: "Training from one local base",
  lede: "We're a small HGV training business teaching Category C, Category C+E and Driver CPC from a single base. This is a fictional provider, written to show what a finished About page can feel like.",
};

export const aboutSections: readonly AboutSection[] = [
  {
    id: "who",
    heading: "Who we are",
    paragraphs: [
      "We teach people to drive lorries. Our offer is deliberately simple: three courses, one training base and a straight answer when you ask which one you need.",
      "People usually come to us to move up from a car licence, add a trailer or keep their Driver CPC up to date. Whichever it is, you deal directly with the people who do the training.",
    ],
  },
  {
    id: "team",
    heading: "Instructors",
    paragraphs: [
      "Training is delivered by a small team of instructors who work from our base. They explain each exercise before you drive it, and talk it through with you afterwards.",
      "No instructor names, qualifications or years of experience are shown here, because this is a demonstration website.",
    ],
  },
  {
    id: "approach",
    heading: "How we teach",
    paragraphs: [
      "We explain the licence, the practical work and the next step before anyone is asked to commit.",
      "Each session starts with a short briefing on what we'll cover and finishes with feedback. Time in the vehicle matters more than a list of claims.",
    ],
  },
  {
    id: "vehicles",
    heading: "Vehicles and yard",
    paragraphs: [
      "You train in our own rigid lorry and articulated unit and trailer. Reversing and coupling practice happens in the yard at our base before you move on to the road.",
    ],
  },
  {
    id: "local",
    heading: "Local roads",
    paragraphs: [
      "Everything runs from one base, so road work uses the roads around it. That means you practise on the kind of junctions, roundabouts and country roads you'll meet when you start driving for work.",
    ],
  },
];
