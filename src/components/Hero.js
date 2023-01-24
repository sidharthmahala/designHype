import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h3>Expert E-commerce Growth Partner for DTC Brands</h3>
        <ul>
          <li>Performance Based</li>
          <li>Full Transparency</li>
          <li>Data Driven</li>
        </ul>
        <button className="btn nav-btn">Let's talk 🤙</button>
      </div>
      <img src={require("../Assets/Data-report.png")} className="hero-image" alt="" />
    </div>
  )
}

export default Hero