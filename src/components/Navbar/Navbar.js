import React from 'react'
import './Navbar.css'
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'
import google from '../../assets/icons/google.svg'
import instagram from '../../assets/icons/instagram.svg'
import hamburgermenu from '../../assets/icons/hamburgermenu.svg'
import closehamburgermenu from '../../assets/icons/closehamburgermenu.svg'


const Navbar = () => {

  const navRef = React.useRef()

  const showHamburgerMenu = () => {
    navRef.current.classList.toggle('show-hamburger-menu')
  }

  return (
    <nav>
      <div className='navbar-container'>
        <h1>Jayasheel Vinay J</h1>
        <div className='navbar-links' ref={navRef}>
          <a href='https://www.linkedin.com/in/jayasheelvinayj/' target="_blank" rel="noreferrer"><img src={linkedin} alt="" /></a>
          <a href='https://github.com/JayZ6969/' target="_blank" rel="noreferrer"><img src={github} alt="" /></a>
          <a href='https://developers.google.com/profile/u/JayZ6969' target="_blank" rel="noreferrer"><img src={google} alt="" /></a>
          <a href='https://www.instagram.com/jayasheel.vinay/' target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
          <div className="ham-btn">
            <img src={closehamburgermenu} className="ham-btn ham-close-btn" alt="" onClick={showHamburgerMenu} />
          </div>
        </div>
        <img src={hamburgermenu} className="ham-btn" alt="" onClick={showHamburgerMenu}/>
      </div>
    </nav>
  )
}

export default Navbar