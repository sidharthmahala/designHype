import React from 'react';
import './ScopeOfWork.css';

const ScopeOfWork = () => {
    const scopeItems = [
        'Social Media Graphics',
        'Ad Creatives',
        'Marketing Materials',
        'Presentation Design',
        'Slide Decks',
        'Infographics',
        'Email Templates',
        'Business cards',
        'HTML email signatures',
        'Flyers',
        'Banner design',
        'Report design',
        'Brand guidelines',
        'Label design',
        'Packaging design',
        'App design',
        'Website design',
        'Landing page design',
        // 'Design systems',
        // 'Iconography',
        // 'Illustrations',
        // 'Custom Illustrations',
        // 'Logo Design',
        // 'Brand Identity',
        // 'Animations',
        'Wireframing and prototyping',
        'More+'
    ];

    return (
        <div className="scope-container">
            <h2>Scope of Work</h2>
            <ul className="scope-list">
                {scopeItems.map((item, index) => (
                    <li key={index} className="scope-item">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ScopeOfWork;
