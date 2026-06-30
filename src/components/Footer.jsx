import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          <img alt="Westmark Global Industries" className="footer-logo-img" src="/assets/westmark-logo.svg" />
          <span className="brand-lockup">
            <span className="brand-name">WESTMARK</span>
            <span className="brand-subtitle">-Global Industries</span>
          </span>
        </div>
        <span style={{ fontSize: '20px' }}>© 2025 Westmark Global Industries · All rights reserved</span>
        <div className="footer-links">
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
