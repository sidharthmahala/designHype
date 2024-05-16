import React from 'react';

// import DesignLanding from '../components/DesignSubs/DesignLanding';
// import DlSection from '../components/DesignSubs/DlSection';

import HeroDesign from '../components/DesignSubs/HeroDesign';
import Navbar from '../components/Home/Navbar'
import DesignPricing from '../components/DesignSubs/DesignPricing';
import DesignFSection from '../components/DesignSubs/DesignFSection'
import HorizontalScrollImages from '../components/DesignSubs/HorizontalScrollImages';

const images = [
    '../../Assets/Data-report.png',
    '../../Assets/webdesign.png',
    '../../Assets/userflow.png',
    // Add more image URLs as needed
  ];


function Design() {
    return (
        <div>
            <Navbar />
            <HeroDesign />
            {/* <DesignLanding /> */}
            {/* <DlSection /> */}
            <DesignFSection />
            <DesignPricing />
            <DesignFSection />
            <HorizontalScrollImages images={images} scrollSpeed={2} />
            
        </div>
    )
}

export default Design;
