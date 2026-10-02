export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: Record<string, readonly FaqItem[]> = {
  home: [
    {
      question: "Which licence do I need?",
      answer:
        "Category C is the usual route onto a rigid lorry. Category C+E adds a trailer. Driver CPC is the professional qualification, not a vehicle category. The HGV training page compares them, and you can ask us if you're not sure.",
    },
    {
      question: "How much does training cost?",
      answer:
        "We quote for each learner, because the right training depends on the licence you hold and how much practice you need. Send an enquiry and tell us what you want to drive.",
    },
    {
      question: "Where does the training take place?",
      answer:
        "From our single local base. We send the full address and directions once your training is arranged.",
    },
    {
      question: "Are the reviews on this site real?",
      answer:
        "No. This is a demonstration website, so the reviews are fictional samples and no rating is shown.",
    },
  ],
  overview: [
    {
      question: "What is the difference between Category C and Category C+E?",
      answer:
        "Category C is the rigid lorry licence. Category C+E adds a trailer, for articulated lorries and drawbar combinations. C+E training normally follows Category C.",
    },
    {
      question: "Is Driver CPC the same as an HGV licence?",
      answer:
        "No. Category C and Category C+E are vehicle licences. Driver CPC is a professional qualification for drivers who need a Driver Qualification Card.",
    },
    {
      question: "Can you tell me if I'm eligible?",
      answer:
        "Not from a web page. This is general guidance. We check the licence you hold when you enquire and tell you what applies to you.",
    },
    {
      question: "Why don't you list prices?",
      answer:
        "The right training depends on the licence you already hold and how much practice you need, so we quote for each learner individually. Ask for a quote for the course you want.",
    },
  ],
  "category-c": [
    {
      question: "What does Category C allow me to drive?",
      answer:
        "Rigid goods vehicles over 3.5 tonnes. It doesn't cover an articulated lorry or a drawbar trailer. That is Category C+E.",
    },
    {
      question: "What do I need before practical training?",
      answer:
        "A car licence is the usual starting point, and a medical assessment and theory tests normally go alongside the practical training. We check your licence when you enquire.",
    },
    {
      question: "How long does Category C take?",
      answer:
        "It depends on the licence you hold, your driving experience and how the days are arranged. We agree a plan with you when you enquire.",
    },
    {
      question: "How much does Category C cost?",
      answer:
        "Ask us for a quote. Medical, theory test and practical test fees are separate costs, and we explain them when we quote.",
    },
  ],
  "category-ce": [
    {
      question: "Do I need Category C before C+E?",
      answer:
        "Category C is the usual licence held before trailer training. If you don't hold it yet, start with Category C training.",
    },
    {
      question: "What will I be driving?",
      answer: "An articulated lorry or a drawbar combination, depending on the entitlement you need.",
    },
    {
      question: "How long does Category C+E take?",
      answer: "It depends on your experience with a trailer. We agree a plan with you when you enquire.",
    },
    {
      question: "How do I get a quote?",
      answer: "Use the enquiry form or call us and say you're asking about Category C+E.",
    },
  ],
  "driver-cpc": [
    {
      question: "What is Driver CPC?",
      answer:
        "The professional qualification for lorry and bus drivers who need a Driver Qualification Card. It isn't a vehicle category.",
    },
    {
      question: "What is the difference between initial and periodic CPC?",
      answer:
        "Initial CPC is for a new professional driver. Periodic CPC is ongoing training for someone who already holds a Driver Qualification Card. We offer periodic training.",
    },
    {
      question: "Which CPC courses do you offer?",
      answer:
        "Periodic Driver CPC. We don't currently offer Initial Driver CPC, but we can point you in the right direction if you need it.",
    },
    {
      question: "Where can I find dates and prices?",
      answer: "We confirm module dates and fees when you enquire, so you get current information for the course you want.",
    },
  ],
};
