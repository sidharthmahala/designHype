import React from 'react'
import './DesignPricing.css'

function DesignPricing() {

    // const calendarLink = 'https://calendly.com/sidharthmahala/meeting-with-sidharth-india';
    const calendarLink = 'https://airtable.com/appt852vx1MkACJdY/shrKZDq15GKCe4oX8';

    return (
        <div className='dp-container' id='pricing'>
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
                            <li>Unlimited stock photos</li>
                        </ul>
                        <ul>
                            <li>Credit-card payments</li>
                            <li>Pause or cancel anytime</li>
                            <li>Managed via Slack and Trello</li>
                            <li>Unlimited users</li>
                        </ul>
                    </div>
                </div>
                <div className='dp-mid'>
                    <div className='dp-mid-sub-btn'>
                        <h3>$297 Per Month</h3>
                        <p>Billed Every Three Months</p>
                    </div>
                    <div className='dp-mid-sub-btn'>
                        <button className='hero-button-design dp-sub-btn'>Subscribe</button>
                        <div className='dp-spots-available-text'><span class="dp-led-indicator"></span>3 Spots Available</div>
                    </div>
                    <a href={calendarLink} className="dp-book-call" target="_blank" rel="noopener noreferrer">Book A Call 📅</a>
                </div>
                <div className='dp-right'>
                    <div className='dp-mid-sub-btn'>
                        <h3>$467 Per Month</h3>
                        <p>Billed Every Month</p>
                    </div>
                    <div className='dp-mid-sub-btn'>
                        <button className='hero-button-design dp-sub-btn'>Subscribe</button>
                        <div className='dp-spots-available-text'>Spots Available</div>
                    </div>
                    <a href={calendarLink} className="dp-book-call" target="_blank" rel="noopener noreferrer">Book A Call 📅</a>
                </div>
            </div>
        </div>
    )
}

export default DesignPricing;
