import React, {useEffect, useState} from "react";
import "./Eyes.css";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;


      var angleRad = Math.atan2(deltaY, deltaX);
      var angleDeg = (angleRad * (180 / Math.PI)) - 180;

      setRotate(angleDeg);
    })
  })

  return (
    <div className="eyes-container">
      <div className="eyes-main">
        <div className="eye-wrapper">
          <div className="eye">
            <div className="pupil">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line">
                <div className="iris"></div>
              </div>
            </div>
          </div>
          <div className="eye">
            <div className="pupil">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line">
                <div className="iris"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="mouth-container">
          <div className="mouth-1"></div>
          <div className="mouth-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
