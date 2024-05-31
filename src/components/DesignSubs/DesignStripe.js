import React from 'react';
import './DesignStripe.css';

function DesignStripe() {
  return (
    <div className="design-stripe-container">
      <div className="scroll-items">
        <div className="scroll-items__item">
          <img src={require('../../Assets/lightning-bolt-shadow.png')} alt=' ' />
        </div>
        <div className="scroll-items__item">
          unlimited revisions
        </div>
        <div className="scroll-items__item">
          <img src={require('../../Assets/lightning-bolt-shadow.png')} alt=' ' />
        </div>
        <div className="scroll-items__item">
          <p>Affordable Pricing</p>
        </div>
        <div className="scroll-items__item">
          <img src={require('../../Assets/lightning-bolt-shadow.png')} alt=' ' />
        </div>
        <div className="scroll-items__item">
          <p>High-Quality Designs</p>
        </div>
        <div className="scroll-items__item">
          <img src={require('../../Assets/lightning-bolt-shadow.png')} alt=' ' />
        </div>
        <div className="scroll-items__item">
          <p>Fast Turnaround</p>
        </div>
        {/* Duplicate the items to create a seamless loop */}
        <div className="scroll-items__item">
          <img src={require('../../Assets/lightning-bolt-shadow.png')} alt=' ' />
        </div>
        <div className="scroll-items__item">
          unlimited revisions
        </div>
        <div className="scroll-items__item">
          <img src={require('../../Assets/lightning-bolt-shadow.png')} alt=' ' />
        </div>
        <div className="scroll-items__item">
          <p>Affordable Pricing</p>
        </div>
        <div className="scroll-items__item">
          <img src={require('../../Assets/lightning-bolt-shadow.png')} alt=' ' />
        </div>
        <div className="scroll-items__item">
          <p>High-Quality Designs</p>
        </div>
        <div className="scroll-items__item">
          <img src={require('../../Assets/lightning-bolt-shadow.png')} alt=' ' />
        </div>
        <div className="scroll-items__item">
          <p>Fast Turnaround</p>
        </div>
      </div>
    </div>
  );
}

export default DesignStripe;
