import React from "react";

import './ContactUs.css'

function ContactUs() {
    const airtable_link = "https://airtable.com/appt852vx1MkACJdY/shrgUg4JQYsG6LDJM"
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>Click on the below given button to fill out the Form on Airtable.</p>
            <a href={airtable_link} className="dp-book-call" target="_blank" rel="noopener noreferrer">Contact Us</a>
            <div>
                <h3>Office Address</h3>
                <p>Signature Twoer, <br />
                lalkothi, Jaipur Rajasthan 302005 <br/>
                India
                </p>
            </div>


        </div>
    )
}

export default ContactUs;