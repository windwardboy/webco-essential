export type Testimonial = {
  id: string;
  quote: string;
  attribution: string;
};

/** Example quotations for layout only. Not real reviews. */
export const testimonials: readonly Testimonial[] = [
  {
    id: "category-c",
    quote:
      "The instruction was calm and practical. I knew which manoeuvres we would work on before each session.",
    attribution: "Sample learner, moving from a car licence to Category C",
  },
  {
    id: "category-ce",
    quote: "Coupling the trailer made sense once it was explained in the yard, then practised.",
    attribution: "Sample learner, adding Category C+E",
  },
  {
    id: "driver-cpc",
    quote: "The module was clearly described, including how the hours fit the five-year requirement.",
    attribution: "Sample learner, attending a Driver CPC module",
  },
];
