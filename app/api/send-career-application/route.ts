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
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8f9fa; padding: 20px; color: #333;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="padding: 30px 20px; text-align: center; background: linear-gradient(135deg, #69AE44 0%, #5a9438 100%);">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Geekonomy Careers</h1>
              <p style="color: #ffffff; margin: 8px 0 0 0; font-size: 16px; opacity: 0.9;">New Application Received</p>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 30px 20px;">
              <p style="font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">Dear Hiring Team,</p>
              <p style="font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">A new career application has been submitted through the Geekonomy website. Please review the candidate details below:</p>
              
              <!-- Applicant Details Card -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f8f9fa; border-radius: 6px; margin: 20px 0;">
                <tr>
                  <td style="padding: 20px;">
                    <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #69AE44; padding-bottom: 8px;">Applicant Information</h3>
                    <table width="100%" border="0" cellspacing="0" cellpadding="8" style="font-size: 14px;">
                      <tr style="background-color: #ffffff;">
                        <td style="font-weight: 600; color: #555; width: 140px; vertical-align: top;">Full Name:</td>
                        <td style="color: #333;">${safeFirst} ${safeLast}</td>
                      </tr>
                      <tr style="background-color: #f8f9fa;">
                        <td style="font-weight: 600; color: #555; width: 140px; vertical-align: top;">Email Address:</td>
                        <td style="color: #333;">${safeEmail}</td>
                      </tr>
                      <tr style="background-color: #ffffff;">
                        <td style="font-weight: 600; color: #555; width: 140px; vertical-align: top;">Phone Number:</td>
                        <td style="color: #333;">${safePhone}</td>
                      </tr>
                      <tr style="background-color: #f8f9fa;">
                        <td style="font-weight: 600; color: #555; width: 140px; vertical-align: top;">Position Applied:</td>
                        <td style="color: #333;">${safePosition}</td>
                      </tr>
                      <tr style="background-color: #ffffff;">
                        <td style="font-weight: 600; color: #555; width: 140px; vertical-align: top;">LinkedIn/Portfolio:</td>
                        <td style="color: #333;">${safeLinkedIn}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <!-- Call to Action -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 25px;">
                <tr>
                  <td style="text-align: center;">
                    <p style="font-size: 14px; color: #666; margin: 0 0 15px 0;">Please review the attached resume and consider this candidate for the next steps.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 20px; text-align: center; background-color: #f8f9fa; border-top: 1px solid #e9ecef;">
              <p style="font-size: 12px; color: #666; margin: 0 0 8px 0;">This email was sent from the Geekonomy Careers Portal</p>
              <p style="font-size: 12px; color: #666; margin: 0;">© 2026 Geekonomy. All rights reserved.</p>
            </td>
          </tr>
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
