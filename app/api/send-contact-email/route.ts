import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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
    const body = await request.json();
    const { name, email, phone, organisation, subject, message } = body ?? {};

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required contact form fields." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safePhone = escapeHtml(String(phone));
    const safeOrganisation = escapeHtml(String(organisation || "Not provided"));
    const safeSubject = escapeHtml(String(subject));
    const safeMessage = escapeHtml(String(message));

    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.5; color:#111;">
        <h2 style="margin:0 0 12px;">New Contact Form Submission</h2>
        <p style="margin:0 0 16px; color:#4b5563;">A new lead came through the contact page.</p>
        <table cellpadding="8" cellspacing="0" border="0" style="border-collapse:collapse;">
          <tr><td><strong>Name</strong></td><td>${safeName}</td></tr>
          <tr><td><strong>Email</strong></td><td>${safeEmail}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${safePhone}</td></tr>
          <tr><td><strong>Organisation</strong></td><td>${safeOrganisation}</td></tr>
          <tr><td><strong>Subject</strong></td><td>${safeSubject}</td></tr>
        </table>
        <h3 style="margin:18px 0 8px;">Message</h3>
        <p style="white-space:pre-wrap; margin:0;">${safeMessage}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Geekonomy Contact <noreply@thegeekonomy.com>",
      to: ["connect@geekonomy.in"],
      subject: `New Contact Inquiry: ${safeName}`,
      html,
      replyTo: safeEmail,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to send contact email", details: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, messageId: data?.id }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Internal server error", details: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
