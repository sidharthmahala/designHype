import React from 'react';

// import DesignLanding from '../components/DesignSubs/DesignLanding';
// import DlSection from '../components/DesignSubs/DlSection';

import HeroDesign from '../components/DesignSubs/HeroDesign';
import Navbar from '../components/Home/Navbar'
import DesignPricing from '../components/DesignSubs/DesignPricing';
import DesignFSection from '../components/DesignSubs/DesignFSection'
import DesignFaqs from '../components/DesignSubs/DesignFaqs';

function Design() {
    return (
        <div>
            <Navbar />
            <HeroDesign />
            {/* <DesignLanding /> */}
            {/* <DlSection /> */}
            <DesignFSection />
            <DesignPricing />
            <DesignFaqs />
        </div>
    )
}

export default Design;
