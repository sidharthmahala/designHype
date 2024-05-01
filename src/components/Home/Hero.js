import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h3>Trusted Digital Partner for Your Business</h3>
        <ul>
          <li>Performance Based</li>
          <li>Cost Effective</li>
          <li>Data Driven</li>
        </ul>
        <button className="btn nav-btn">Book A Call 📅</button>
      </div>
      <img src={require("../../Assets/Data-report.png")} className="hero-image" alt="" />
    </div>
  )
}

export default Hero