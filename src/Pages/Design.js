import React from 'react';

//import DesignLanding from '../components/DesignSubs/DesignLanding';
//import DlSection from '../components/DesignSubs/DlSection';
// import DesignStripe from '../components/DesignSubs/DesignStripe';
import HeroDesign from '../components/DesignSubs/HeroDesign';
import Navbar from '../components/Home/Navbar'
import DesignPricing from '../components/DesignSubs/DesignPricing';


function Home() {
    return (
        <div>
            <Navbar />
            <HeroDesign />
            {/* <DesignLanding /> */}
            {/* <DesignStripe/> */}
            {/* <DlSection /> */}
            <DesignPricing />
        </div>
    )
}

export default Home;