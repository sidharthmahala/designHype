import React from 'react';
import './Ratings.css';
 
function Ratings({ brandLogos }) {
  return (
    <div className='ratings-container'>
      <h4>Trusted by {brandLogos.Type}</h4>
      <div className="reviews">
        {brandLogos.map((logo, index) => (
          <div className="brand-logo" key={index}>
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Ratings;
