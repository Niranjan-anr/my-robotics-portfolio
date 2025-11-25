"use client";

import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = {
    email: "niranjanreddyar@yahoo.com",
    phone: "+91 93924 84249",
    linkedin: "https://linkedin.com/in/a-niranjan-reddy-4a837024a",
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      from_name: formData.get("from_name") as string,
      from_email: formData.get("from_email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        const error = await response.json();
        setStatus(error.error || "Failed to send. Please try again.");
      }
    } catch (err) {
      setStatus("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main style={{ padding: "8rem 2rem", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
      <FadeInSection direction="up">
        <h1 style={{ fontSize: "3rem", fontWeight: 700, marginBottom: "1.5rem" }}>
          Contact Me
        </h1>
      </FadeInSection>

      <FadeInSection direction="up" delay={0.3}>
        <p style={{ color: "#ccc", marginBottom: "2rem", lineHeight: 1.8 }}>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${contactInfo.email}`} style={{ color: "#fff", textDecoration: "underline" }}>
            {contactInfo.email}
          </a>
          <br />
          <strong>Phone:</strong> {contactInfo.phone} <br />
          <strong>LinkedIn:</strong>{" "}
          <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "underline" }}>
            Profile
          </a>
        </p>
      </FadeInSection>

      <FadeInSection direction="up" delay={0.6}>
        <form onSubmit={sendEmail} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "500px", margin: "0 auto" }}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            disabled={isLoading}
            style={inputStyle}
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            disabled={isLoading}
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={6}
            disabled={isLoading}
            style={{ ...inputStyle, resize: "vertical" } as React.CSSProperties}
          />
          <button type="submit" disabled={isLoading} style={buttonStyle}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p style={{
              color: status.includes("successfully") ? "#4ade80" : "#f87171",
              marginTop: "1rem",
              fontWeight: 500
            }}>
              {status}
            </p>
          )}
        </form>
      </FadeInSection>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "0.75rem 1rem",
  borderRadius: "0.5rem",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "#111",
  color: "#fff",
  fontSize: "1rem",
};

const buttonStyle: React.CSSProperties = {
  padding: "0.9rem 2rem",
  borderRadius: "9999px",
  background: "#fff",
  color: "#000",
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
  fontSize: "1.1rem",
  marginTop: "0.5rem",
  opacity: 1,
  transition: "all 0.2s",
};