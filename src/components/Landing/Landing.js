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
        <h3>Jayasheel Vinay J</h3>
        <h1>Full Stack Developer</h1>
        <Link to="/Engineering"><button>Engineering</button></Link>
      </div>
      <Footer />
    </div>
  )
}

export default Landing  