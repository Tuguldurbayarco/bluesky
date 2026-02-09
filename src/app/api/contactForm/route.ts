import { NextRequest, NextResponse } from "next/server";
import sendFormReceivedEmail from "@/utils/sendFormReceivedEmail";
import { SEND_EMAIL_URL, FROM_EMAIL, BUSINESS_EMAIL, SITE_NAME } from "@/lib/mailConfig";

function emailBody(body: any) {
  return `
First name: ${body.name}<br>
Last name: ${body.last}<br>
Email: ${body.email}<br>
Number of participants/Оролцогчдийн тоо: ${body.number}<br>
Мессеж/Message: ${body.message}<br>
`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!SEND_EMAIL_URL) {
      return NextResponse.json(
        { success: false, error: "Mail service not configured" },
        { status: 503 }
      );
    }

    // Send contact email to business via mail service
    const businessEmailResponse = await fetch(SEND_EMAIL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: BUSINESS_EMAIL,
        subject: `${SITE_NAME} – contact form submission`,
        html: emailBody(body),
      }),
    });

    if (!businessEmailResponse.ok) {
      console.error(
        "Failed to send business email:",
        businessEmailResponse.status
      );
    } else {
      const result = await businessEmailResponse.json();
      console.log("Business Email Sent via Mail Service:", result);
    }

    // Send confirmation email to customer
    await sendFormReceivedEmail(body);

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
