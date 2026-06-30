import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const products = [
  {
    title: "Basmati Rice",
    tag: "Grains",
    desc: "Premium long-grain basmati sourced from the fertile plains of northern India and Pakistan. Renowned for its delicate aroma and fluffy texture.",
    origin: "India / Pakistan",
    img: "https://images.pexels.com/photos/15879426/pexels-photo-15879426.jpeg"
  },
  {
    title: "Non-Basmati Rice",
    tag: "Grains",
    desc: "Sona Masoori, IR64, and Swarna varieties available in bulk quantities for food processors and distributors worldwide.",
    origin: "South India",
    img: "https://plus.unsplash.com/premium_photo-1723726831918-9a8542e705cb?q=80&w=1089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Sugar",
    tag: "Commodities",
    desc: "Refined white and raw brown sugar in ICUMSA grades. Suitable for industrial food production and direct consumer markets.",
    origin: "Global",
    img: "https://images.unsplash.com/photo-1673791031093-eb8eefa60083?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Pulses",
    tag: "Legumes",
    desc: "Lentils, black gram, green gram, and pigeon peas — cleaned, sorted, and graded for consistent quality.",
    origin: "Multiple Origins",
    img: "https://plus.unsplash.com/premium_photo-1726750862897-4b75116bca34?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Spices",
    tag: "Spices",
    desc: "Turmeric, cumin, coriander, black pepper, cardamom, and chillies. Sourced directly from producing regions.",
    origin: "Kerala / Gujarat",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80"
  },
  {
    title: "Chickpeas",
    tag: "Legumes",
    desc: "Bold Kabuli and Desi chickpeas in whole, split, and flour form for food manufacturers and health food sectors.",
    origin: "India / Australia",
    img: "https://plus.unsplash.com/premium_photo-1675237625827-38268aafc571?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Animal Feed",
    tag: "Livestock",
    desc: "Nutritionally balanced formulations for poultry, cattle, and aquaculture with strict quality controls.",
    origin: "Global Supply",
    img: "https://plus.unsplash.com/premium_photo-1661925306592-c355d46e3ace?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Edible Oil",
    tag: "Oils",
    desc: "Refined sunflower, soybean, palm, and groundnut oils processed under hygienic conditions to international standards.",
    origin: "Multiple Origins",
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&q=80"
  },
  {
    title: "Agricultural Equipment",
    tag: "Equipment",
    desc: "Tractors, harvesters, irrigation systems, and precision agriculture tools from trusted manufacturers.",
    origin: "Europe / USA",
    img: "https://images.unsplash.com/photo-1614977645968-6db1d7798ac7?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Textiles",
    tag: "Textiles",
    desc: "Woven and knitted cotton, polyester, and blended fabrics supplied to fashion brands and garment manufacturers.",
    origin: "India / Bangladesh",
    img: "https://images.pexels.com/photos/18415909/pexels-photo-18415909.jpeg"
  },
  {
    title: "Yarn",
    tag: "Textiles",
    desc: "Cotton, synthetic, and blended yarns for weaving, knitting, and industrial use with consistent quality.",
    origin: "India",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Yarn_at_Folklife_-_Stierch.jpg/1280px-Yarn_at_Folklife_-_Stierch.jpg"
  },
  {
    title: "Packaging Materials",
    tag: "Industrial Supply",
    desc: "Cartons, boxes, wraps, tapes, labels, and protective packaging materials for trade and logistics needs.",
    origin: "Global Supply",
    img: "https://images.pexels.com/photos/7464674/pexels-photo-7464674.jpeg"
  },
  {
    title: "PPE Products",
    tag: "PPE Products",
    desc: "Masks, gloves, and scrubs for healthcare, workplace safety, and institutional supply requirements.",
    origin: "Global Supply",
    img: "https://images.pexels.com/photos/7337909/pexels-photo-7337909.jpeg"
  },
  {
    title: "Hygiene Products",
    tag: "Hygiene Products",
    desc: "Sanitizers, disinfectants, and cleansers for commercial, healthcare, and facility hygiene programs.",
    origin: "Global Supply",
    img: "https://images.pexels.com/photos/8538704/pexels-photo-8538704.jpeg"
  },
  {
    title: "Carpets",
    tag: "Textiles",
    desc: "Handmade, woven, and machine-made carpets for residential, commercial, and hospitality projects.",
    origin: "India",
    img: "https://images.pexels.com/photos/20956935/pexels-photo-20956935.jpeg"
  }
];

function Products() {
  return (
    <div>
      <Helmet>
        <title>Premium Commodities & Products | Westmark Global Industries</title>
        <meta name="description" content="Browse Westmark Global's premium commodities list: Basmati & Non-Basmati Rice, Sugar, Pulses, Spices, Chickpeas, Textiles, Yarn, Packaging Materials, PPE & Hygiene products." />
        <meta name="keywords" content="Basmati Rice exporters, global sugar trading, spice wholesalers, textile supply chain, PPE bulk, packaging box supply" />
      </Helmet>
      <div className="page-hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('https://media.base44.com/images/public/6a2d58b67d992ee6a023ee0f/f1ec8b8ca_generated_image.png')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="section-label">
            <span className="code" style={{ color: 'var(--accent)' }}>
              003
            </span>
            <span className="line" style={{ background: 'var(--accent)' }}></span>
            <span className="text" style={{ color: 'var(--accent)' }}>
              Global Trade Portfolio
            </span>
          </div>
          <h1>Our Products</h1>
          <p className="hero-subtitle">
            Premium quality commodities and goods traded across international markets — from farm to destination.
          </p>
          <div className="hero-btns">
            <Link className="btn-primary" to="/contact?type=quote">
              Request a Quote →
            </Link>
            <Link className="btn-outline" to="/">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="hairline"></div>

      <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-label">
          <span className="code">004</span>
          <span className="line"></span>
          <span className="text">What We Trade</span>
        </div>
        <h2 className="section-title">15 Premium Product Lines</h2>
        <p className="section-desc" style={{ marginBottom: '48px' }}>
          Sourced from trusted producers worldwide, every product meets stringent international quality and safety standards.
        </p>

        <div className="card-grid card-grid-3">
          {products.map((p, idx) => (
            <div className="card" key={idx}>
              <div className="card-img-wrap">
                <img className="card-img" src={p.img} alt={p.title} />
              </div>
              <span className="tag">{p.tag}</span>
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.desc}</p>
              <div className="card-footer">
                <span className="origin">{p.origin}</span>
                <Link className="enquire" to={`/contact?type=contact&category=product&name=${encodeURIComponent(p.title)}`}>
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

export default Products;
