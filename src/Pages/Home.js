import React from 'react';

import Navbar from '../components/Home/Navbar';
import Topbar from '../components/Home/Topbar';
 import Hero from '../components/Home/Hero';
 import Ratings from '../components/Home/Ratings';
//import PortfolioSection from '../components/Home/PortfolioSection';

import Services1 from '../components/Home/Services1';
//import StepsMain from '../components/Home/StepsMain';
 import Partners from '../components/Home/Partners';
 //import Founder from './components/Founder';
// import Form from '../components/Home/Form';
import Footer from '../components/Home/Footer';

function Home() {
    return (
        <div>
            <Topbar />
             <Navbar />
            <Hero />
            <Ratings />
            {/* <PortfolioSection /> */}
            <Services1 />
            {/* <StepsMain /> */}
            <Partners />
            {/* <Form /> */}
            <Footer />
        </div>
    )
}

export default Home;