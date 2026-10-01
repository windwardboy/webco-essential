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
    summary: "Practical training for rigid goods vehicles over 3.5 tonnes, for drivers moving up from a car licence.",
  },
  {
    id: "category-ce",
    title: "Category C+E",
    navLabel: "Category C+E",
    kicker: "Articulated and drawbar",
    path: "/category-ce-training/",
    summary: "Trailer training for drivers who already hold Category C and need the articulated or drawbar entitlement.",
  },
  {
    id: "driver-cpc",
    title: "Driver CPC",
    navLabel: "Driver CPC",
    kicker: "Professional drivers",
    path: "/driver-cpc/",
    summary: "Periodic training for professional drivers. This demonstration does not list a course code, a date or an approval number.",
  },
];

export const trainingLinks: readonly { href: string; label: string }[] = [
  { href: "/hgv-training/", label: "HGV training overview" },
  ...courses.map((course) => ({ href: course.path, label: course.navLabel })),
];

export const licenceComparison = [
  {
    id: "category-c",
    label: "Category C",
    path: "/category-c-training/",
    covers: "Rigid goods vehicles over 3.5 tonnes.",
    startingPoint: "Usually a category B car licence, then the medical and theory steps for a lorry test.",
  },
  {
    id: "category-ce",
    label: "Category C+E",
    path: "/category-ce-training/",
    covers: "Articulated lorries and drawbar combinations.",
    startingPoint: "Category C is the usual entitlement held before this training.",
  },
  {
    id: "driver-cpc",
    label: "Driver CPC",
    path: "/driver-cpc/",
    covers: "A professional qualification for lorry and bus drivers. Not a vehicle category.",
    startingPoint: "Depends on whether the driver needs initial or periodic CPC.",
  },
] as const;

export const whichLicence = [
  {
    title: "Category C",
    text: "The usual route onto a rigid lorry when you hold a car licence and want to drive goods vehicles over 3.5 tonnes.",
    href: "/category-c-training/",
  },
  {
    title: "Category C+E",
    text: "The trailer entitlement, for articulated lorries and drawbar outfits, once Category C is held.",
    href: "/category-ce-training/",
  },
  {
    title: "Driver CPC",
    text: "The professional qualification that sits alongside the licence for many paid driving jobs. It does not replace Category C or C+E.",
    href: "/driver-cpc/",
  },
] as const;

export const durationNote =
  "No course length is published here. It depends on the licence already held and how the training days are arranged.";

export const priceNote =
  "No fee is published here. Ask for a quote for the training you need. Medicals, theory tests and the practical test are separate costs, and those figures are not listed on this demonstration.";

export const categoryC = {
  who: "People who want to drive a rigid goods vehicle over 3.5 tonnes. The usual starting point is a category B car licence. Medical and theory steps sit alongside the practical training.",
  driveIntro:
    "Category C is the rigid lorry entitlement. It covers goods vehicles over 3.5 tonnes maximum authorised mass that are not articulated.",
  drivePoints: [
    "Rigid goods vehicles such as box wagons, tippers, flatbeds and similar lorries",
    "Not an articulated lorry or a drawbar outfit. That is Category C+E",
  ],
  driveNote:
    "The vehicle used for training belongs to the provider. This demonstration does not name a make or model.",
  eligibility: [
    "A category B car licence is the usual starting point",
    "A medical assessment is normally required before a lorry practical test",
    "Theory tests sit alongside the time in the vehicle",
    "Paid driving work can also require Driver CPC, which is separate from the Category C licence",
    "Age and medical rules depend on the person and the work. This page does not confirm that someone qualifies",
  ],
  includes: [
    "Familiarisation with a rigid goods vehicle",
    "Reversing and off-road manoeuvres",
    "On-road driving",
    "Guidance on what the practical test involves",
  ],
  steps: [
    {
      title: "Enquire about Category C",
      text: "Say that a rigid lorry is the aim, and how you would like to be contacted.",
    },
    {
      title: "Check the licence you hold",
      text: "The provider looks at your current licence and explains the medical and theory steps. This page does not confirm eligibility.",
    },
    {
      title: "Train in the vehicle",
      text: "Practical time covers the vehicle, the manoeuvres and the road driving.",
    },
    {
      title: "Prepare for the practical test",
      text: "How the test is booked is explained when you enquire. This site does not claim a result.",
    },
  ] as const satisfies readonly Step[],
};

export const categoryCe = {
  driveIntro:
    "Category C+E adds a trailer to the rigid entitlement. It is the licence used for articulated lorries and for drawbar combinations.",
  drivePoints: [
    "Articulated goods vehicles",
    "Rigid lorries towing a drawbar trailer",
  ],
  driveNote:
    "This demonstration does not name the tractor unit or the trailer.",
  who: "Drivers who already hold Category C and need to add the trailer entitlement. It is not the first step up from a car licence.",
  eligibility: [
    "Category C is the usual entitlement held before C+E training",
    "The provider checks the licence you hold before training is arranged",
    "Any medical or theory steps that still apply are explained at that point",
    "This page is general guidance. It does not confirm eligibility for an individual",
  ],
  includes: [
    "Coupling and uncoupling",
    "Reversing and manoeuvres with a trailer",
    "On-road driving with the combination",
    "Guidance on what the practical test involves",
  ],
  environment:
    "Training is yard work and road driving from one base. Coupling, uncoupling and trailer manoeuvres are the practical core of a C+E course.",
  environmentNote:
    "The unit, the trailer and the yard are named on a live site only when they are the provider’s. None are named here.",
};

export const driverCpc = {
  what: "Driver CPC is the professional qualification for people who drive lorries or buses for a living. It is not a vehicle category. Category C and Category C+E are the licence entitlements. Driver CPC sits alongside that work for drivers who need a Driver Qualification Card.",
  who: "Professional lorry and bus drivers. Some types of work are exempt, and that depends on the job rather than on a rule this page can apply for you. Ask the provider, or check current official guidance, before you book.",
  initial:
    "Initial CPC is the qualification a new professional driver takes when moving into vocational driving. It is explained here so the difference is clear.",
  periodic:
    "Periodic CPC is ongoing training for a driver who already holds a Driver Qualification Card, so the card can stay valid. It is widely described as 35 hours across five years. Rules are updated, so a driver should check current official guidance for their own card. This site does not calculate anyone’s hours.",
  offeredTitle: "Periodic Driver CPC",
  offeredText:
    "Module-style periodic training for drivers who need hours towards the five-year requirement. No course code, approval number, date or centre number is published on this demonstration.",
  initialNotOffered:
    "Initial Driver CPC is not listed as an offered course on this demonstration. A provider who genuinely runs it can add it here, in their own words.",
  format:
    "A periodic module is a set block of training, in a classroom or with a practical element, depending on the subject. This demonstration does not publish a timetable or a module length.",
};

export function otherCourses(id: string): readonly Course[] {
  return courses.filter((course) => course.id !== id);
}
