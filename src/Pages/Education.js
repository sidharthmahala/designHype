import React from 'react';
import Navbar from '../components/Home/Navbar';
import Topbar from '../components/Home/Topbar';
import Hero from '../components/Home/Hero';
import Ratings from '../components/Common/Ratings';
import ServiceSchool from '../components/Education/ServiceSchool';
import Footer from '../components/Home/Footer'

const SchoolBrandLogos = [
  { src: require("../Assets/School/all_saint.jpg"), alt: "all saint" },
  { src: require("../Assets/School/bristish.jpg"), alt: "Zaini Logo" },
  { src: require("../Assets/School/bts.png"), alt: "Steam Logo" },
  { src: require("../Assets/School/cls.png"), alt: "Oderae Logo" },
  { src: require("../Assets/School/cpkota.png"), alt: "Lumi Logo" },
  { src: require("../Assets/School/jpis.jpg"), alt: "Leswine Logo" },
  { src: require("../Assets/School/k12.png"), alt: "Zaini Logo" },
  { src: require("../Assets/School/nms.jpg"), alt: "Oderae Logo" },
  { src: require("../Assets/School/rainbow.png"), alt: "Lumi Logo" },
  { src: require("../Assets/School/s j public.png"), alt: "Leswine Logo" },
  { src: require("../Assets/School/sas.jpg"), alt: "Zaini Logo" },
  { src: require("../Assets/School/sh.jpg"), alt: "Steam Logo" },
  { src: require("../Assets/School/springdale.jpg"), alt: "Oderae Logo" },
  { src: require("../Assets/School/sts.png"), alt: "Lumi Logo" },
  { src: require("../Assets/School/stsj.png"), alt: "Lumi Logo" } 
];

function Education() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Hero />
      <Ratings brandLogos={SchoolBrandLogos} />
      <ServiceSchool />
      <Footer />
    </div>
  );
}

export default Education;
