import React from 'react'
import './DesignPricing.css'

function DesignPricing() {
    return (
        <div className='dp-container'>
            <div className='dp-subscription'>
                <h2>SUBSCRIPTION</h2>
                <p>Business-driving design solutions</p>
            </div>
            <div className='dp-sub-container'>
                <div className='dp-left'>
                    <h3>Standard</h3>
                    <div className='dp-left-list'>
                        <ul>
                            <li>Unlimited design requests</li>
                            <li>Unlimited revisions</li>
                            <li>Average 2-3 days delivery </li>
                        </ul>
                        <ul>
                            <li>Credit-card payments</li>
                            <li>Pause or cancel anytime</li>
                            <li>Managed via Slack and Trello</li>
                        </ul>
                    </div>
                </div>
                <div className='dp-mid'>
                    <h2>Three Months Plan</h2>
                    <h3>297 Per Month</h3>
                    <button className='hero-button-design'>Subscribe</button>
                </div>
                <div className='dp-right'>
                    <h2>One Month Plan</h2>
                    <h3>497 Per Month</h3>
                    <button className='hero-button-design'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default DesignPricing;
