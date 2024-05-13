import React from 'react'
import './Hero.css'

function Hero() {
  const calendarLink = 'https://calendly.com/sidharthmahala/meeting-with-sidharth-india';
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h3>Trusted Digital Partner for Your Business</h3>
        <ul>
          <li>Performance Based</li>
          <li>Cost Effective</li>
          <li>Data Driven</li>
        </ul>
        <a href={calendarLink} className="btn nav-btn" target="_blank" rel="noopener noreferrer">Book A Call 📅</a>
      </div>
      <img src={require("../../Assets/Data-report.png")} className="hero-image" alt="" />
    </div>
  )
}

export default Hero