import React from 'react'
import './BoxContainer.css'

const BoxContainer = ({ BoxProps = [] }) => {
  return (
    <div className="box-container">
      {BoxProps.map((box, index) => (
        <div className="box-main" key={index}>
          <div className={box.box1ClassName}>
            <img src={box.box1Content} alt="" />
          </div>
          <div className={box.box2ClassName}>
            <img src={box.box2Content} alt="" />
          </div>
          <div className={box.box3ClassName ? box.box3ClassName : 'display-none' } >
            <img src={box.box3Content} alt="" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default BoxContainer