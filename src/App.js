import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Education from './Pages/Education';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
