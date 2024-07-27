import React from 'react'
import { Link } from 'react-router-dom'
import './SectionsNavbar.css'

const SectionsNavbar = () => {
  return (
    <div className="sections-navbar">
        <Link to="/"><button>Home</button></Link>
        <Link to="/Engineer"><button>Engineer</button></Link>
        <Link to="/Photographer"><button>Photographer</button></Link>
        <Link to="/Musician"><button>Musician</button></Link> 
    </div>  
  )
}

export default SectionsNavbar