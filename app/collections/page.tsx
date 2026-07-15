"use client";

import { ProductGrid } from "@/components/collections/ProductGrid";
import Image from "next/image";
import Link from "next/link";

export default function CollectionsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

        .collections-serif {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
        }
        .collections-sans {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
        }
        .collections-eyebrow {
          font-family: "Jost", sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #b9862f;
        }

        .collections-hero-image {
          position: relative;
          width: 100%;
          padding-top: 35%;
          overflow: hidden;
          border-radius: 2px;
          margin-bottom: 48px;
          background: #ece0c8;
        }

        .collections-hero-image img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .collections-hero-image .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, 
            rgba(36, 26, 21, 0.3) 0%,
            rgba(36, 26, 21, 0.1) 50%,
            rgba(36, 26, 21, 0.05) 100%
          );
        }

        .collections-hero-image .hero-text {
          position: absolute;
          bottom: 12%;
          left: 6%;
          z-index: 2;
          max-width: 480px;
        }

        .collections-hero-image .hero-text .tag {
          font-family: "Jost", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #ddb673;
          background: rgba(36, 26, 21, 0.4);
          backdrop-filter: blur(8px);
          padding: 6px 16px;
          border: 1px solid rgba(185, 134, 47, 0.15);
          border-radius: 2px;
          display: inline-block;
          margin-bottom: 12px;
        }

        .collections-hero-image .hero-text h2 {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 600;
          color: #faf6ee;
          margin: 0 0 6px;
          line-height: 1.1;
        }

        .collections-hero-image .hero-text p {
          font-family: "Jost", sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: rgba(255, 253, 248, 0.8);
          margin: 0;
          line-height: 1.6;
        }

        .collections-stats-row {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(42, 33, 28, 0.04);
          font-family: "Jost", sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #8a7a6b;
        }

        .collections-stats-row .dot {
          color: #b9862f;
          opacity: 0.3;
        }

        .collections-page {
          background: linear-gradient(180deg, #faf6ee 0%, #f6f0e4 40%, #ece2cd 100%);
          padding: 100px 0 80px;
          min-height: calc(100vh - 200px);
          position: relative;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .collections-page .container {
          max-width: 1280px;
          width: 100%;
          position: relative;
          z-index: 1;
          padding: 0 24px;
        }

        .collections-product-section {
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
        }

        /* Desktop and larger screens */
        @media (min-width: 1025px) {
          .collections-page .container {
            padding: 0 24px;
          }
        }

        /* Tablet and smaller desktop */
        @media (max-width: 1024px) {
          .collections-page {
            padding: 90px 0 64px;
          }
          .collections-page .container {
            padding: 0 20px;
          }
          .collections-hero-image {
            padding-top: 42%;
            margin-bottom: 36px;
          }
        }

        @media (max-width: 860px) {
          .collections-page {
            padding: 80px 0 56px;
          }
          .collections-page .container {
            padding: 0 16px;
          }
          .collections-hero-image {
            padding-top: 50%;
            margin-bottom: 32px;
          }
          .collections-hero-image .hero-text {
            bottom: 8%;
            left: 5%;
            max-width: 85%;
          }
          .collections-hero-image .hero-text h2 {
            font-size: clamp(20px, 2.5vw, 26px);
          }
          .collections-stats-row {
            justify-content: flex-start;
            font-size: 11px;
          }
        }

        @media (max-width: 768px) {
          .collections-page {
            padding-top: 72px;
          }
        }

        @media (max-width: 600px) {
          .collections-page {
            padding: 64px 0 48px;
          }
          .collections-page .container {
            padding: 0 12px;
          }
          .collections-hero-image {
            padding-top: 65%;
            margin-bottom: 24px;
          }
          .collections-hero-image .hero-text {
            bottom: 6%;
            left: 4%;
            max-width: 92%;
          }
          .collections-hero-image .hero-text h2 {
            font-size: clamp(16px, 4vw, 22px);
          }
          .collections-hero-image .hero-text p {
            font-size: 11px;
          }
          .collections-stats-row {
            font-size: 10px;
            flex-wrap: wrap;
          }
          .collections-serif {
            font-size: clamp(28px, 6vw, 36px) !important;
          }
        }

        @media (max-width: 480px) {
          .collections-page {
            padding: 56px 0 40px;
          }
          .collections-page .container {
            padding: 0 10px;
          }
          .collections-hero-image {
            padding-top: 75%;
          }
        }

        @media (max-width: 380px) {
          .collections-page {
            padding: 48px 0 32px;
          }
          .collections-page .container {
            padding: 0 8px;
          }
          .collections-hero-image {
            padding-top: 85%;
          }
          .collections-hero-image .hero-text h2 {
            font-size: 14px;
          }
          .collections-hero-image .hero-text p {
            font-size: 10px;
          }
          .collections-serif {
            font-size: 22px !important;
          }
        }

        /* Ensure ProductGrid also respects centering */
        .collections-product-section > * {
          width: 100%;
        }
      `}</style>

      <section className="collections-page">
        <svg
          aria-hidden="true"
          viewBox="0 0 400 400"
          style={{
            position: "absolute",
            bottom: "-120px",
            right: "-80px",
            width: 400,
            height: 400,
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
              marginBottom: 32,
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
              className="collections-serif"
              style={{
                margin: 0,
                fontSize: "clamp(38px, 5.5vw, 56px)",
                color: "#241a15",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              Collections
            </h1>

            <p 
              className="header-description"
              style={{
                margin: 0,
                maxWidth: 640,
                lineHeight: 1.8,
                fontSize: 17,
                color: "#6b5f54",
                fontWeight: 300,
                letterSpacing: "0.01em",
              }}
            >
              Browse our curated selection of authentic Rajasthani handicrafts. 
              Each piece tells a story of craftsmanship and tradition.
            </p>
          </div>

          {/* Hero Image Banner */}
          <div className="collections-hero-image">
            <Image
              src="https://res.cloudinary.com/dlomq2b7z/image/upload/v1783100252/2_xotxvk.jpg"
              alt="Rajasthani handicrafts collection display"
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
            <div className="overlay" />
            <div className="hero-text">
              <span className="tag">✦ Featured Collection</span>
              <h2>Artisan Treasures</h2>
              <p>Discover handcrafted pieces from Rajasthan's master artisans</p>
            </div>
          </div>

          {/* Stats Row */}
          <div className="collections-stats-row">
            <span>{/* products count will be dynamic */}</span>
            <span className="dot">◆</span>
            <span>Categories</span>
          </div>

          {/* Product Grid - with filter inside */}
          <div className="collections-product-section">
            <ProductGrid />
          </div>
        </div>
      </section>
    </>
  );
}