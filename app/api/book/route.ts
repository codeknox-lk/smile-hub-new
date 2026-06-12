import { NextResponse } from "next/server";

type BookingPayload = {
  name?: string;
  phone?: string;
  treatment?: string;
  message?: string;
  email?: string;
  website?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as BookingPayload;

  if (body.website) {
    return NextResponse.json({ message: "Spam rejected." }, { status: 400 });
  }

  if (!body.name?.trim() || !body.phone?.trim()) {
    return NextResponse.json(
      { message: "Please enter both your name and mobile number." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message:
      "Your booking request was received. Smile Hub can follow up by WhatsApp or phone to confirm the appointment."
  });
}

