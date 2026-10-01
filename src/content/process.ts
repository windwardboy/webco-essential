export type Step = {
  title: string;
  text: string;
};

export const trainingJourney: readonly Step[] = [
  {
    title: "Say what you want to drive",
    text: "Category C, Category C+E or Driver CPC. If you are not sure, say so and the provider can talk it through.",
  },
  {
    title: "Check what you already hold",
    text: "The provider looks at your current licence and explains any medical, theory or CPC steps that sit alongside the practical training. This site does not confirm eligibility.",
  },
  {
    title: "Train from the local base",
    text: "Practical sessions are arranged from one training location. This demonstration does not publish a timetable.",
  },
  {
    title: "Prepare for the next step",
    text: "That may be a practical test or periodic CPC hours. How booking works is explained when you enquire. No result is claimed here.",
  },
];

export const afterEnquiry: readonly Step[] = [
  {
    title: "You get in touch",
    text: "Send the form, call, or email. Say which course you are asking about, or say that you are not sure.",
  },
  {
    title: "The provider replies",
    text: "They use the contact method you chose. This demonstration does not promise a response time.",
  },
  {
    title: "You agree what to discuss",
    text: "The licence, the training and what you already hold. Nothing is confirmed until the provider has spoken to you.",
  },
  {
    title: "Directions follow later",
    text: "The street address is not published here. It is shared when training is being arranged.",
  },
];
