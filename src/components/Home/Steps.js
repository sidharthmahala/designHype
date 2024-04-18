import React from 'react'
import "./Steps.css"
function Steps(props) {
  return (
    <div className="steps-container">
        <h4 className="step-title">
            {/* <img src={require("../../Assets/arrowhead.png")} className="arrowhead" alt="arrow-icon"/> */}
            0{props.num} - <span className="steps-heading">{props.heading}</span>
        </h4>
        <p className="step-description">{props.text}</p>
    </div>
  )
}

export default Steps