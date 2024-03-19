import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h3>Digital Partner for Businesses</h3>
        <ul className='services-list-hero'>
          <li>Marketing & Stretagy</li>
          <li>Graphics Designing</li>
          <li>Video Production & Editing</li>
        </ul>
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