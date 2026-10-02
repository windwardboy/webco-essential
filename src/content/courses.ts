export type Course = {
  id: string;
  title: string;
  navLabel: string;
  kicker: string;
  path: string;
  summary: string;
};

export type Step = {
  title: string;
  text: string;
};

/**
 * Core Essential routes.
 * Category C1 is not part of this sitemap. Add it later only when a
 * provider genuinely offers it, as its own course, not as a copy of Category C.
 */
export const courses: readonly Course[] = [
  {
    id: "category-c",
    title: "Category C",
    navLabel: "Category C",
    kicker: "Rigid lorries",
    path: "/category-c-training/",
    summary: "Practical training for rigid lorries over 3.5 tonnes, for drivers moving up from a car licence.",
  },
  {
    id: "category-ce",
    title: "Category C+E",
    navLabel: "Category C+E",
    kicker: "Articulated and drawbar",
    path: "/category-ce-training/",
    summary: "Trailer training for drivers who already hold Category C and want to drive articulated or drawbar lorries.",
  },
  {
    id: "driver-cpc",
    title: "Driver CPC",
    navLabel: "Driver CPC",
    kicker: "Professional drivers",
    path: "/driver-cpc/",
    summary: "Periodic training for professional drivers who need hours towards their five-year Driver CPC requirement.",
  },
];

export const trainingOverviewPath = "/hgv-training/";

/** Enquiry value for drivers who have not chosen a course. Not a course id. */
export const unsureCourseId = "not-sure";

export function courseById(id: string): Course {
  const course = courses.find((item) => item.id === id);
  if (!course) throw new Error(`Unknown course id: ${id}`);
  return course;
}

export function enquiryHref(courseId: string): string {
  if (courseId !== unsureCourseId && !courses.some((course) => course.id === courseId)) {
    throw new Error(`Unknown course id: ${courseId}`);
  }
  return `/contact/?course=${encodeURIComponent(courseId)}#enquiry`;
}

export const trainingLinks: readonly { href: string; label: string }[] = [
  { href: trainingOverviewPath, label: "HGV training overview" },
  ...courses.map((course) => ({ href: course.path, label: course.navLabel })),
];

export const licenceComparison = [
  {
    id: "category-c",
    label: courseById("category-c").title,
    path: courseById("category-c").path,
    covers: "Rigid lorries over 3.5 tonnes.",
    startingPoint: "Usually a category B car licence, plus a lorry medical and the theory tests.",
  },
  {
    id: "category-ce",
    label: courseById("category-ce").title,
    path: courseById("category-ce").path,
    covers: "Articulated lorries and drawbar combinations.",
    startingPoint: "Category C is the usual licence held before this training.",
  },
  {
    id: "driver-cpc",
    label: courseById("driver-cpc").title,
    path: courseById("driver-cpc").path,
    covers: "A professional qualification for lorry and bus drivers. It is not a vehicle category.",
    startingPoint: "Depends on whether you need initial or periodic CPC.",
  },
] as const;

export const whichLicence = [
  {
    title: courseById("category-c").title,
    text: "The usual route onto a rigid lorry if you hold a car licence and want to drive goods vehicles over 3.5 tonnes.",
    href: courseById("category-c").path,
  },
  {
    title: courseById("category-ce").title,
    text: "The trailer licence, for articulated lorries and drawbar combinations, once you hold Category C.",
    href: courseById("category-ce").path,
  },
  {
    title: courseById("driver-cpc").title,
    text: "The professional qualification that goes alongside your licence for many paid driving jobs. It doesn't replace Category C or Category C+E.",
    href: courseById("driver-cpc").path,
  },
] as const;

export const durationNote =
  "How long training takes depends on the licence you already hold, your driving experience and how the sessions are arranged. We agree a plan with you when you enquire, rather than quoting a standard length.";

export const priceNote =
  "We don't publish a fixed price list, because the right training depends on the licence you hold and how much practice you need. Ask for a quote for the course you want. Medical, theory test and practical test fees are separate costs, and we explain them when we quote.";

export const cpcPriceNote =
  "We don't publish a fixed price list. Ask for a quote for the module or modules you need, and we'll confirm the current fee and dates.";

export const categoryC = {
  who: "Drivers who want to move up from a car licence to a rigid lorry over 3.5 tonnes. You will usually need a category B car licence, and the medical and theory steps sit alongside the practical training.",
  driveIntro:
    "Category C is the rigid lorry licence. It covers goods vehicles over 3.5 tonnes maximum authorised mass that are not articulated.",
  drivePoints: [
    "Rigid goods vehicles such as box wagons, tippers, flatbeds and similar lorries",
    "Not an articulated lorry or a drawbar combination. That is Category C+E",
  ],
  driveNote: "You train in our own rigid training lorry.",
  eligibility: [
    "A category B car licence is the usual starting point",
    "A medical assessment is normally needed before a lorry practical test",
    "Theory tests go alongside your time in the vehicle",
    "Paid driving work can also require Driver CPC, which is separate from the Category C licence",
    "Age and medical rules depend on the person and the work, so this page can't confirm whether you qualify. We check when you enquire",
  ],
  includes: [
    "Getting to know a rigid goods vehicle",
    "Reversing and manoeuvres in the yard",
    "On-road driving",
    "Guidance on what the practical test involves",
  ],
  steps: [
    {
      title: "Enquire about Category C",
      text: "Tell us you want to drive a rigid lorry, and how you'd like us to get in touch.",
    },
    {
      title: "We check your licence",
      text: "We look at the licence you hold and explain the medical and theory steps.",
    },
    {
      title: "Train in the vehicle",
      text: "Practical sessions cover getting to know the lorry, manoeuvres and road driving.",
    },
    {
      title: "Prepare for the practical test",
      text: "We explain how the test is booked and what to expect on the day.",
    },
  ] as const satisfies readonly Step[],
};

export const categoryCe = {
  driveIntro:
    "Category C+E adds a trailer to the rigid lorry licence. It covers articulated lorries and drawbar combinations.",
  drivePoints: ["Articulated lorries", "Rigid lorries towing a drawbar trailer"],
  driveNote: "You train in our own articulated unit and trailer.",
  who: "Drivers who already hold Category C and want to add a trailer. It isn't the first step up from a car licence.",
  eligibility: [
    "Category C is the usual licence held before C+E training",
    "We check the licence you hold before training is arranged",
    "We explain any medical or theory steps that still apply",
    "This page is general guidance and can't confirm eligibility for an individual",
  ],
  includes: [
    "Coupling and uncoupling",
    "Reversing and manoeuvres with a trailer",
    "On-road driving with the combination",
    "Guidance on what the practical test involves",
  ],
  environment:
    "Training is yard work and road driving from our base. Coupling, uncoupling and trailer manoeuvres are the practical core of a C+E course.",
  environmentNote:
    "You practise coupling and reversing in the yard before moving on to the road with the combination.",
};

export const driverCpc = {
  what: "Driver CPC is the professional qualification for people who drive lorries or buses for a living. It is not a vehicle category: Category C and Category C+E are the licences, and Driver CPC sits alongside them for drivers who need a Driver Qualification Card.",
  who: "Professional lorry and bus drivers. Some types of work are exempt, and that depends on the job rather than on anything we can decide for you. Ask us, or check current official guidance, before you book.",
  initial:
    "Initial CPC is the qualification a new professional driver takes when moving into vocational driving. We explain it here so the difference from periodic CPC is clear.",
  periodic:
    "Periodic CPC is ongoing training for a driver who already holds a Driver Qualification Card, so the card stays valid. Drivers need 35 hours of periodic training every five years. Rules can change, so check current official guidance for your own card. We can't calculate anyone's hours on this website.",
  offeredTitle: "Periodic Driver CPC",
  offeredText:
    "Training modules for drivers who already hold a Driver Qualification Card and need hours towards their five-year requirement. Ask us which modules we are running and when.",
  initialNotOffered:
    "We don't currently offer Initial Driver CPC. If you're a new professional driver who needs it, get in touch and we'll point you in the right direction.",
  format:
    "A periodic module is a set block of training, in a classroom or with a practical element, depending on the subject. Module lengths and dates are confirmed when you enquire.",
};

export function otherCourses(id: string): readonly Course[] {
  return courses.filter((course) => course.id !== id);
}
