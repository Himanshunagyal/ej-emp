"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { categories, sampleProducts } from "@/lib/sample-data";

/* =========================================================================
   HERO SECTION - Premium Redesign
   ========================================================================= */
function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const heroImageUrl =
    "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783247408/19_b81rhf.png";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

        .hero-premium {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          background: linear-gradient(180deg, #faf6ee 0%, #f6f0e4 40%, #ece2cd 100%);
          padding-top: 60px;
        }

        /* Full-cover background image */
        .hero-premium .hero-bg-image {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 75%;
          z-index: 0;
          pointer-events: none;
        }

        .hero-premium .hero-bg-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center bottom;
        }

        /* Gradient transition between text and image */
        .hero-premium .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,
            rgba(250, 246, 238, 0.95) 0%,
            rgba(250, 246, 238, 0.6) 30%,
            rgba(250, 246, 238, 0.1) 60%,
            rgba(250, 246, 238, 0) 80%
          );
          z-index: 0;
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          width: 100%;
        }

        .hero-text-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          max-width: 800px;
          padding-top: 20px;
        }

        .hero-subtitle {
          font-family: "Jost", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #b9862f;
        }

        .hero-title {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: clamp(44px, 8vw, 88px);
          font-weight: 600;
          line-height: 1.02;
          color: #241a15;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .hero-title .highlight {
          color: #4d0e17;
          font-style: italic;
          position: relative;
        }

        .hero-title .highlight::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #b9862f, transparent);
          opacity: 0.3;
        }

        .hero-description {
          font-family: "Jost", sans-serif;
          font-size: clamp(15px, 1.1vw, 18px);
          font-weight: 300;
          line-height: 1.85;
          color: #6b5f54;
          margin: 0;
          max-width: 480px;
          letter-spacing: 0.01em;
        }

        .hero-actions {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 4px;
          align-items: center;
          justify-content: center;
        }

        .hero-btn-primary {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 16px 38px;
          border-radius: 1px;
          transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: inline-block;
          position: relative;
          border: 1px solid #4d0e17;
          background: #4d0e17;
          color: #faf6ee;
          cursor: pointer;
        }

        .hero-btn-primary:hover {
          background: #6d1220;
          border-color: #6d1220;
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(67, 11, 18, 0.25);
        }

        .hero-btn-secondary {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 16px 4px;
          color: #4d0e17;
          border-bottom: 1.5px solid #b9862f;
          transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          display: inline-block;
        }

        .hero-btn-secondary:hover {
          color: #6d1220;
          border-bottom-color: #ddb673;
          transform: translateY(-2px);
        }

        .hero-btn-secondary::after {
          content: "→";
          margin-left: 8px;
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .hero-btn-secondary:hover::after {
          transform: translateX(6px);
        }

        /* Decorative floating elements */
        .hero-float-element {
          position: absolute;
          animation: floatElement 8s ease-in-out infinite;
          pointer-events: none;
        }

        .hero-float-element:nth-child(1) {
          top: 15%;
          right: 10%;
          animation-delay: 0s;
          font-size: 24px;
          color: #b9862f;
          opacity: 0.1;
        }

        .hero-float-element:nth-child(2) {
          bottom: 25%;
          left: 6%;
          animation-delay: 2.3s;
          font-size: 18px;
          color: #4d0e17;
          opacity: 0.06;
        }

        @keyframes floatElement {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        .hero-premium .ornamental-border {
          display: none;
        }

        /* Remove old image frame */
        .hero-image-area,
        .hero-image-frame,
        .hero-image-frame .image-wrapper,
        .hero-image-frame .image-overlay,
        .hero-status-badge {
          display: none;
        }

        @media (max-width: 900px) {
          .hero-premium {
            padding-top: 40px;
            min-height: 90vh;
          }
          .hero-premium .hero-bg-image {
            height: 65%;
          }
          .hero-title {
            font-size: clamp(36px, 7vw, 52px);
          }
          .hero-float-element {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .hero-premium {
            padding-top: 30px;
            min-height: 80vh;
          }
          .hero-premium .hero-bg-image {
            height: 55%;
          }
          .hero-title {
            font-size: clamp(30px, 8vw, 40px);
          }
          .hero-description {
            font-size: 14px;
          }
          .hero-btn-primary {
            padding: 14px 28px;
            font-size: 11px;
            width: 100%;
            text-align: center;
          }
          .hero-btn-secondary {
            font-size: 11px;
            width: 100%;
            text-align: center;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
        }
      `}</style>

      <section className="hero-premium">
        {/* Full-cover background image at the bottom */}
        <div className="hero-bg-image">
          <Image
            src={heroImageUrl}
            alt="Rajasthani handicrafts"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center bottom",
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1.2s ease-in-out",
            }}
            priority
          />
        </div>
        <div className="hero-bg-overlay" />

        {/* Decorative sunburst */}
        <svg
          aria-hidden="true"
          viewBox="0 0 400 400"
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: 200,
            height: 200,
            opacity: 0.06,
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <g stroke="#b9862f" strokeWidth="0.6">
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
                  opacity={i % 2 === 0 ? 0.4 : 0.2}
                />
              );
            })}
            <circle cx="200" cy="200" r="68" fill="none" strokeWidth="0.8" />
          </g>
        </svg>

        {/* Floating decorative elements */}
        <div className="hero-float-element" style={{ top: '18%', right: '8%', fontSize: 20, color: '#b9862f', opacity: 0.08 }}>
          ◆
        </div>
        <div className="hero-float-element" style={{ bottom: '30%', left: '5%', fontSize: 16, color: '#4d0e17', opacity: 0.05 }}>
          ✦
        </div>

        <div className="hero-content-wrapper">
          <div className="hero-text-content">
            <span className="hero-subtitle"></span>

            <h1 className="hero-title">
              Rajasthan <span className="highlight">Emporium</span>
            </h1>

            <p className="hero-description">
              Textiles, pottery, jewelry, paintings, and decor — each piece carried out by hand.
            </p>

            <div className="hero-actions">
              <Link href="/collections" className="hero-btn-primary">
                View Collections
              </Link>
              <Link href="/contact" className="hero-btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: "5%",
            right: "5%",
            height: 1,
            background: "linear-gradient(90deg, transparent 0%, #b9862f 20%, #b9862f 80%, transparent 100%)",
            opacity: 0.1,
          }}
        />
      </section>
    </>
  );
}
/* =========================================================================
   CONTINUOUS MOVING LINE DIVIDER
   ========================================================================= */
function MovingLineDivider() {
  return (
    <>
      <style>{`
        .moving-line-wrapper {
          position: relative;
          height: 2px;
          background: var(--sand);
          overflow: hidden;
        }
        
        .moving-line-track {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 200%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--marigold) 15%,
            var(--marigold-soft) 30%,
            var(--marigold) 45%,
            transparent 60%,
            transparent 100%
          );
          animation: moveLine 4s linear infinite;
        }

        .moving-line-track::after {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          height: 100%;
          width: 50%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--marigold) 15%,
            var(--marigold-soft) 30%,
            var(--marigold) 45%,
            transparent 60%,
            transparent 100%
          );
        }

        @keyframes moveLine {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .moving-line-track {
            animation: none;
          }
        }
      `}</style>
      <div className="moving-line-wrapper">
        <div className="moving-line-track" />
      </div>
    </>
  );
}

/* =========================================================================
   FEATURED STORY SECTION
   ========================================================================= */
function FeaturedStorySection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <>
      <style>{`
        .featured-story-section {
          position: relative;
          overflow: hidden;
        }
        .featured-story-image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 45%;
          overflow: hidden;
          border-radius: 2px;
        }
        .featured-story-image-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, 
            rgba(36, 26, 21, 0.1) 0%,
            rgba(36, 26, 21, 0.4) 60%,
            rgba(36, 26, 21, 0.7) 100%
          );
          z-index: 1;
        }
        .featured-story-content {
          position: absolute;
          bottom: 10%;
          left: 8%;
          z-index: 2;
          max-width: 560px;
        }
        .featured-story-tag {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(255, 253, 248, 0.15);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 253, 248, 0.2);
          border-radius: 2px;
          font-family: "Jost", sans-serif;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--marigold-soft);
          margin-bottom: 16px;
        }
        .featured-story-title {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: clamp(28px, 4vw, 48px);
          font-weight: 550;
          color: var(--paper);
          margin: 0 0 12px 0;
          line-height: 1.1;
        }
        .featured-story-description {
          font-family: "Jost", sans-serif;
          font-size: clamp(14px, 1vw, 17px);
          font-weight: 300;
          color: rgba(255, 253, 248, 0.85);
          margin: 0 0 20px 0;
          max-width: 460px;
          line-height: 1.7;
        }
        .featured-story-btn {
          font-family: "Jost", sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          color: var(--paper);
          text-decoration: none;
          border-bottom: 2px solid var(--marigold);
          padding-bottom: 4px;
          transition: all 0.3s ease;
          display: inline-block;
        }
        .featured-story-btn::after {
          content: " →";
          transition: transform 0.3s ease;
          display: inline-block;
        }
        .featured-story-btn:hover {
          color: var(--marigold-soft);
          border-bottom-color: var(--marigold-soft);
        }
        .featured-story-btn:hover::after {
          transform: translateX(6px);
        }
        .featured-story-badge {
          position: absolute;
          top: 8%;
          right: 6%;
          z-index: 2;
          font-family: "Jost", sans-serif;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255, 253, 248, 0.6);
          border: 1px solid rgba(255, 253, 248, 0.15);
          padding: 8px 16px;
          backdrop-filter: blur(4px);
          background: rgba(0, 0, 0, 0.15);
          border-radius: 2px;
        }
        .featured-story-badge span {
          color: var(--marigold-soft);
        }

        @media (max-width: 1024px) {
          .featured-story-image-wrapper {
            padding-top: 55%;
          }
          .featured-story-content {
            bottom: 8%;
            left: 6%;
            max-width: 480px;
          }
        }

        @media (max-width: 860px) {
          .featured-story-image-wrapper {
            padding-top: 65%;
          }
          .featured-story-content {
            bottom: 6%;
            left: 5%;
            max-width: 90%;
          }
          .featured-story-title {
            font-size: clamp(24px, 3.5vw, 36px);
          }
          .featured-story-badge {
            top: 4%;
            right: 4%;
            font-size: 9px;
            padding: 6px 12px;
          }
        }

        @media (max-width: 600px) {
          .featured-story-image-wrapper {
            padding-top: 75%;
          }
          .featured-story-content {
            bottom: 5%;
            left: 4%;
            max-width: 92%;
          }
          .featured-story-title {
            font-size: clamp(20px, 3vw, 28px);
          }
          .featured-story-description {
            font-size: 13px;
            margin-bottom: 14px;
          }
          .featured-story-badge {
            display: none;
          }
          .featured-story-tag {
            font-size: 9px;
            padding: 4px 12px;
          }
        }
      `}</style>

      <section className="featured-story-section re-sans">
        <div 
          ref={elementRef}
          className={`slide-in-up ${isVisible ? 'visible' : ''}`}
        >
          <div className="featured-story-image-wrapper">
            <Image
              src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783245672/16_pneysk.png"
              alt="Rajasthani artisans at work"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority
            />
            
            <div className="featured-story-badge">
              <span>✦</span> Artisan Feature
            </div>

            <div className="featured-story-content">
              <span className="featured-story-tag">Our Story</span>
              <h2 className="featured-story-title">
                On which you will find yourself, and love yourself, both at the same time.
              </h2>
             
              <Link href="/collections" className="featured-story-btn">
                Discover
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   FULL WIDTH STORY SECTION - New immersive section
   ========================================================================= */
/* =========================================================================
   FULL WIDTH STORY SECTION - Expanded for complete image coverage
   ========================================================================= */
function FullWidthStorySection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <>
      <style>{`
        .full-story-section {
          position: relative;
          overflow: hidden;
          min-height: 80vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--sand);
        }

        .full-story-image-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .full-story-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .full-story-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,
            rgba(36, 26, 21, 0.15) 0%,
            rgba(36, 26, 21, 0.35) 40%,
            rgba(36, 26, 21, 0.6) 70%,
            rgba(36, 26, 21, 0.75) 100%
          );
          z-index: 1;
        }

        .full-story-content {
          position: relative;
          z-index: 2;
          max-width: 720px;
          padding: 80px 24px;
          text-align: center;
          color: var(--paper);
        }

        .full-story-tag {
          display: inline-block;
          padding: 6px 18px;
          background: rgba(255, 253, 248, 0.12);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 253, 248, 0.15);
          border-radius: 2px;
          font-family: "Jost", sans-serif;
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--marigold-soft);
          margin-bottom: 20px;
        }

        .full-story-title {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 550;
          color: var(--paper);
          margin: 0 0 16px;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .full-story-description {
          font-family: "Jost", sans-serif;
          font-size: clamp(15px, 1.1vw, 18px);
          font-weight: 300;
          color: rgba(255, 253, 248, 0.85);
          margin: 0 0 28px;
          max-width: 540px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }

        .full-story-btn {
          font-family: "Jost", sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--paper);
          text-decoration: none;
          border-bottom: 2px solid var(--marigold);
          padding-bottom: 5px;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .full-story-btn::after {
          content: " →";
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .full-story-btn:hover {
          color: var(--marigold-soft);
          border-bottom-color: var(--marigold-soft);
        }

        .full-story-btn:hover::after {
          transform: translateX(6px);
        }

        .full-story-badge {
          position: absolute;
          top: 6%;
          right: 6%;
          z-index: 2;
          font-family: "Jost", sans-serif;
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(255, 253, 248, 0.5);
          border: 1px solid rgba(255, 253, 248, 0.1);
          padding: 6px 14px;
          backdrop-filter: blur(4px);
          background: rgba(0, 0, 0, 0.15);
          border-radius: 2px;
        }

        .full-story-badge span {
          color: var(--marigold-soft);
        }

        /* Decorative corner accent */
        .full-story-corner {
          position: absolute;
          width: 40px;
          height: 40px;
          border-color: rgba(255, 253, 248, 0.08);
          border-style: solid;
          border-width: 0;
          z-index: 2;
        }

        .full-story-corner-tl {
          top: 24px;
          left: 24px;
          border-top-width: 1px;
          border-left-width: 1px;
        }

        .full-story-corner-tr {
          top: 24px;
          right: 24px;
          border-top-width: 1px;
          border-right-width: 1px;
        }

        .full-story-corner-bl {
          bottom: 24px;
          left: 24px;
          border-bottom-width: 1px;
          border-left-width: 1px;
        }

        .full-story-corner-br {
          bottom: 24px;
          right: 24px;
          border-bottom-width: 1px;
          border-right-width: 1px;
        }

        .full-story-slide-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .full-story-slide-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          .full-story-section {
            min-height: 70vh;
          }
        }

        @media (max-width: 860px) {
          .full-story-section {
            min-height: 65vh;
          }
          .full-story-title {
            font-size: clamp(28px, 4vw, 38px);
          }
          .full-story-badge {
            display: none;
          }
          .full-story-corner {
            width: 24px;
            height: 24px;
          }
          .full-story-corner-tl,
          .full-story-corner-tr {
            top: 16px;
          }
          .full-story-corner-bl,
          .full-story-corner-br {
            bottom: 16px;
          }
          .full-story-corner-tl,
          .full-story-corner-bl {
            left: 16px;
          }
          .full-story-corner-tr,
          .full-story-corner-br {
            right: 16px;
          }
        }

        @media (max-width: 600px) {
          .full-story-section {
            min-height: 55vh;
          }
          .full-story-content {
            padding: 50px 20px;
          }
          .full-story-title {
            font-size: clamp(24px, 5vw, 30px);
          }
          .full-story-description {
            font-size: 14px;
          }
          .full-story-corner {
            display: none;
          }
        }
      `}</style>

      <section className="full-story-section re-sans">
        {/* Full-cover background image */}
        <div className="full-story-image-wrapper">
          <Image
            src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783247240/18_svax45.png"
            alt="Rajasthani artisans at work"
            fill
            sizes="100vw"
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
              transition: "opacity 1.2s ease-in-out",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="full-story-overlay" />

        {/* Corner accents */}
        <span className="full-story-corner full-story-corner-tl" />
        <span className="full-story-corner full-story-corner-tr" />
        <span className="full-story-corner full-story-corner-bl" />
        <span className="full-story-corner full-story-corner-br" />

        {/* Badge */}
        <div className="full-story-badge">
          <span>✦</span> Artisan Legacy
        </div>

        <div 
          ref={elementRef}
          className={`full-story-content full-story-slide-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="full-story-tag">Art With Soul</span>
          <h2 className="full-story-title">
            Where every creation tells a story of devotion
          </h2>
          <p className="full-story-description">
            From the hands of master artisans to your home — each piece carries the spirit 
            of Rajasthan, woven with traditions that transcend time.
          </p>
          <Link href="/collections" className="full-story-btn">
            Explore the Collection
          </Link>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   CRAFT TICKER
   ========================================================================= */
function CraftTicker() {
  const crafts = [
    "Bandhani Tie-Dye",
    "Meenakari Enamel",
    "Blue Pottery",
    "Hand Block Print",
    "Lac Jewelry",
    "Marble Inlay",
    "Phad Painting",
    "Kundan Work",
  ];
  const track = [...crafts, ...crafts];

  return (
    <>
      <style>{`
        .ticker-wrap {
          overflow: hidden;
          background: var(--haveli-deep);
          border-top: 1px solid rgba(185, 134, 47, 0.3);
          border-bottom: 1px solid rgba(185, 134, 47, 0.3);
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: tickerScroll 34s linear infinite;
        }
        .ticker-item {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 16px 30px;
          white-space: nowrap;
          font-family: "Jost", sans-serif;
          font-size: 12.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--marigold-soft);
          font-weight: 400;
        }
        .ticker-dot { color: rgba(185, 134, 47, 0.55); font-size: 10px; }
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ticker-track { animation: none; }
        }
        @media (max-width: 600px) {
          .ticker-item {
            padding: 12px 18px;
            font-size: 10px;
            gap: 12px;
          }
          .ticker-dot { font-size: 8px; }
        }
      `}</style>
      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-track">
          {track.map((craft, i) => (
            <span className="ticker-item" key={`${craft}-${i}`}>
              {craft} <span className="ticker-dot">◆</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

/* =========================================================================
   SCROLL ANIMATION HOOK
   ========================================================================= */
function useScrollAnimation() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return { elementRef, isVisible };
}

/* =========================================================================
   FULL WIDTH STORY SECTION 2 - Heritage & Craftsmanship
   ========================================================================= */
function FullWidthStorySectionTwo() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <>
      <style>{`
        .full-story-two {
          position: relative;
          overflow: hidden;
          min-height: 70vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--sand);
        }

        .full-story-two .image-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .full-story-two .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .full-story-two .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,
            rgba(36, 26, 21, 0.1) 0%,
            rgba(36, 26, 21, 0.3) 40%,
            rgba(36, 26, 21, 0.5) 70%,
            rgba(36, 26, 21, 0.7) 100%
          );
          z-index: 1;
        }

        .full-story-two .content {
          position: relative;
          z-index: 2;
          max-width: 680px;
          padding: 60px 24px;
          text-align: center;
          color: var(--paper);
        }

        .full-story-two .tag {
          font-family: "Jost", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--marigold-soft);
          margin-bottom: 16px;
          display: block;
        }

        .full-story-two .title {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 550;
          color: var(--paper);
          margin: 0 0 14px;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .full-story-two .desc {
          font-family: "Jost", sans-serif;
          font-size: clamp(14px, 1vw, 17px);
          font-weight: 300;
          color: rgba(255, 253, 248, 0.8);
          margin: 0 0 24px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }

        .full-story-two .btn {
          font-family: "Jost", sans-serif;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--paper);
          text-decoration: none;
          border-bottom: 2px solid var(--marigold);
          padding-bottom: 4px;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .full-story-two .btn::after {
          content: " →";
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .full-story-two .btn:hover {
          color: var(--marigold-soft);
          border-bottom-color: var(--marigold-soft);
        }

        .full-story-two .btn:hover::after {
          transform: translateX(6px);
        }

        .full-story-two .corner {
          position: absolute;
          width: 32px;
          height: 32px;
          border-color: rgba(255, 253, 248, 0.06);
          border-style: solid;
          border-width: 0;
          z-index: 2;
        }

        .full-story-two .corner-tl { top: 20px; left: 20px; border-top-width: 1px; border-left-width: 1px; }
        .full-story-two .corner-tr { top: 20px; right: 20px; border-top-width: 1px; border-right-width: 1px; }
        .full-story-two .corner-bl { bottom: 20px; left: 20px; border-bottom-width: 1px; border-left-width: 1px; }
        .full-story-two .corner-br { bottom: 20px; right: 20px; border-bottom-width: 1px; border-right-width: 1px; }

        .full-story-two .slide-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .full-story-two .slide-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 860px) {
          .full-story-two { min-height: 60vh; }
          .full-story-two .title { font-size: clamp(24px, 3.5vw, 32px); }
          .full-story-two .corner { width: 20px; height: 20px; }
          .full-story-two .corner-tl, .full-story-two .corner-tr { top: 12px; }
          .full-story-two .corner-bl, .full-story-two .corner-br { bottom: 12px; }
          .full-story-two .corner-tl, .full-story-two .corner-bl { left: 12px; }
          .full-story-two .corner-tr, .full-story-two .corner-br { right: 12px; }
        }

        @media (max-width: 600px) {
          .full-story-two { min-height: 50vh; }
          .full-story-two .content { padding: 40px 20px; }
          .full-story-two .title { font-size: clamp(20px, 4vw, 26px); }
          .full-story-two .desc { font-size: 13px; }
          .full-story-two .corner { display: none; }
        }
      `}</style>

      <section className="full-story-two re-sans">
        <div className="image-wrapper">
          <Image
            src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783318548/21_xj9ccx.png"
            alt="Rajasthani heritage craftsmanship"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="overlay" />

        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />

        <div 
          ref={elementRef}
          className={`content slide-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="tag">✦ Heritage</span>
          <h2 className="title">Where tradition meets timeless artistry</h2>
          <p className="desc">
            Generations of skill, passed down through families, preserving the soul of Rajasthan.
          </p>
          <Link href="/collections" className="btn">Explore the Legacy</Link>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   FULL WIDTH STORY SECTION 3 - The Artisan's Touch
   ========================================================================= */
function FullWidthStorySectionThree() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <>
      <style>{`
        .full-story-three {
          position: relative;
          overflow: hidden;
          min-height: 70vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--sand);
        }

        .full-story-three .image-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .full-story-three .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .full-story-three .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,
            rgba(36, 26, 21, 0.1) 0%,
            rgba(36, 26, 21, 0.3) 40%,
            rgba(36, 26, 21, 0.5) 70%,
            rgba(36, 26, 21, 0.7) 100%
          );
          z-index: 1;
        }

        .full-story-three .content {
          position: relative;
          z-index: 2;
          max-width: 680px;
          padding: 60px 24px;
          text-align: center;
          color: var(--paper);
        }

        .full-story-three .tag {
          font-family: "Jost", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--marigold-soft);
          margin-bottom: 16px;
          display: block;
        }

        .full-story-three .title {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 550;
          color: var(--paper);
          margin: 0 0 14px;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .full-story-three .desc {
          font-family: "Jost", sans-serif;
          font-size: clamp(14px, 1vw, 17px);
          font-weight: 300;
          color: rgba(255, 253, 248, 0.8);
          margin: 0 0 24px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }

        .full-story-three .btn {
          font-family: "Jost", sans-serif;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--paper);
          text-decoration: none;
          border-bottom: 2px solid var(--marigold);
          padding-bottom: 4px;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .full-story-three .btn::after {
          content: " →";
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .full-story-three .btn:hover {
          color: var(--marigold-soft);
          border-bottom-color: var(--marigold-soft);
        }

        .full-story-three .btn:hover::after {
          transform: translateX(6px);
        }

        .full-story-three .corner {
          position: absolute;
          width: 32px;
          height: 32px;
          border-color: rgba(255, 253, 248, 0.06);
          border-style: solid;
          border-width: 0;
          z-index: 2;
        }

        .full-story-three .corner-tl { top: 20px; left: 20px; border-top-width: 1px; border-left-width: 1px; }
        .full-story-three .corner-tr { top: 20px; right: 20px; border-top-width: 1px; border-right-width: 1px; }
        .full-story-three .corner-bl { bottom: 20px; left: 20px; border-bottom-width: 1px; border-left-width: 1px; }
        .full-story-three .corner-br { bottom: 20px; right: 20px; border-bottom-width: 1px; border-right-width: 1px; }

        .full-story-three .slide-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .full-story-three .slide-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 860px) {
          .full-story-three { min-height: 60vh; }
          .full-story-three .title { font-size: clamp(24px, 3.5vw, 32px); }
          .full-story-three .corner { width: 20px; height: 20px; }
          .full-story-three .corner-tl, .full-story-three .corner-tr { top: 12px; }
          .full-story-three .corner-bl, .full-story-three .corner-br { bottom: 12px; }
          .full-story-three .corner-tl, .full-story-three .corner-bl { left: 12px; }
          .full-story-three .corner-tr, .full-story-three .corner-br { right: 12px; }
        }

        @media (max-width: 600px) {
          .full-story-three { min-height: 50vh; }
          .full-story-three .content { padding: 40px 20px; }
          .full-story-three .title { font-size: clamp(20px, 4vw, 26px); }
          .full-story-three .desc { font-size: 13px; }
          .full-story-three .corner { display: none; }
        }
      `}</style>

      <section className="full-story-three re-sans">
        <div className="image-wrapper">
          <Image
            src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783318295/20_a0qo69.png"
            alt="Artisan at work - Rajasthani craftsmanship"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="overlay" />

        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />

        <div 
          ref={elementRef}
          className={`content slide-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="tag">✦ Craftsmanship</span>
          <h2 className="title">Every piece tells a story of devotion</h2>
          <p className="desc">
            From the hands of master artisans, each creation carries the spirit of Rajasthan.
          </p>
          <Link href="/collections" className="btn">Discover the Art</Link>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   ARTISAN STORY SECTION
   ========================================================================= */
function ArtisanStorySection() {
  const points = [
    {
      title: "Hand-carved, not machine-cut",
      copy: "Wooden printing blocks and stone inlay are shaped by chisel, the same way they have been for generations.",
    },
    {
      title: "Naturally sourced dyes",
      copy: "Indigo, madder root, and marigold give our textiles color that machine dyes cannot reproduce.",
    },
    {
      title: "Passed from hand to hand",
      copy: "Most of our artisans learned their craft from a parent or grandparent, in workshops that are decades old.",
    },
  ];

  const { elementRef, isVisible } = useScrollAnimation();

  const placeholderImages = {
    main: "https://res.cloudinary.com/dlomq2b7z/image/upload/v1783100252/2_xotxvk.jpg",
    fallback: "https://res.cloudinary.com/dlomq2b7z/image/upload/v1783100251/1_dn5utr.jpg",
  };

  return (
    <>
      <style>{`
        .story-section {
          background: var(--paper);
          padding: clamp(60px, 8vw, 104px) 16px;
          position: relative;
        }

        .story-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--marigold-soft), transparent);
          opacity: 0.2;
        }

        .story-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .story-image-wrapper {
          position: relative;
        }

        .story-image-frame {
          position: relative;
          width: 100%;
          padding-top: 118%;
          border-radius: 2px;
          overflow: hidden;
          background: linear-gradient(155deg, var(--sand) 0%, var(--sand-deep) 55%, var(--marigold-soft) 130%);
          box-shadow: 0 30px 70px rgba(36, 26, 21, 0.12);
        }

        .story-image-frame img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .story-image-frame .image-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 70% 75%, rgba(109, 18, 32, 0.08) 0%, transparent 55%);
        }

        .story-image-frame .corner {
          position: absolute;
          width: 24px;
          height: 24px;
          border-color: rgba(185, 134, 47, 0.15);
          border-style: solid;
          border-width: 0;
          z-index: 2;
        }

        .story-image-frame .corner-tl {
          top: 12px;
          left: 12px;
          border-top-width: 1px;
          border-left-width: 1px;
        }

        .story-image-frame .corner-tr {
          top: 12px;
          right: 12px;
          border-top-width: 1px;
          border-right-width: 1px;
        }

        .story-image-frame .corner-bl {
          bottom: 12px;
          left: 12px;
          border-bottom-width: 1px;
          border-left-width: 1px;
        }

        .story-image-frame .corner-br {
          bottom: 12px;
          right: 12px;
          border-bottom-width: 1px;
          border-right-width: 1px;
        }

        .story-badge {
          position: absolute;
          bottom: -12px;
          left: -8px;
          background: #fffdf8;
          border: 1px solid rgba(185, 134, 47, 0.12);
          padding: 8px 18px;
          font-family: "Jost", sans-serif;
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #6b5f54;
          box-shadow: 0 4px 16px rgba(36, 26, 21, 0.04);
          z-index: 3;
        }

        .story-badge span {
          color: #b9862f;
        }

        .story-content {
          display: grid;
          gap: 24px;
        }

        .story-content .eyebrow {
          font-family: "Jost", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.42em;
          text-transform: uppercase;
          color: #b9862f;
        }

        .story-content h2 {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: clamp(28px, 3.6vw, 44px);
          font-weight: 550;
          color: #241a15;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.01em;
        }

        .story-content .lead {
          font-family: "Jost", sans-serif;
          font-size: clamp(15px, 1vw, 16px);
          font-weight: 300;
          line-height: 1.85;
          color: #6b5f54;
          margin: 0;
          max-width: 520px;
        }

        .story-points {
          display: grid;
          gap: 20px;
          margin-top: 4px;
        }

        .story-point-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .story-point-icon {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(185, 134, 47, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
          transition: all 0.3s ease;
        }

        .story-point-item:hover .story-point-icon {
          border-color: #b9862f;
          background: rgba(185, 134, 47, 0.04);
        }

        .story-point-icon svg {
          width: 16px;
          height: 16px;
          stroke: #b9862f;
          stroke-width: 1.5;
        }

        .story-point-text h4 {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: clamp(15px, 1vw, 17px);
          font-weight: 560;
          color: #241a15;
          margin: 0 0 2px;
          line-height: 1.2;
        }

        .story-point-text p {
          font-family: "Jost", sans-serif;
          font-size: clamp(13px, 0.8vw, 14px);
          font-weight: 300;
          line-height: 1.7;
          color: #6b5f54;
          margin: 0;
          max-width: 440px;
        }

        .story-link {
          font-family: "Jost", sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4d0e17;
          text-decoration: none;
          border-bottom: 1.5px solid #b9862f;
          padding-bottom: 4px;
          transition: all 0.3s ease;
          width: fit-content;
        }

        .story-link:hover {
          color: #6d1220;
          border-bottom-color: #ddb673;
          transform: translateX(4px);
        }

        .story-link::after {
          content: ' →';
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .story-link:hover::after {
          transform: translateX(4px);
        }

        .slide-in-right {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .slide-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        @media (max-width: 1024px) {
          .story-grid {
            gap: 48px;
          }
        }

        @media (max-width: 860px) {
          .story-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .story-image-wrapper {
            order: 2;
            max-width: 420px;
            margin: 0 auto;
            width: 100%;
          }
          .story-image-frame {
            padding-top: 100%;
          }
          .story-content {
            order: 1;
            text-align: center;
          }
          .story-content .lead {
            max-width: 100%;
          }
          .story-points {
            justify-items: center;
          }
          .story-point-item {
            text-align: left;
            max-width: 480px;
          }
          .story-link {
            margin: 0 auto;
          }
          .slide-in-right {
            transform: translateY(40px);
          }
          .slide-in-right.visible {
            transform: translateY(0);
          }
          .story-badge {
            bottom: -8px;
            left: 0;
            font-size: 8px;
            padding: 6px 14px;
          }
        }

        @media (max-width: 600px) {
          .story-grid {
            gap: 28px;
          }
          .story-image-frame {
            padding-top: 90%;
          }
          .story-points {
            gap: 16px;
          }
          .story-point-icon {
            width: 32px;
            height: 32px;
          }
          .story-point-icon svg {
            width: 13px;
            height: 13px;
          }
          .story-badge {
            display: none;
          }
          .story-image-frame .corner {
            width: 16px;
            height: 16px;
          }
          .story-image-frame .corner-tl,
          .story-image-frame .corner-tr {
            top: 8px;
          }
          .story-image-frame .corner-bl,
          .story-image-frame .corner-br {
            bottom: 8px;
          }
          .story-image-frame .corner-tl,
          .story-image-frame .corner-bl {
            left: 8px;
          }
          .story-image-frame .corner-tr,
          .story-image-frame .corner-br {
            right: 8px;
          }
        }
      `}</style>

      <section className="story-section re-sans">
  <div className="story-grid">
    <div className="story-content">
      <span className="eyebrow">The Atelier</span>

      <h2>
        Where hands remember what machines forget.
      </h2>

      <p className="lead">
        Fifty families. Three cities. One unbroken thread of craft, passed across generations.
      </p>

      <div className="story-points">
        {points.map((point) => (
          <div key={point.title} className="story-point-item">
            <div className="story-point-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 12l5 5L20 6" />
              </svg>
            </div>
            <div className="story-point-text">
              <h4>{point.title}</h4>
              <p>{point.copy}</p>
            </div>
          </div>
        ))}
      </div>

      <Link href="/collections" className="story-link">
        View the Collection
      </Link>
    </div>

    <div 
      ref={elementRef}
      className={`story-image-wrapper slide-in-right ${isVisible ? 'visible' : ''}`}
    >
      <div className="story-image-frame">
        <Image
          src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783318693/22_egv4cn.png"
          alt="Artisan working on traditional Rajasthani handicraft"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="image-overlay" />

        <span className="corner corner-tl" />
        <span className="corner corner-tr" />
        <span className="corner corner-bl" />
        <span className="corner corner-br" />

        <div className="story-badge">
          <span>✦</span> Artisan Mastery
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}

/* =========================================================================
   NEWSLETTER SECTION
   ========================================================================= */
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 0) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <style>{`
        .news-input {
          font-family: "Jost", sans-serif;
          font-size: 14px;
          font-weight: 300;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(246, 240, 228, 0.35);
          color: var(--paper);
          padding: 12px 4px;
          width: 100%;
          outline: none;
          transition: border-color 0.25s ease;
        }
        .news-input::placeholder { color: rgba(246, 240, 228, 0.45); }
        .news-input:focus { border-bottom-color: var(--marigold-soft); }
        .news-btn {
          font-family: "Jost", sans-serif;
          font-size: 12.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: var(--marigold);
          color: var(--haveli-deep);
          border: none;
          padding: 13px 26px;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .news-btn:hover { background: var(--marigold-soft); transform: translateY(-1px); }
        .news-form-row { display: flex; gap: 14px; align-items: stretch; max-width: 420px; }

        @media (max-width: 860px) {
          .newsletter-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            text-align: center;
          }
          .news-form-row {
            max-width: 100%;
            margin: 0 auto;
          }
        }

        @media (max-width: 520px) {
          .news-form-row { 
            flex-direction: column; 
            gap: 12px;
          }
          .news-btn {
            width: 100%;
            padding: 14px;
          }
          .news-input {
            font-size: 13px;
            padding: 10px 4px;
          }
          .newsletter-section {
            padding: 48px 16px !important;
          }
        }
      `}</style>
      <section className="re-sans newsletter-section" style={{ background: "var(--ink)", padding: "clamp(48px, 6vw, 76px) 16px" }}>
        <div
          className="container newsletter-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div style={{ display: "grid", gap: 10 }}>
            <span className="re-eyebrow" style={{ color: "var(--marigold-soft)" }}>
              Stay in the Loop
            </span>
            <h3 className="re-display" style={{ margin: 0, fontSize: "clamp(20px, 2.4vw, 30px)", color: "var(--paper)", fontWeight: 550 }}>
              New pieces, artisan stories, once a month.
            </h3>
          </div>

          <div>
            {submitted ? (
              <p style={{ margin: 0, color: "var(--marigold-soft)", fontSize: "clamp(14px, 0.9vw, 14.5px)", fontWeight: 300 }}>
                Thank you — you&apos;ll hear from us soon.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="news-form-row">
                <input
                  type="email"
                  required
                  className="news-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                />
                <button type="submit" className="news-btn">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   HOME PAGE
   ========================================================================= */
export default function HomePage() {
  const featured = sampleProducts.filter((product) => product.isFeatured);

  const categoryImageRef = useScrollAnimation();
  const featuredImageRef = useScrollAnimation();

  const premiumCategories = [
    { name: "Textiles", description: "Handwoven narratives in thread and color" },
    { name: "Pottery", description: "Earth's memory shaped by patient hands" },
    { name: "Jewelry", description: "Adornments that carry stories of generations" },
    { name: "Paintings", description: "Visionary tales on cloth and paper" },
    { name: "Decor", description: "Objects that make spaces feel alive" },
    { name: "Woodcraft", description: "Timeless forms carved from nature's bounty" },
  ];

  return (
    <>
      <style>{`
        :root {
          --ink: #241a15;
          --ink-soft: #6d5c4e;
          --paper: #faf6ee;
          --sand: #ece0c8;
          --sand-deep: #e0d0ac;
          --haveli: #6d1220;
          --haveli-deep: #430b12;
          --marigold: #b9862f;
          --marigold-soft: #ddb673;
          --indigo: #2c3a5c;
          --hairline: rgba(36, 26, 21, 0.14);
        }

        .re-display {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
        }
        .re-accent {
          font-family: "Cormorant Garamond", Georgia, serif;
          font-style: italic;
        }
        .re-sans {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
        }
        .re-eyebrow {
          font-family: "Jost", sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        a:focus-visible, button:focus-visible, input:focus-visible {
          outline: 2px solid var(--marigold);
          outline-offset: 3px;
        }

        .slide-in-right {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .slide-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .slide-in-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .slide-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .slide-in-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .slide-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 860px) {
          .slide-in-right, .slide-in-left {
            transform: translateY(40px);
          }
          .slide-in-right.visible, .slide-in-left.visible {
            transform: translateY(0);
          }
        }
      `}</style>

      <HeroSection />
      
      <MovingLineDivider />
      
      <CraftTicker />

      {/* ================= ARTISAN'S GALLERY ================= */}
    <section className="re-sans artisan-gallery" style={{ background: "var(--paper)", padding: "clamp(60px, 8vw, 100px) 16px" }}>
  <style>{`
    .artisan-gallery .section-header {
      text-align: center;
      display: grid;
      gap: 8px;
      margin-bottom: clamp(40px, 5vw, 56px);
    }

    .artisan-gallery .section-header .eyebrow {
      font-family: "Jost", sans-serif;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.42em;
      text-transform: uppercase;
      color: #b9862f;
    }

    .artisan-gallery .section-header h2 {
      font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
      font-size: clamp(28px, 4vw, 42px);
      font-weight: 550;
      color: #241a15;
      margin: 0;
      letter-spacing: -0.01em;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      align-items: stretch;
    }

    .gallery-feature {
      position: relative;
      overflow: hidden;
      border-radius: 2px;
      background: #fffdf8;
      border: 1px solid rgba(36, 26, 21, 0.06);
      display: flex;
      flex-direction: column;
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .gallery-feature:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 50px rgba(36, 26, 21, 0.08);
    }

    .gallery-feature .image-wrap {
      position: relative;
      width: 100%;
      padding-top: 75%;
      overflow: hidden;
      background: #ece0c8;
    }

    .gallery-feature .image-wrap img {
      transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .gallery-feature:hover .image-wrap img {
      transform: scale(1.03);
    }

    .gallery-feature .image-wrap .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, 
        rgba(36, 26, 21, 0.02) 0%,
        rgba(36, 26, 21, 0.15) 60%,
        rgba(36, 26, 21, 0.35) 100%
      );
    }

    .gallery-feature .feature-content {
      padding: 28px 30px 32px;
      display: grid;
      gap: 6px;
    }

    .gallery-feature .feature-content .tag {
      font-family: "Jost", sans-serif;
      font-size: 9px;
      font-weight: 500;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #b9862f;
    }

    .gallery-feature .feature-content h3 {
      font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
      font-size: clamp(20px, 1.6vw, 26px);
      font-weight: 600;
      color: #241a15;
      margin: 0;
      line-height: 1.2;
    }

    .gallery-feature .feature-content p {
      font-family: "Jost", sans-serif;
      font-size: 14px;
      font-weight: 300;
      color: #6b5f54;
      margin: 0;
      line-height: 1.7;
    }

    .gallery-feature .feature-content .learn-more {
      font-family: "Jost", sans-serif;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #b9862f;
      text-decoration: none;
      border-bottom: 1px solid rgba(185, 134, 47, 0.3);
      padding-bottom: 3px;
      transition: all 0.3s ease;
      display: inline-block;
      margin-top: 4px;
      width: fit-content;
    }

    .gallery-feature .feature-content .learn-more:hover {
      color: #4d0e17;
      border-bottom-color: #4d0e17;
    }

    .gallery-mini-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      align-content: start;
    }

    .gallery-mini-card {
      position: relative;
      overflow: hidden;
      border-radius: 2px;
      background: #fffdf8;
      border: 1px solid rgba(36, 26, 21, 0.06);
      transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    .gallery-mini-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 36px rgba(36, 26, 21, 0.06);
    }

    .gallery-mini-card .image-wrap {
      position: relative;
      width: 100%;
      padding-top: 75%;
      overflow: hidden;
      background: #ece0c8;
    }

    .gallery-mini-card .image-wrap img {
      transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .gallery-mini-card:hover .image-wrap img {
      transform: scale(1.05);
    }

    .gallery-mini-card .image-wrap .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, 
        rgba(36, 26, 21, 0.02) 0%,
        rgba(36, 26, 21, 0.2) 100%
      );
    }

    .gallery-mini-card .mini-content {
      padding: 16px 18px 18px;
      display: grid;
      gap: 2px;
    }

    .gallery-mini-card .mini-content .tag {
      font-family: "Jost", sans-serif;
      font-size: 8.5px;
      font-weight: 500;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #b9862f;
    }

    .gallery-mini-card .mini-content h4 {
      font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
      font-size: clamp(15px, 1.1vw, 18px);
      font-weight: 600;
      color: #241a15;
      margin: 0;
      line-height: 1.2;
    }

    .gallery-mini-card .mini-content p {
      font-family: "Jost", sans-serif;
      font-size: 12px;
      font-weight: 300;
      color: #6b5f54;
      margin: 0;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .gallery-mini-card .mini-content .explore-link {
      font-family: "Jost", sans-serif;
      font-size: 9px;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #b9862f;
      text-decoration: none;
      border-bottom: 1px solid rgba(185, 134, 47, 0.2);
      padding-bottom: 2px;
      transition: all 0.3s ease;
      display: inline-block;
      margin-top: 4px;
      width: fit-content;
    }

    .gallery-mini-card .mini-content .explore-link:hover {
      color: #4d0e17;
      border-bottom-color: #4d0e17;
    }

    @media (max-width: 1024px) {
      .gallery-grid {
        gap: 24px;
      }
      .gallery-mini-grid {
        gap: 14px;
      }
    }

    @media (max-width: 860px) {
      .gallery-grid {
        grid-template-columns: 1fr;
        gap: 28px;
      }
      .gallery-mini-grid {
        grid-template-columns: 1fr 1fr;
      }
      .gallery-feature .image-wrap {
        padding-top: 60%;
      }
    }

    @media (max-width: 600px) {
      .gallery-mini-grid {
        grid-template-columns: 1fr;
      }
      .gallery-feature .image-wrap {
        padding-top: 70%;
      }
      .gallery-feature .feature-content {
        padding: 20px 22px 24px;
      }
      .gallery-mini-card .mini-content {
        padding: 14px 16px 16px;
      }
    }
  `}</style>

  <div className="container" style={{ maxWidth: 1280, margin: "0 auto" }}>
    <div className="section-header">
      <span className="eyebrow">Disciplines</span>
      <h2>The Artisan's Vocabulary</h2>
    </div>

    <div className="gallery-grid">
      {/* Left Column - Feature Card */}
      <Link href="/collections" className="gallery-feature" style={{ textDecoration: 'none' }}>
        <div className="image-wrap">
          <Image
            src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783242954/15_h6fiv8.png"
            alt="Wooden Hindu Temple Shrine"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ 
              objectFit: "cover", 
              objectPosition: "center",
              width: "100%",
              height: "100%"
            }}
          />
          <div className="overlay" />
        </div>
        <div className="feature-content">
          <span className="tag"></span>
          <h3>Wooden Hindu Temple Shrine</h3>
          <p>Intricately carved wooden shrine reflecting centuries of temple architecture.</p>
          <span className="learn-more">View Collection →</span>
        </div>
      </Link>

      {/* Right Column - Mini Cards */}
      <div className="gallery-mini-grid">
        {/* Pottery */}
        <Link href="/collections?category=Pottery" className="gallery-mini-card" style={{ textDecoration: 'none' }}>
          <div className="image-wrap">
            <Image
              src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783241411/11_kbakye.png"
              alt="Pottery"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              style={{ 
                objectFit: "cover", 
                objectPosition: "center",
                width: "100%",
                height: "100%"
              }}
            />
            <div className="overlay" />
          </div>
          <div className="mini-content">
            <span className="tag"></span>
            <h4>Pottery</h4>
            <p>Earth's memory shaped by patient hands</p>
            <span className="explore-link">Explore →</span>
          </div>
        </Link>

        {/* Jewelry */}
        <Link href="/collections?category=Jewelry" className="gallery-mini-card" style={{ textDecoration: 'none' }}>
          <div className="image-wrap">
            <Image
              src="https://res.cloudinary.com/dlomq2b7z/image/upload/v1782987873/a7a177c0-16be-4f4d-970a-e8f01d23dc6f_dz7yqp.png"
              alt="Jewelry"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              style={{ 
                objectFit: "cover", 
                objectPosition: "center",
                width: "100%",
                height: "100%"
              }}
            />
            <div className="overlay" />
          </div>
          <div className="mini-content">
            <span className="tag"></span>
            <h4>Jewelry</h4>
            <p>Adornments that carry stories of generations</p>
            <span className="explore-link">Explore →</span>
          </div>
        </Link>

        {/* Paintings */}
        <Link href="/collections?category=Paintings" className="gallery-mini-card" style={{ textDecoration: 'none' }}>
          <div className="image-wrap">
            <Image
              src="https://res.cloudinary.com/dlomq2b7z/image/upload/v1783100251/1_dn5utr.jpg"
              alt="Paintings"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              style={{ 
                objectFit: "cover", 
                objectPosition: "center",
                width: "100%",
                height: "100%"
              }}
            />
            <div className="overlay" />
          </div>
          <div className="mini-content">
            <span className="tag"></span>
            <h4>Paintings</h4>
            <p>Visionary tales on cloth and paper</p>
            <span className="explore-link">Explore →</span>
          </div>
        </Link>

        {/* Woodcraft */}
        <Link href="/collections?category=Woodcraft" className="gallery-mini-card" style={{ textDecoration: 'none' }}>
          <div className="image-wrap">
            <Image
              src="https://res.cloudinary.com/dlomq2b7z/image/upload/v1783100252/2_xotxvk.jpg"
              alt="Woodcraft"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              style={{ 
                objectFit: "cover", 
                objectPosition: "center",
                width: "100%",
                height: "100%"
              }}
            />
            <div className="overlay" />
          </div>
          <div className="mini-content">
            <span className="tag"></span>
            <h4>Woodcraft</h4>
            <p>Timeless forms carved from nature's bounty</p>
            <span className="explore-link">Explore →</span>
          </div>
        </Link>
      </div>
    </div>
  </div>
</section>
<MovingLineDivider />
<FullWidthStorySectionTwo />


      {/* ornamental divider */}
      <div style={{ background: "var(--sand)" }}>
        <svg viewBox="0 0 200 24" style={{ display: "block", width: "clamp(100px, 15vw, 140px)", margin: "0 auto" }} aria-hidden="true">
          <g stroke="var(--marigold)" strokeWidth="1" fill="none">
            <line x1="0" y1="12" x2="80" y2="12" />
            <line x1="120" y1="12" x2="200" y2="12" />
            <circle cx="100" cy="12" r="6" />
            <circle cx="100" cy="12" r="2" fill="var(--marigold)" />
          </g>
        </svg>
      </div>

      {/* Featured Pieces - Premium Version */}
      <section className="re-sans" style={{ background: "var(--sand)", padding: "clamp(60px, 8vw, 92px) 16px clamp(60px, 8vw, 108px)" }}>
        <style>{`
          .feat-card {
            background: #fffdf8;
            border: 1px solid var(--hairline);
            padding: 32px 30px;
            display: grid;
            gap: 12px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .feat-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 22px 48px rgba(36, 26, 21, 0.1);
          }
          .featured-grid-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 44px;
            align-items: center;
          }
          .featured-cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 26px;
          }

          @media (max-width: 1024px) {
            .featured-grid-wrapper {
              gap: 32px;
            }
            .featured-cards-grid {
              grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            }
          }

          @media (max-width: 860px) {
            .featured-grid-wrapper { 
              grid-template-columns: 1fr;
              gap: 32px;
            }
            .featured-image-wrapper { 
              order: -1;
              max-width: 500px;
              margin: 0 auto;
              width: 100%;
            }
          }

          @media (max-width: 600px) {
            .featured-cards-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
            .feat-card {
              padding: 24px 20px;
            }
            .feat-card h3 {
              font-size: 20px !important;
            }
          }
        `}</style>
        <div className="container" style={{ display: "grid", gap: "clamp(32px, 4vw, 44px)" }}>
          <div style={{ textAlign: "center", display: "grid", gap: 10 }}>
            <span className="re-eyebrow" style={{ color: "var(--marigold)" }}>
              Editor's Choice
            </span>
            <h2 className="re-display" style={{ fontSize: "clamp(28px, 4vw, 42px)", margin: 0, color: "var(--ink)", fontWeight: 550 }}>
              Featured Works
            </h2>
          </div>

          <div className="featured-grid-wrapper">
            <div className="featured-image-wrapper">
              <div 
                ref={featuredImageRef.elementRef}
                className={`slide-in-left ${featuredImageRef.isVisible ? 'visible' : ''}`}
                style={{ 
                  position: "relative", 
                  width: "100%", 
                  paddingTop: "75%", 
                  borderRadius: "4px", 
                  overflow: "hidden", 
                  border: "1px solid var(--hairline)" 
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783241411/11_kbakye.png"
                  alt="Featured Rajasthani handicraft pieces"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>

            <div className="featured-cards-grid">
              {featured.map((product) => (
                <div key={product.slug} className="feat-card">
                  <span className="re-eyebrow" style={{ color: "var(--haveli)", fontSize: "clamp(9px, 0.7vw, 10.5px)" }}>
                    {product.category}
                  </span>
                  <h3 className="re-display" style={{ margin: 0, fontSize: "clamp(20px, 1.4vw, 24px)", fontWeight: 560, color: "var(--ink)" }}>
                    {product.name}
                  </h3>
                  <p style={{ margin: 0, fontSize: "clamp(13px, 0.9vw, 14.5px)", lineHeight: 1.65, color: "var(--ink-soft)", fontWeight: 300 }}>
                    {product.description}
                  </p>
                  <span style={{ height: 1, background: "var(--hairline)", marginTop: 4 }} />
                  <Link href={`/product/${product.slug}`} className="re-eyebrow" style={{ color: "var(--marigold)", textDecoration: "none", fontSize: "clamp(10px, 0.7vw, 11px)" }}>
                    View Work →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<FullWidthStorySection />
      <ArtisanStorySection />

      <FullWidthStorySectionThree />

      

      {/* Closing Band */}
      <section
        className="re-sans"
        style={{
          position: "relative",
          background: "var(--haveli-deep)",
          color: "var(--paper)",
          padding: "clamp(48px, 6vw, 76px) 16px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 400 200"
          style={{ position: "absolute", bottom: -60, left: "50%", transform: "translateX(-50%)", width: "clamp(300px, 70vw, 700px)", opacity: 0.06 }}
        >
          <g stroke="var(--marigold-soft)" strokeWidth="1" fill="none">
            {Array.from({ length: 7 }).map((_, i) => (
              <path key={i} d={`M${i * 60} 200V${140 - i * 4}C${i * 60} ${100 - i * 4} ${i * 60 + 30} ${80 - i * 4} ${i * 60 + 60} ${140 - i * 4}V200`} />
            ))}
          </g>
        </svg>
        <div className="container" style={{ position: "relative", display: "grid", gap: 18, justifyItems: "center" }}>
          <span className="re-eyebrow" style={{ color: "var(--marigold-soft)" }}>
            Art With Soul
          </span>
          <h2 className="re-display" style={{ margin: 0, fontSize: "clamp(22px, 3.4vw, 36px)", fontWeight: 550, maxWidth: 560 }}>
            Every piece is a beautiful, inspiring, unforgettable journey.
          </h2>
          <Link
            href="/collections"
            style={{
              marginTop: 8,
              color: "var(--paper)",
              textDecoration: "none",
              borderBottom: "1px solid var(--marigold-soft)",
              paddingBottom: 3,
              fontSize: "clamp(12px, 0.8vw, 14px)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Browse the Full Emporium →
          </Link>
        </div>
      </section>
      <FeaturedStorySection />
    </>
  );
}