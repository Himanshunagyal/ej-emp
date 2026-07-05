import Link from "next/link";

export function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

        .footer-serif {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
        }
        .footer-sans {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
        }
        .footer-eyebrow {
          font-family: "Jost", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #b9862f;
        }

        .footer-link {
          color: rgba(255, 253, 248, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 300;
          letter-spacing: 0.04em;
          font-size: 14px;
          position: relative;
          padding: 2px 0;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, #b9862f, #ddb673);
          transition: width 0.3s ease;
        }

        .footer-link:hover {
          color: #ddb673;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        .footer-social {
          color: rgba(255, 253, 248, 0.4);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 400;
          font-family: "Jost", sans-serif;
          padding: 4px 0;
          border-bottom: 1px solid transparent;
        }

        .footer-social:hover {
          color: #ddb673;
          border-bottom-color: #b9862f;
        }

        .footer-divider {
          background: linear-gradient(90deg, transparent, rgba(185, 134, 47, 0.4), rgba(221, 182, 115, 0.2), rgba(185, 134, 47, 0.4), transparent);
          height: 1px;
          width: 100%;
          position: relative;
        }

        .footer-divider::after {
          content: '◆';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #b9862f;
          font-size: 8px;
          background: #241a15;
          padding: 0 12px;
          opacity: 0.6;
        }

        .footer-brand-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border: 1px solid rgba(185, 134, 47, 0.3);
          border-radius: 50%;
          margin-right: 8px;
          font-size: 14px;
          color: #b9862f;
          flex-shrink: 0;
        }

        .footer-ornament {
          color: #b9862f;
          opacity: 0.3;
          font-size: 10px;
          letter-spacing: 0.4em;
        }

        .footer-bottom-text {
          font-family: "Jost", sans-serif;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.15em;
          color: rgba(255, 253, 248, 0.3);
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 4px 0;
          transition: all 0.3s ease;
        }

        .footer-contact-item:hover {
          color: #ddb673;
        }

        .footer-contact-item .icon {
          color: #b9862f;
          font-size: 14px;
          opacity: 0.5;
          width: 20px;
          text-align: center;
          flex-shrink: 0;
        }

        .footer-contact-item .text {
          font-weight: 300;
          font-size: 14px;
          color: rgba(255, 253, 248, 0.7);
          transition: color 0.3s ease;
        }

        .footer-contact-item:hover .text {
          color: #ddb673;
        }

        .footer-newsletter-input {
          background: rgba(255, 253, 248, 0.05);
          border: 1px solid rgba(185, 134, 47, 0.2);
          padding: 10px 16px;
          font-family: "Jost", sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #f6f0e4;
          border-radius: 2px;
          width: 100%;
          transition: all 0.3s ease;
          outline: none;
        }

        .footer-newsletter-input::placeholder {
          color: rgba(255, 253, 248, 0.3);
        }

        .footer-newsletter-input:focus {
          border-color: #b9862f;
          background: rgba(255, 253, 248, 0.08);
        }

        .footer-newsletter-btn {
          background: #b9862f;
          color: #241a15;
          border: none;
          padding: 10px 20px;
          font-family: "Jost", sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 2px;
          white-space: nowrap;
        }

        .footer-newsletter-btn:hover {
          background: #ddb673;
          transform: translateY(-1px);
        }

        .footer-newsletter-form {
          display: flex;
          gap: 8px;
          margin-top: 4px;
        }

        @media (max-width: 860px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .footer-newsletter-form {
            flex-direction: column;
          }
          .footer-newsletter-btn {
            width: 100%;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .footer-brand-section {
            text-align: center;
          }
          .footer-brand-section p {
            max-width: 100% !important;
          }
          .footer-social-links {
            justify-content: center !important;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 8px !important;
          }
        }
      `}</style>

      <footer 
        className="footer-sans"
        style={{
          background: "#241a15",
          color: "#f6f0e4",
          padding: "72px 24px 40px",
          marginTop: 0,
          position: "relative",
          borderTop: "1px solid rgba(185, 134, 47, 0.15)",
        }}
      >
        {/* Ornamental divider at top */}
        <div className="footer-divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

        <div 
          className="container footer-grid" 
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr 0.8fr 0.9fr",
            gap: 48,
          }}
        >
          {/* Brand Section */}
          <div className="footer-brand-section" style={{ display: "grid", gap: 14 }}>
            <Link 
              href="/" 
              className="footer-serif"
              style={{
                fontWeight: 600,
                fontSize: "clamp(26px, 2.8vw, 34px)",
                color: "#ddb673",
                textDecoration: "none",
                letterSpacing: "0.01em",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span className="footer-brand-icon">✦</span>
              <span>Rajasthan Emporium</span>
            </Link>
            
            <p style={{ 
              margin: 0, 
              lineHeight: 1.8, 
              fontSize: 14.5,
              color: "rgba(255, 253, 248, 0.6)",
              fontWeight: 300,
              maxWidth: 340,
              fontFamily: "'Jost', sans-serif",
              letterSpacing: "0.01em",
            }}>
              Authentic Rajasthani handicrafts — textiles, pottery, jewelry, 
              paintings, and decor, each piece carried out by hand with the 
              warmth and detail of India's artisan houses.
            </p>
            
            <div className="footer-social-links" style={{ display: "flex", gap: 20, marginTop: 4 }}>
              {["Instagram", "Facebook", "YouTube", "Pinterest"].map((social) => (
                <span key={social} className="footer-social">
                  {social}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: "grid", gap: 14 }}>
            <h4 className="footer-eyebrow" style={{ margin: 0, color: "#b9862f" }}>
              Quick Links
            </h4>
            <nav style={{ display: "grid", gap: 6 }}>
              {[
                { href: "/collections", label: "Collections" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Get in Touch" },
                { href: "/admin", label: "Admin" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="footer-link">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div style={{ display: "grid", gap: 14 }}>
            <h4 className="footer-eyebrow" style={{ margin: 0, color: "#b9862f" }}>
              Contact
            </h4>
            <div style={{ display: "grid", gap: 2 }}>
              <div className="footer-contact-item">
                <span className="icon">📍</span>
                <span className="text">Jaipur, Rajasthan</span>
              </div>
              <div className="footer-contact-item">
                <span className="icon">✉</span>
                <span className="text">hello@rajasthanemporium.com</span>
              </div>
              <div className="footer-contact-item">
                <span className="icon">📞</span>
                <span className="text">+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div style={{ display: "grid", gap: 14 }}>
            <h4 className="footer-eyebrow" style={{ margin: 0, color: "#b9862f" }}>
              Newsletter
            </h4>
            <p style={{
              margin: 0,
              fontSize: 13,
              color: "rgba(255, 253, 248, 0.5)",
              fontWeight: 300,
              lineHeight: 1.6,
              fontFamily: "'Jost', sans-serif",
            }}>
              Subscribe for artisan stories and new arrivals.
            </p>
            <div className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                className="footer-newsletter-input"
                aria-label="Email address"
              />
              <button className="footer-newsletter-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Ornamental divider */}
        <div 
          className="footer-divider" 
          style={{ 
            maxWidth: 1280, 
            margin: "40px auto 28px",
            position: "relative",
          }} 
        />

        {/* Bottom Bar */}
        <div 
          className="footer-bottom"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span className="footer-bottom-text">
              © {new Date().getFullYear()} Rajasthan Emporium
            </span>
            <span className="footer-ornament">◆</span>
            <span className="footer-bottom-text">All rights reserved</span>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span className="footer-bottom-text">Crafted with</span>
            <span style={{ color: "#b9862f", fontSize: 14 }}>♥</span>
            <span className="footer-bottom-text">in Rajasthan</span>
            <span className="footer-ornament">◆</span>
            <span className="footer-bottom-text" style={{ letterSpacing: "0.08em" }}>
              Art with Soul
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}