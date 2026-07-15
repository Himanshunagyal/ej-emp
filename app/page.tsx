"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { sampleProducts } from "@/lib/sample-data";

/* =========================================================================
   SHARED: scroll reveal (quiet, short-throw — not a dramatic slide)
   ========================================================================= */
function useScrollAnimation() {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { elementRef, isVisible };
}

/* =========================================================================
   GLOBAL TOKENS
   ========================================================================= */
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@200;300;400;500&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&display=swap');

      :root {
        --ink: #221b15;
        --ink-soft: #6d5e4f;
        --paper: #f8f3e9;
        --sand: #ece0c8;
        --sand-deep: #ddcba0;
        --haveli: #6d1220;
        --haveli-deep: #3a0b10;
        --brass: #a3793d;
        --brass-soft: #cbae7c;
        --hairline: rgba(34, 27, 21, 0.13);
      }

      .re-display { font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif; }
      .re-accent { font-family: "Cormorant Garamond", Georgia, serif; font-style: italic; }
      .re-sans { font-family: "Jost", "Helvetica Neue", Arial, sans-serif; }
      .re-eyebrow {
        font-family: "Jost", sans-serif;
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.32em;
        text-transform: uppercase;
      }

      a:focus-visible, button:focus-visible, input:focus-visible {
        outline: 2px solid var(--brass);
        outline-offset: 3px;
      }

      .reveal {
        opacity: 0;
        transform: translateY(22px);
        transition: opacity 0.9s ease, transform 0.9s ease;
      }
      .reveal.visible { opacity: 1; transform: translateY(0); }

      @media (prefers-reduced-motion: reduce) {
        .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
      }
    `}</style>
  );
}

/* =========================================================================
   HERO
   ========================================================================= */
function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  const heroImageUrl =
    "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1784100295/hero_abfpko.png";

  return (
    <>
      <style>{`
        .hero-premium {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--paper);
          padding-top: 0;
          overflow: hidden;
        }

        /* Full-cover background image */
        .hero-premium .hero-bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-premium .hero-bg-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* Dark overlay for text readability */
        .hero-premium .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,
            rgba(248, 243, 233, 0.85) 0%,
            rgba(248, 243, 233, 0.4) 30%,
            rgba(34, 27, 21, 0.1) 60%,
            rgba(34, 27, 21, 0.3) 85%,
            rgba(34, 27, 21, 0.5) 100%
          );
          z-index: 1;
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 24px;
          width: 100%;
        }

        .hero-text-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 22px;
        }

        .hero-subtitle {
          font-family: "Jost", sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--brass);
        }

        .hero-title {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(42px, 7.5vw, 84px);
          font-weight: 600;
          line-height: 1.03;
          color: var(--ink);
          letter-spacing: -0.015em;
          margin: 0;
        }
        .hero-title .highlight {
          color: var(--haveli);
          font-family: "Cormorant Garamond", Georgia, serif;
          font-style: italic;
          font-weight: 500;
        }

        .hero-description {
          font-family: "Jost", sans-serif;
          font-size: clamp(15px, 1.05vw, 17px);
          font-weight: 300;
          line-height: 1.85;
          color: var(--ink-soft);
          margin: 0;
          max-width: 460px;
        }

        .hero-actions {
          display: flex;
          gap: 28px;
          align-items: center;
          margin-top: 10px;
        }

        .hero-btn-primary {
          font-family: "Jost", sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 16px 40px;
          border: 1px solid var(--haveli);
          background: var(--haveli);
          color: var(--paper);
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .hero-btn-primary:hover { background: var(--haveli-deep); border-color: var(--haveli-deep); }

        .hero-btn-secondary {
          font-family: "Jost", sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--ink);
          border-bottom: 1px solid var(--brass);
          padding-bottom: 4px;
          transition: color 0.3s ease, border-color 0.3s ease;
        }
        .hero-btn-secondary:hover { color: var(--haveli); border-color: var(--haveli); }

        @media (max-width: 600px) {
          .hero-premium { min-height: 82vh; }
          .hero-content-wrapper { padding: 60px 20px; }
          .hero-title { font-size: clamp(32px, 9vw, 44px); }
          .hero-actions { flex-direction: column; gap: 16px; width: 100%; }
          .hero-btn-primary { width: 100%; text-align: center; }
          .hero-premium .hero-bg-overlay {
            background: linear-gradient(180deg,
              rgba(248, 243, 233, 0.9) 0%,
              rgba(248, 243, 233, 0.5) 25%,
              rgba(34, 27, 21, 0.2) 50%,
              rgba(34, 27, 21, 0.5) 85%,
              rgba(34, 27, 21, 0.7) 100%
            );
          }
        }
      `}</style>

      <section className="hero-premium">
        {/* Full-cover background image */}
        <div className="hero-bg-image">
          <Image
            src={heroImageUrl}
            alt="Rajasthani handicrafts"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1.4s ease",
            }}
            priority
          />
        </div>
        <div className="hero-bg-overlay" />

        <div className="hero-content-wrapper">
          <div className="hero-text-content">
            <span className="hero-subtitle">A Living Tradition of Indian Craft</span>
            <h1 className="hero-title">
              Rajasthan <span className="highlight">Emporium</span>
            </h1>
            <p className="hero-description">
              Textiles, pottery, jewellery, and painting — each piece carried
              through by hand, exactly as it has been for generations.
            </p>
            <div className="hero-actions">
              <Link href="/collections" className="hero-btn-primary">View Collections</Link>
              <Link href="/contact" className="hero-btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   DIVIDER — single, quiet, recurring device
   ========================================================================= */
function Divider() {
  return (
    <div style={{ background: "var(--paper)", padding: "6px 0" }}>
      <svg viewBox="0 0 200 24" style={{ display: "block", width: "clamp(90px, 12vw, 130px)", margin: "0 auto" }} aria-hidden="true">
        <g stroke="var(--brass)" strokeWidth="1" fill="none">
          <line x1="0" y1="12" x2="82" y2="12" />
          <line x1="118" y1="12" x2="200" y2="12" />
          <circle cx="100" cy="12" r="5" />
        </g>
      </svg>
    </div>
  );
}

/* =========================================================================
   CRAFT INDEX — static, no marquee
   ========================================================================= */
function CraftTicker() {
  const crafts = [
    "Bandhani Tie-Dye", "Meenakari Enamel", "Blue Pottery", "Hand Block Print",
    "Lac Jewelry", "Marble Inlay", "Phad Painting", "Kundan Work",
  ];

  return (
    <>
      <style>{`
        .craft-index {
          background: var(--haveli-deep);
          border-top: 1px solid rgba(203, 174, 124, 0.25);
          border-bottom: 1px solid rgba(203, 174, 124, 0.25);
          padding: 20px 24px;
        }
        .craft-index-row {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px 0;
        }
        .craft-index-item {
          font-family: "Jost", sans-serif;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--brass-soft);
          padding: 0 22px;
          border-right: 1px solid rgba(203, 174, 124, 0.25);
        }
        .craft-index-item:last-child { border-right: none; }
        @media (max-width: 700px) {
          .craft-index-item { font-size: 10px; padding: 0 12px; }
        }
      `}</style>
      <div className="craft-index re-sans">
        <div className="craft-index-row">
          {crafts.map((c) => (
            <span className="craft-index-item" key={c}>{c}</span>
          ))}
        </div>
      </div>
    </>
  );
}

/* =========================================================================
   DISCIPLINE INDEX — replaces the card grid
   ========================================================================= */
function DisciplineIndexSection() {
  const feature = {
    title: "Wooden Hindu Temple Shrine",
    copy: "Intricately carved wooden shrine reflecting centuries of temple architecture.",
    image: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783242954/15_h6fiv8.png",
  };

  const disciplines = [
    { numeral: "I", name: "Pottery", copy: "Earth's memory shaped by patient hands.", href: "/collections?category=Pottery", image: "https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783241411/11_kbakye.png" },
    { numeral: "II", name: "Jewelry", copy: "Adornments that carry stories of generations.", href: "/collections?category=Jewelry", image: "https://res.cloudinary.com/dlomq2b7z/image/upload/v1782987873/a7a177c0-16be-4f4d-970a-e8f01d23dc6f_dz7yqp.png" },
    { numeral: "III", name: "Paintings", copy: "Visionary tales on cloth and paper.", href: "/collections?category=Paintings", image: "https://res.cloudinary.com/dlomq2b7z/image/upload/v1783100251/1_dn5utr.jpg" },
    { numeral: "IV", name: "Woodcraft", copy: "Timeless forms carved from nature's bounty.", href: "/collections?category=Woodcraft", image: "https://res.cloudinary.com/dlomq2b7z/image/upload/v1783100252/2_xotxvk.jpg" },
  ];

  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <>
      <style>{`
        .disc-section { background: var(--paper); padding: clamp(64px, 8vw, 112px) 16px; }
        .disc-header { text-align: center; display: grid; gap: 10px; margin-bottom: clamp(48px, 6vw, 68px); }
        .disc-header h2 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 550;
          color: var(--ink);
          margin: 0;
        }
        .disc-header .eyebrow { color: var(--brass); }

        .disc-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 60px;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
        }

        .disc-feature-image {
          position: relative;
          width: 100%;
          padding-top: 108%;
          overflow: hidden;
        }
        .disc-feature-image img { object-fit: cover; }
        .disc-feature-caption {
          margin-top: 16px;
          display: grid;
          gap: 4px;
        }
        .disc-feature-caption h3 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(19px, 1.4vw, 23px);
          font-weight: 600;
          color: var(--ink);
          margin: 0;
        }
        .disc-feature-caption p {
          font-family: "Jost", sans-serif;
          font-size: 13.5px;
          font-weight: 300;
          color: var(--ink-soft);
          margin: 0;
        }

        .disc-list { display: grid; }
        .disc-row {
          display: grid;
          grid-template-columns: 44px 88px 1fr auto;
          align-items: center;
          gap: 22px;
          padding: 26px 0;
          border-bottom: 1px solid var(--hairline);
          text-decoration: none;
          transition: padding-left 0.35s ease;
        }
        .disc-row:first-child { border-top: 1px solid var(--hairline); }
        .disc-row:hover { padding-left: 10px; }

        .disc-numeral {
          font-family: "Cormorant Garamond", Georgia, serif;
          font-style: italic;
          font-size: 20px;
          color: var(--brass);
        }
        .disc-thumb {
          position: relative;
          width: 88px;
          height: 88px;
          overflow: hidden;
        }
        .disc-thumb img { object-fit: cover; }
        .disc-text h4 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(19px, 1.4vw, 24px);
          font-weight: 600;
          color: var(--ink);
          margin: 0 0 4px;
        }
        .disc-text p {
          font-family: "Jost", sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: var(--ink-soft);
          margin: 0;
        }
        .disc-arrow {
          font-family: "Jost", sans-serif;
          font-size: 12px;
          color: var(--brass);
          opacity: 0;
          transform: translateX(-6px);
          transition: all 0.3s ease;
        }
        .disc-row:hover .disc-arrow { opacity: 1; transform: translateX(0); }

        @media (max-width: 900px) {
          .disc-grid { grid-template-columns: 1fr; gap: 40px; }
          .disc-feature-image { padding-top: 70%; }
        }
        @media (max-width: 560px) {
          .disc-row { grid-template-columns: 28px 60px 1fr; }
          .disc-thumb { width: 60px; height: 60px; }
          .disc-arrow { display: none; }
        }
      `}</style>

      <section className="disc-section re-sans">
        <div className="disc-header">
          <span className="re-eyebrow eyebrow">Disciplines</span>
          <h2>A Vocabulary of Craft</h2>
        </div>

        <div className="disc-grid">
          <Link href="/collections" style={{ textDecoration: "none" }}>
            <div className="disc-feature-image">
              <Image src={feature.image} alt={feature.title} fill sizes="(max-width:900px) 100vw, 50vw" />
            </div>
            <div className="disc-feature-caption">
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </div>
          </Link>

          <div ref={elementRef} className={`disc-list reveal ${isVisible ? "visible" : ""}`}>
            {disciplines.map((d) => (
              <Link href={d.href} key={d.name} className="disc-row">
                <span className="disc-numeral">{d.numeral}</span>
                <div className="disc-thumb">
                  <Image src={d.image} alt={d.name} fill sizes="88px" />
                </div>
                <div className="disc-text">
                  <h4>{d.name}</h4>
                  <p>{d.copy}</p>
                </div>
                <span className="disc-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   STATEMENT SECTION — one cinematic full-bleed moment (was x3)
   ========================================================================= */
function StatementSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <>
      <style>{`
        .statement-section {
          position: relative;
          min-height: 78vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .statement-image { position: absolute; inset: 0; }
        .statement-image img { object-fit: cover; object-position: center; }
        .statement-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg,
            rgba(34, 27, 21, 0.18) 0%,
            rgba(34, 27, 21, 0.42) 55%,
            rgba(34, 27, 21, 0.72) 100%);
        }
        .statement-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
          padding: 80px 24px;
          text-align: center;
          color: var(--paper);
        }
        .statement-tag {
          font-family: "Jost", sans-serif;
          font-size: 11px;
          letter-spacing: 0.34em;
          text-transform: uppercase;
          color: var(--brass-soft);
          margin-bottom: 18px;
          display: block;
        }
        .statement-title {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(30px, 4.6vw, 52px);
          font-weight: 550;
          margin: 0 0 18px;
          line-height: 1.12;
        }
        .statement-desc {
          font-family: "Jost", sans-serif;
          font-size: clamp(14px, 1vw, 17px);
          font-weight: 300;
          color: rgba(248, 243, 233, 0.85);
          margin: 0 0 26px;
          line-height: 1.8;
        }
        .statement-btn {
          font-family: "Jost", sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--paper);
          text-decoration: none;
          border-bottom: 1px solid var(--brass-soft);
          padding-bottom: 5px;
        }
        .statement-btn:hover { color: var(--brass-soft); }

        @media (max-width: 700px) {
          .statement-section { min-height: 60vh; }
          .statement-content { padding: 50px 20px; }
        }
      `}</style>

      <section className="statement-section re-sans">
        <div className="statement-image">
          <Image
            src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783247240/18_svax45.png"
            alt="Rajasthani artisans at work"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="statement-overlay" />

        <div ref={elementRef} className={`statement-content reveal ${isVisible ? "visible" : ""}`}>
          <span className="statement-tag">Art With Soul</span>
          <h2 className="statement-title">Where every creation carries devotion</h2>
          <p className="statement-desc">
            From the hands of master artisans to your home — each piece
            carries the spirit of Rajasthan, woven with traditions that
            transcend time.
          </p>
          <Link href="/collections" className="statement-btn">Explore the Collection</Link>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   THE ATELIER — heritage + craftsmanship folded in here
   ========================================================================= */
function ArtisanStorySection() {
  const points = [
    { title: "Hand-carved, not machine-cut", copy: "Wooden printing blocks and stone inlay are shaped by chisel, the same way they have been for generations." },
    { title: "Naturally sourced dyes", copy: "Indigo, madder root, and marigold give our textiles color that machine dyes cannot reproduce." },
    { title: "Passed from hand to hand", copy: "Most of our artisans learned their craft from a parent or grandparent, in workshops that are decades old." },
  ];

  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <>
      <style>{`
        .story-section { background: var(--paper); padding: clamp(64px, 8vw, 108px) 16px; }
        .story-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .story-image-frame {
          position: relative;
          width: 100%;
          padding-top: 118%;
          overflow: hidden;
        }
        .story-image-frame img { object-fit: cover; }

        .story-content { display: grid; gap: 22px; }
        .story-content .eyebrow { color: var(--brass); }
        .story-content h2 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(28px, 3.6vw, 42px);
          font-weight: 550;
          color: var(--ink);
          margin: 0;
          line-height: 1.12;
        }
        .story-content .lead {
          font-family: "Jost", sans-serif;
          font-size: clamp(15px, 1vw, 16px);
          font-weight: 300;
          line-height: 1.85;
          color: var(--ink-soft);
          margin: 0;
          max-width: 520px;
        }
        .story-points { display: grid; gap: 20px; margin-top: 4px; }
        .story-point-item { display: grid; grid-template-columns: 20px 1fr; gap: 16px; }
        .story-point-item .mark { font-family: "Cormorant Garamond", serif; font-style: italic; color: var(--brass); font-size: 18px; }
        .story-point-text h4 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(15px, 1vw, 17px);
          font-weight: 600;
          color: var(--ink);
          margin: 0 0 3px;
        }
        .story-point-text p {
          font-family: "Jost", sans-serif;
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.7;
          color: var(--ink-soft);
          margin: 0;
        }
        .story-link {
          font-family: "Jost", sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--haveli);
          text-decoration: none;
          border-bottom: 1px solid var(--brass);
          padding-bottom: 4px;
          width: fit-content;
        }
        .story-link:hover { color: var(--haveli-deep); }

        @media (max-width: 860px) {
          .story-grid { grid-template-columns: 1fr; gap: 36px; }
          .story-image-wrapper { order: 2; max-width: 420px; margin: 0 auto; width: 100%; }
          .story-image-frame { padding-top: 100%; }
          .story-content { order: 1; text-align: center; }
          .story-content .lead { max-width: 100%; margin: 0 auto; }
          .story-point-item { justify-content: center; text-align: left; max-width: 480px; margin: 0 auto; }
          .story-link { margin: 0 auto; }
        }
      `}</style>

      <section className="story-section re-sans">
        <div className="story-grid">
          <div className="story-content">
            <span className="re-eyebrow eyebrow">The Atelier · A Heritage of Making</span>
            <h2>Where hands remember what machines forget.</h2>
            <p className="lead">
              Fifty families. Three cities. One unbroken thread of craft,
              passed from generation to generation — preserving the soul of
              Rajasthan in every object it touches.
            </p>
            <div className="story-points">
              {points.map((p) => (
                <div key={p.title} className="story-point-item">
                  <span className="mark">✦</span>
                  <div className="story-point-text">
                    <h4>{p.title}</h4>
                    <p>{p.copy}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/collections" className="story-link">View the Collection →</Link>
          </div>

          <div ref={elementRef} className={`story-image-wrapper reveal ${isVisible ? "visible" : ""}`}>
            <div className="story-image-frame">
              <Image
                src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783318693/22_egv4cn.png"
                alt="Artisan working on traditional Rajasthani handicraft"
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   FEATURED WORKS — editorial list, not cards
   ========================================================================= */
function FeaturedWorksSection() {
  const featured = sampleProducts.filter((p) => p.isFeatured);
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <>
      <style>{`
        .fw-section { background: var(--sand); padding: clamp(64px, 8vw, 100px) 16px; }
        .fw-header { text-align: center; display: grid; gap: 10px; margin-bottom: clamp(44px, 5vw, 60px); }
        .fw-header h2 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 550;
          color: var(--ink);
          margin: 0;
        }
        .fw-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
          max-width: 1200px;
          margin: 0 auto;
        }
        .fw-image { position: relative; width: 100%; padding-top: 118%; overflow: hidden; }
        .fw-image img { object-fit: cover; }

        .fw-list { display: grid; }
        .fw-row {
          display: grid;
          grid-template-columns: 34px 1fr auto;
          gap: 18px;
          align-items: start;
          padding: 24px 0;
          border-bottom: 1px solid var(--hairline);
        }
        .fw-row:first-child { border-top: 1px solid var(--hairline); }
        .fw-index { font-family: "Cormorant Garamond", serif; font-style: italic; color: var(--brass); font-size: 18px; }
        .fw-body .cat { color: var(--haveli); display: block; margin-bottom: 4px; }
        .fw-body h3 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(19px, 1.3vw, 23px);
          font-weight: 600;
          color: var(--ink);
          margin: 0 0 6px;
        }
        .fw-body p {
          font-family: "Jost", sans-serif;
          font-size: 13.5px;
          font-weight: 300;
          color: var(--ink-soft);
          line-height: 1.65;
          margin: 0;
          max-width: 46ch;
        }
        .fw-link {
          font-family: "Jost", sans-serif;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brass);
          text-decoration: none;
          white-space: nowrap;
          align-self: center;
        }
        .fw-link:hover { color: var(--haveli); }

        @media (max-width: 900px) {
          .fw-grid { grid-template-columns: 1fr; gap: 36px; }
          .fw-image { padding-top: 65%; max-width: 480px; margin: 0 auto; width: 100%; }
        }
        @media (max-width: 560px) {
          .fw-row { grid-template-columns: 24px 1fr; }
          .fw-link { grid-column: 2; margin-top: 6px; }
        }
      `}</style>

      <section className="fw-section re-sans">
        <div className="fw-header">
          <span className="re-eyebrow" style={{ color: "var(--brass)" }}>Editor&apos;s Choice</span>
          <h2>Featured Works</h2>
        </div>

        <div className="fw-grid">
          <div ref={elementRef} className={`reveal ${isVisible ? "visible" : ""}`}>
            <div className="fw-image">
              <Image
                src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783241411/11_kbakye.png"
                alt="Featured Rajasthani handicraft pieces"
                fill
                sizes="(max-width:900px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="fw-list">
            {featured.map((product, i) => (
              <div key={product.slug} className="fw-row">
                <span className="fw-index">{String(i + 1).padStart(2, "0")}</span>
                <div className="fw-body">
                  <span className="re-eyebrow cat" style={{ fontSize: 10 }}>{product.category}</span>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
                <Link href={`/product/${product.slug}`} className="fw-link">View →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   FEATURED STORY — refined copy
   ========================================================================= */
function FeaturedStorySection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <>
      <style>{`
        .fs-section { position: relative; overflow: hidden; }
        .fs-image-wrapper { position: relative; width: 100%; padding-top: 48%; overflow: hidden; }
        .fs-image-wrapper::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(34,27,21,0.08) 0%, rgba(34,27,21,0.38) 60%, rgba(34,27,21,0.68) 100%);
        }
        .fs-content { position: absolute; bottom: 10%; left: 8%; z-index: 2; max-width: 540px; }
        .fs-tag {
          display: inline-block;
          font-family: "Jost", sans-serif;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--brass-soft);
          margin-bottom: 16px;
        }
        .fs-title {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(26px, 3.6vw, 44px);
          font-weight: 550;
          color: var(--paper);
          margin: 0 0 14px;
          line-height: 1.15;
        }
        .fs-desc {
          font-family: "Jost", sans-serif;
          font-size: clamp(14px, 1vw, 16px);
          font-weight: 300;
          color: rgba(248, 243, 233, 0.85);
          margin: 0 0 18px;
          line-height: 1.75;
        }
        .fs-btn {
          font-family: "Jost", sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--paper);
          text-decoration: none;
          border-bottom: 1px solid var(--brass-soft);
          padding-bottom: 4px;
        }
        .fs-btn:hover { color: var(--brass-soft); }

        @media (max-width: 860px) {
          .fs-image-wrapper { padding-top: 68%; }
          .fs-content { bottom: 7%; left: 6%; max-width: 88%; }
        }
        @media (max-width: 600px) {
          .fs-image-wrapper { padding-top: 82%; }
          .fs-title { font-size: clamp(21px, 3vw, 28px); }
        }
      `}</style>

      <section className="fs-section re-sans">
        <div ref={elementRef} className={`reveal ${isVisible ? "visible" : ""}`}>
          <div className="fs-image-wrapper">
            <Image
              src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1783245672/16_pneysk.png"
              alt="Rajasthani artisans at work"
              fill
              priority
            />
            <div className="fs-content">
              <span className="fs-tag">Our Story</span>
              <h2 className="fs-title">Craft that asks to be felt, not just seen</h2>
              <p className="fs-desc">
                Step inside the ateliers of Rajasthan, where every surface is
                touched by a hand that learned from another hand before it.
              </p>
              <Link href="/collections" className="fs-btn">Discover</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   NEWSLETTER
   ========================================================================= */
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().length > 0) setSubmitted(true);
  };

  return (
    <>
      <style>{`
        .news-section { background: var(--haveli-deep); padding: clamp(52px, 6vw, 80px) 16px; }
        .news-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 40px; align-items: center; max-width: 1200px; margin: 0 auto; }
        .news-input {
          font-family: "Jost", sans-serif;
          font-size: 14px;
          font-weight: 300;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(248, 243, 233, 0.35);
          color: var(--paper);
          padding: 12px 4px;
          width: 100%;
          outline: none;
        }
        .news-input::placeholder { color: rgba(248, 243, 233, 0.45); }
        .news-input:focus { border-bottom-color: var(--brass-soft); }
        .news-btn {
          font-family: "Jost", sans-serif;
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: transparent;
          border: 1px solid var(--brass-soft);
          color: var(--paper);
          padding: 13px 26px;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .news-btn:hover { background: var(--brass-soft); color: var(--haveli-deep); }
        .news-form-row { display: flex; gap: 14px; align-items: stretch; max-width: 420px; }

        @media (max-width: 860px) {
          .news-grid { grid-template-columns: 1fr; gap: 24px; text-align: center; }
          .news-form-row { max-width: 100%; margin: 0 auto; }
        }
        @media (max-width: 520px) {
          .news-form-row { flex-direction: column; gap: 12px; }
          .news-btn { width: 100%; padding: 14px; }
        }
      `}</style>
      <section className="re-sans news-section">
        <div className="news-grid">
          <div style={{ display: "grid", gap: 10 }}>
            <span className="re-eyebrow" style={{ color: "var(--brass-soft)" }}>Correspondence</span>
            <h3 className="re-display" style={{ margin: 0, fontSize: "clamp(20px, 2.4vw, 30px)", color: "var(--paper)", fontWeight: 550 }}>
              Notes from the workshop, sent occasionally.
            </h3>
          </div>

          <div>
            {submitted ? (
              <p style={{ margin: 0, color: "var(--brass-soft)", fontSize: 14.5, fontWeight: 300 }}>
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
                <button type="submit" className="news-btn">Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   BEADS, GEMSTONES & SACRED THREADS
   ========================================================================= */
function BeadsGemstonesSection() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <>
      <style>{`
        .bg-section {
          position: relative;
          min-height: 78vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .bg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .bg-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg,
            rgba(34, 27, 21, 0.15) 0%,
            rgba(34, 27, 21, 0.35) 40%,
            rgba(34, 27, 21, 0.55) 70%,
            rgba(34, 27, 21, 0.75) 100%
          );
          z-index: 1;
        }

        /* Decorative corner accents */
        .bg-corner {
          position: absolute;
          width: 40px;
          height: 40px;
          border-color: rgba(203, 174, 124, 0.12);
          border-style: solid;
          border-width: 0;
          z-index: 2;
        }
        .bg-corner-tl { top: 28px; left: 28px; border-top-width: 1px; border-left-width: 1px; }
        .bg-corner-tr { top: 28px; right: 28px; border-top-width: 1px; border-right-width: 1px; }
        .bg-corner-bl { bottom: 28px; left: 28px; border-bottom-width: 1px; border-left-width: 1px; }
        .bg-corner-br { bottom: 28px; right: 28px; border-bottom-width: 1px; border-right-width: 1px; }

        .bg-content {
          position: relative;
          z-index: 2;
          max-width: 720px;
          padding: 80px 24px;
          text-align: center;
          color: var(--paper);
        }

        .bg-tag {
          font-family: "Jost", sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: var(--brass-soft);
          margin-bottom: 16px;
          display: block;
        }

        .bg-title {
          font-family: "Playfair Display", "Cormorant Garamond", Georgia, serif;
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 550;
          color: var(--paper);
          margin: 0 0 14px;
          line-height: 1.08;
          letter-spacing: -0.01em;
        }

        .bg-title .accent {
          font-family: "Cormorant Garamond", Georgia, serif;
          font-style: italic;
          color: var(--brass-soft);
        }

        .bg-desc {
          font-family: "Jost", sans-serif;
          font-size: clamp(14px, 1vw, 17px);
          font-weight: 300;
          color: rgba(248, 243, 233, 0.82);
          margin: 0 0 28px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
        }

        .bg-btn {
          font-family: "Jost", sans-serif;
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--paper);
          text-decoration: none;
          border-bottom: 1.5px solid var(--brass-soft);
          padding-bottom: 5px;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .bg-btn::after {
          content: " →";
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .bg-btn:hover {
          color: var(--brass-soft);
          border-bottom-color: var(--brass-soft);
        }

        .bg-btn:hover::after {
          transform: translateX(6px);
        }

        .bg-slide-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .bg-slide-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 860px) {
          .bg-section { min-height: 62vh; }
          .bg-title { font-size: clamp(28px, 4vw, 38px); }
          .bg-corner { width: 24px; height: 24px; }
          .bg-corner-tl, .bg-corner-tr { top: 16px; }
          .bg-corner-bl, .bg-corner-br { bottom: 16px; }
          .bg-corner-tl, .bg-corner-bl { left: 16px; }
          .bg-corner-tr, .bg-corner-br { right: 16px; }
        }

        @media (max-width: 600px) {
          .bg-section { min-height: 52vh; }
          .bg-content { padding: 50px 20px; }
          .bg-title { font-size: clamp(22px, 5vw, 30px); }
          .bg-desc { font-size: 13px; }
          .bg-corner { display: none; }
        }
      `}</style>

      <section className="bg-section re-sans">
        {/* Background Image */}
        <div className="bg-image">
          <Image
            src="https://res.cloudinary.com/dzoxwk1jc/image/upload/v1784098406/q_wqlgdo.png"
            alt="Beads, gemstones and sacred threads"
            fill
            sizes="100vw"
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="bg-overlay" />

        {/* Corner Accents */}
        <span className="bg-corner bg-corner-tl" />
        <span className="bg-corner bg-corner-tr" />
        <span className="bg-corner bg-corner-bl" />
        <span className="bg-corner bg-corner-br" />

        {/* Content */}
        <div 
          ref={elementRef}
          className={`bg-content bg-slide-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="bg-tag">✦ Sacred Adornments</span>
          <h2 className="bg-title">
            Beads, Gemstones & <span className="accent">Sacred Threads</span>
          </h2>
          <p className="bg-desc">
            From the hands of master artisans, each bead is a prayer, each gemstone a story — 
            woven into threads that carry the blessings of generations.
          </p>
          <Link href="/collections" className="bg-btn">
            Explore the Collection
          </Link>
        </div>
      </section>
    </>
  );
}

/* =========================================================================
   CLOSING BAND
   ========================================================================= */
function ClosingBand() {
  return (
    <section
      className="re-sans"
      style={{
        position: "relative",
        background: "var(--haveli-deep)",
        color: "var(--paper)",
        padding: "clamp(52px, 6vw, 80px) 16px",
        textAlign: "center",
      }}
    >
      <div style={{ position: "relative", display: "grid", gap: 18, justifyItems: "center", maxWidth: 640, margin: "0 auto" }}>
        <span className="re-eyebrow" style={{ color: "var(--brass-soft)" }}>Art With Soul</span>
        <h2 className="re-display" style={{ margin: 0, fontSize: "clamp(22px, 3.4vw, 36px)", fontWeight: 550 }}>
          Every piece is a quiet, unforgettable journey.
        </h2>
        <Link
          href="/collections"
          style={{
            marginTop: 6,
            color: "var(--paper)",
            textDecoration: "none",
            borderBottom: "1px solid var(--brass-soft)",
            paddingBottom: 4,
            fontSize: 13,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Browse the Full Emporium →
        </Link>
      </div>
    </section>
  );
}

/* =========================================================================
   HOME PAGE
   ========================================================================= */
export default function HomePage() {
  return (
    <>
      <GlobalStyles />
      <HeroSection />
      <Divider />
      <CraftTicker />
      <DisciplineIndexSection />
      <Divider />
      <StatementSection />
      <ArtisanStorySection />
      <BeadsGemstonesSection />
      <Divider />
      <FeaturedWorksSection />
      <FeaturedStorySection />
      <ClosingBand />
    </>
  );
}