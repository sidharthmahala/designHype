import React, { useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');
  const [colorTheme, setColorTheme] = useState('');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const changeColorTheme = (theme) => {
    setColorTheme(theme);
    document.documentElement.setAttribute('data-color-theme', theme);
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle Theme: {theme === 'light' ? 'Light' : 'Dark'}
      </button>
      <button onClick={() => changeColorTheme('')}>
        Default Colors
      </button>
      <button onClick={() => changeColorTheme('theme1')}>
        Red/Yellow Theme
      </button>
      <button onClick={() => changeColorTheme('theme2')}>
        Green/Purple Theme
      </button>
      <button onClick={() => changeColorTheme('theme3')}>
        Blue/Green Theme
      </button>
      <button onClick={() => changeColorTheme('theme4')}>
        Pink Theme
      </button>
      <div>
        Current Color Theme: {colorTheme || 'Default'}
      </div>
    </div>
  );
};

export default ThemeToggle;
