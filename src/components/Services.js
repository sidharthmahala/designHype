import React from 'react'
import './Services.css'

function Services() {
    return (
        <div className="services-container">
            <div className="services-title">
                <p>Services</p>
            </div>
            <img src={require("../Assets/smartphone.png")} className="content" alt="" />
            <div className="services-catogary">
                <div className="service-card paid-ads">
                    <h3>01. <span>Paid Ads</span></h3>
                    <p>The core of our service offering, creating a specific strategy tailored to your brand. even if you’re running ads at the moment it’s most likely they could be working a lot harder for you.</p>
                </div>
                <div className="service-card Creatives">
                    <h3>02. <span>Creative Strategy</span></h3>
                    <p>A great ad doesn’t exist without great creative strategy. giving you the direction you need to create fresh and iterative ads to enable true growth.</p>
                </div>
                <div className="service-card Content">
                    <h3>03. <span>Content Strategy</span></h3>
                    <p>The core of our service offering, creating a specific strategy tailored to your brand. even if you’re running ads at the moment it’s most likely they could be working a lot harder for you.</p>
                </div>
            </div>

        </div>
    )
}

export default Services