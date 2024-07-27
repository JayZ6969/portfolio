import React from 'react'
import './SocialsComponent.css'

const SocialsComponent = ({Socials}) => {
  return (
    <div className="socials-component-container">
      <h1>Socials</h1>
      <div className="socials-main">
        {Socials.map((social, index) => (
          <a className="a1" href={social.socialslink} target="_blank" key={index}><img src={social.socialsicon} alt="" /></a>
        ))}
      </div>
    </div>
  )
}

export default SocialsComponent