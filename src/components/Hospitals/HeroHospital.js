import React from 'react';
import './HeroHospital.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HeroHospital({ title, description, icon, subServices }) {
  return (
    <div className="hh-container">
      <div className="big-box">
        <h2>
          <FontAwesomeIcon icon={icon} /> {title}
        </h2>
        <p>{description}</p>
      </div>
      <div className="small-boxes">
        {subServices.map((service) => (
          <div className="small-box" key={service.title}>
            <h2>
              <FontAwesomeIcon icon={service.icon} /> {service.title}
            </h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroHospital;
