import { buildWhatsAppUrl } from "@/lib/utils";

export type SiteSettings = {
  name: string;
  title: string;
  tagline: string;
  phonePrimary: string;
  phoneSecondary: string;
  whatsappNumber: string;
  emailPrimary: string;
  emailSecondary: string;
  addressLines: string[];
  serviceHours: { label: string; value: string }[];
  googleMapsUrl: string;
  bookingUrl: string;
  instagramUrl: string;
  facebookUrl: string;
};

export type HomepageSectionConfig = {
  heroEyebrow: string;
  heroTitle: string;
  heroBody: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  proofStats: { label: string; value: string }[];
};

export type DoctorProfile = {
  name: string;
  role: string;
  bio: string;
  credentials: string[];
  specialties: string[];
};

export type TreatmentPage = {
  slug: string;
  category: string;
  title: string;
  shortTitle: string;
  summary: string;
  idealFor: string;
  heroTag: string;
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  image: string;
};

export type GalleryItem = {
  title: string;
  category: string;
  description: string;
  image: string;
};

export type FeaturedReview = {
  reviewerName: string;
  rating: number;
  quote: string;
  sourceUrl: string;
  sourceType: "google";
  approved: boolean;
};

export const siteSettings: SiteSettings = {
  name: "Smile Hub",
  title: "Smile Hub Premium Dental Care",
  tagline: "Warm, modern dental care in the heart of Kandy.",
  phonePrimary: "+94 777 51 34 51",
  phoneSecondary: "+94 817 454 455",
  whatsappNumber: "+94777513451",
  emailPrimary: "info@smilehub.lk",
  emailSecondary: "smilehubsl@gmail.com",
  addressLines: [
    "951, 1st Floor, Art Lanka Building",
    "Peradeniya Road",
    "Kandy",
    "Opposite Damro Showroom"
  ],
  serviceHours: [
    { label: "Tuesday to Saturday", value: "5:00 PM – 7:00 PM" },
    { label: "Sunday", value: "9:00 AM – 2:00 PM" },
    { label: "Monday", value: "Closed" }
  ],
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Smile%20Hub%20Premium%20Dental%20Care%2C%20Kandy",
  bookingUrl: "/book",
  instagramUrl: "https://www.instagram.com/",
  facebookUrl: "https://www.facebook.com/"
};

export const homepageSections: HomepageSectionConfig = {
  heroEyebrow: "Premium dental care in Kandy",
  heroTitle: "Premium dental care with clear explanations and a calmer clinic experience.",
  heroBody:
    "Smile Hub helps patients feel comfortable, informed, and looked after from the first WhatsApp message to the final appointment.",
  heroPrimaryCta: "Chat on WhatsApp",
  heroSecondaryCta: "Book consultation",
  proofStats: [
    { label: "Google rating", value: "5.0" },
    { label: "Location", value: "Peradeniya Road, Kandy" },
    { label: "Booking", value: "WhatsApp-first" }
  ]
};

export const trustHighlights = [
  {
    title: "Comfort-first care",
    description: "Thoughtful care and calm communication.",
    icon: "Heart",
    image: "/images/why/comfort-care.png"
  },
  {
    title: "Digital diagnostics",
    description: "Modern radiographs for clear next steps.",
    icon: "Cpu",
    image: "/images/clinic-1.png"
  },
  {
    title: "Mobile booking",
    description: "Fast WhatsApp booking in one tap.",
    icon: "Smartphone",
    image: "/images/hero-bright-bg.png"
  },
  {
    title: "Central location",
    description: "Peradeniya Road with easy parking.",
    icon: "MapPin",
    image: "/images/hero-premium-bg.png"
  }
];

export const doctors: DoctorProfile[] = [
  {
    name: "Smile Hub Clinical Team",
    role: "Patient-first dental care team",
    bio: "The Smile Hub team focuses on clear explanations, gentle chairside care, and treatment journeys that feel organized and reassuring for families and working professionals.",
    credentials: ["Modern diagnostic workflow", "Comfort-focused consultations", "Comprehensive treatment planning"],
    specialties: ["Preventive care", "Restorative care", "Cosmetic smile planning", "Orthodontic guidance"]
  },
  {
    name: "Doctor-led treatment planning",
    role: "Personalized smile roadmap",
    bio: "Every treatment path is built around oral health, function, aesthetics, and long-term confidence, with recommendations explained in plain language before any decision is made.",
    credentials: ["Patient-centered communication", "Step-by-step care planning", "Technology-supported diagnosis"],
    specialties: ["Case explanation", "Treatment sequencing", "Review-led patient trust"]
  }
];

export const treatments: TreatmentPage[] = [
  {
    slug: "preventive-care",
    category: "Protect & Smile",
    shortTitle: "Preventive Care",
    title: "Preventive Dental Care",
    summary:
      "Routine exams, professional cleaning, and oral health guidance that help prevent future problems and protect your smile early.",
    idealFor: "Patients who want consistent maintenance, early detection, and healthier gums and teeth.",
    heroTag: "Healthy foundations",
    benefits: [
      "Catch issues before they become painful or expensive",
      "Keep teeth and gums healthier with regular maintenance",
      "Build a simple oral-care routine with professional guidance"
    ],
    process: [
      "Consultation and oral health check",
      "Cleaning and hygiene review",
      "Diagnostic imaging if needed",
      "Personalized next-step plan"
    ],
    faqs: [
      {
        question: "How often should I book a preventive visit?",
        answer: "Most patients benefit from a routine visit every six months, though timing can vary based on your oral health needs."
      },
      {
        question: "Do preventive visits include cleaning?",
        answer: "Yes. A preventive appointment can include an exam, professional cleaning, and tailored hygiene advice."
      }
    ],
    image: "/images/treatments/preventive.png"
  },
  {
    slug: "restorative-care",
    category: "Restore & Smile",
    shortTitle: "Restorative Care",
    title: "Restorative Dental Care",
    summary:
      "Treatment designed to rebuild comfort, function, and confidence using fillings, crowns, root canal support, and other restorative solutions.",
    idealFor: "Patients with damaged, painful, worn, or missing tooth structure who want function restored.",
    heroTag: "Repair with confidence",
    benefits: [
      "Relieve discomfort and restore bite function",
      "Protect weakened teeth from further damage",
      "Bring back a natural, secure smile experience"
    ],
    process: [
      "Problem-focused consultation and diagnostics",
      "Treatment recommendation with options explained clearly",
      "Restorative procedure plan",
      "Aftercare and follow-up guidance"
    ],
    faqs: [
      {
        question: "Can you help if I already have tooth pain?",
        answer: "Yes. Restorative treatment is designed to assess pain, identify the cause, and recommend the right next step quickly."
      },
      {
        question: "Will I know my options before treatment starts?",
        answer: "Yes. Smile Hub emphasizes clear explanations so patients understand the options, process, and likely outcomes."
      }
    ],
    image: "/images/treatments/restorative.png"
  },
  {
    slug: "cosmetic-dentistry",
    category: "Glow & Smile",
    shortTitle: "Cosmetic Dentistry",
    title: "Cosmetic Dentistry",
    summary:
      "Aesthetic smile improvements designed to brighten, refine, and balance your smile while staying aligned with overall oral health.",
    idealFor: "Patients looking for whitening, smile enhancement, and more confidence in photos, work, and social life.",
    heroTag: "Refine your smile",
    benefits: [
      "Create a brighter, fresher smile appearance",
      "Improve harmony, balance, and confidence",
      "Match cosmetic changes to your facial features and goals"
    ],
    process: [
      "Smile consultation and goals discussion",
      "Assessment of tooth color, shape, and balance",
      "Treatment plan with realistic outcomes",
      "Enhancement and maintenance guidance"
    ],
    faqs: [
      {
        question: "Is cosmetic treatment only about appearance?",
        answer: "No. The best cosmetic outcomes still respect oral health, function, and long-term comfort."
      },
      {
        question: "Can I ask for a natural-looking result?",
        answer: "Yes. Treatment planning should match your preferred level of brightness and refinement."
      }
    ],
    image: "/images/treatments/cosmetic.png"
  },
  {
    slug: "orthodontics",
    category: "Align & Smile",
    shortTitle: "Orthodontics",
    title: "Orthodontic Treatment",
    summary:
      "Alignment-focused care for straighter teeth, improved bite balance, and a smile that feels easier to maintain over time.",
    idealFor: "Patients with crowding, spacing, bite concerns, or cosmetic alignment goals.",
    heroTag: "Straighten with clarity",
    benefits: [
      "Improve alignment and bite harmony",
      "Support easier cleaning and long-term maintenance",
      "Build confidence with a more balanced smile"
    ],
    process: [
      "Initial assessment and alignment goals",
      "Bite and spacing review",
      "Treatment path recommendation",
      "Monitoring and progress guidance"
    ],
    faqs: [
      {
        question: "Can adults start orthodontic treatment?",
        answer: "Yes. Adults commonly begin alignment treatment for both cosmetic and functional reasons."
      },
      {
        question: "Will I understand the full journey before starting?",
        answer: "Yes. Smile Hub’s approach emphasizes clear expectations, timing, and step-by-step planning."
      }
    ],
    image: "/images/treatments/orthodontics.png"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Reception welcome",
    category: "Clinic experience",
    description: "A warm arrival experience with a tidy, premium-feeling reception zone.",
    image: "/images/hero-premium-bg.png"
  },
  {
    title: "Treatment suite",
    category: "Clinical care",
    description: "A calm clinical setup designed around comfort, efficiency, and modern tools.",
    image: "/images/clinic-1.png"
  },
  {
    title: "Patient consultation corner",
    category: "Consultations",
    description: "A quieter space for clear conversations, treatment explanations, and planning.",
    image: "/images/doctor-1.png"
  },
  {
    title: "Diagnostic technology",
    category: "Technology",
    description: "Digital-first tools that support more confident decisions and smoother visits.",
    image: "/images/treatments/preventive.png"
  },
  {
    title: "Before your appointment",
    category: "Clinic experience",
    description: "Details that help the clinic feel organized, reassuring, and easy to navigate.",
    image: "/images/patient-1.png"
  },
  {
    title: "Smile confidence moments",
    category: "Atmosphere",
    description: "The kind of polished, welcoming environment patients remember after a visit.",
    image: "/images/treatments/cosmetic.png"
  }
];

export const featuredReviews: FeaturedReview[] = [
  {
    reviewerName: "Upekha Atupola",
    rating: 5,
    quote:
      "Everything ran smoothly and on time, and the explanations made the entire visit feel comfortable and reassuring.",
    sourceUrl:
      "https://www.google.com/maps/search/?api=1&query=Smile%20Hub%20Premium%20Dental%20Care%2C%20Kandy",
    sourceType: "google",
    approved: true
  },
  {
    reviewerName: "Google reviewer",
    rating: 5,
    quote:
      "Warm staff, premium care, and a clinic environment that helps patients feel at ease from the start.",
    sourceUrl:
      "https://www.google.com/maps/search/?api=1&query=Smile%20Hub%20Premium%20Dental%20Care%2C%20Kandy",
    sourceType: "google",
    approved: true
  }
];

export const faqItems = [
  {
    question: "How do I book the fastest?",
    answer: "WhatsApp is the fastest route. You can also call directly or submit the appointment form."
  },
  {
    question: "Where is Smile Hub located?",
    answer:
      "Smile Hub Premium Dental Care is on Peradeniya Road in Kandy, at 951, 1st Floor, Art Lanka Building, opposite the Damro showroom."
  },
  {
    question: "Can I ask questions before booking?",
    answer: "Yes. Use WhatsApp or the contact form to ask about treatments, appointment timing, or how to prepare."
  },
  {
    question: "What kind of treatments do you offer?",
    answer:
      "Smile Hub highlights preventive care, restorative care, cosmetic dentistry, and orthodontic treatment, with personalized guidance based on your needs."
  }
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/treatments", label: "Treatments" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" }
] as const;

export const quickWhatsAppMessages = {
  general: buildWhatsAppUrl(
    siteSettings.whatsappNumber,
    "Hello Smile Hub, I would like to book a dental consultation."
  ),
  pain: buildWhatsAppUrl(
    siteSettings.whatsappNumber,
    "Hello Smile Hub, I need help with tooth pain and would like the earliest available appointment."
  ),
  braces: buildWhatsAppUrl(
    siteSettings.whatsappNumber,
    "Hello Smile Hub, I would like to ask about orthodontic treatment or braces."
  ),
  cosmetic: buildWhatsAppUrl(
    siteSettings.whatsappNumber,
    "Hello Smile Hub, I would like to ask about cosmetic dentistry and smile improvement."
  )
};
