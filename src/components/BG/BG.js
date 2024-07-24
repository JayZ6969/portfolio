import React from 'react'
import './BG.css'
import ellipse_1 from '../../assets/icons/ellipses/ellipse_1.svg'
import ellipse_2 from '../../assets/icons/ellipses/ellipse_2.svg'
import ellipse_3 from '../../assets/icons/ellipses/ellipse_3.svg'
import ellipse_4 from '../../assets/icons/ellipses/ellipse_4.svg'
import ellipse_5 from '../../assets/icons/ellipses/ellipse_5.svg'
import ellipse_6 from '../../assets/icons/ellipses/ellipse_6.svg'
import ellipse_7 from '../../assets/icons/ellipses/ellipse_7.svg'
import ellipse_8 from '../../assets/icons/ellipses/ellipse_8.svg'


const BG = () => {
  return (
    <div className="BG-container">
      <img src={ellipse_1} alt="" className="ellipse-1" />
      <img src={ellipse_2} alt="" className="ellipse-2" />
      <img src={ellipse_3} alt="" className="ellipse-3" /> 
      <img src={ellipse_4} alt="" className="ellipse-4" />
      <img src={ellipse_5} alt="" className="ellipse-5" />
      <img src={ellipse_6} alt="" className="ellipse-6" />
      <img src={ellipse_7} alt="" className="ellipse-7" />
      <img src={ellipse_8} alt="" className="ellipse-8" />    
    </div>
  )
}

export default BG