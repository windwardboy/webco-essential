export type TrustPoint = {
  title: string;
  text: string;
};

/** Example wording a small provider might use. No statistics. */
export const trustPoints: readonly TrustPoint[] = [
  {
    title: "Experienced instructors",
    text: "Training led by people who teach this work, with time to explain the licence and the test.",
  },
  {
    title: "Straightforward advice",
    text: "A plain account of the entitlement, the training and what happens next.",
  },
  {
    title: "Practical training",
    text: "Time in the vehicle, covering the manoeuvres and the road driving the test involves.",
  },
  {
    title: "Local knowledge",
    text: "One base, and routes that reflect the area where the training takes place.",
  },
];
