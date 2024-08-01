import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PreLoader from "./components/PreLoader/PreLoader.js";
import Landing from "./components/Landing/Landing.js";
import Engineer from "./components/Engineer/Engineer.js";
import Photographer from "./components/Photographer/Photographer.js";
import Musician from "./components/Musician/Musician.js";

function App() {
  const [showPreLoader, setShowPreLoader] = useState(true);

  useEffect(() => {
    // Hide the preloader after it has been shown once
    const timer = setTimeout(() => {
      setShowPreLoader(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {showPreLoader && <PreLoader />}
              <Landing />
            </>
          }
        ></Route>
        <Route path="/Engineer" element={<Engineer />}></Route>
        <Route path="/Photographer" element={<Photographer />}></Route>
        <Route path="/Musician" element={<Musician />}></Route>
      </Routes>
    </div>
  );
}

export default App;