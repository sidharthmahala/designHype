import React from 'react'
import './Services1.css'

function Services() {
    return (
        <div className="services-container">
            <div className="services-title">
                <p>Services</p>
            </div>
            {/* <img src={require("../Assets/smartphone.png")} className="content" alt="" /> */}
            <div className="services-catogary">
                <div className="service-card paid-ads">
                    <img src={require("../Assets/smartphone.png")} className="sc-icon" alt="" />
                    <h3>01. <span>Paid Ads</span></h3>
                    <p>The core of our service offering, creating a specific strategy tailored to your brand. even if you’re running ads at the moment it’s most likely they could be working a lot harder for you.</p>
                </div>
                <div className="service-card Creatives">
                    <img src={require("../Assets/smartphone.png")} className="sc-icon" alt="" />
                    <h3>02. <span>Creative Strategy</span></h3>
                    <p>A great ad doesn’t exist without great creative strategy. giving you the direction you need to create fresh and iterative ads to enable true growth.</p>
                </div>
                <div className="service-card Content">
                    <img src={require("../Assets/smartphone.png")} className="sc-icon" alt="" />
                    <h3>03. <span>Content Strategy</span></h3>
                    <p>The core of our service offering, creating a specific strategy tailored to your brand. even if you’re running ads at the moment it’s most likely they could be working a lot harder for you.</p>
                </div>
                <div className="service-card paid-ads">
                    <img src={require("../Assets/smartphone.png")} className="sc-icon" alt="" />
                    <h3>04. <span>Graphics Design</span></h3>
                    <p>The core of our service offering, creating a specific strategy tailored to your brand. even if you’re running ads at the moment it’s most likely they could be working a lot harder for you.</p>
                </div>
                <div className="service-card Creatives">
                    <img src={require("../Assets/smartphone.png")} className="sc-icon" alt="" />
                    <h3>05. <span>Video Editing</span></h3>
                    <p>A great ad doesn’t exist without great creative strategy. giving you the direction you need to create fresh and iterative ads to enable true growth.</p>
                </div>
                <div className="service-card Content">
                    <img src={require("../Assets/smartphone.png")} className="sc-icon" alt="" />
                    <h3>06. <span>Video Production</span></h3>
                    <p>The core of our service offering, creating a specific strategy tailored to your brand. even if you’re running ads at the moment it’s most likely they could be working a lot harder for you.</p>
                </div>
            </div>

        </div>
    )
}

export default Services