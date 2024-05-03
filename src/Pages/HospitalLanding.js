import React from 'react';

import Navbar from '../components/Home/Navbar';
import Topbar from '../components/Common/Topbar';
import Hero from '../components/Home/Hero';
import Ratings from '../components/Common/Ratings';
//import PortfolioSection from '../components/Home/PortfolioSection';

import Services1 from '../components/Home/Services1';
//import StepsMain from '../components/Home/StepsMain';
 import Partners from '../components/Home/Partners';
 //import Founder from './components/Founder';
// import Form from '../components/Home/Form';
import Footer from '../components/Home/Footer';
import HeroHospital from '../components/Hospitals/HeroHospital';


const HomeBrandLogos = [
    { src: require("../Assets/leswine.png"), alt: "Leswine Logo" },
    { src: require("../Assets/zaini.png"), alt: "Zaini Logo" },
    { src: require("../Assets/steam.png"), alt: "Steam Logo" },
    { src: require("../Assets/oderae.png"), alt: "Oderae Logo" },
    { src: require("../Assets/lumi.png"), alt: "Lumi Logo" },
    { src: require("../Assets/leswine.png"), alt: "Leswine Logo" },
    { src: require("../Assets/zaini.png"), alt: "Zaini Logo" },
    { src: require("../Assets/steam.png"), alt: "Steam Logo" },
    { src: require("../Assets/oderae.png"), alt: "Oderae Logo" },
    { src: require("../Assets/lumi.png"), alt: "Lumi Logo" },
    { src: require("../Assets/leswine.png"), alt: "Leswine Logo" },
    { src: require("../Assets/zaini.png"), alt: "Zaini Logo" },
    { src: require("../Assets/steam.png"), alt: "Steam Logo" },
    { src: require("../Assets/oderae.png"), alt: "Oderae Logo" },
    { src: require("../Assets/lumi.png"), alt: "Lumi Logo" }, 
  ];

function Home() {
    return (
        <div>
            <Topbar text = "Limited Time Offer : Book a Free Social Media Audit for your Brand"/>
             <Navbar />
            <Hero />
            <Ratings brandLogos={HomeBrandLogos} />
            {/* <PortfolioSection /> */}
            <Services1 />
            {/* <StepsMain /> */}
            <Partners />
            {/* <Form /> */}
            <HeroHospital />
            <Footer />
        </div>
    )
}

export default Home;