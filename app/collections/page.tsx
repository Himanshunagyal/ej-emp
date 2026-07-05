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

        .collections-filter-bar {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 32px;
          padding: 16px 0;
          border-bottom: 1px solid rgba(42, 33, 28, 0.06);
        }

        .collections-filter-bar .filter-label {
          font-family: "Jost", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6b5f54;
          display: flex;
          align-items: center;
          margin-right: 8px;
        }

        .collections-filter-bar .filter-btn {
          font-family: "Jost", sans-serif;
          font-size: 12px;
          font-weight: 400;
          padding: 6px 18px;
          border: 1px solid rgba(42, 33, 28, 0.08);
          border-radius: 2px;
          background: transparent;
          color: #6b5f54;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .collections-filter-bar .filter-btn:hover {
          border-color: #b9862f;
          color: #241a15;
          background: rgba(185, 134, 47, 0.04);
        }

        .collections-filter-bar .filter-btn.active {
          border-color: #b9862f;
          color: #4d0e17;
          background: rgba(185, 134, 47, 0.08);
        }

        .collections-stats {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-left: auto;
          font-family: "Jost", sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #8a7a6b;
        }

        .collections-stats .dot {
          color: #b9862f;
          opacity: 0.3;
        }

        @media (max-width: 1024px) {
          .collections-hero-image {
            padding-top: 45%;
          }
        }

        @media (max-width: 860px) {
          .collections-hero-image {
            padding-top: 55%;
          }
          .collections-hero-image .hero-text {
            bottom: 8%;
            left: 5%;
            max-width: 80%;
          }
          .collections-hero-image .hero-text h2 {
            font-size: 20px;
          }
          .collections-filter-bar {
            flex-wrap: wrap;
            gap: 8px;
          }
          .collections-stats {
            margin-left: 0;
            width: 100%;
            justify-content: flex-start;
            padding-top: 8px;
            border-top: 1px solid rgba(42, 33, 28, 0.04);
          }
        }

        @media (max-width: 600px) {
          .collections-hero-image {
            padding-top: 65%;
          }
          .collections-hero-image .hero-text {
            bottom: 6%;
            left: 4%;
            max-width: 90%;
          }
          .collections-hero-image .hero-text h2 {
            font-size: 18px;
          }
          .collections-hero-image .hero-text p {
            font-size: 12px;
          }
          .collections-filter-bar .filter-btn {
            font-size: 11px;
            padding: 4px 14px;
          }
        }
      `}</style>

      <section 
        className="collections-sans"
        style={{
          background: "linear-gradient(180deg, #faf6ee 0%, #f6f0e4 40%, #ece2cd 100%)",
          padding: "40px 24px 80px",
          minHeight: "calc(100vh - 200px)",
          position: "relative",
        }}
      >
        {/* Decorative background element */}
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

        <div 
          className="container" 
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
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

            <span className="collections-eyebrow">
              The Emporium
            </span>

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
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="overlay" />
            <div className="hero-text">
              <span className="tag">✦ Featured Collection</span>
              <h2>Artisan Treasures</h2>
              <p>Discover handcrafted pieces from Rajasthan's master artisans</p>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="collections-filter-bar">
            <span className="filter-label">Browse:</span>
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Textiles</button>
            <button className="filter-btn">Pottery</button>
            <button className="filter-btn">Jewelry</button>
            <button className="filter-btn">Paintings</button>
            <button className="filter-btn">Decor</button>
            <div className="collections-stats">
              <span>12 products</span>
              <span className="dot">◆</span>
              <span>6 categories</span>
            </div>
          </div>

          {/* Product Grid */}
          <ProductGrid />
        </div>
      </section>
    </>
  );
}