import React from 'react';
import './ServiceSchool.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faBullhorn, faChartPie, faVideo, faRobot, faEarth } from '@fortawesome/free-solid-svg-icons';

// const servicesData1 = [
//     { title: "Social Media Management", description: "Engage students and build community with tailored social media strategies and content.", icon: faBoltLightning },
//     { title: "Marketing & Strategy", description: "Reach your target audience of parents and students with targeted advertising campaigns.", icon: faBullhorn },
//     { title: "Graphics Designing", description: "Create compelling visuals for educational materials, presentations, and social media.", icon: faChartPie },
//     { title: "Video Production & Editing", description: "Bring educational concepts to life with engaging videos and animations.", icon: faVideo },
//     { title: "AI Automation", description: "Streamline administrative tasks within educational organizations using AI-powered tools.", icon: faRobot },
//     { title: "Website and App Development", description: "We address your school's unique challenges with custom web and app solutions designed to improve student engagement.", icon: faEarth }
// ];
const servicesData = [
    { title: "Social Media Management", description: "Enhance patient experience and interaction through tailored digital strategies and content.", icon: faBoltLightning },
    { title: "Marketing & Strategy", description: "Connect with your target audience of patients and caregivers through targeted marketing campaigns.", icon: faBullhorn },
    { title: "Graphics Design", description: "Create impactful visuals for medical documents, presentations, and online platforms.", icon: faChartPie },
    { title: "Video Production & Editing", description: "Communicate medical concepts effectively with engaging videos and animations.", icon: faVideo },
    { title: "Automation Solutions", description: "Optimize administrative tasks within healthcare facilities using cutting-edge automation tools.", icon: faRobot },
    { title: "Website and App Development", description: "Address the unique needs of your healthcare organization with custom web and app solutions designed to improve patient engagement and healthcare delivery.", icon: faEarth }
];

function ServiceSchool() {
    return (
        <section id="school-services" className="school-services-section">
            <div className="school-services-container">
                <h2>Services</h2>
                <p className="school-services-intro">We offer specialized marketing and technology solutions to help businesses thrive.</p>
                <div className="school-services-grid">
                    {servicesData.map((service, index) => (
                        <div className="school-service-card" key={index}>
                            <h3 className="school-service-title">
                                <span className="school-service-icon">
                                    <FontAwesomeIcon icon={service.icon} />
                                </span>
                                {service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSchool;
