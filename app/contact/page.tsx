"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Thank you. We will get back to you soon.");
    event.currentTarget.reset();
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

        .contact-serif {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
        }
        .contact-sans {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
        }
        .contact-eyebrow {
          font-family: "Jost", sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #b9862f;
        }

        .contact-input {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
          width: 100%;
          padding: 12px 16px;
          border: 1px solid rgba(42, 33, 28, 0.1);
          border-radius: 2px;
          font-size: 15px;
          font-weight: 300;
          color: #241a15;
          background: #fffdf8;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .contact-input:focus {
          outline: none;
          border-color: #b9862f;
          box-shadow: 0 0 0 3px rgba(185, 134, 47, 0.08);
          background: #ffffff;
        }

        .contact-input::placeholder {
          color: #b5aaa0;
          font-weight: 300;
        }

        .contact-textarea {
          min-height: 130px;
          resize: vertical;
        }

        .contact-label {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6b5f54;
          display: block;
          margin-bottom: 6px;
        }

        .contact-btn {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: #4d0e17;
          color: #f6f0e4;
          border: 1px solid #4d0e17;
          padding: 15px 34px;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .contact-btn:hover {
          background: #6d1220;
          border-color: #6d1220;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(67, 11, 18, 0.2);
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0;
          font-size: 14.5px;
          color: #241a15;
          font-weight: 300;
          padding: 10px 0;
          border-bottom: 1px solid rgba(42, 33, 28, 0.04);
          transition: all 0.3s ease;
        }

        .contact-info-item:last-of-type {
          border-bottom: none;
        }

        .contact-info-item:hover {
          color: #4d0e17;
          padding-left: 4px;
        }

        .contact-info-label {
          font-weight: 500;
          color: #6b5f54;
          min-width: 70px;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .contact-info-value {
          color: #241a15;
        }

        .contact-info-item:hover .contact-info-value {
          color: #4d0e17;
        }

        .contact-status {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
          font-size: 14px;
          color: #4d0e17;
          font-weight: 300;
          margin: 0;
          padding: 14px 18px;
          background: rgba(107, 20, 32, 0.05);
          border-radius: 2px;
          border-left: 3px solid #b9862f;
        }

        .contact-image-card {
          position: relative;
          overflow: hidden;
          border-radius: 2px;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .contact-image-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(36, 26, 21, 0.12);
        }

        .contact-image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 75%;
          overflow: hidden;
          background: #ece0c8;
        }

        .contact-image-wrapper img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .contact-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, 
            rgba(36, 26, 21, 0.05) 0%,
            rgba(36, 26, 21, 0.3) 80%,
            rgba(36, 26, 21, 0.5) 100%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          display: flex;
          align-items: flex-end;
          padding: 24px;
          z-index: 2;
        }

        .contact-image-card:hover .contact-image-overlay {
          opacity: 1;
        }

        .contact-image-label {
          font-family: "Jost", sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #ddb673;
          background: rgba(36, 26, 21, 0.5);
          backdrop-filter: blur(8px);
          padding: 6px 16px;
          border: 1px solid rgba(185, 134, 47, 0.15);
          border-radius: 2px;
          transform: translateY(10px);
          transition: transform 0.5s ease;
        }

        .contact-image-card:hover .contact-image-label {
          transform: translateY(0);
        }

        /* Page Container - Increased padding-top */
        .contact-page {
          background: linear-gradient(180deg, #faf6ee 0%, #f6f0e4 40%, #ece2cd 100%);
          padding: 100px 24px 80px;
          min-height: calc(100vh - 200px);
          position: relative;
          overflow: hidden;
        }

        .contact-page .container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          width: 100%;
          padding: 0;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .contact-page {
            padding: 90px 20px 64px;
          }
          .contact-grid {
            gap: 32px !important;
          }
        }

        @media (max-width: 860px) {
          .contact-page {
            padding: 80px 16px 56px;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .contact-info-section {
            order: 2;
          }
          .contact-form-section {
            order: 1;
          }
          .contact-image-wrapper {
            padding-top: 60% !important;
          }
          .contact-serif {
            font-size: clamp(32px, 5vw, 42px) !important;
          }
        }

        @media (max-width: 768px) {
          .contact-page {
            padding-top: 72px;
          }
        }

        @media (max-width: 600px) {
          .contact-page {
            padding: 64px 12px 48px;
          }
          .contact-form-section form {
            padding: 24px 20px !important;
          }
          .contact-info-section .info-card {
            padding: 20px !important;
          }
          .contact-image-wrapper {
            padding-top: 75% !important;
          }
          .contact-serif {
            font-size: clamp(28px, 6vw, 36px) !important;
          }
          .contact-eyebrow {
            font-size: 10px !important;
          }
          .contact-info-item {
            font-size: 13px;
            padding: 8px 0;
          }
          .contact-info-label {
            min-width: 60px;
            font-size: 9px;
          }
        }

        @media (max-width: 480px) {
          .contact-page {
            padding: 56px 10px 40px;
          }
          .contact-image-wrapper {
            padding-top: 80% !important;
          }
          .contact-form-section form {
            padding: 20px 16px !important;
          }
          .contact-info-section .info-card {
            padding: 16px !important;
          }
          .contact-serif {
            font-size: clamp(24px, 5vw, 30px) !important;
          }
          .contact-input {
            font-size: 14px;
            padding: 10px 14px;
          }
          .contact-btn {
            font-size: 11px;
            padding: 13px 28px;
          }
          .contact-status {
            font-size: 13px;
            padding: 12px 14px;
          }
        }

        @media (max-width: 380px) {
          .contact-page {
            padding: 48px 8px 32px;
          }
          .contact-serif {
            font-size: 22px !important;
          }
          .contact-info-item {
            font-size: 12px;
            flex-wrap: wrap;
            gap: 6px;
          }
          .contact-info-label {
            min-width: 50px;
            font-size: 8px;
          }
          .contact-form-section form {
            padding: 16px 12px !important;
          }
        }
      `}</style>

      <section className="contact-page">
        {/* Decorative background element */}
        <svg
          aria-hidden="true"
          viewBox="0 0 400 400"
          style={{
            position: "absolute",
            top: "-80px",
            left: "-80px",
            width: 350,
            height: 350,
            opacity: 0.05,
            pointerEvents: "none",
          }}
        >
          <g stroke="#b9862f" strokeWidth="1">
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i / 24) * Math.PI * 2;
              const inner = 70;
              const outer = i % 2 === 0 ? 190 : 150;
              return (
                <line
                  key={i}
                  x1={200 + Math.cos(angle) * inner}
                  y1={200 + Math.sin(angle) * inner}
                  x2={200 + Math.cos(angle) * outer}
                  y2={200 + Math.sin(angle) * outer}
                  opacity={i % 2 === 0 ? 0.55 : 0.3}
                />
              );
            })}
            <circle cx="200" cy="200" r="68" fill="none" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="100" fill="none" strokeWidth="0.5" opacity="0.3" />
          </g>
        </svg>

        <div className="container">
          {/* Header Section */}
          <div 
            style={{
              display: "grid",
              gap: 12,
              marginBottom: 48,
              paddingBottom: 32,
              borderBottom: "1px solid rgba(42, 33, 28, 0.06)",
              position: "relative",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: -1,
                left: 0,
                width: 80,
                height: 2,
                background: "linear-gradient(90deg, #b9862f, #ddb673)",
                opacity: 0.5,
              }}
            />


            <h1 
              className="contact-serif"
              style={{
                margin: 0,
                fontSize: "clamp(38px, 5.5vw, 56px)",
                color: "#241a15",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Contact Us
            </h1>
          </div>

          {/* Content Grid */}
          <div 
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "start",
              width: "100%",
            }}
          >
            {/* Left Column - Info */}
            <div className="contact-info-section" style={{ display: "grid", gap: 24 }}>
              {/* Image Card */}
              <div className="contact-image-card">
                <div className="contact-image-wrapper">
                  <Image
                    src="https://res.cloudinary.com/dlomq2b7z/image/upload/v1783100252/2_xotxvk.jpg"
                    alt="Rajasthani handicrafts showcase - contact us"
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 860px) 80vw, 40vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div className="contact-image-overlay">
                    <span className="contact-image-label">✦ Artisan Craft</span>
                  </div>
                </div>
              </div>

              <p 
                className="contact-sans"
                style={{
                  margin: 0,
                  lineHeight: 1.8,
                  fontSize: 16,
                  color: "#6b5f54",
                  fontWeight: 300,
                }}
              >
                Have a product question, bulk enquiry, or sourcing request? 
                Send a note and the team will respond within 24 hours.
              </p>

              <div 
                className="info-card"
                style={{ 
                  background: "rgba(255, 253, 248, 0.5)",
                  padding: "28px 32px",
                  border: "1px solid rgba(42, 33, 28, 0.06)",
                  borderRadius: 2,
                }}
              >
                <div className="contact-info-item">
                  <span className="contact-info-label">Phone</span>
                  <span className="contact-info-value">+91 98765 43210</span>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-value">rajasthanemporium@gmail.com</span>
                </div>
                <div className="contact-info-item">
                  <span className="contact-info-label">Address</span>
                  <span className="contact-info-value">Bengaluru, Karnataka</span>
                </div>
              </div>

              {/* Decorative element */}
              <div
                aria-hidden="true"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  paddingTop: 4,
                }}
              >
                <div style={{ 
                  flex: 1, 
                  height: 1, 
                  background: "linear-gradient(90deg, transparent, rgba(185, 134, 47, 0.15))" 
                }} />
                <span style={{ color: "#b9862f", fontSize: 14, opacity: 0.5 }}>◆</span>
                <div style={{ 
                  flex: 1, 
                  height: 1, 
                  background: "linear-gradient(270deg, transparent, rgba(185, 134, 47, 0.15))" 
                }} />
              </div>

              <div style={{ 
                fontSize: 13, 
                color: "#8a7a6b", 
                fontWeight: 300, 
                textAlign: "center",
                fontFamily: "'Jost', sans-serif",
                letterSpacing: "0.04em",
              }}>
                We typically respond within 24 hours
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="contact-form-section">
              <form 
                onSubmit={handleSubmit} 
                style={{
                  background: "#fffdf8",
                  padding: "36px 40px",
                  border: "1px solid rgba(42, 33, 28, 0.06)",
                  borderRadius: 2,
                  display: "grid",
                  gap: 20,
                }}
              >
                <div>
                  <label className="contact-label">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    className="contact-input"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="contact-label">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    className="contact-input"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="contact-label">Message</label>
                  <textarea 
                    required 
                    rows={5} 
                    className="contact-input contact-textarea"
                    placeholder="Tell us about your enquiry..."
                  />
                </div>

                <button 
                  className="contact-btn" 
                  type="submit"
                >
                  Send Message
                </button>

                {status && (
                  <p className="contact-status">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}