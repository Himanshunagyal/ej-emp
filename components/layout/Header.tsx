"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/admin", label: "Admin" }
];

export function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Jost:wght@300;400;500;600&display=swap');

        .header-serif {
          font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
        }
        .header-sans {
          font-family: "Jost", "Helvetica Neue", Arial, sans-serif;
        }
        .header-eyebrow {
          font-family: "Jost", sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        .header-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 0 24px;
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          background: #4d0e17;
        }

        .header-wrapper.transparent {
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: none;
        }

        .header-wrapper.transparent .header-container {
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: none;
          border-radius: 0;
        }

        .header-wrapper.transparent .header-rule {
          opacity: 0;
        }

        .header-wrapper.transparent .header-logo-text {
          color: #f6f0e4;
        }

        .header-wrapper.transparent .nav-link {
          color: #f6f0e4;
        }

        .header-wrapper.transparent .nav-link:hover {
          color: #cdaa66;
          border-color: rgba(168, 130, 61, 0.3);
          background: rgba(168, 130, 61, 0.08);
        }

        .header-wrapper.transparent .mobile-menu-btn span {
          background: #f6f0e4;
        }

        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          min-height: 72px;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: rgba(77, 14, 23, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 12px;
          padding: 0 24px;
          box-shadow: 0 2px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(168, 130, 61, 0.08);
        }

        .header-wrapper.transparent .header-container {
          background: transparent;
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          box-shadow: none;
          border: none;
          border-radius: 0;
          padding: 0 0;
        }

        .header-wrapper:not(.transparent) .header-container {
          margin-top: 12px;
        }

        .header-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .header-logo .logo-image {
          position: relative;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .header-logo-text {
          font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
          font-weight: 500;
          font-size: clamp(18px, 2.2vw, 26px);
          color: #f6f0e4;
          letter-spacing: 0.02em;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .header-logo-text .gold {
          color: #cdaa66;
        }

        /* Desktop Navigation */
        .nav-desktop {
          display: flex;
          gap: 4px;
          flex-wrap: wrap;
          align-items: center;
        }

        .nav-link {
          color: #f6f0e4;
          text-decoration: none;
          padding: 8px 14px;
          transition: all 0.2s ease;
          border: 1px solid transparent;
          border-radius: 2px;
          letter-spacing: 0.1em;
          font-size: 11px;
          position: relative;
          background: transparent;
          white-space: nowrap;
        }

        .nav-link:hover {
          color: #cdaa66;
          border-color: rgba(168, 130, 61, 0.3);
          background: rgba(168, 130, 61, 0.08);
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 60;
        }

        .mobile-menu-btn span {
          display: block;
          width: 24px;
          height: 2px;
          background: #f6f0e4;
          transition: all 0.3s ease;
          border-radius: 1px;
        }

        .mobile-menu-btn.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-menu-btn.active span:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-btn.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Mobile Navigation - Slide in from right */
        .nav-mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 55;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .nav-mobile-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .nav-mobile {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          max-width: 85vw;
          height: 100%;
          background: #4d0e17;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 56;
          padding: 80px 32px 40px;
          display: flex;
          flex-direction: column;
          transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow-y: auto;
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.2);
        }

        .nav-mobile.open {
          right: 0;
        }

        .nav-mobile .nav-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: transparent;
          border: none;
          color: #f6f0e4;
          font-size: 24px;
          cursor: pointer;
          padding: 8px;
          transition: all 0.3s ease;
        }

        .nav-mobile .nav-close-btn:hover {
          transform: rotate(90deg);
          color: #cdaa66;
        }

        .nav-mobile .nav-logo {
          margin-bottom: 40px;
          border-bottom: 1px solid rgba(168, 130, 61, 0.1);
          padding-bottom: 20px;
        }

        .nav-mobile .nav-logo .logo-text {
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: 22px;
          font-weight: 500;
          color: #f6f0e4;
          letter-spacing: 0.02em;
        }

        .nav-mobile .nav-logo .logo-text .gold {
          color: #cdaa66;
        }

        .nav-mobile .nav-links {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .nav-mobile .nav-link {
          color: #f6f0e4;
          text-decoration: none;
          padding: 14px 16px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          border-radius: 2px;
          letter-spacing: 0.1em;
          font-size: 16px;
          font-weight: 400;
          width: 100%;
          text-align: left;
        }

        .nav-mobile .nav-link:hover {
          color: #cdaa66;
          border-color: rgba(168, 130, 61, 0.2);
          background: rgba(168, 130, 61, 0.05);
        }

        .nav-mobile .nav-link.active {
          color: #cdaa66;
          border-color: rgba(168, 130, 61, 0.2);
          background: rgba(168, 130, 61, 0.05);
        }

        .nav-mobile .nav-footer {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid rgba(168, 130, 61, 0.1);
          font-family: "Jost", sans-serif;
          font-size: 11px;
          color: rgba(255, 253, 248, 0.3);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-align: center;
        }

        .nav-mobile .nav-footer span {
          color: #b9862f;
        }

        /* Ornamental rule */
        .header-rule {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #a8823d 20%, #a8823d 80%, transparent 100%);
          opacity: 0.3;
          transition: opacity 0.5s ease;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header-wrapper {
            padding: 0 16px;
            min-height: 64px;
          }

          .header-container {
            min-height: 64px;
            padding: 0 16px;
            border-radius: 10px;
          }

          .header-wrapper:not(.transparent) .header-container {
            margin-top: 8px;
          }

          .header-logo .logo-image {
            width: 34px;
            height: 34px;
          }

          .header-logo-text {
            font-size: 16px;
          }

          .nav-desktop {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .header-wrapper {
            padding: 0 12px;
            min-height: 56px;
          }

          .header-container {
            min-height: 56px;
            padding: 0 14px;
            border-radius: 8px;
          }

          .header-wrapper:not(.transparent) .header-container {
            margin-top: 6px;
          }

          .header-logo .logo-image {
            width: 30px;
            height: 30px;
          }

          .header-logo-text {
            font-size: 14px;
          }

          .nav-mobile {
            width: 280px;
            padding: 70px 24px 32px;
          }

          .nav-mobile .nav-link {
            font-size: 15px;
            padding: 12px 14px;
          }
        }

        @media (min-width: 769px) {
          .nav-mobile-overlay,
          .nav-mobile {
            display: none !important;
          }
        }
      `}</style>

      <header className="header-sans">
        <div className={`header-wrapper ${isScrolled ? 'transparent' : ''}`}>
          <div className="header-container">
            {/* Logo */}
            <Link href="/" className="header-logo">
              <div className="logo-image">
                <Image
                  src="/images/logo.jpeg"
                  alt="Rajasthan Emporium"
                  fill
                  sizes="40px"
                  style={{ 
                    objectFit: "contain",
                    borderRadius: "4px",
                  }}
                  priority
                />
              </div>
              <span className="header-logo-text">
                Rajasthan <span className="gold">Emporium</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              {nav.map((item) => {
                const isHovered = hoveredItem === item.href;
                return (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    className="nav-link"
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                    style={{
                      color: isHovered ? "#cdaa66" : "#f6f0e4",
                      borderColor: isHovered ? "rgba(168, 130, 61, 0.3)" : "transparent",
                      background: isHovered ? "rgba(168, 130, 61, 0.08)" : "transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`nav-mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Panel - Slides in from right */}
        <div className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
          <button 
            className="nav-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          <div className="nav-logo">
            <span className="logo-text">
              Rajasthan <span className="gold">Emporium</span>
            </span>
          </div>

          <div className="nav-links">
            {nav.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-footer">
            <span>✦</span> Art with Soul <span>✦</span>
          </div>
        </div>
      </header>
    </>
  );
}