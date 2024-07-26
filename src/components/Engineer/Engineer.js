import React from 'react'
import {Link} from 'react-router-dom'
import BoxContainer from '../BoxContainer/BoxContainer'

const Engineer = () => {
  return (
    <div className="engineer-container">
      <div className="sections-navbar">
        <Link to="/Engineer"><button>Engineer</button></Link>
        <Link to="/Photography"><button>Photographer</button></Link>
        <Link to="/Musician"><button>Musician</button></Link> 
      </div>  
      <div className="content-container">
        <h1>Projects</h1>
        <BoxContainer 
          // box1Content="Project 1"
          // box2Content="Project 2"
          box1ClassName="box-big"
          box2ClassName="box-small" 
        />
      </div>
    </div>
  )
}

export default Engineer