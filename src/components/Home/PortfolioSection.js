// PortfolioSection.js
import React from 'react';
import './PortfolioSection.css'; // Import your CSS file



const portfolioItems = [
    {
        alt: 'instagram-story',
        src: require("../../Assets/leswine.png"), 
    },
    {
        alt: 'landing-page',
        src: require("../../Assets/leswine.png"),
    },
    {
        alt: 'instagram-post',
        src: require("../../Assets/webdesign.png"), 
    },
    {
        alt: 'instagram-post',
        src: require("../../Assets/Hamilton-Media.png"), 
    },
    {
        alt: 'instagram-story',
        src: require("../../Assets/leswine.png"), 
    },
    {
        alt: 'landing-page',
        src: require("../../Assets/leswine.png"),
    },
    {
        alt: 'instagram-post',
        src: require("../../Assets/webdesign.png"), 
    },
    {
        alt: 'instagram-post',
        src: require("../../Assets/Hamilton-Media.png"), 
    }
    
];

// Inside PortfolioSection component
const PortfolioSection = () => {
    return (
        <section className="portfolio-section">
            {portfolioItems.map((item, index) => (
                <div className="portfolio-item" key={index}>
                    <img src={item.src} alt={item.alt} />
                </div>
            ))}
        </section>
    );
};


export default PortfolioSection;
