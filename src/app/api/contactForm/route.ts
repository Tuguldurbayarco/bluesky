import { NextRequest, NextResponse } from "next/server";
import sendFormReceivedEmail from "@/utils/sendFormReceivedEmail";

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

    // Send contact email to business via mail service
    const businessEmailResponse = await fetch(
      "https://saibaitour.mn/mail-service/api/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "no-reply@saibaitour.mn", // FROM no-reply address
          to: "info@saibaitour.mn", // TO business email
          subject: `Saibaitour Send Message ашиглан хэрэглэгч холбогдсон байна.`,
          html: emailBody(body),
        }),
      }
    );

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
