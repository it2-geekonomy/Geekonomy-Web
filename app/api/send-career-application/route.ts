import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  ACCEPTED_RESUME_TYPES,
  MAX_RESUME_BYTES,
} from "@/lib/careers/validateCareerApplication";

const resend = new Resend(
  process.env.RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY
);

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const linkedIn = String(formData.get("linkedIn") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const position = String(formData.get("position") ?? "").trim();
    const resume = formData.get("resume");

    if (!firstName || !lastName || !email || !phone || !position) {
      return NextResponse.json(
        { error: "Missing required application fields." },
        { status: 400 }
      );
    }

    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json({ error: "Resume is required." }, { status: 400 });
    }

    if (!ACCEPTED_RESUME_TYPES.includes(resume.type)) {
      return NextResponse.json(
        { error: "Resume must be PDF, DOC, or DOCX." },
        { status: 400 }
      );
    }

    if (resume.size > MAX_RESUME_BYTES) {
      return NextResponse.json(
        { error: "Resume must be 5MB or smaller." },
        { status: 400 }
      );
    }

    const safeFirst = escapeHtml(firstName);
    const safeLast = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeLinkedIn = escapeHtml(linkedIn || "Not provided");
    const safePhone = escapeHtml(phone);
    const safePosition = escapeHtml(position);

    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.5; color:#111;">
        <h2 style="margin:0 0 12px;">New Career Application</h2>
        <p style="margin:0 0 16px; color:#4b5563;">Submitted from the careers page.</p>
        <table cellpadding="8" cellspacing="0" border="0" style="border-collapse:collapse;">
          <tr><td><strong>Name</strong></td><td>${safeFirst} ${safeLast}</td></tr>
          <tr><td><strong>Email</strong></td><td>${safeEmail}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${safePhone}</td></tr>
          <tr><td><strong>Position</strong></td><td>${safePosition}</td></tr>
          <tr><td><strong>LinkedIn / Portfolio</strong></td><td>${safeLinkedIn}</td></tr>
        </table>
      </div>
    `;

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    const { data, error } = await resend.emails.send({
      from: "Geekonomy Careers <noreply@thegeekonomy.com>",
      to: ["hr@geekonomy.in"],
      subject: `Career Application: ${safePosition} — ${safeFirst} ${safeLast}`,
      html,
      replyTo: email,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to send application", details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, messageId: data?.id }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Internal server error", details: message },
      { status: 500 }
    );
  }
}
