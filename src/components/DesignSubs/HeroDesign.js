import React from 'react';
import './HeroDesign.css';
import DesignStripe from './DesignStripe'
const HeroDesign = () => {
  return (
    <section className="hero-design">
      <div className="hero-content-design">
        {/* <ul>
          <li>Fresh</li>
          <li>High Quality</li>
          <li>Modern</li>
        </ul> */}
        {/* <img src={require('../../Assets/bg-sta.png')} className="bg-star-1" alt=""/> */}
        <h1>Design Subscription for Everyone, delivered on time, every time</h1>
        <p>Get all the graphics you need, when you need them. Tailored for Startups, Small Businesses, and Indie Developers for one flat monthly fee.</p>
        <div className='spots-available'>
          <button className="hero-button-design">Get Started Today</button>
          <div className='spots-available-text'><span class="led-indicator"></span>4 Spots Available</div>
          {/* <img src={require('../../Assets/bg-sta.png')} className="bg-star-2" alt=""/> */}
        </div>
        {/* <ul>
          <li>Elegant</li>
          <li>Crisp</li>
          <li>Smart</li>
        </ul> */}
      </div>
      <DesignStripe />
    </section>
  );
};

export default HeroDesign;
