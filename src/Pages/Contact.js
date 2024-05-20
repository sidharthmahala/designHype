import React from 'react'
import ContactUs from '../components/DesignSubs/ContactUs';
import Navbar from '../components/Home/Navbar';
import DesignFooter from '../components/DesignSubs/DesignFooter';

function Contact (){
    return(
        <div>
            <Navbar />
            <ContactUs />
            <DesignFooter />
        </div>
    )
}

export default Contact;