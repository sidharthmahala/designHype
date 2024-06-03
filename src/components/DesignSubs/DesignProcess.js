import React from 'react';
import './DesignProcess.css';

function DesignProcess() {
  return (
    <div className="dp-how-it-works" id='howitworks'>
      <h2>How It Works</h2>
      <div className="dp-steps">
        <div className="dp-step">
          <h3 className='dp-step-number'>1</h3>
          <h3>Subscribe</h3>
          <p>Choose the plan that suits your needs and get started instantly.</p>
        </div>
        <div className="dp-step">
        <h3 className='dp-step-number'>2</h3>
          <h3>Submit Your Request</h3>
          <p>Use Trello Board to submit design briefs, upload files, and communicate with Us.</p>
        </div>
        <div className="dp-step">
        <h3 className='dp-step-number'>3</h3>
          <h3>Review & Revise</h3>
          <p>Receive your designs, provide feedback, and request revisions until you’re completely satisfied.</p>
        </div>
        <div className="dp-step">
        <h3 className='dp-step-number'>4</h3>
          <h3>Download & Enjoy</h3>
          <p>Once approved, download your final designs and watch your brand shine.</p>
        </div>
      </div>
    </div>
  );
}

export default DesignProcess;
