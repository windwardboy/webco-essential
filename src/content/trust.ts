export type TrustPoint = {
  label: string;
  title: string;
  text: string;
};

/** Sample wording. No statistics, awards or pass rates. */
export const trustPoints: readonly TrustPoint[] = [
  {
    label: "One training base",
    title: "One training base",
    text: "All our training runs from a single local base, so you know where you're going and who you're dealing with.",
  },
  {
    label: "Plain-English advice",
    title: "Plain-English advice",
    text: "We explain which licence you need, what the training involves and what happens next before you commit to anything.",
  },
  {
    label: "Time in the vehicle",
    title: "Time in the vehicle",
    text: "Training centres on the manoeuvres and road driving the test involves, with practice in the vehicle rather than slides.",
  },
  {
    label: "Local road knowledge",
    title: "Local road knowledge",
    text: "Road work uses the roads around our base, so you practise where you're most likely to be driving.",
  },
];
