import React from "react";

import './DesignFooter.css'

function DesignFooter() {
    return (
        <div className="df-container">
            <div className="df-top">
                <div className="df-links">
                    <a href="/">Home</a>
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/contact-us">Contact</a>
                </div>
                {/* <div className="df-socials">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div> */}
            </div>
            <div className="df-bottom">
                <p>&copy; 2024 DesignHype. All rights reserved.</p>
            </div>
        </div>
    )
}

export default DesignFooter