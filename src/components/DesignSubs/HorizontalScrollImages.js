// HorizontalScrollImages.js
import React from 'react';
import PropTypes from 'prop-types';
import './HorizontalScrollImages.css';

const HorizontalScrollImages = ({ images, scrollSpeed }) => {
  return (
    <div className="scroll-container">
      <div className="scroll-content" style={{ animationDuration: `${scrollSpeed}s` }}>
        {images.concat(images).map((image, index) => (
          <div className="scroll-item" key={index} style={{ backgroundImage: `url(${image})` }}>
            {/* Background images are set through inline styles */}
          </div>
        ))}
      </div>
    </div>
  );
};

HorizontalScrollImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  scrollSpeed: PropTypes.number.isRequired, // Scroll speed in seconds
};

export default HorizontalScrollImages;
