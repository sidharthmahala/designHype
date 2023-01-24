import React from 'react'
import './Partners.css'

const Partners = () => {
  return (
    <div className="partners-container">
        <div className="partner">
            <img src={require("../Assets/google.png")} alt=""/>
        </div>
        <div className="partner">
            <img src={require("../Assets/Meta.png")} alt=""/>
        </div>
        <div className="partner">
            <img src={require("../Assets/TripleW.png")} alt=""/>
        </div>
        <div className="partner">
            <img src={require("../Assets/tiktok.png")} alt=""/>
        </div>
    </div>
  )
}

export default Partners