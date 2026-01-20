"use client";
import React, { FormEvent, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Input from "./Input";
import Button from "./Button";
import TextArea from "./TextArea";

const InputForm = ({ ...props }: any) => {
  const searchParams = useSearchParams();
  const tourFromUrl = searchParams.get("tour");
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

    try {
      // Send both emails in parallel to reduce submission time
      const [businessEmailResponse, customerEmailResponse] = await Promise.all([
        // Send booking email to business via mail service
        fetch("https://saibaitour.mn/mail-service/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "no-reply@saibaitour.mn", // FROM no-reply address
            to: "info@saibaitour.mn", // TO business email
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
        fetch("https://saibaitour.mn/mail-service/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "no-reply@saibaitour.mn", // FROM no-reply address
            to: email, // TO user's email
            subject: "Thank you for your tour booking request - Saibaitour",
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
      <h2 className="contacts_form_header">{props.formHeader}</h2>
      <form onSubmit={sendForm} className="contact_form">
        <p style={{ marginBottom: 0 }}>
          {props.formTitle} <a style={{ color: "red" }}>*</a>
        </p>
        <div style={{ width: "100%", display: "flex", gap: "5%" }}>
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
        <p style={{ marginBottom: 0 }}>
          {props.mail} <a style={{ color: "red" }}>*</a>
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
          <p style={{ marginBottom: 0 }}>{props.countryTitle}</p>
          <div>
            <select
              id="country"
              name="country"
              autoComplete="country"
              value={country}
              className="Input"
              onChange={(e) => setCountry(e.target.value)}
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
          <p style={{ marginBottom: 0 }}>{props.tourTitle}</p>
          <div>
            <select
              id="tour"
              name="tour"
              autoComplete="off"
              value={tour}
              className="Input"
              onChange={(e) => setTour(e.target.value)}
              disabled={isTourPreSelected}
            >
              <option value="not selected">{props.choice}</option>
              <option
                value="mask"
                disabled
                style={{
                  color: "rgba(0, 0, 0, 0.5)",
                  fontWeight: "bolder",
                  fontStyle: "italic",
                }}
              >
                {props.disabled_mask0}{" "}
              </option>
              <option value="south-north">{props.groupTour1} </option>
              <option value="eight-lakes-trekking">{props.groupTour2} </option>
              <option value="eight-lakes-equestrian">{props.groupTour3} </option>
              <option value="altai-expedition">{props.groupTour4} </option>
              <option
                value="mask"
                disabled
                style={{
                  color: "rgba(0, 0, 0, 0.5)",
                  fontWeight: "bolder",
                  fontStyle: "italic",
                }}
              >
                {props.disabled_mask1}{" "}
              </option>
              <option value="city">{props.choice1} </option>
              <option value="gobi">{props.choice2} </option>
              <option value="central">{props.choice3} </option>
              <option value="khuvsgul">{props.choice4} </option>
              <option value="gobikhangai">{props.choice5} </option>
              <option
                value="mask"
                disabled
                style={{
                  color: "rgba(0, 0, 0, 0.5)",
                  fontWeight: "bolder",
                  fontStyle: "italic",
                }}
              >
                {props.disabled_mask2}{" "}
              </option>
              <option value="horse">{props.choice6} </option>
              <option value="altai">{props.choice7} </option>
              <option value="tsaatan">{props.choice8} </option>
            </select>
          </div>
          <p style={{ marginBottom: 0 }}>
            {props.numberTitle} <a style={{ color: "red" }}>*</a>
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
        <p style={{ marginBottom: 0 }}>{props.messageTitle}</p>
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
        <div style={{ marginTop: "3%" }}>
          <Button type="Submit" disabled={isLoading} isLoading={isLoading}>
            {isLoading ? "Sending..." : props.buttonTitle}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
