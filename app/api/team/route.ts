import { NextResponse } from "next/server";
import { CLINICAL_TEAM } from "@/data/team";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json(
      { success: true, data: CLINICAL_TEAM },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, data: CLINICAL_TEAM });
  }
}
