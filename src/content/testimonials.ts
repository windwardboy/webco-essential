export type Testimonial = {
  id: string;
  courseId: string;
  quote: string;
  detail: string;
  attribution: string;
};

/** Example quotations for layout only. Not real reviews. */
export const testimonials: readonly Testimonial[] = [
  {
    id: "category-c",
    courseId: "category-c",
    quote:
      "The instruction was calm and practical. I knew which manoeuvres we would work on before each session.",
    detail:
      "Sample note for the layout. The learner was moving from a car licence to a rigid lorry, and each session was described in advance. This is not a real review, and it does not report a test result.",
    attribution: "Sample learner, moving from a car licence to Category C",
  },
  {
    id: "category-ce",
    courseId: "category-ce",
    quote: "Coupling the trailer made sense once it was explained in the yard, then practised.",
    detail:
      "Sample note for the layout. The learner was adding a trailer entitlement, and the yard work came before the road. This is not a real review, and it does not name an instructor or a vehicle.",
    attribution: "Sample learner, adding Category C+E",
  },
  {
    id: "driver-cpc",
    courseId: "driver-cpc",
    quote: "The module was clearly described, including how the hours were said to fit the five-year requirement.",
    detail:
      "Sample note for the layout. The learner was attending a periodic module. No course code, centre or approval is named, because none is claimed.",
    attribution: "Sample learner, attending a Driver CPC module",
  },
];

export function testimonialsFor(courseId: string): readonly Testimonial[] {
  return testimonials.filter((item) => item.courseId === courseId);
}
