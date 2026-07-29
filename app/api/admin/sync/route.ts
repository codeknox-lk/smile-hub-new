import { NextResponse } from "next/server";

// Global Shared Persistent Storage API (JSONBin Free Storage)
const JSONBIN_TEAM_BIN_ID = "65bd48261f563535d2780e92";
const JSONBIN_MASTER_KEY = "$2a$10$wE9l1kY4sK8p2.L3rM9w9uJ0f6O1.Q2";

export async function POST(req: Request) {
  try {
    const { type, data } = await req.json();

    // Persist globally using lightweight cloud API
    const res = await fetch(`https://api.jsonbin.io/v3/b`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Bin-Private": "false",
        "X-Bin-Name": `smilehub_${type}_data`,
      },
      body: JSON.stringify({ type, data, timestamp: Date.now() }),
    });

    const json = await res.json();
    const binId = json.metadata?.id;

    return NextResponse.json({ success: true, binId, data });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Sync failed" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const binId = searchParams.get("binId");

  if (!binId) {
    return NextResponse.json({ error: "Missing binId" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${binId}/latest`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    return NextResponse.json({ success: true, record: json.record });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Fetch failed" }, { status: 500 });
  }
}
