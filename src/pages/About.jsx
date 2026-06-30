import React from 'react';
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <div>
      <Helmet>
        <title>About Us | Westmark Global Industries</title>
        <meta name="description" content="Discover Westmark Global Industries. Learn about our 15+ years of trade experience, operations across 50+ countries, and our core mission to bridge global commodity markets with integrity." />
        <meta name="keywords" content="about westmark, trade history, commodity exporters, logistics leadership, global commerce team" />
      </Helmet>
      <div className="page-hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('https://media.base44.com/images/public/6a2d58b67d992ee6a023ee0f/7c02ac849_generated_image.png')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="section-label">
            <span className="code">007</span>
            <span className="line" style={{ background: 'var(--accent)' }}></span>
            <span className="text" style={{ color: 'var(--accent)' }}>
              Our Story
            </span>
          </div>
          <h1>About Westmark Global Industries</h1>
          <p className="hero-subtitle">
            Built on trust, driven by excellence — connecting markets across every continent since 2010.
          </p>
        </div>
      </div>

      <div className="hairline"></div>

      <section style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="section-label">
          <span className="code">008</span>
          <span className="line"></span>
          <span className="text">Who We Are</span>
        </div>
        <h2 className="section-title">A Global Force in Trade & Logistics</h2>
        <div style={{ color: 'var(--muted)', lineHeight: 1.7, marginBottom: '64px' }}>
          <p style={{ marginBottom: '20px' }}>
            Westmark Global Industries is a leading international trading and logistics company with operations spanning
            over 50 countries. Founded with a vision to bridge global markets, we have grown into a trusted name for
            businesses and individuals seeking reliable, high-quality products and end-to-end logistics solutions.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Our product portfolio covers essential commodities — from premium agricultural goods like basmati rice,
            spices, and pulses to industrial products including textiles, carpets, packaging materials, PPE products
            (masks, gloves, scrubs), hygiene products (sanitizers, disinfectants, cleansers), and agricultural
            equipment. Each product we trade meets stringent international quality standards, ensuring our clients
            receive nothing but the best.
          </p>
          <p>
            On the services front, our logistics arm provides comprehensive support across freight forwarding, customs
            clearance, transportation, international relocation, packing, and specialized cargo handling. We invest in
            the latest technology and maintain a global network of partners to ensure every shipment is delivered safely
            and on schedule.
          </p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>
              Our Mission
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
              To deliver reliable, transparent, and quality-driven trade and logistics services that empower global
              commerce.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <path d="M12 18v-6"></path>
                <path d="M9 15l3-3 3 3"></path>
              </svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>
              Our Vision
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
              To be the most trusted global trading and logistics partner, connecting markets across every continent.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              </svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>
              Our Values
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
              Integrity, precision, customer-first thinking, and an unwavering commitment to quality in everything we
              do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
