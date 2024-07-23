import React from 'react'
import './Footer.css'
import location from '../../assets/icons/location.svg'
import suitcase from '../../assets/icons/suitcase.svg'

const Footer = () => {
  return (
    <footer>
      <div className="recent-experience">
        <img src={suitcase} alt="" />
        <p className='p1'>Recent Experience</p>
        <p className='p2'>Student Coordinator @ FORCE</p>
      </div>
      <div className="location">
        <img src={location} alt="" />
        <p className='p1'>Location</p>
        <p className='p2'>Bengaluru, India</p>
      </div>
    </footer>
  )
}

export default Footer