import { NextResponse } from "next/server";
import { PRICING_ITEMS } from "@/data/pricing";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json(
      { success: true, data: PRICING_ITEMS },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  } catch (error: any) {
    return NextResponse.json({ success: false, data: PRICING_ITEMS });
  }
}
