import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, data, password } = body;

    // PIN check
    if (password !== "smilehub2026" && password !== "1234") {
      return NextResponse.json({ error: "Invalid Admin PIN" }, { status: 401 });
    }

    if (type === "pricing") {
      const filePath = path.join(process.cwd(), "data/pricing.ts");
      const fileContent = `export interface PricingItem {
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

export const PRICING_ITEMS: PricingItem[] = ${JSON.stringify(data, null, 2)};
`;
      fs.writeFileSync(filePath, fileContent, "utf-8");
      return NextResponse.json({ success: true, message: "Pricing data updated successfully!" });
    }

    if (type === "team") {
      const filePath = path.join(process.cwd(), "data/team.ts");
      const fileContent = `export interface TeamMember {
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

export const CLINICAL_TEAM: TeamMember[] = ${JSON.stringify(data, null, 2)};
`;
      fs.writeFileSync(filePath, fileContent, "utf-8");
      return NextResponse.json({ success: true, message: "Clinical team data updated successfully!" });
    }

    return NextResponse.json({ error: "Invalid update type" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || "Failed to update" }, { status: 500 });
  }
}
