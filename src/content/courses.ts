export type Course = {
  id: string;
  title: string;
  licence: string;
  summary: string;
  audience: string;
  includes: readonly string[];
};

/**
 * Sample course outlines for the demonstration.
 * Durations, fees and test arrangements are omitted on purpose.
 */
export const courses: readonly Course[] = [
  {
    id: "category-ce",
    title: "Category C+E",
    licence: "Category C+E",
    summary: "Articulated and drawbar training for drivers who already hold Category C.",
    audience:
      "Drivers who already hold Category C and need the trailer entitlement for articulated lorries or drawbar outfits.",
    includes: [
      "Coupling and uncoupling practice",
      "Reversing and manoeuvres with a trailer",
      "On-road driving",
      "Preparation for the practical test",
    ],
  },
  {
    id: "category-c",
    title: "Category C",
    licence: "Category C",
    summary: "Rigid lorry training for drivers moving up from a car licence.",
    audience:
      "People who want to drive rigid goods vehicles over 3.5 tonnes. A category B car licence is the usual starting point. Medical and theory steps sit alongside the practical training.",
    includes: [
      "Familiarisation with a rigid goods vehicle",
      "Reversing and off-road manoeuvres",
      "On-road driving",
      "Guidance on the practical test",
    ],
  },
  {
    id: "category-c1",
    title: "Category C1",
    licence: "Category C1",
    summary: "Training for vehicles between 3.5 and 7.5 tonnes.",
    audience:
      "Drivers who need a medium-sized vehicle, such as some horseboxes, motorhomes and lighter trucks. What training is required depends on the current licence, including when the car test was passed.",
    includes: [
      "A check of what the current licence already allows",
      "Vehicle familiarisation and manoeuvres",
      "On-road driving",
      "Preparation for the practical test, where one is required",
    ],
  },
  {
    id: "driver-cpc",
    title: "Driver CPC",
    licence: "Driver CPC periodic training",
    summary: "Periodic training modules for professional lorry and bus drivers.",
    audience:
      "Professional drivers who need to keep their Driver Qualification Card current. Periodic training is usually 35 hours every five years.",
    includes: [
      "A clear description of the module topic",
      "Who the session is for",
      "How the hours fit the five-year requirement",
      "A simple way to ask about dates",
    ],
  },
];

export function courseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id);
}
