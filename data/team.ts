export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  philosophy: string;
  credentials: string[];
  specialties: string[];
  image: string;
  featured?: boolean;
}

export const CLINICAL_TEAM: TeamMember[] = [
  {
    "id": "lead-dentist",
    "name": "Dr. Dilshan Wijesingheeee",
    "title": "BDS (Peradeniya), MSc (Aesthetic & Restorative Dentistry, UK)",
    "role": "Principal Dentist & Clinical Director",
    "bio": "Pioneering anxiety-free, technology-driven dentistry in Kandy with over 12 years of clinical experience in smile makeovers and implant surgery.",
    "philosophy": "Dentistry should never feel intimidating. We combine absolute clinical precision with a calming, empathetic environment so every patient leaves smiling.",
    "credentials": [
      "BDS (Peradeniya)",
      "MSc Aesthetic Dentistry (UK)",
      "Certified Implantology Fellow",
      "Member of International Association for Dental Research"
    ],
    "specialties": [
      "Bespoke Porcelain Veneers",
      "3D Guided Implant Surgery",
      "Full Mouth Rehabilitation",
      "Digital Smile Design"
    ],
    "image": "/images/uploads/upload-1785359379441.jpg",
    "featured": true
  },
  {
    "id": "orthodontic-specialist",
    "name": "Dr. Ananya Senanayake",
    "title": "BDS, MDent (Orthodontics)",
    "role": "Orthodontics & Clear Aligner Lead",
    "bio": "Specializing in discreet smile alignment using advanced 3D clear aligner technology and modern brace systems for teens and adults.",
    "philosophy": "A straight smile is more than aesthetics—it protects your joint health, gum tissue, and long-term oral function.",
    "credentials": [
      "BDS Dental Surgery",
      "Certified Clear Aligner Specialist",
      "Senior Member Sri Lanka Dental Association"
    ],
    "specialties": [
      "Smile Hub Clear Aligners",
      "Adult Aesthetic Braces",
      "Interceptic Pediatric Orthodontics",
      "Bite Alignment Correction"
    ],
    "image": "/images/treatments/orthodontics.png",
    "featured": true
  },
  {
    "id": "pediatric-hygiene-lead",
    "name": "Dr. Kasun Gunawardena",
    "title": "BDS, Dip. Pediatric Dentistry",
    "role": "Family Preventive & Hygiene Lead",
    "bio": "Dedicated to building positive dental experiences for young children and families, focusing on prevention and comfortable maintenance.",
    "philosophy": "Building healthy dental habits early in life creates a lifetime of fearless, healthy smiles.",
    "credentials": [
      "BDS Dental Surgery",
      "Diploma in Pediatric Oral Health",
      "Hygiene & Infection Protocol Certified"
    ],
    "specialties": [
      "Anxiety-Free Kids Dentistry",
      "Preventive Sealants & Fluoride",
      "Periodontal Scaling & Maintenance",
      "Oral Health Education"
    ],
    "image": "/images/why/comfort-care.png",
    "featured": false
  }
];
