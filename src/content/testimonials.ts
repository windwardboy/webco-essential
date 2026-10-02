export type Testimonial = {
  id: string;
  courseId: string;
  quote: string;
  detail: string;
  attribution: string;
};

/** Fictional sample reviews. Each is shown with a "Sample" tag. They report no test results. */
export const testimonials: readonly Testimonial[] = [
  {
    id: "category-c",
    courseId: "category-c",
    quote: "I'd never driven anything bigger than a van. Each session started with a clear plan, so I always knew what we were working on.",
    detail:
      "I'd never driven anything bigger than a van, so the size of the lorry worried me at first. Each session began with a short briefing on what we'd be working on and finished with feedback on how it had gone. Reversing was the part I found hardest, and it was explained patiently until it made sense.",
    attribution: "Sample learner, Category C",
  },
  {
    id: "category-ce",
    courseId: "category-ce",
    quote: "Coupling and uncoupling felt daunting at first. Practising in the yard before we went on the road made all the difference.",
    detail:
      "I already held Category C and wanted to add the trailer. We spent time in the yard on coupling, uncoupling and reversing before taking the combination out on the road, so I wasn't trying to learn everything at once.",
    attribution: "Sample learner, Category C+E",
  },
  {
    id: "driver-cpc",
    courseId: "driver-cpc",
    quote: "It was clear what the module covered and how it counted towards my hours. No surprises on the day.",
    detail:
      "I needed hours towards my periodic CPC. The module was explained clearly beforehand, including what it covered and how it fitted my five-year requirement, and the session itself was practical rather than a lecture from slides.",
    attribution: "Sample learner, Driver CPC",
  },
];

export function testimonialsFor(courseId: string): readonly Testimonial[] {
  return testimonials.filter((item) => item.courseId === courseId);
}
