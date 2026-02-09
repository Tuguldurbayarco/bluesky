"use client";
import React, { FormEvent, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Input from "./Input";
import Button from "./Button";
import TextArea from "./TextArea";
import { SEND_EMAIL_URL, FROM_EMAIL, BUSINESS_EMAIL, SITE_NAME } from "@/lib/mailConfig";

const InputForm = ({ ...props }: any) => {
  const searchParams = useSearchParams();
  const tourFromUrl = searchParams?.get("tour") ?? null;
  const [name, setName] = useState("");
  const [last, setLast] = useState("");
  const [country, setCountry] = useState("");
  const [tour, setTour] = useState(tourFromUrl || "");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTourPreSelected, setIsTourPreSelected] = useState(!!tourFromUrl);

  // Update tour when URL parameter changes
  useEffect(() => {
    if (tourFromUrl) {
      setTour(tourFromUrl);
      setIsTourPreSelected(true);
    }
  }, [tourFromUrl]);

  const sendForm = async (e: FormEvent) => {
    console.log("Data", name, last, country, tour, number, email, message);
    e.preventDefault();

    if (isLoading) return; // Prevent multiple submissions

    setIsLoading(true);

    if (!SEND_EMAIL_URL) {
      throw new Error("Mail service URL is not configured (NEXT_PUBLIC_MAIL_SERVICE_URL)");
    }

    try {
      // Send both emails in parallel to reduce submission time
      const [businessEmailResponse, customerEmailResponse] = await Promise.all([
        // Send booking email to business via mail service
        fetch(SEND_EMAIL_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: BUSINESS_EMAIL,
            subject: `New Tour Booking: ${tour}`,
            html: `
            <h2>New Tour Booking Request</h2>
            <p><strong>Name:</strong> ${name} ${last}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Tour:</strong> ${tour}</p>
            <p><strong>Number of People:</strong> ${number}</p>
            <p><strong>Message:</strong> ${
              message || "No additional message"
            }</p>
            <hr>
            <p><em>This email was sent from your website contact form.</em></p>
            <p><strong>Reply to:</strong> ${email}</p>
            <p><strong>Customer Email:</strong> ${email}</p>
          `,
          }),
        }),
        // Send confirmation email to customer
        fetch(SEND_EMAIL_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: email,
            subject: `Thank you for your tour booking request - ${SITE_NAME}`,
            html: `
            <h2>Thank you for your tour booking request!</h2>
            <p>Dear ${name} ${last},</p>
            <p>We have received your request for the <strong>${tour}</strong> tour.</p>
            <p>Our team will review your request and get back to you within 24 hours with more details and pricing information.</p>
            <p><strong>Your request details:</strong></p>
            <ul>
              <li>Tour: ${tour}</li>
              <li>Number of people: ${number}</li>
              <li>Country: ${country}</li>
            </ul>
            <p>If you have any urgent questions, please don't hesitate to contact us directly.</p>
            <p>Best regards,<br>The ${SITE_NAME} Team</p>
            <hr>
            <p><small>This is an automated email. We have received your request and will contact you very soon.</small></p>
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

      alert("Booking form submitted successfully!");

      // Reset form (but keep pre-selected tour if it was set from URL)
      setName("");
      setLast("");
      setCountry("");
      if (!isTourPreSelected) {
        setTour("");
      }
      setNumber("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong, please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 style={{color: "#fff", marginBottom: "0.5rem", fontWeight: 500, letterSpacing: "0.03em"}}>{props.formHeader}</h2>
      <form onSubmit={sendForm} className="contact_form">
        <p style={{ marginBottom: 0, color: "#fff" }}>
          {props.formTitle} <span style={{ color: "red" }}>*</span>
        </p>
        <div style={{ width: "100%", display: "flex", gap: "0.75rem" }}>
          <Input
            type="text"
            id="name"
            name="name"
            autoComplete="given-name"
            placeholder={props.formPlaceholder1}
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="text"
            id="last"
            name="last"
            autoComplete="family-name"
            placeholder={props.formPlaceholder2}
            required
            value={last}
            onChange={(e) => {
              setLast(e.target.value);
            }}
          />
        </div>
        <p style={{ marginBottom: 0, color: "#fff" }}>
          {props.mail} <span style={{ color: "red" }}>*</span>
        </p>
        <Input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder=""
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div>
          <p style={{ marginBottom: 0, color: "#fff" }}>{props.countryTitle}</p>
          <div>
            <select
              id="country"
              name="country"
              autoComplete="country"
              value={country}
              className="Input"
              onChange={(e) => setCountry(e.target.value)}
              style={{backgroundColor: "#fff", cursor: "pointer"}}
            >
              <option value="not selected">{props.choice}</option>
              <option value="South Korea">{props.country1} </option>
              <option value="China">{props.country2} </option>
              <option value="France">{props.country3} </option>
              <option value="Germany">{props.country4} </option>
              <option value="Hungary">{props.country5} </option>
              <option value="India">{props.country6} </option>
              <option value="Japan">{props.country7} </option>
              <option value="Russia">{props.country8} </option>
              <option value="Singapore">{props.country9} </option>
              <option value="Canada">{props.country10} </option>
              <option value="Taiwan">{props.country11} </option>
              <option value="USA">{props.country12} </option>
              <option value="Other">{props.country13} </option>
            </select>
          </div>
          <p style={{ marginBottom: 0, color: "#fff" }}>{props.tourTitle}</p>
          <div>
            <select
              id="tour"
              name="tour"
              autoComplete="off"
              value={tour}
              className="Input"
              onChange={(e) => setTour(e.target.value)}
              disabled={isTourPreSelected}
              style={{backgroundColor: "#fff", cursor: isTourPreSelected ? "not-allowed" : "pointer", opacity: isTourPreSelected ? 0.6 : 1}}
            >
              <option value="">{props.choice}</option>
              <optgroup label={props.toursCategory}>
                <option value="city">{props.tour1}</option>
                <option value="gobi">{props.tour2}</option>
                <option value="central">{props.tour3}</option>
                <option value="khangai">{props.tour4}</option>
                <option value="khuvsgul1">{props.tour5}</option>
                <option value="khuvsgul2">{props.tour6}</option>
                <option value="central-winter">{props.tour7}</option>
                <option value="gobi-winter">{props.tour8}</option>
                <option value="khuvsgul-winter">{props.tour9}</option>
              </optgroup>
              <optgroup label={props.eventsCategory}>
                <option value="camel">{props.event1}</option>
                <option value="eagle">{props.event2}</option>
                <option value="ice">{props.event3}</option>
                <option value="naadam">{props.event4}</option>
                <option value="tsagaansar">{props.event5}</option>
              </optgroup>
            </select>
          </div>
          <p style={{ marginBottom: 0, color: "#fff" }}>
            {props.numberTitle} <span style={{ color: "red" }}>*</span>
          </p>
          <Input
            type="number"
            id="number"
            name="number"
            autoComplete="off"
            placeholder=""
            required
            value={number}
            onChange={(e) => {
              const inputValue = parseInt(e.target.value);
              if (!isNaN(inputValue)) {
                if (inputValue > 1) {
                  setNumber(inputValue.toString());
                } else {
                  setNumber("1");
                }
              }
            }}
          />
        </div>
        <p style={{ marginBottom: 0, color: "#fff" }}>{props.messageTitle}</p>
        <TextArea
          id="message"
          name="message"
          autoComplete="off"
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        {/*<div>
          <label style={{ whiteSpace: 'nowrap' }}>
            <input
              type="checkbox"
              checked={agreeChecked}
              onChange={() => setAgreeChecked(!agreeChecked)}
              style={{ marginRight: '1%' }}
            />
            {props.agreeTitle}
          </label>
        </div>*/}
        <div style={{ marginTop: "0.5rem" }}>
          <Button type="Submit" disabled={isLoading} isLoading={isLoading}>
            {isLoading ? "Sending..." : props.buttonTitle}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
