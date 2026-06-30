import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="nav-inner">
        <Link className="brand-link" to="/">
          <img alt="Westmark Global Industries" className="logo-img" src={`${import.meta.env.BASE_URL}assets/westmark-logo.svg`} />
          <span className="brand-lockup">
            <span className="brand-name">WESTMARK</span>
            <span className="brand-subtitle">-Global Industries</span>
          </span>
        </Link>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Link className="btn-nav" to="/contact?type=quote">Get a Quote →</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
