import React from 'react'
import './Founder.css'

const Founder = () => {
  return (
    <div className="founder-container">
        <h4>Meet The Founder</h4>
        <p>Obssesd With DTC Brand Growth</p>
        <div className="founder-details">
            <img src={require('../Assets/founder.jpg')}  alt=""/>
            <div className='founder-title-details'>
                <p>Oliver</p>
                <p>founder + paid social</p>
                <p>I own and run hamilton media, on a day to basis I manage our client accounts including the day to day media buying, provide creative direction and keep you up to date on how things are performing.</p>
            </div>
        </div>
    </div>
  )
}

export default Founder