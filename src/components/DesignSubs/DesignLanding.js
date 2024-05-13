import React, { useState } from 'react';
import './DesignLanding.css'
import './DesignLandingLight.css'

function DesignLanding() {

  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className='dl-container'>
      <div className='dl-left'>
        <div className='dl-left-top'>
          <div className='dl-lt-top'>
            <div className='dl-ltt-left'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
              </svg>
            </div>
            <div className={`${isDarkTheme ? 'dl-ltt-right' : 'dl-ltt-right-light'}`}>
              <div className='dl-logo'>
                <p>DesignHype.xyz</p>
              </div>
            </div>
          </div>
          <div className={`${isDarkTheme ? 'dl-lt-bot ' : 'dl-lt-bot-light'}`}>
            <p> Transform your vision into reality with our design subscription. </p>
            <div className='dl-icons-logo'>
              <img src={require('../../Assets/asterisk.png')} alt='' className='dl-logo-icon' />
              <img src={require('../../Assets/lightning-bolt-shadow.png')} alt='' className='dl-logo-icon' />
              <img src={require('../../Assets/chevron-arrow-down.png')} alt='' className='dl-logo-icon' />
            </div>
          </div>
        </div>
        <div className='dl-left-bot'>
          <div className={`${isDarkTheme ? 'dl-left-bot-left' : 'dl-left-bot-left-light'}`}>
            <img src={require('../../Assets/pattern.png')} alt='' />
          </div>
          <div className='dl-left-bot-right'>
            <div className={`${isDarkTheme ? 'dl-lbr-top ' : 'dl-lbr-top-light'}`}>
              <div className='dl-lbr-top-content'>
                <p>See Plans</p>
                <img src={require('../../Assets/lightning-bolt-shadow.png')} alt='' className='dl-logo-icon' />
                {/* <img src={require('../../Assets/external-link-square-with-an-arrow-in-right-diagonal.png')} alt='' className='dl-logo-icon' /> */}
              </div>
            </div>
            <div className={`${isDarkTheme ? 'dl-lbr-bot' : 'dl-lbr-bot-light'}`}>
              <p>Design is not just what it looks like and feels like. Design is how it works.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isDarkTheme ? 'dl-right-container ' : 'dl-right-container-light'}`}>
        <div className='dl-right'>
          <h1>Lets Make the design great again</h1>
          <img src={require('../../Assets/chevron-arrow-down.png')} alt='' />
        </div>
      </div>
      <div class="toggle">
        <input type="checkbox" id="btn" onClick={toggleTheme} />
        <label for="btn">
          <span class="track">
            <span class="txt"></span>
          </span>
          <span class="thumb">|||</span>
        </label>
      </div>
    </div>
  )
}
export default DesignLanding;
