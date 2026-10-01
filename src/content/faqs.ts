export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: Record<string, readonly FaqItem[]> = {
  home: [
    {
      question: "Which licence do I need?",
      answer:
        "Category C is the usual route onto a rigid lorry. Category C+E adds a trailer. Driver CPC is the professional qualification, not a vehicle category. The HGV training page compares them, and you can ask if you are not sure.",
    },
    {
      question: "Do you publish prices?",
      answer:
        "No. This demonstration does not list a fee. The enquiry form is how you ask for a quote on a live site.",
    },
    {
      question: "Where does the training take place?",
      answer:
        "From one base. The town on this demonstration is a placeholder, and no street address is published. Directions are shared when training is being arranged.",
    },
    {
      question: "Are the reviews real?",
      answer:
        "No. The quotations are samples for the layout. A live site should only show feedback the provider can stand behind. No rating is shown here.",
    },
  ],
  overview: [
    {
      question: "What is the difference between Category C and Category C+E?",
      answer:
        "Category C is the rigid lorry entitlement. Category C+E adds a trailer, for articulated lorries and drawbar outfits. C+E training normally follows Category C.",
    },
    {
      question: "Is Driver CPC the same as an HGV licence?",
      answer:
        "No. Category C and Category C+E are vehicle entitlements. Driver CPC is a professional qualification for drivers who need a Driver Qualification Card.",
    },
    {
      question: "Can this page tell me if I am eligible?",
      answer:
        "No. It is general guidance. The provider checks the licence you hold when you enquire. Nothing here confirms that a particular person qualifies.",
    },
    {
      question: "Why is there no price list?",
      answer:
        "Because a fee has not been supplied for this demonstration, and one should not be invented. Ask for a quote for the training you need.",
    },
  ],
  "category-c": [
    {
      question: "What does Category C allow me to drive?",
      answer:
        "Rigid goods vehicles over 3.5 tonnes. It does not cover an articulated lorry or a drawbar trailer. That is Category C+E.",
    },
    {
      question: "What do I need before practical training?",
      answer:
        "A car licence is the usual starting point, and a medical assessment and theory tests normally sit alongside the practical training. The provider checks your licence. This page does not confirm eligibility.",
    },
    {
      question: "How long does Category C take?",
      answer:
        "No duration is published here. It depends on the licence you hold and how the days are arranged.",
    },
    {
      question: "How much does Category C cost?",
      answer:
        "No fee is published here. Ask for a quote. Medicals, theory tests and the practical test are separate costs and are not listed on this demonstration.",
    },
  ],
  "category-ce": [
    {
      question: "Do I need Category C before C+E?",
      answer:
        "Category C is the usual entitlement held before trailer training. If you do not hold it yet, start with Category C training.",
    },
    {
      question: "What will I be driving?",
      answer:
        "An articulated lorry or a drawbar combination. The unit and trailer are not named on this demonstration.",
    },
    {
      question: "How long does Category C+E take?",
      answer: "No duration is published here. It is confirmed when you enquire.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Use the enquiry form or the phone number and say you are asking about Category C+E. No price is listed on this page.",
    },
  ],
  "driver-cpc": [
    {
      question: "What is Driver CPC?",
      answer:
        "The professional qualification for lorry and bus drivers who need a Driver Qualification Card. It is not a vehicle category.",
    },
    {
      question: "What is the difference between initial and periodic CPC?",
      answer:
        "Initial CPC is for a new professional driver. Periodic CPC is ongoing training for someone who already holds a Driver Qualification Card. This demonstration lists periodic training only.",
    },
    {
      question: "Which CPC courses are offered here?",
      answer:
        "Periodic Driver CPC is the example offer. No module code, approval number or date is published. Initial CPC is not listed as an offered course on this demonstration.",
    },
    {
      question: "Do you publish dates and prices?",
      answer: "No. Dates and fees are confirmed when you enquire. None are invented on this page.",
    },
  ],
};
