import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

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
    const { name, organisation, email, contact, message, landingPage } = body;

    if (!name || !email || !contact || !message || !landingPage) {
      return NextResponse.json(
        { error: "Missing required landing form fields." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeContact = escapeHtml(String(contact));
    const safeOrganisation = escapeHtml(String(organisation || "Not provided"));
    const safeMessage = escapeHtml(String(message));
    const safeLandingPage = escapeHtml(String(landingPage));

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://thegeekonomy.com";
    const logoUrl = `${baseUrl}/Logo.png`;
    const pageUrl = `${baseUrl}/${String(landingPage).replace(/^\/+/, "")}`;

    const timeZone = process.env.BLOG_EMAIL_TIMEZONE || "Asia/Kolkata";
    const time12hr = new Date().toLocaleTimeString("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    const uniqueSubject = `New Landing Page Lead: ${safeLandingPage} [${time12hr}]`;

    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Landing Page Lead</title>
</head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;background-color:#f5f5f5;">
  <table role="presentation" style="width:100%;border-collapse:collapse;background-color:#f5f5f5;">
    <tr>
      <td style="padding:40px 20px;">
        <table role="presentation" style="width:100%;max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.1);">
          <tr>
            <td style="padding:30px 40px;background:linear-gradient(135deg,#1a1a1a 0%,#2d2d2d 100%);border-radius:8px 8px 0 0;">
              <table role="presentation" style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="text-align:left;vertical-align:middle;width:100px;">
                    <img src="${logoUrl}" alt="Geekonomy Logo" style="max-width:80px;height:auto;display:block;" />
                  </td>
                  <td style="vertical-align:middle;">
                    <h1 style="margin:0;color:#69AE44;font-size:24px;font-weight:700;">
                      New Landing Page Lead
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:30px 40px;background-color:#f9f9f9;border-bottom:2px solid #69AE44;">
              <h2 style="margin:0 0 10px 0;color:#1a1a1a;font-size:18px;font-weight:600;">
                Landing Page
              </h2>
              <p style="margin:0 0 8px 0;color:#69AE44;font-size:16px;font-weight:500;">
                ${safeLandingPage}
              </p>
              <a href="${pageUrl}" style="color:#69AE44;font-size:13px;text-decoration:none;">
                ${pageUrl}
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding:30px 40px;">
              <h2 style="margin:0 0 20px 0;color:#1a1a1a;font-size:20px;font-weight:600;border-bottom:2px solid #e0e0e0;padding-bottom:10px;">
                Contact Information
              </h2>
              <table role="presentation" style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e0e0e0;">
                    <strong style="color:#333;font-size:14px;display:inline-block;width:120px;">Name:</strong>
                    <span style="color:#666;font-size:14px;">${safeName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e0e0e0;">
                    <strong style="color:#333;font-size:14px;display:inline-block;width:120px;">Email:</strong>
                    <a href="mailto:${safeEmail}" style="color:#69AE44;font-size:14px;text-decoration:none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #e0e0e0;">
                    <strong style="color:#333;font-size:14px;display:inline-block;width:120px;">Phone:</strong>
                    <a href="tel:${safeContact}" style="color:#69AE44;font-size:14px;text-decoration:none;">${safeContact}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;">
                    <strong style="color:#333;font-size:14px;display:inline-block;width:120px;">Company:</strong>
                    <span style="color:#666;font-size:14px;">${safeOrganisation}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 40px 30px 40px;">
              <h2 style="margin:0 0 15px 0;color:#1a1a1a;font-size:20px;font-weight:600;border-bottom:2px solid #e0e0e0;padding-bottom:10px;">
                Message
              </h2>
              <div style="background-color:#f9f9f9;padding:20px;border-radius:6px;border-left:4px solid #69AE44;">
                <p style="margin:0;color:#333;font-size:14px;line-height:1.6;white-space:pre-wrap;">${safeMessage}</p>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 40px;background-color:#1a1a1a;border-radius:0 0 8px 8px;text-align:center;">
              <p style="margin:0;color:#999;font-size:12px;">
                This email was sent from a Geekonomy landing page form.
              </p>
              <p style="margin:10px 0 0 0;color:#69AE44;font-size:12px;">
                Please respond to <a href="mailto:${safeEmail}" style="color:#69AE44;text-decoration:none;">${safeEmail}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Geekonomy Landing <noreply@thegeekonomy.com>",
      to: ["connect@geekonomy.in"],
      subject: uniqueSubject,
      html: emailHtml,
      replyTo: String(email),
    });

    if (error) {
      console.error("Resend landing email error:", error);
      return NextResponse.json(
        { error: "Failed to send email", details: error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Landing email API error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
