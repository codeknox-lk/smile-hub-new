import { NextResponse } from "next/server";
import { getReviewSnapshot } from "@/lib/reviews";

export async function GET() {
  const snapshot = await getReviewSnapshot();
  return NextResponse.json(snapshot);
}

