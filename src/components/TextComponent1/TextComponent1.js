import React from 'react'
import './TextComponent1.css'

const TextComponent1 = ({Header, Points}) => {
  return (
    <div className="text-component1-container">
      <h1>{Header}</h1>
      <ul>
        {Points.map((point, index) => (
          <li className="li1" key={index}>{point}</li>
        ))}
      </ul>
    </div>
  )
}

export default TextComponent1