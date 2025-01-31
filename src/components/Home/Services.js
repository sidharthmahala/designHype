import React from 'react'
import './Services.css'

const serviceData = [
    {
        id: '01',
        title: 'Paid Ads',
        description: 'The core of our service offering, creating a specific strategy tailored to your brand. Even if youre running ads at the moment its most likely they could be working a lot harder for you.'
    },
    {
        id: '02',
        title: 'Creative Strategy',
        description: 'A great ad doesn\'t exist without great creative strategy, giving you the direction you need to create fresh and iterative ads to enable true growth.'
    },
    {
        id: '03',
        title: 'Content Strategy',
        description: 'Develop a comprehensive content plan that aligns with your brand voice and marketing goals, ensuring consistent and engaging messaging across all platforms.'
    }
]

function Services() {
    return (
        <section className="services-container">
            <h2 className="services-title">Services</h2>
            <img src={require("../../Assets/smartphone.png")} className="content" alt="Smartphone illustration" />
            <div className="services-category">
                {serviceData.map(service => (
                    <div key={service.id} className={`service-card ${service.title.toLowerCase().replace(' ', '-')}`}>
                        <h3>{service.id}. <span>{service.title}</span></h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services