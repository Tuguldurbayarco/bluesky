// Sends confirmation email to customer via mail service (itools.mn / cPanel)
import { SEND_EMAIL_URL, FROM_EMAIL, SITE_NAME } from "@/lib/mailConfig";

function emailBody(body: { name: string; last: string }) {
  return `
Dear ${body.name} ${body.last},<br>
Thank you for reaching out to ${SITE_NAME} in Mongolia! We appreciate you taking the time to contact us.<br>
Your message has been received.
<br><br>
This is an automated email. We will contact you very soon.
<br><br>
Warm regards,<br>
${SITE_NAME} team
`;
}

export default async function sendFormReceivedEmail(body: {
  name: string;
  last: string;
  email: string;
}) {
  if (!SEND_EMAIL_URL) {
    console.error("Mail service URL is not configured (NEXT_PUBLIC_MAIL_SERVICE_URL)");
    return { success: false, error: "Mail service not configured" };
  }

  try {
    const response = await fetch(SEND_EMAIL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: body.email,
        subject: `Thank you for contacting ${SITE_NAME}!`,
        html: emailBody(body),
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Email Sent via Mail Service:", result);
    return result;
  } catch (error) {
    console.error("Failed to send email via mail service:", error);
    return { success: false, error };
  }
}
