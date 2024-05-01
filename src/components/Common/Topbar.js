import React from 'react';
import './Topbar.css';

function Topbar({ text }) {
  return (
    <div className="topbar-container">
      <p className="topbar-text">{text}</p> 
    </div>
  );
}

export default Topbar;
