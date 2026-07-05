import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

        .about-serif {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
        }
        .about-sans {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
        }
        .about-eyebrow {
          font-family: "Jost", sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #b9862f;
        }

        .about-image-card {
          position: relative;
          overflow: hidden;
          border-radius: 2px;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }

        .about-image-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(36, 26, 21, 0.15);
        }

        .about-image-card .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, 
            rgba(36, 26, 21, 0.1) 0%,
            rgba(36, 26, 21, 0.5) 80%,
            rgba(36, 26, 21, 0.7) 100%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          display: flex;
          align-items: flex-end;
          padding: 24px;
          z-index: 2;
        }

        .about-image-card:hover .image-overlay {
          opacity: 1;
        }

        .about-image-card .image-label {
          font-family: "Jost", sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #ddb673;
          background: rgba(36, 26, 21, 0.6);
          backdrop-filter: blur(8px);
          padding: 6px 16px;
          border: 1px solid rgba(185, 134, 47, 0.2);
          border-radius: 2px;
          transform: translateY(10px);
          transition: transform 0.5s ease;
        }

        .about-image-card:hover .image-label {
          transform: translateY(0);
        }

        .about-image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 100%;
          overflow: hidden;
          background: #ece0c8;
        }

        .about-image-wrapper .image-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: rgba(36, 26, 21, 0.3);
          font-family: "Jost", sans-serif;
          font-weight: 300;
          letter-spacing: 0.1em;
          flex-direction: column;
          gap: 8px;
          background: #ece0c8;
        }

        .about-image-wrapper .image-placeholder svg {
          opacity: 0.2;
        }

        .about-image-wrapper img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .about-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
        }

        .about-gallery-grid .about-image-wrapper {
          padding-top: 120%;
        }

        .about-gallery-grid .about-image-card:nth-child(1) {
          grid-column: span 2;
          grid-row: span 2;
        }

        .about-gallery-grid .about-image-card:nth-child(1) .about-image-wrapper {
          padding-top: 100%;
        }

        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          margin-top: 8px;
        }

        .about-value-card {
          background: rgba(255, 253, 248, 0.5);
          border: 1px solid rgba(42, 33, 28, 0.06);
          padding: 28px 24px;
          text-align: center;
          transition: all 0.4s ease;
          position: relative;
        }

        .about-value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(36, 26, 21, 0.08);
          border-color: rgba(185, 134, 47, 0.2);
        }

        .about-value-card .icon {
          font-size: 32px;
          margin-bottom: 12px;
          display: block;
        }

        .about-value-card h4 {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: 18px;
          font-weight: 600;
          color: #4d0e17;
          margin: 0 0 6px;
        }

        .about-value-card p {
          font-family: "Jost", sans-serif;
          font-size: 13.5px;
          font-weight: 300;
          color: #6b5f54;
          margin: 0;
          line-height: 1.7;
        }

        .about-quote-block {
          position: relative;
          padding: 40px 48px;
          background: rgba(255, 253, 248, 0.4);
          border-left: 3px solid #b9862f;
          margin: 12px 0;
        }

        .about-quote-block::before {
          content: '"';
          position: absolute;
          top: -8px;
          left: 16px;
          font-size: 60px;
          font-family: "Playfair Display", Georgia, serif;
          color: #b9862f;
          opacity: 0.15;
          line-height: 1;
        }

        .about-quote-block p {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: clamp(20px, 2vw, 26px);
          font-weight: 400;
          font-style: italic;
          color: #2a211c;
          margin: 0 0 8px;
          line-height: 1.5;
        }

        .about-quote-block .attribution {
          font-family: "Jost", sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #6b5f54;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        @media (max-width: 1024px) {
          .about-gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .about-gallery-grid .about-image-card:nth-child(1) {
            grid-column: span 2;
          }
        }

        @media (max-width: 860px) {
          .about-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-gallery-grid .about-image-card:nth-child(1) {
            grid-column: span 2;
          }
          .about-values-grid {
            grid-template-columns: 1fr 1fr;
          }
          .about-quote-block {
            padding: 32px 24px;
          }
          .about-quote-block p {
            font-size: 18px;
          }
        }

        @media (max-width: 600px) {
          .about-gallery-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4px;
          }
          .about-gallery-grid .about-image-card:nth-child(1) {
            grid-column: span 2;
          }
          .about-values-grid {
            grid-template-columns: 1fr;
          }
          .about-quote-block {
            padding: 24px 20px;
          }
          .about-quote-block p {
            font-size: 16px;
          }
        }
      `}</style>

      <section 
        className="about-sans"
        style={{
          background: "linear-gradient(180deg, #faf6ee 0%, #f6f0e4 40%, #ece2cd 100%)",
          padding: "40px 24px 80px",
          minHeight: "calc(100vh - 200px)",
          position: "relative",
          overflow: "hidden",
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
            width: 450,
            height: 450,
            opacity: 0.06,
          }}
        >
          <g stroke="#a8823d" strokeWidth="1">
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
            maxWidth: 1100,
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

            <span className="about-eyebrow">
              Our Story
            </span>

            <h1 
              className="about-serif"
              style={{
                margin: 0,
                fontSize: "clamp(38px, 5.5vw, 56px)",
                color: "#241a15",
                fontWeight: 600,
                letterSpacing: "-0.01em",
              }}
            >
              About Rajasthan Emporium
            </h1>
          </div>

          {/* Introduction with Image */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            marginBottom: 48,
            alignItems: "center",
          }}>
            <div>
              <div style={{
                background: "rgba(255, 253, 248, 0.6)",
                padding: "32px 36px",
                border: "1px solid rgba(42, 33, 28, 0.06)",
                borderRadius: 2,
              }}>
                <p style={{ 
                  margin: 0, 
                  fontWeight: 300,
                  color: "#241a15",
                  fontSize: 17,
                  lineHeight: 1.8,
                }}>
                  Rajasthan Emporium celebrates the handmade traditions of Rajasthan, 
                  from block printed textiles and blue pottery to festive jewelry and 
                  carved decor. This website is a simple product showcase built for 
                  enquiries, not online checkout.
                </p>
              </div>
            </div>
            <div className="about-image-card">
              <div className="about-image-wrapper" style={{ paddingTop: "75%" }}>
                <Image
                  src="https://res.cloudinary.com/dlomq2b7z/image/upload/v1783100251/1_dn5utr.jpg"
                  alt="Artisan working on traditional Rajasthani handicraft in workshop"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="image-overlay">
                  <span className="image-label">✦ Artisan at Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Image Gallery - Artisan Mastery */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <span className="about-eyebrow">Artisan Mastery</span>
              <h2 className="about-serif" style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                color: "#241a15",
                fontWeight: 600,
                margin: "4px 0 8px",
              }}>
                The Hands Behind the Art
              </h2>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 15,
                fontWeight: 300,
                color: "#6b5f54",
                maxWidth: 540,
                margin: "0 auto",
                lineHeight: 1.7,
              }}>
                From block printing to blue pottery, each piece carries the touch of generations.
              </p>
            </div>

            <div className="about-gallery-grid">
              {[
                { label: "Block Printing", image: "https://res.cloudinary.com/dlomq2b7z/image/upload/v1783100252/2_xotxvk.jpg" },
                { label: "Blue Pottery", image: "https://res.cloudinary.com/dlomq2b7z/image/upload/v1783100251/1_dn5utr.jpg" },
                { label: "Hand Weaving", image: "https://res.cloudinary.com/dlomq2b7z/image/upload/v1782987873/a7a177c0-16be-4f4d-970a-e8f01d23dc6f_dz7yqp.png" },
                { label: "Metal Craft", image: "https://res.cloudinary.com/dlomq2b7z/image/upload/v1783100252/2_xotxvk.jpg" },
                { label: "Jewelry Making", image: "https://res.cloudinary.com/dlomq2b7z/image/upload/v1783100251/1_dn5utr.jpg" },
                { label: "Wood Carving", image: "https://res.cloudinary.com/dlomq2b7z/image/upload/v1782987873/a7a177c0-16be-4f4d-970a-e8f01d23dc6f_dz7yqp.png" },
              ].map((item, index) => (
                <div key={index} className="about-image-card">
                  <div className="about-image-wrapper">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                    />
                    <div className="image-overlay">
                      <span className="image-label">✦ {item.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <span className="about-eyebrow">Our Values</span>
              <h2 className="about-serif" style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                color: "#241a15",
                fontWeight: 600,
                margin: "4px 0 8px",
              }}>
                Crafted with Soul
              </h2>
            </div>

            <div className="about-values-grid">
              {[
                { icon: "", title: "Fair Trade", desc: "We work directly with artisans, ensuring fair wages and sustainable livelihoods for every family we partner with." },
                { icon: "", title: "Natural Materials", desc: "From indigo dyes to hand-carved wood, we use materials that honor both tradition and the environment." },
                { icon: "", title: "Generational Skill", desc: "Many of our artisans learned their craft from parents and grandparents, keeping centuries-old techniques alive." },
                { icon: "", title: "Authentic Craft", desc: "Every piece is made by hand, with the unique imperfections that make each creation one-of-a-kind." },
              ].map((value, index) => (
                <div key={index} className="about-value-card">
                  <span className="icon">{value.icon}</span>
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Block */}
          <div className="about-quote-block">
            <p>
              Every piece carries the spirit of Rajasthan — the warmth of its people, 
              the richness of its culture, and the beauty of hands that create.
            </p>
            <div className="attribution">— Master Artisan, Jaipur</div>
          </div>

          {/* Decorative Divider */}
          <div
            aria-hidden="true"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              padding: "20px 0 12px",
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

          {/* Content Sections */}
          <div style={{
            display: "grid",
            gap: 24,
            paddingTop: 12,
          }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 24,
            }}>
              <div style={{
                padding: "24px 28px",
                background: "rgba(255, 253, 248, 0.4)",
                border: "1px solid rgba(42, 33, 28, 0.06)",
                borderRadius: 2,
              }}>
                <h3 className="about-serif" style={{
                  margin: "0 0 8px",
                  fontSize: 20,
                  color: "#4d0e17",
                  fontWeight: 600,
                }}>
                  Artisan Network
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: 14,
                  color: "#6b5f54",
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}>
                  We partner with over 50 artisan families across Jaipur, Jodhpur, 
                  and Udaipur, each specializing in their unique craft.
                </p>
              </div>
              <div style={{
                padding: "24px 28px",
                background: "rgba(255, 253, 248, 0.4)",
                border: "1px solid rgba(42, 33, 28, 0.06)",
                borderRadius: 2,
              }}>
                <h3 className="about-serif" style={{
                  margin: "0 0 8px",
                  fontSize: 20,
                  color: "#4d0e17",
                  fontWeight: 600,
                }}>
                  Quality Process
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: 14,
                  color: "#6b5f54",
                  fontWeight: 300,
                  lineHeight: 1.7,
                }}>
                  Each piece undergoes rigorous quality checks, ensuring it meets 
                  the highest standards of craftsmanship.
                </p>
              </div>
            </div>

            <div style={{
              padding: "24px 28px",
              background: "rgba(255, 253, 248, 0.4)",
              border: "1px solid rgba(42, 33, 28, 0.06)",
              borderRadius: 2,
              textAlign: "center",
            }}>
              <h3 className="about-serif" style={{
                margin: "0 0 8px",
                fontSize: 20,
                color: "#4d0e17",
                fontWeight: 600,
              }}>
                Sourcing Details
              </h3>
              <p style={{
                margin: 0,
                fontSize: 14,
                color: "#6b5f54",
                fontWeight: 300,
                lineHeight: 1.7,
                maxWidth: 540,
                margin: "0 auto",
              }}>
                We source directly from artisans, ensuring authenticity and fair trade 
                practices in every piece we showcase.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}