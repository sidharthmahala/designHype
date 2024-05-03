import React from 'react';


import Topbar from '../components/Common/Topbar'
import Navbar from '../components/Home/Navbar';
import HeroDesign from '../components/DesignSubs/HeroDesign';


function Home() {
    return (
        <div>
            <Topbar text= "Limited time offer: Join now and get your first month at 50% off our regular subscription price!"/>
            <Navbar />
            <HeroDesign />
        </div>
    )
}

export default Home;