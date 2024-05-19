import React from 'react';

// import DesignLanding from '../components/DesignSubs/DesignLanding';
// import DlSection from '../components/DesignSubs/DlSection';

import HeroDesign from '../components/DesignSubs/HeroDesign';
import Navbar from '../components/Home/Navbar'
import DesignPricing from '../components/DesignSubs/DesignPricing';
import DesignFSection from '../components/DesignSubs/DesignFSection'
import DesignFaqs from '../components/DesignSubs/DesignFaqs';
import ScopeOfWork from '../components/DesignSubs/ScopeOfWork';

function Design() {
    return (
        <div>
            <Navbar />
            <HeroDesign />
            {/* <DesignLanding /> */}
            {/* <DlSection /> */}
            <DesignFSection />
            <ScopeOfWork />
            <DesignPricing />
            <DesignFaqs />
           
        </div>
    )
}

export default Design;
