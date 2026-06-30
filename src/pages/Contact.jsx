import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { submitInquiry } from '../firebase';

const productList = [
  "Basmati Rice",
  "Non-Basmati Rice",
  "Sugar",
  "Pulses",
  "Spices",
  "Chickpeas",
  "Animal Feed",
  "Edible Oil",
  "Agricultural Equipment",
  "Textiles",
  "Yarn",
  "Packaging Materials",
  "PPE Products",
  "Hygiene Products",
  "Carpets",
  "Other / Custom Product"
];

const serviceList = [
  "Freight Forwarding",
  "Customs Clearance",
  "Transportation Services",
  "Warehousing & Storage",
  "Packing & Unpacking",
  "Valuable Moves",
  "Supply Chain Optimization",
  "Relocation Services",
  "Other / Custom Service"
];

function Contact() {
  const [searchParams] = useSearchParams();
  const queryType = searchParams.get('type') || '';
  const queryCategory = searchParams.get('category') || '';
  const queryName = searchParams.get('name') || '';

  // Consolidated into 2 main form templates to support EmailJS Free Tier (max 2 templates)
  const [inquiryFormType, setInquiryFormType] = useState('contact'); // 'contact' (Template 1) | 'quote' (Template 2)
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  // 1. Contact / Item Inquiry Form State (Template 1: Shared for Product & Service inquiries)
  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    category: 'Product Sourcing', // 'Product Sourcing' | 'Logistics Service'
    itemName: '',
    specs: '',
    location: '',
    message: ''
  });

  // 2. Get a Quote Form State (Template 2: Dedicated for Quote Requests)
  const [quoteData, setQuoteData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phone: '',
    quoteType: 'Bulk Commodity Quote',
    timeline: '',
    message: ''
  });

  // Sync params from URL redirects
  useEffect(() => {
    if (queryType === 'quote') {
      setInquiryFormType('quote');
    } else if (queryType === 'contact' || queryType === 'product' || queryType === 'service') {
      setInquiryFormType('contact');
      const categoryLabel = (queryCategory === 'service' || queryType === 'service') ? 'Logistics Service' : 'Product Sourcing';
      setContactData((prev) => ({
        ...prev,
        category: categoryLabel,
        itemName: queryName || prev.itemName
      }));
    } else {
      setInquiryFormType('contact');
    }
  }, [queryType, queryCategory, queryName]);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteChange = (e) => {
    const { name, value } = e.target;
    setQuoteData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerBrochureDownload = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}assets/westmark-brochure.pdf`;
    link.download = 'Westmark-Global-Industries-Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    let submissionData = {};
    if (inquiryFormType === 'contact') {
      submissionData = { formType: 'contact', ...contactData };
    } else {
      submissionData = { formType: 'quote', ...quoteData };
    }

    try {
      await submitInquiry(submissionData);
      
      // Reset forms
      if (inquiryFormType === 'contact') {
        setContactData({
          firstName: '',
          lastName: '',
          email: '',
          category: 'Product Sourcing',
          itemName: '',
          specs: '',
          location: '',
          message: ''
        });
      } else {
        setQuoteData({
          firstName: '',
          lastName: '',
          email: '',
          companyName: '',
          phone: '',
          quoteType: 'Bulk Commodity Quote',
          timeline: '',
          message: ''
        });
      }

      setStatus('success');
      triggerBrochureDownload();
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg('Failed to submit form. Please check your internet connection or EmailJS/Firebase configuration.');
    }
  };

  return (
    <div>
      <Helmet>
        <title>Get a Quote & Contact Us | Westmark Global Industries</title>
        <meta name="description" content="Get in touch with Westmark Global. Request a commodity trade quote, service inquiry, or contact our support team. Download our company product brochure instantly." />
        <meta name="keywords" content="request logistics quote, contact trade agent, commodity pricing inquiry, Westmark brochure download, customer help desk" />
      </Helmet>
      <div className="page-hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage: "url('https://media.base44.com/images/public/6a2d58b67d992ee6a023ee0f/79ab23497_generated_image.png')",
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="section-label">
            <span className="code" style={{ color: 'var(--accent)' }}>
              009
            </span>
            <span className="line" style={{ background: 'var(--accent)' }}></span>
            <span className="text" style={{ color: 'var(--accent)' }}>
              Get In Touch
            </span>
          </div>
          <h1>Contact Westmark</h1>
          <p className="hero-subtitle">Inquiries, partnerships, trade quotes, or relocation planning — our team is ready to help.</p>
        </div>
      </div>

      <div className="hairline"></div>

      <section className="contact-grid" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div>
          <div className="section-label">
            <span className="code">010</span>
            <span className="line"></span>
            <span className="text">Reach Us</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>
            Let's Work Together
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.6, marginBottom: '40px' }}>
            Whether you need a reliable supplier for agricultural commodities, a logistics partner for international
            shipments, or relocation support — Westmark is here for you.
          </p>

          <div className="contact-info-item">
            <div className="contact-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Head Office</div>
              <div style={{ fontSize: '14px', color: 'var(--muted)' }}>
                Westmark Global Industries, Business District, New Delhi, India
              </div>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Phone</div>
              <div style={{ fontSize: '14px', color: 'var(--muted)' }}>+91 98765 43210</div>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect height="16" rx="2" width="20" x="2" y="4"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Email</div>
              <div style={{ fontSize: '14px', color: 'var(--muted)' }}>admin@westmarkglobal.org</div>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-icon">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>Business Hours</div>
              <div style={{ fontSize: '14px', color: 'var(--muted)' }}>Monday – Saturday, 9:00 AM – 6:00 PM IST</div>
            </div>
          </div>
        </div>

        <div className="form-box">
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '64px', color: 'var(--accent)', marginBottom: '24px' }}>✓</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>
                Thank You!
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '32px' }}>
                Your request has been successfully submitted! We have sent a confirmation copy and our brochure has been downloaded to your system.
              </p>
              <button 
                type="button"
                className="btn-submit" 
                onClick={triggerBrochureDownload}
                style={{ maxWidth: '240px', margin: '0 auto 20px', display: 'block' }}
              >
                📥 Download Brochure Again
              </button>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--muted)', 
                  textDecoration: 'underline', 
                  cursor: 'pointer',
                  fontSize: '13px',
                  display: 'block',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <>
              <h3>Send Us a Message</h3>
              
              {/* Form Selector Tabs (Aligned with EmailJS 2 Free Templates) */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', background: 'rgba(253,231,173,0.05)', padding: '6px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                <button
                  type="button"
                  onClick={() => setInquiryFormType('contact')}
                  style={{
                    flex: 1,
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: inquiryFormType === 'contact' ? 'var(--accent)' : 'transparent',
                    color: inquiryFormType === 'contact' ? '#0b1623' : 'var(--text)'
                  }}
                >
                  📩 Contact & Item Inquiry
                </button>
                <button
                  type="button"
                  onClick={() => setInquiryFormType('quote')}
                  style={{
                    flex: 1,
                    padding: '12px 14px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: inquiryFormType === 'quote' ? 'var(--accent)' : 'transparent',
                    color: inquiryFormType === 'quote' ? '#0b1623' : 'var(--text)'
                  }}
                >
                  🎯 Get a Quote
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                {/* 1. CONTACT & ITEM INQUIRY FORM (TEMPLATE 1) */}
                {inquiryFormType === 'contact' && (
                  <>
                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="contFirstName">First Name</label>
                        <input
                          id="contFirstName"
                          name="firstName"
                          placeholder="John"
                          required
                          type="text"
                          value={contactData.firstName}
                          onChange={handleContactChange}
                          disabled={status === 'submitting'}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="contLastName">Last Name</label>
                        <input
                          id="contLastName"
                          name="lastName"
                          placeholder="Doe"
                          required
                          type="text"
                          value={contactData.lastName}
                          onChange={handleContactChange}
                          disabled={status === 'submitting'}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="contEmail">Email Address</label>
                      <input
                        id="contEmail"
                        name="email"
                        placeholder="john@company.com"
                        required
                        type="email"
                        value={contactData.email}
                        onChange={handleContactChange}
                        disabled={status === 'submitting'}
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="contCategory">Category</label>
                        <select
                          id="contCategory"
                          name="category"
                          required
                          value={contactData.category}
                          onChange={handleContactChange}
                          disabled={status === 'submitting'}
                        >
                          <option value="Product Sourcing">Product Sourcing</option>
                          <option value="Logistics Service">Logistics & Relocation Service</option>
                        </select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="contItemName">Product or Service Name</label>
                        <input
                          id="contItemName"
                          name="itemName"
                          placeholder={contactData.category === 'Product Sourcing' ? 'e.g., Basmati Rice' : 'e.g., Freight Forwarding'}
                          required
                          type="text"
                          value={contactData.itemName}
                          onChange={handleContactChange}
                          disabled={status === 'submitting'}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="contSpecs">Quantity / Volume / Cargo Specs</label>
                        <input
                          id="contSpecs"
                          name="specs"
                          placeholder="e.g., 50 Metric Tonnes, 5 Containers, 500 kg"
                          required
                          type="text"
                          value={contactData.specs}
                          onChange={handleContactChange}
                          disabled={status === 'submitting'}
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="contLoc">Destination Port / Address</label>
                        <input
                          id="contLoc"
                          name="location"
                          placeholder="e.g., Port of Hamburg, Germany"
                          required
                          type="text"
                          value={contactData.location}
                          onChange={handleContactChange}
                          disabled={status === 'submitting'}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="contMsg">Special Requirements / Notes</label>
                      <textarea
                        id="contMsg"
                        name="message"
                        placeholder="Provide details about packaging, certifications, delivery timeline, or custom specifications..."
                        rows={4}
                        value={contactData.message}
                        onChange={handleContactChange}
                        disabled={status === 'submitting'}
                      ></textarea>
                    </div>
                  </>
                )}

                {/* 2. GET A QUOTE FORM (TEMPLATE 2) */}
                {inquiryFormType === 'quote' && (
                  <>
                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="qFirstName">First Name</label>
                        <input
                          id="qFirstName"
                          name="firstName"
                          placeholder="John"
                          required
                          type="text"
                          value={quoteData.firstName}
                          onChange={handleQuoteChange}
                          disabled={status === 'submitting'}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="qLastName">Last Name</label>
                        <input
                          id="qLastName"
                          name="lastName"
                          placeholder="Doe"
                          required
                          type="text"
                          value={quoteData.lastName}
                          onChange={handleQuoteChange}
                          disabled={status === 'submitting'}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="qEmail">Email Address</label>
                        <input
                          id="qEmail"
                          name="email"
                          placeholder="john@company.com"
                          required
                          type="email"
                          value={quoteData.email}
                          onChange={handleQuoteChange}
                          disabled={status === 'submitting'}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="qPhone">Phone / WhatsApp</label>
                        <input
                          id="qPhone"
                          name="phone"
                          placeholder="+1 (555) 000-0000"
                          type="text"
                          value={quoteData.phone}
                          onChange={handleQuoteChange}
                          disabled={status === 'submitting'}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="qComp">Company Name</label>
                      <input
                        id="qComp"
                        name="companyName"
                        placeholder="Westmark Global Ltd."
                        type="text"
                        value={quoteData.companyName}
                        onChange={handleQuoteChange}
                        disabled={status === 'submitting'}
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="qType">Quote Requirement</label>
                        <select
                          id="qType"
                          name="quoteType"
                          required
                          value={quoteData.quoteType}
                          onChange={handleQuoteChange}
                          disabled={status === 'submitting'}
                        >
                          <option value="Bulk Commodity Quote">Bulk Commodity Supply Quote</option>
                          <option value="Contract Logistics Quote">Contract Logistics & Transport</option>
                          <option value="Corporate Relocation Quote">Corporate Relocation Services</option>
                          <option value="Partnership & Trade">Partnership & Commercial Trade</option>
                          <option value="Other Quote Request">Other Custom Quote Request</option>
                        </select>
                      </div>

                      <div className="form-field">
                        <label htmlFor="qTimeline">Target Timeline</label>
                        <input
                          id="qTimeline"
                          name="timeline"
                          placeholder="e.g., Within 2 weeks, Immediate"
                          type="text"
                          value={quoteData.timeline}
                          onChange={handleQuoteChange}
                          disabled={status === 'submitting'}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="qMsg">Detailed Quote Specifications</label>
                      <textarea
                        id="qMsg"
                        name="message"
                        placeholder="Describe your project scope, recurring volumes, target target prices, or specific service terms..."
                        required
                        rows={4}
                        value={quoteData.message}
                        onChange={handleQuoteChange}
                        disabled={status === 'submitting'}
                      ></textarea>
                    </div>
                  </>
                )}

                {status === 'error' && (
                  <div style={{ color: '#d9534f', fontSize: '13px', marginBottom: '16px' }}>
                    {errorMsg}
                  </div>
                )}

                <button className="btn-submit" type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Submitting Request...' : (inquiryFormType === 'quote' ? 'Submit Quote Request →' : 'Send Inquiry →')}
                </button>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Contact;
