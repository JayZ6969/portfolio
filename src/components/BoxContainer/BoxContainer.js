import React from 'react'
import './BoxContainer.css'

const BoxContainer = ({ box1ClassName, box1Content, box2ClassName, box2Content, box3ClassName, box3Content  }) => {
  return (
    <div className="box-container">
      <div className={box1ClassName}>
        <img src={box1Content} alt="" />
      </div>
      <div className={box2ClassName}>
        <img src={box2Content} alt="" />
      </div>
      <div className={box3ClassName ? box3ClassName : 'display-none'}>
        <img src={box3Content} alt="" />
      </div>
    </div>
  )
}

export default BoxContainer