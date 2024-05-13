import React from 'react';

import Navbar from '../components/Home/Navbar';
import Topbar from '../components/Common/Topbar';
import Hero from '../components/Home/Hero';
import Ratings from '../components/Common/Ratings';
//import PortfolioSection from '../components/Home/PortfolioSection';

//import Services1 from '../components/Home/Services1';
//import StepsMain from '../components/Home/StepsMain';
// import Partners from '../components/Home/Partners';
 //import Founder from './components/Founder';
// import Form from '../components/Home/Form';
import Footer from '../components/Home/Footer';
//import HeroHospital from '../components/Hospitals/HeroHospital';
import ServiceSchool from '../components/Education/ServiceSchool';
import BookaCall from '../components/Hospitals/BookaCall'


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


  // const heroData = {
  //   title: 'Website Development',
  //     description: 'Get a modern and user-friendly website that attracts new customers.',
  //     icon: 'fas fa-code', 
  //     subServices: [
  //       { title: 'UI/UX Design', description: 'Our UI/UX design service enhances user satisfaction through intuitive interfaces and seamless functionality.', icon: 'fas fa-paint-brush' },
  //       { title: 'Content Creation', description: 'Our website content creation service crafts engaging and informative blogs tailored to your brand\'s voice and target audience, driving engagement, boosting conversions, and establishing your authority in your industry.', icon: 'fas fa-pencil-alt' },
  //       { title: 'SEO Optimization', description: 'Our SEO optimization service maximizes your online visibility through strategic keyword targeting, and content optimization, ensuring higher rankings and increased organic traffic to your website.', icon: 'fas fa-search' },
  //       { title: 'Mobile Responsiveness', description: 'Our responsive design service ensures your website adapts seamlessly to all screen sizes and devices, improving usability, and maximizing engagement across mobile, tablet, and desktop platforms', icon: 'fas fa-mobile' }
  //     ]
  // };
  

function Home() {
    return (
        <div>
            <Topbar text = "Limited Time Offer : Book a Free Social Media Audit for your Brand"/>
             <Navbar />
            <Hero />
            <Ratings brandLogos={HomeBrandLogos} />
            {/* <PortfolioSection /> */}
            {/* <Services1 /> */}
            {/* <StepsMain /> */}
            {/* <Partners /> */}
            {/* <Form /> */}
            {/* <HeroHospital {...heroData} /> */}
            <ServiceSchool />
            <BookaCall />
            <Footer />
        </div>
    )
}

export default Home;