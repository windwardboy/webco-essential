export type Step = {
  title: string;
  text: string;
};

export const trainingJourney: readonly Step[] = [
  {
    title: "Tell us what you want to drive",
    text: "Category C, Category C+E or Driver CPC. If you're not sure, say so and we'll talk it through.",
  },
  {
    title: "We check what you already hold",
    text: "We look at your current licence and explain any medical, theory or CPC steps that go alongside the practical training.",
  },
  {
    title: "Train from our local base",
    text: "Practical sessions run from our single training base. We agree dates with you once you've enquired.",
  },
  {
    title: "Prepare for what comes next",
    text: "That might be your practical test or periodic CPC hours. We explain how booking works when you get in touch.",
  },
];

export const afterEnquiry: readonly Step[] = [
  {
    title: "You get in touch",
    text: "Send the form, call or email. Tell us which course you're interested in, or that you're not sure yet.",
  },
  {
    title: "We reply",
    text: "We use the contact method you chose.",
  },
  {
    title: "We talk it through",
    text: "We go over the licence you hold, the training you need and what it involves. Nothing is confirmed until we've spoken.",
  },
  {
    title: "You get directions",
    text: "Once training is arranged, we send the full address and directions to the base.",
  },
];
