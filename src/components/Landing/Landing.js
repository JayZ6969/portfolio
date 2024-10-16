import React, { useEffect } from "react";
import { Link, useLocation} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Landing.css'

const Landing = () => {
  const location = useLocation();

  useEffect(() => {
    const div = document.querySelector('.landing-container');
    if (div) {
      div.setAttribute('data-scroll', '');
      div.setAttribute('data-scroll-speed', '-0.8');
    }
  }, [location]);

  return (
    <div className="landing-container">
      <Navbar />
      <div className="landing-content">
        <div className="title-container">
          <h3>Hi, I am</h3>
          <h1>Jayasheel</h1>
        </div>
        <div className="sections-container">
          <Link to="/Engineer"><button>Engineer</button></Link>
          <Link to="/Photographer"><button>Photographer</button></Link>
          <Link to="/Musician"><button>Musician</button></Link>
        </div>     
      </div>
      <Footer />
    </div>
  )
}

export default Landing   