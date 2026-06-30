import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Westmark Global Industries — Home | Trade & Logistics</title>
        <meta name="description" content="Westmark Global Industries is a leading international trader and logistics partner, specializing in premium commodities, agricultural products, freight forwarding, and relocation solutions globally." />
        <meta name="keywords" content="global trade, logistics, freight forwarding, customs clearance, commodity trading, relocation services, international movers, Westmark Global" />
      </Helmet>
      {/* HOME HERO */}
      <section className="home-hero">
        <div
          className="hero-img"
          style={{
            backgroundImage: "url('https://media.base44.com/images/public/6a2d58b67d992ee6a023ee0f/c0f9a3a3c_generated_image.png')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-inner">
          <div className="section-label">
            <span className="code">001</span>
            <span className="line"></span>
            <span className="text">Trusted Global Trade Partner</span>
          </div>
          <h1>
            Moving the World's
            <br />
            <span className="accent">Essential Goods</span>
            <br />
            Forward
          </h1>
          <p className="hero-desc">
            Comprehensive logistics and relocation solutions for businesses and individuals, ensuring safe, efficient
            movement of goods across the globe.
          </p>
          <div className="hero-btns">
            <Link className="btn-primary" to="/products">
              Our Products →
            </Link>
            <Link className="btn-outline" to="/services">
              Our Services →
            </Link>
          </div>
        </div>
        <div
          className="stats-bar"
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: 10,
            background: 'rgba(253,231,173,0.05)',
            backdropFilter: 'blur(24px)',
            borderTop: '1px solid rgba(253,231,173,0.1)',
            borderLeft: '1px solid rgba(253,231,173,0.1)',
            borderRadius: '24px 0 0 0',
          }}
        >
          <div className="stat-item">
            <div className="stat-num" style={{ color: 'var(--bg)' }}>
              50+
            </div>
            <div className="stat-label" style={{ color: 'rgba(253,249,250,0.6)' }}>
              Countries
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-num" style={{ color: 'var(--bg)' }}>
              12
            </div>
            <div className="stat-label" style={{ color: 'rgba(253,249,250,0.6)' }}>
              Products
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-num" style={{ color: 'var(--bg)' }}>
              15+
            </div>
            <div className="stat-label" style={{ color: 'rgba(253,249,250,0.6)' }}>
              Years
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-num" style={{ color: 'var(--bg)' }}>
              1000+
            </div>
            <div className="stat-label" style={{ color: 'rgba(253,249,250,0.6)' }}>
              Clients
            </div>
          </div>
        </div>
      </section>

      <div className="hairline"></div>

      {/* CTA Cards */}
      <section>
        <div className="card-grid card-grid-3" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Link className="card-link" to="/products">
            <img
              alt="Our Products"
              src="https://media.base44.com/images/public/6a2d58b67d992ee6a023ee0f/f1ec8b8ca_generated_image.png"
            />
            <div className="card-body">
              <span className="tag">Trade Portfolio</span>
              <h3 className="card-title">Our Products</h3>
              <p className="card-desc">
                Premium agricultural commodities, textiles, carpets, packaging materials, PPE products (masks, gloves,
                scrubs), hygiene products (sanitizers, disinfectants, cleansers), and industrial goods traded across 50+
                global markets.
              </p>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Browse Products →</span>
            </div>
          </Link>

          <Link className="card-link" to="/services">
            <img
              alt="Our Services"
              src="https://media.base44.com/images/public/6a2d58b67d992ee6a023ee0f/d321477dd_generated_image.png"
            />
            <div className="card-body">
              <span className="tag">Logistics</span>
              <h3 className="card-title">Our Services</h3>
              <p className="card-desc">
                Freight forwarding, customs clearance, transportation, packing, and specialized cargo management worldwide.
              </p>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>View Services →</span>
            </div>
          </Link>

          <Link className="card-link" to="/contact">
            <img
              alt="Contact Us"
              src="https://media.base44.com/images/public/6a2d58b67d992ee6a023ee0f/79ab23497_generated_image.png"
            />
            <div className="card-body">
              <span className="tag">Get In Touch</span>
              <h3 className="card-title">Request a Quote</h3>
              <p className="card-desc">
                Tell us about your trade, logistics, or relocation needs — our team responds within 24 hours.
              </p>
              <span style={{ fontSize: '14px', fontWeight: 600 }}>Contact Us →</span>
            </div>
          </Link>
        </div>
      </section>

      <div className="hairline"></div>

      {/* About Strip */}
      <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="about-strip">
          <div>
            <div className="section-label">
              <span className="code">002</span>
              <span className="line"></span>
              <span className="text">Who We Are</span>
            </div>
            <h2 className="section-title">Your Global Trade & Logistics Partner</h2>
            <p className="section-desc" style={{ marginBottom: '32px' }}>
              Westmark Global Industries bridges continents — connecting producers to markets with reliability and
              precision. From premium agricultural commodities to industrial goods, PPE products (masks, gloves, scrubs),
              and hygiene products (sanitizers, disinfectants, cleansers), we ensure every shipment reaches its destination
              safely and on time.
            </p>
            <Link className="btn-link" to="/about">
              Learn About Us →
            </Link>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M2 12h20"></path>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"></path>
                  </svg>
                </div>
                <div>
                  <div className="feature-label">Global Reach</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Active in 50+ countries</div>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m7.5 4.27 9 5.15"></path>
                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                  </svg>
                </div>
                <div>
                  <div className="feature-label">End-to-End</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Source to final destination</div>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2Z"></path>
                    <path d="M18 20h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"></path>
                  </svg>
                </div>
                <div>
                  <div className="feature-label">Logistics</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Full supply chain coverage</div>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <div className="feature-label">Trusted Network</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Verified global partners</div>
                </div>
              </div>
            </div>
          </div>
          <div className="quote-panel">
            <div className="quote-line"></div>
            <p className="quote-text">"Connecting markets, delivering trust — one shipment at a time."</p>
            <p className="quote-desc">
              At Westmark, we build lasting partnerships through transparent pricing, dedicated account management, and
              consistent quality across all product and service lines.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '1px',
                background: 'rgba(253,231,173,0.1)',
                marginTop: '16px',
              }}
            >
              <div style={{ background: 'rgba(253,231,173,0.05)', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--bg)' }}>
                  50+
                </div>
                <div
                  style={{
                    fontSize: '8px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: 'rgba(253,249,250,0.6)',
                    marginTop: '4px',
                  }}
                >
                  Countries
                </div>
              </div>
              <div style={{ background: 'rgba(253,231,173,0.05)', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--bg)' }}>
                  15+
                </div>
                <div
                  style={{
                    fontSize: '8px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: 'rgba(253,249,250,0.6)',
                    marginTop: '4px',
                  }}
                >
                  Years
                </div>
              </div>
              <div style={{ background: 'rgba(253,231,173,0.05)', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 700, color: 'var(--bg)' }}>
                  1000+
                </div>
                <div
                  style={{
                    fontSize: '8px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: 'rgba(253,249,250,0.6)',
                    marginTop: '4px',
                  }}
                >
                  Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
