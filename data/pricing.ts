export interface PricingItem {
  id: string;
  name: string;
  category: "preventive" | "restorative" | "cosmetic" | "orthodontics" | "consultation";
  categoryLabel: string;
  startingPrice: string;
  startingPriceNum?: number;
  period?: string;
  description: string;
  inclusions: string[];
  image: string;
  popular?: boolean;
}

export interface PricingCategory {
  id: string;
  label: string;
  description: string;
}

export const PRICING_CATEGORIES: PricingCategory[] = [
  {
    id: "all",
    label: "All Treatments",
    description: "Full treatment fee guide across all clinical departments."
  },
  {
    id: "preventive",
    label: "Preventive Care",
    description: "Essential care, hygiene, and early oral health maintenance."
  },
  {
    id: "restorative",
    label: "Restorative & Implants",
    description: "Crowns, root canal therapy, oral surgery, and dental implants."
  },
  {
    id: "cosmetic",
    label: "Cosmetic Dentistry",
    description: "Porcelain veneers, composite bonding, whitening, and smile makeovers."
  },
  {
    id: "orthodontics",
    label: "Aligners & Orthodontics",
    description: "Clear aligners and orthodontic alignment options."
  }
];

export const PRICING_ITEMS: PricingItem[] = [
  {
    id: "comprehensive-exam",
    name: "Comprehensive Clinical Exam & 3D Imaging",
    category: "consultation",
    categoryLabel: "Consultation & Diagnostics",
    startingPrice: "LKR 3,500",
    description: "Full oral health examination including digital intraoral scanning and doctor consultation.",
    inclusions: [
      "Full mouth visual examination",
      "Digital intraoral scan",
      "Treatment plan discussion",
      "Written fee estimate"
    ],
    image: "/images/clinic-1.png",
    popular: true
  },
  {
    id: "hygiene-cleaning",
    name: "Professional Scaling & Polish",
    category: "preventive",
    categoryLabel: "Protect & Smile",
    startingPrice: "LKR 6,500",
    description: "Ultrasonic scaling and high-shine polish to eliminate plaque, calculus, and surface stains.",
    inclusions: [
      "Ultrasonic plaque & tartar removal",
      "Enamel polishing",
      "Gum health assessment",
      "Personalized hygiene advice"
    ],
    image: "/images/treatments/preventive.png"
  },
  {
    id: "kids-preventive",
    name: "Kids Dental Checkup & Fluoride Care",
    category: "preventive",
    categoryLabel: "Protect & Smile",
    startingPrice: "LKR 4,500",
    description: "Gentle, anxiety-free pediatric assessment with protective fluoride treatment.",
    inclusions: [
      "Pediatric gentle exam",
      "Protective enamel fluoride application",
      "Habit & growth guidance",
      "Anxiety-free environment"
    ],
    image: "/images/why/comfort-care.png"
  },
  {
    id: "porcelain-veneers",
    name: "Bespoke Porcelain Veneers",
    category: "cosmetic",
    categoryLabel: "Define & Smile",
    startingPrice: "LKR 55,000",
    period: "per tooth",
    description: "Ultra-thin, custom-milled ceramic shells for flawless shape, shade, and symmetry.",
    inclusions: [
      "Digital smile mockup preview",
      "Custom shade & translucency matching",
      "High-grade ceramic material",
      "Follow-up polish & alignment check"
    ],
    image: "/images/treatments/cosmetic.png",
    popular: true
  },
  {
    id: "teeth-whitening",
    name: "In-Clinic Laser Teeth Whitening",
    category: "cosmetic",
    categoryLabel: "Define & Smile",
    startingPrice: "LKR 35,000",
    description: "Professional whitening treatment to lift deep stains safely under expert supervision.",
    inclusions: [
      "Full clinical isolation & enamel safety",
      "Immediate 3–6 shade brightening",
      "Anti-sensitivity application",
      "Post-whitening care kit"
    ],
    image: "/images/results/cosmetic-after.webp"
  },
  {
    id: "composite-bonding",
    name: "Composite Edge Bonding",
    category: "cosmetic",
    categoryLabel: "Define & Smile",
    startingPrice: "LKR 15,000",
    period: "per tooth",
    description: "Minimally invasive composite resin art to fix chips, gaps, and minor misalignments.",
    inclusions: [
      "Single-visit completion",
      "Direct shade blending",
      "Seamless natural finish"
    ],
    image: "/images/treatments/cosmetic.png"
  },
  {
    id: "dental-implants",
    name: "Precision Dental Implant System",
    category: "restorative",
    categoryLabel: "Restore & Smile",
    startingPrice: "LKR 165,000",
    period: "per implant",
    description: "Biocompatible titanium post topped with a custom porcelain crown.",
    inclusions: [
      "3D CBCT bone scan planning",
      "Titanium implant placement",
      "Custom abutment & porcelain crown",
      "Post-op care & healing checkups"
    ],
    image: "/images/treatments/restorative.png",
    popular: true
  },
  {
    id: "root-canal",
    name: "Microscope-Guided Root Canal Therapy",
    category: "restorative",
    categoryLabel: "Restore & Smile",
    startingPrice: "LKR 28,000",
    description: "Pain-free root canal treatment to save natural tooth structure.",
    inclusions: [
      "Computerized apex locator diagnostics",
      "Gentle local anesthesia",
      "Thermafil sterile seal",
      "Core buildup restoration"
    ],
    image: "/images/treatments/restorative.png"
  },
  {
    id: "clear-aligners",
    name: "Smile Hub Clear Aligners Package",
    category: "orthodontics",
    categoryLabel: "Align & Smile",
    startingPrice: "LKR 220,000",
    period: "full treatment",
    description: "Nearly invisible, removable aligner trays custom-engineered for your teeth.",
    inclusions: [
      "3D digital setup & simulation preview",
      "Complete set of custom aligner trays",
      "Bi-weekly progress checks",
      "Final retention tray set"
    ],
    image: "/images/treatments/orthodontics.png",
    popular: true
  }
];

export const PRICING_FAQS = [
  {
    question: "Are these prices fixed or estimated?",
    answer: "Our prices reflect starting rates for standard clinical cases. During your initial consultation, we provide a 100% transparent, itemized treatment plan with no hidden fees before any work begins."
  },
  {
    question: "Do you offer flexible payment plans?",
    answer: "Yes! We offer zero-interest installment options for multi-stage treatments like dental implants, porcelain veneers, and clear aligner packages."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept Cash, Credit/Debit cards (Visa, MasterCard), Online Bank Transfers, and mobile payment gateways at our clinic."
  }
];
