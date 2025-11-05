import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Construct email content
    const emailContent = `
New Contact Form Submission from Orwexa Website

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Phone: ${phone || "Not provided"}
Subject: ${subject}

Message:
${message}

---
This email was sent from the Orwexa contact form.
    `.trim();

    // SendGrid email message
    const msg = {
      to: "support@orwexa.com",
      from: "support@orwexa.com", // Must be a verified sender in SendGrid
      replyTo: email, // Allow easy reply to the customer
      subject: `Contact Form: ${subject} - ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #111827; margin-bottom: 20px; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>

            <div style="margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong style="color: #374151;">Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
              <p style="margin: 10px 0;"><strong style="color: #374151;">Company:</strong> ${company || "Not provided"}</p>
              <p style="margin: 10px 0;"><strong style="color: #374151;">Phone:</strong> ${phone || "Not provided"}</p>
              <p style="margin: 10px 0;"><strong style="color: #374151;">Subject:</strong> ${subject}</p>
            </div>

            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; margin-top: 20px;">
              <p style="margin: 0 0 10px 0;"><strong style="color: #374151;">Message:</strong></p>
              <p style="margin: 0; white-space: pre-wrap; color: #1f2937;">${message}</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
              <p style="margin: 0;">This email was sent from the Orwexa contact form.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send email
    await sgMail.send(msg);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("SendGrid Error:", error);

    if (error.response) {
      console.error("SendGrid Response Error:", error.response.body);
    }

    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error.message
      },
      { status: 500 }
    );
  }
}
