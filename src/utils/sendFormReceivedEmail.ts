// Updated to use mail service instead of nodemailer

function emailBody(body: any) {
  return `
Dear ${body.name} ${body.last},<br>
Thank you for reaching out to Saibaitour in Mongolia! We appreciate you taking the time to contact us.<br>
Your message has been received, and we will get back to you as soon as possible.
<br><br>
Warm regards,
Saibaitour team
<br><br>
info@saibaitour.mn
<br>
www.saibaitour.mn
<br><br>
Please refrain from replying directly to this email, as it is sent from a no-reply address.
`;
}

export default async function sendFormReceivedEmail(body: any) {
  try {
    const response = await fetch(
      "https://saibaitour.mn/mail-service/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "no-reply@saibaitour.mn",
          to: body.email,
          subject: "Thank you for contacting Saibaitour!",
          html: emailBody(body),
        }),
      }
    );

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
