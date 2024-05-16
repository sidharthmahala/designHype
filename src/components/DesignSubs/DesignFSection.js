import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faDollarSign, faStar, faExpand, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import './DesignFSection.css';

const DesignFSection = () => {
    return (
        <div className="design-container">
            <div className="design-item">
                <FontAwesomeIcon icon={faStar} size="3x" className='fa-icon' />
                <h3>High Quality</h3>
                <p>Access exceptional design quality whenever you need it.</p>
            </div>
            <div className="design-item">
                <FontAwesomeIcon icon={faTrello} size="3x" className='fa-icon' />
                <h3>Design board</h3>
                <p>Effortlessly organize your design tasks with a Trello board.</p>
            </div>
            <div className="design-item">
                <FontAwesomeIcon icon={faExpand} size="3x" className='fa-icon' />
                <h3>Flexible and scalable</h3>
                <p>Adjust your design needs as required, with the option to pause or cancel anytime.</p>
            </div>
            <div className="design-item">
                <FontAwesomeIcon icon={faBolt} size="3x" className='fa-icon' />
                <h3>Super-fast delivery</h3>
                <p>Receive each design quickly, typically within just a day.</p>
            </div>
            <div className="design-item">
                <FontAwesomeIcon icon={faDollarSign} size="3x" className='fa-icon' />
                <h3>Fixed monthly rate</h3>
                <p>Enjoy consistent pricing with no hidden fees, paying the same amount each month.</p>
            </div>
            <div className="design-item">
                <FontAwesomeIcon icon={faCheckCircle} size="3x" className='fa-icon' />
                <h3>Unique and all yours</h3>
                <p>Each design is custom-made for you and fully owned by you.</p>
            </div>
        </div>
    );
};

export default DesignFSection;
