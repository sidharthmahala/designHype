import React from 'react';
import './ServicesHospital.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Service = ({ title, description, icon }) => {
    return (
      <div className="service">
        <div className="service-icon">
          <FontAwesomeIcon icon={icon} /> {/* Directly use icon prop */}
        </div>
        <div className="service-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  };

const ServicesHospital = ({ mainService, subServices }) => {
    return (
      <div className="services">
        <div className="services-left">
          <Service {...mainService} />
        </div>
        <div className="services-right">
          {subServices.map((service) => (
            <Service key={service.title} {...service} />
          ))}
        </div>
      </div>
    );
  };
export default ServicesHospital;
