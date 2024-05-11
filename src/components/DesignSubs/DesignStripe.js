import React from 'react'
import './DesignStripe.css'

function DesignStripe() {
  return (
    <div className='design-stripe-container'>

      <div className='scroll'>
        <p a>Best Designs</p>
      </div>

      <div className='scroll'>
        <img src={require('../../Assets/lightning-bolt-shadow.png')} alt=" " a />
      </div>

      <div className='scroll'>
        <p a>Best Designs</p>
      </div>
      <div className='scroll'>
        <img src={require('../../Assets/lightning-bolt-shadow.png')} alt=" " a />
      </div>
    </div>
  )
}

export default DesignStripe;