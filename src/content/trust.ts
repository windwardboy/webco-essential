export type TrustPoint = {
  label: string;
  title: string;
  text: string;
};

/** Example wording. No statistics, awards or pass rates. */
export const trustPoints: readonly TrustPoint[] = [
  {
    label: "One training base",
    title: "One training base",
    text: "Training is arranged from a single location. Meeting points are confirmed when you enquire, not published as a list of towns.",
  },
  {
    label: "Plain advice",
    title: "Straightforward advice",
    text: "The entitlement, the training and the next step are explained before you are asked to commit.",
  },
  {
    label: "Time in the vehicle",
    title: "Practical training",
    text: "Time in the vehicle covers the manoeuvres and the road driving the test involves.",
  },
  {
    label: "Local routes",
    title: "Local knowledge",
    text: "Road work reflects the area around that base, rather than a page for every nearby town.",
  },
];
