import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faTree, faWater, faHeart } from '@fortawesome/free-solid-svg-icons';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');
  const [colorTheme, setColorTheme] = useState('');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const changeColorTheme = (event) => {
    const selectedTheme = event.target.value;
    setColorTheme(selectedTheme);
    document.documentElement.setAttribute('data-color-theme', selectedTheme);
  };

  return (
    <div>
      <button className="toggle-button" onClick={toggleTheme}>
        {theme === 'light' ? '☀️' : '🌙'}
      </button>
      <select className="select-theme" onChange={changeColorTheme} value={colorTheme}>
        <option value="">Default Theme</option>
        <option className="option-sunset" value="theme1">
          Sunset Serenade <FontAwesomeIcon icon={faSun} />
        </option>
        <option className="option-forest" value="theme2">
          Forest Whisper <FontAwesomeIcon icon={faTree} />
        </option>
        <option className="option-ocean" value="theme3">
          Ocean Breeze <FontAwesomeIcon icon={faWater} />
        </option>
        <option className="option-blush" value="theme4">
          Blush Dream <FontAwesomeIcon icon={faHeart} />
        </option>
      </select>
    </div>
  );
};

export default ThemeToggle;
