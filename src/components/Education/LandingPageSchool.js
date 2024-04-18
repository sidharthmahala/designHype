import React from 'react';
import { FaSchool, FaMobileAlt, FaSearch, FaChartLine, FaRobot, FaVideo } from 'react-icons/fa';
import './LandingPageSchool.css'
const LandingPageSchool = () => {
  return (
    <div className='container'>
      <div className='hero-education'>
        <div className='hero-education-text'>
          <h1>Empower Your Education Business</h1>
          <p>Unlock the full potential of digital transformation</p>
        </div>
        <div className='hero-education-image'>
        </div>
      </div>

      <div className='service-container'>
        <ServiceCard
          icon={<FaSchool />}
          title="Website & App Design"
          description="Craft beautiful, user-friendly websites and apps tailored to your educational institute."
        />
        <ServiceCard
          icon={<FaMobileAlt />}
          title="Social Media Management"
          description="Engage with your audience effectively through strategic social media management."
        />
        <ServiceCard
          icon={<FaSearch />}
          title="Digital Marketing & SEO"
          description="Drive traffic and boost conversions with expert digital marketing strategies and SEO."
        />
        <ServiceCard
          icon={<FaChartLine />}
          title="Consulting Services"
          description="Get personalized advice and guidance on digital strategies for your education business."
        />
        <ServiceCard
          icon={<FaRobot />}
          title="AI Automation"
          description="Automate repetitive tasks and streamline operations with cutting-edge AI solutions."
        />
        <ServiceCard
          icon={<FaVideo />}
          title="Content Creation"
          description="Produce high-quality multimedia content for social media, including graphics, videos, and more."
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className='serviceCard'>
      <div className='service-icon-title'>
        <div className='serviceCard-icon'> {icon} </div>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default LandingPageSchool;
