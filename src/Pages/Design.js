import React from 'react';

import DesignLanding from '../components/DesignSubs/DesignLanding';
import DlSection from '../components/DesignSubs/DlSection';
import DesignStripe from '../components/DesignSubs/DesignStripe';
//import HeroDesign from '../components/DesignSubs/HeroDesign';


function Home() {
    return (
        <div>
            {/* <HeroDesign /> */}
            <DesignLanding />
            <DesignStripe/>
            <DlSection />
        </div>
    )
}

export default Home;