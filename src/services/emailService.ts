// Updated email service to use standalone mail service
// Frontend constructs email content and sends to mail service
// Emails are sent FROM no-reply@saibaitour.mn TO your business email
// User's email is included in the HTML body for reply purposes

// Configuration - PRODUCTION mail service URL
const MAIL_SERVICE_URL = "https://saibaitour.mn/mail-service";

interface EmailData {
  to: string;
  subject: string;
  text?: string;
  html?: string;
  from?: string;
}

interface BookingFormData {
  name: string;
  last: string;
  email: string;
  country: string;
  tour: string;
  number: string;
  message: string;
}

interface ContactFormData {
  name: string;
  last: string;
  email: string;
  number: string;
  message: string;
}

// Generic email sending function
export const sendEmail = async (emailData: EmailData) => {
  try {
    const response = await fetch(`${MAIL_SERVICE_URL}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Email sending failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

// Send booking email - FROM no-reply address TO your business email
export const sendBookingEmail = async (formData: BookingFormData) => {
  try {
    // Send to business email FROM no-reply address
    const businessEmail = await sendEmail({
      from: "no-reply@saibaitour.mn", // FROM no-reply address
      to: "info@saibaitour.mn", // TO your business email
      subject: `New Tour Booking: ${formData.tour}`,
      html: `
        <h2>New Tour Booking Request</h2>
        <p><strong>Name:</strong> ${formData.name} ${formData.last}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Country:</strong> ${formData.country}</p>
        <p><strong>Tour:</strong> ${formData.tour}</p>
        <p><strong>Number of People:</strong> ${formData.number}</p>
        <p><strong>Message:</strong> ${
          formData.message || "No additional message"
        }</p>
        <hr>
        <p><em>This email was sent from your website contact form.</em></p>
        <p><strong>Reply to:</strong> ${formData.email}</p>
        <p><strong>Customer Email:</strong> ${formData.email}</p>
      `,
    });

    // Send confirmation to customer FROM no-reply address
    const customerEmail = await sendEmail({
      from: "no-reply@saibaitour.mn", // FROM no-reply address
      to: formData.email, // TO user's email
      subject: "Thank you for your tour booking request - Saibaitour",
      html: `
        <h2>Thank you for your tour booking request!</h2>
        <p>Dear ${formData.name} ${formData.last},</p>
        <p>We have received your request for the <strong>${formData.tour}</strong> tour.</p>
        <p>Our team will review your request and get back to you within 24 hours with more details and pricing information.</p>
        <p><strong>Your request details:</strong></p>
        <ul>
          <li>Tour: ${formData.tour}</li>
          <li>Number of people: ${formData.number}</li>
          <li>Country: ${formData.country}</li>
        </ul>
        <p>If you have any urgent questions, please don't hesitate to contact us directly.</p>
        <p>Best regards,<br>The Saibaitour Team</p>
        <hr>
        <p><small>This is an automated confirmation email. Please do not reply to this email.</small></p>
      `,
    });

    return {
      success: true,
      businessEmail,
      customerEmail,
    };
  } catch (error) {
    console.error("Booking email failed:", error);
    return { success: false, error };
  }
};

// Send contact email - FROM no-reply address TO your business email
export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    // Send to business email FROM no-reply address
    const businessEmail = await sendEmail({
      from: "no-reply@saibaitour.mn", // FROM no-reply address
      to: "info@saibaitour.mn", // TO your business email
      subject: `New Contact Form Submission from ${formData.name} ${formData.last}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name} ${formData.last}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone Number:</strong> ${
          formData.number || "Not provided"
        }</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message}</p>
        <hr>
        <p><em>This email was sent from your website contact form.</em></p>
        <p><strong>Reply to:</strong> ${formData.email}</p>
        <p><strong>Customer Email:</strong> ${formData.email}</p>
      `,
    });

    // Send confirmation to customer FROM no-reply address
    const customerEmail = await sendEmail({
      from: "no-reply@saibaitour.mn", // FROM no-reply address
      to: formData.email, // TO user's email
      subject: "Thank you for contacting Saibaitour",
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${formData.name} ${formData.last},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p><strong>Your message:</strong></p>
        <p>${formData.message}</p>
        <p>If you have any urgent questions, please don't hesitate to contact us directly.</p>
        <p>Best regards,<br>The Saibaitour Team</p>
        <hr>
        <p><small>This is an automated confirmation email. Please do not reply to this email.</small></p>
      `,
    });

    return {
      success: true,
      businessEmail,
      customerEmail,
    };
  } catch (error) {
    console.error("Contact email failed:", error);
    return { success: false, error };
  }
};

// Test connection to mail service
export const testMailService = async () => {
  try {
    const response = await fetch(`${MAIL_SERVICE_URL}/health`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Mail service connection failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
