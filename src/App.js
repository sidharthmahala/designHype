import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Design from "./Pages/Design";
import HospitalLanding from "./Pages/HospitalLanding"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hospital" element={<HospitalLanding />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
