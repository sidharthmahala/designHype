import React from 'react'
import Steps from './components/Home/Steps'

function StepsMain() {
    return (
        <div className="process-container">
            <div className="about-us">
                <h4>About</h4>
                <p>we are the go-to experts for eCommerce brands looking to maximize performance with PPC Ads. Our team of masterminds can create a custom strategy and budget that will carry your product from its launch phase through to mastering the nuances of an ever-evolving industry. We are proud to offer cutting-edge techniques for you to benefit from, as well as providing timely data analysis and metrics that ensure performance success. With Hamilton, you get everything you need in a marketing company - Data driven and superior results combined with a performance-based ethos.</p>
            </div>
            <div className='process-flex'>
                <div className="process-title">
                    <h4>The process</h4>
                </div>
                {/* <img className='process-img' src={require("../../Assets/User-flow.png")} alt=""/> */}

                <div className="process-steps">
                    <Steps num="1" heading="Initial Consultation" text="We'll have a chat to understand your business, goals, and current social media presence. We'll also discuss how we can help and see if we're a good fit to work together." />
                    <Steps num="2" heading="Strategy and Campaign Planning" text="We'll conduct an audit of your current social media presence and create a comprehensive strategy and campaign plan to achieve your goals." />
                    <Steps num="3" heading="Campaign Execution" text="We'll launch your campaigns and continuously monitor and optimize them." />
                    <Steps num="4" heading="Results and Ongoing Support" text="We'll keep you updated on the progress of your campaigns and help you reach your goals. We'll also be available for ongoing support and optimization to ensure continued success." />
                </div>
            </div>
        </div>
    )
}

export default StepsMain