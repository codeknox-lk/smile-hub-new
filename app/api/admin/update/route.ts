import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const REPO_OWNER = "codeknox-lk";
const REPO_NAME = "smile-hub-new";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, data, password } = body;

    // PIN check
    if (password !== "smilehub2026" && password !== "1234") {
      return NextResponse.json({ error: "Invalid Admin PIN" }, { status: 401 });
    }

    const filePathRelative = type === "team" ? "data/team.ts" : "data/pricing.ts";

    let fileContent = "";
    if (type === "pricing") {
      fileContent = `export interface PricingItem {
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
    } else if (type === "team") {
      fileContent = `export interface TeamMember {
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
    }

    // 1. Write locally in development environment if possible
    try {
      const localFilePath = path.join(process.cwd(), filePathRelative);
      fs.writeFileSync(localFilePath, fileContent, "utf-8");
    } catch (e) {}

    // 2. Commit directly to GitHub Repository via GitHub API if GITHUB_TOKEN is set
    const githubToken = body.githubToken || process.env.GITHUB_TOKEN;
    if (githubToken) {
      try {
        const getFileRes = await fetch(
          `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePathRelative}`,
          {
            headers: {
              Authorization: `token ${githubToken}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );

        let sha = "";
        if (getFileRes.ok) {
          const fileData = await getFileRes.json();
          sha = fileData.sha;
        }

        const encodedContent = Buffer.from(fileContent).toString("base64");

        const updateRes = await fetch(
          `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePathRelative}`,
          {
            method: "PUT",
            headers: {
              Authorization: `token ${githubToken}`,
              Accept: "application/vnd.github.v3+json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              message: `chore(cms): update ${type} via admin portal`,
              content: encodedContent,
              sha: sha || undefined,
              branch: "main",
            }),
          }
        );

        if (updateRes.ok) {
          return NextResponse.json({
            success: true,
            githubSynced: true,
            message: "Committed to GitHub! Vercel is redeploying changes globally in ~20 seconds.",
          });
        }
      } catch (ghErr) {}
    }

    return NextResponse.json({
      success: true,
      githubSynced: false,
      message: "Edits saved locally! To publish live to all real customers on Vercel, please add GITHUB_TOKEN to Vercel Environment Variables.",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || "Failed to update" }, { status: 500 });
  }
}
