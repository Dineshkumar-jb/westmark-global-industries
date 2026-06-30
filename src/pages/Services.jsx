import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    title: "Freight Forwarding",
    tag: "Freight",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    desc: "Reliable air, sea, and land freight services ensuring on-time delivery with efficient handling. Competitive rates and real-time tracking across all trade corridors."
  },
  {
    title: "Customs Clearance",
    tag: "Documentation",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    desc: "Our experts manage all documentation and clearance procedures, making import and export smooth and stress-free. We handle HS classification, duties, and port authority liaison."
  },
  {
    title: "Transportation Services",
    tag: "Fleet",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
    desc: "From small packages to bulk shipments — safe and efficient transport across all routes. Our fleet includes temperature-controlled vehicles, flatbeds, and oversized cargo carriers."
  },
  {
    title: "Warehousing & Storage",
    tag: "Storage",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
    desc: "Strategically located warehouses with flexible storage options. Secure, climate-controlled facilities for long or short-term storage across key transit hubs."
  },
  {
    title: "Packing & Unpacking",
    tag: "Handling",
    img: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=800&q=80",
    desc: "Professional packing to safeguard goods during transit. Premium materials and expert techniques for fragile antiques to large-scale industrial equipment."
  },
  {
    title: "Valuable Moves",
    tag: "Security",
    img: "https://plus.unsplash.com/premium_photo-1661409078904-42334551db0c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Secure transport for high-value items with special handling, full insurance coverage, and dedicated supervision throughout the journey."
  },
  {
    title: "Supply Chain Optimization",
    tag: "Strategy",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80",
    desc: "Our experts analyse and improve your supply chain, reducing costs and boosting efficiency from vendor selection to last-mile delivery."
  },
  {
    title: "Relocation Services",
    tag: "Relocation",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    desc: "Seamless residential, corporate, and international relocation — door to door. Free survey, expert packing, secure transport, and full setup at destination."
  }
];

function Services() {
  return (
    <div>
      <Helmet>
        <title>Logistics & Relocation Services | Westmark Global Industries</title>
        <meta name="description" content="Explore Westmark Global's logistics and relocation services: Air & Ocean Freight Forwarding, Customs Clearance, Secure Warehousing, Packing & Unpacking, Relocation, and Supply Chain Optimization." />
        <meta name="keywords" content="ocean freight forwarder, customs broker service, cold chain storage, international household movers, logistics consultancy" />
      </Helmet>
      <div className="page-hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('https://media.base44.com/images/public/6a2d58b67d992ee6a023ee0f/d321477dd_generated_image.png')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="section-label">
            <span className="code" style={{ color: 'var(--accent)' }}>
              005
            </span>
            <span className="line" style={{ background: 'var(--accent)' }}></span>
            <span className="text" style={{ color: 'var(--accent)' }}>
              Logistics & Operations
            </span>
          </div>
          <h1>Our Services</h1>
          <p className="hero-subtitle">
            Comprehensive freight, customs, transport, relocation, and cargo management solutions built for global commerce.
          </p>
          <div className="hero-btns">
            <Link to="/contact?type=quote" className="btn-primary">
              Get a Quote →
            </Link>
          </div>
        </div>
      </div>

      <div className="hairline"></div>

      <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-label">
          <span className="code">006</span>
          <span className="line"></span>
          <span className="text">What We Do</span>
        </div>
        <h2 className="section-title">End-to-End Logistics & Relocation Solutions</h2>
        <p className="section-desc" style={{ marginBottom: '48px' }}>
          From the first mile to the last, Westmark handles every link in your supply chain with precision and care.
        </p>

        <div className="card-grid card-grid-4">
          {services.map((s, idx) => (
            <div className="card" key={idx}>
              <div className="card-img-wrap">
                <img className="card-img" loading="lazy" src={s.img} alt={s.title} />
              </div>
              <span className="tag">{s.tag}</span>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-desc">{s.desc}</p>
              <div className="card-footer">
                <span className="origin">Logistics</span>
                <Link className="enquire" to={`/contact?type=contact&category=service&name=${encodeURIComponent(s.title)}`}>
                  Enquire →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
