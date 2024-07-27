import React from 'react'
import './BoxContainer.css'

const BoxContainer = ({ box1Content, box2Content, box1ClassName, box2ClassName }) => {
  return (
    <div className="box-container">
      <div className={box1ClassName}>{box1Content}</div>
      <div className={box2ClassName}>{box2Content}</div>
    </div>
  )
}

export default BoxContainer