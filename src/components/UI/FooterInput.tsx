"use client";
import React, { useState } from "react";
import "../UI/button.css";
import footerStyles from "../footer.module.css";

export default function FooterInput({
  title,
  mail,
  messages,
  button,
  pl1,
  pl2,
  ...props
}: any) {
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMail = async (e: any) => {
    e.preventDefault();

    if (isLoading) return; // Prevent multiple submissions

    setIsLoading(true);

    try {
      // Send both emails in parallel to reduce submission time
      const [businessEmailResponse, customerEmailResponse] = await Promise.all([
        // Send contact email to business via mail service
        fetch("https://saibaitour.mn/mail-service/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "no-reply@saibaitour.mn", // FROM no-reply address
            to: "info@saibaitour.mn", // TO business email
            subject: `New Contact Form Submission from ${name} ${last}`,
            html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name} ${last}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <hr>
            <p><em>This email was sent from your website contact form.</em></p>
            <p><strong>Reply to:</strong> ${email}</p>
            <p><strong>Customer Email:</strong> ${email}</p>
          `,
          }),
        }),
        // Send confirmation email to customer
        fetch("https://saibaitour.mn/mail-service/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "no-reply@saibaitour.mn", // FROM no-reply address
            to: email, // TO user's email
            subject: "Thank you for contacting Saibaitour",
            html: `
            <h2>Thank you for contacting us!</h2>
            <p>Dear ${name} ${last},</p>
            <p>We have received your message and will get back to you within 24 hours.</p>
            <p><strong>Your message:</strong></p>
            <p>${message}</p>
            <p>If you have any urgent questions, please don't hesitate to contact us directly.</p>
            <p>Best regards,<br>The Saibaitour Team</p>
            <hr>
            <p><small>This is an automated confirmation email. Please do not reply to this email.</small></p>
          `,
          }),
        }),
      ]);

      if (!businessEmailResponse.ok) {
        throw new Error("Failed to send business email");
      }

      if (!customerEmailResponse.ok) {
        throw new Error("Failed to send confirmation email");
      }

      alert("Message sent successfully!");

      // Reset form
      setName("");
      setLast("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong, please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={sendMail}>
      <div>
        <label htmlFor="name">
          {title}
        </label>
        <div className={footerStyles.input_row}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="given-name"
              placeholder={pl1}
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              id="last"
              name="last"
              autoComplete="family-name"
              placeholder={pl2}
              required
              value={last}
              onChange={(e) => {
                setLast(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="email">
          {mail}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="message">
          {messages}
        </label>
        <textarea
          rows={5}
          id="message"
          name="message"
          autoComplete="off"
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={isLoading}
          style={{
            marginTop: "0.5rem",
            opacity: isLoading ? 0.6 : 1,
            cursor: isLoading ? "not-allowed" : "pointer",
          }}
          className="myButton"
        >
          {isLoading ? "Sending..." : button}
        </button>
      </div>
    </form>
  );
}
