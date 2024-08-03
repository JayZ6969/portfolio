import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll';
import PreLoader from "./components/PreLoader/PreLoader.js";
import ParticlesBG from "./components/ParticlesBG/ParticlesBG.js";
import Landing from "./components/Landing/Landing.js";
import About from "./components/About/About.js";
import Eyes from "./components/Eyes/Eyes.js";
import Contact from "./components/Contact/Contact.js";
import CopyrightFooter from "./components/CopyrightFooter/CopyrightFooter.js";
import Engineer from "./components/Engineer/Engineer.js";
import Photographer from "./components/Photographer/Photographer.js";
import Musician from "./components/Musician/Musician.js";

function App() {
  const [showPreLoader, setShowPreLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Show PreLoader only on reload
    const timer = setTimeout(() => {
      setShowPreLoader(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showPreLoader) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showPreLoader]);

  useEffect(() => {
    if (!showPreLoader) {
      const locomotiveScroll = new LocomotiveScroll();
      locomotiveScroll.scrollTo(0, { duration: 0, disableLerp: true });

      return () => locomotiveScroll.destroy();
    }
  }, [location, showPreLoader]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {showPreLoader && <PreLoader />}
              <ParticlesBG /> 
              <Landing />
              <About />
              <Eyes />
              <Contact />
              <CopyrightFooter ColorBG="copyright-footer-container white"/>
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