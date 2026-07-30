import { NextResponse } from "next/server";
import { getReviewSnapshot } from "@/lib/reviews";

export const dynamic = "force-dynamic";

export async function GET() {
  const snapshot = await getReviewSnapshot();
  return NextResponse.json(snapshot, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    },
  });
}
