import React, { useState, useEffect } from 'react';

import './DesignPayment.css'

const DesignPayment = ({ planId, onSuccess }) => {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=P-5HL003055X403753AMZHBCVY&vault=true&intent=subscription';
    script.async = true;
    script.onload = () => setSdkLoaded(true);
    document.body.appendChild(script);

    return () => document.body.removeChild(script); // Clean up script on unmount
  }, []);

  useEffect(() => {
    if (sdkLoaded) {
      window.paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'white',
          layout: 'vertical',
          label: 'subscribe',
        },
        createSubscription: (data, actions) =>
          actions.subscription.create({
            plan_id: planId,
          }),
        onApprove: (data, actions) => onSuccess(data.subscriptionID),
      }).render('#paypal-button-container');
    }
  }, [sdkLoaded, planId, onSuccess]);

  return (
    <div id="paypal-button-container">
      {sdkLoaded ? (
        <p>PayPal button is loading...</p>
      ) : (
        <p>Loading PayPal SDK...</p>
      )}
    </div>
  );
};

export default DesignPayment;

