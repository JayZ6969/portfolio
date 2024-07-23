import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Landing.css'


const Landing = () => {
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
          <Link to="/Photography"><button>Photographer</button></Link>
          <Link to="/Musician"><button>Musician</button></Link>
        </div>     
      </div>
      <Footer />
    </div>
  )
}

export default Landing  