import { NextRequest, NextResponse } from "next/server";

const MAX_SUBJECT_LENGTH = 100;
const MAX_DESCRIPTION_LENGTH = 1800;
const MAX_CONTACT_LENGTH = 160;

function cleanSingleLine(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, maxLength);
}

function cleanMultiline(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (typeof body.website === "string" && body.website.trim()) {
      return NextResponse.json({ ok: true });
    }

    const subject = cleanSingleLine(body.subject, MAX_SUBJECT_LENGTH);
    const contact = cleanSingleLine(body.contact, MAX_CONTACT_LENGTH);
    const description = cleanMultiline(body.description, MAX_DESCRIPTION_LENGTH);

    if (subject.length < 2 || contact.length < 3 || description.length < 10) {
      return NextResponse.json(
        { error: "Please complete all fields with a little more detail." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Project requests are temporarily unavailable." },
        { status: 503 },
      );
    }

    const to = process.env.PROJECT_REQUEST_TO || "aminmonajati9@gmail.com";
    const from = process.env.RESEND_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `[Portfolio Request] ${subject}`,
        text: [
          "New project request from amin-monajati.vercel.app",
          "",
          `Subject: ${subject}`,
          `Contact: ${contact}`,
          "",
          "Description:",
          description,
          "",
          `Submitted: ${new Date().toISOString()}`,
        ].join("\n"),
      }),
      cache: "no-store",
    });

    if (!resendResponse.ok) {
      const details = await resendResponse.text();
      console.error("Resend API error:", resendResponse.status, details);
      return NextResponse.json(
        { error: "Could not send your request. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Project request error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
