import React from "react";

import './BookaCall.css'

function BookaCall() {

    const calendarLink = 'https://calendly.com/sidharthmahala/meeting-with-sidharth-india';
    return (
        <div className="bc-container">
            <h3>Book A Call</h3>
            <p>Ready to discuss your needs? Schedule a call with us.</p>
      <a href={calendarLink} className="book-a-call-button btn nav-btn" target="_blank" rel="noopener noreferrer">Schedule Now</a>
        </div>
    )
}

export default BookaCall;