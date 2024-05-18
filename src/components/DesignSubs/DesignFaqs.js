import React, { useState } from 'react';
import './DesignFaqs.css';

const faqs = [
    {
        question: 'Is there a limit to how many requests I can have?',
        answer: 'No, you can add as many design requests as you want once you subscribe. They will be delivered one by one.',
    },
    {
        question: 'How fast will I receive my designs?',
        answer: 'Most designs are completed in two days or less. More complex designs might take a bit longer.',
    },
    {
        question: 'Who are the designers?',
        answer: 'DesignHype is run by one person, the founder. For special requests like animations or custom illustrations, I work with partner designers.',
    },
    {
        question: 'How does the pause feature work?',
        answer: 'If you don’t need designs for a while, you can pause your subscription. Your billing is based on a 31-day cycle. For example, if you use 21 days and then pause, you’ll have 10 days left to use later.',
    },
    {
        question: 'What software do you use to design?',
        answer: 'I use Figma, Adobe Illustrator, and Canva for most design requests.',
    },
    {
        question: 'How do I request designs?',
        answer: 'You can request designs through Trello. You can also share Google Docs, wireframes, or record a Loom video if you prefer.',
    },
    {
        question: 'What if I don’t like the design?',
        answer: 'No problem! I’ll keep revising the design until you are completely happy with it.',
    },
    {
        question: 'Is there any design work you don’t cover?',
        answer: 'Yes, I don’t do 3D modeling, animated graphics (GIFs), document design (like medical forms), complex packaging, or extensive print design (like magazines or books).',
    },
    {
        question: 'Are there any refunds if I don’t like the service?',
        answer: 'No, I don’t offer refunds due to the high quality of the work provided.',
    },
];

const DesignFaqs = () => {
    const [isOpen, setIsOpen] = useState(Array(faqs.length).fill(false));

    const toggleFAQ = (index) => {
        const newIsOpen = [...isOpen];
        newIsOpen[index] = !newIsOpen[index];
        setIsOpen(newIsOpen);
    };

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${isOpen[index] ? 'open' : ''}`}>
                    <h3 onClick={() => toggleFAQ(index)}>
                        {faq.question}
                        <span className={`icon ${isOpen[index] ? 'open' : ''}`}>+</span>
                    </h3>
                    {isOpen[index] && <p>{faq.answer}</p>}
                </div>
            ))}
        </div>
    );
};

export default DesignFaqs;
