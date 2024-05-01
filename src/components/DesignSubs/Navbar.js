import React from 'react';
//import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  return (
    <nav className="menu">
      <p className='logo-design'>DesignHype</p>
      {/* <ul className="menu-list">
        <li className="menu-item">
          <Link to="how-it-works">
            How it Works
          </Link>
        </li>
        <li className="menu-item">
          <Link to="benefits">
            Benefits
          </Link>
        </li>
        <li className="menu-item">
          <Link to="services">
            Services
          </Link>
        </li>
        <li className="menu-item">
          <Link to="pricing">
            Pricing
          </Link>
        </li>
        <li className="menu-item">
          <Link to="faqs">
            FAQs
          </Link>
        </li>
      </ul> */}
    </nav>
  );
}

export default Navbar;
