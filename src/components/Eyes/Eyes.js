import React, { useEffect, useState, useRef } from "react";
import "./Eyes.css";

const Eyes = () => {
  const [rotateLeft, setRotateLeft] = useState(0);
  const [rotateRight, setRotateRight] = useState(0);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (leftEyeRef.current) {
        const leftEyeRect = leftEyeRef.current.getBoundingClientRect();
        const leftEyeCenterX = leftEyeRect.left + leftEyeRect.width / 2;
        const leftEyeCenterY = leftEyeRect.top + leftEyeRect.height / 2;

        const deltaXLeft = mouseX - leftEyeCenterX;
        const deltaYLeft = mouseY - leftEyeCenterY;

        const angleRadLeft = Math.atan2(deltaYLeft, deltaXLeft);
        const angleDegLeft = (angleRadLeft * (180 / Math.PI)) - 180;

        setRotateLeft(angleDegLeft);
      }

      if (rightEyeRef.current) {
        const rightEyeRect = rightEyeRef.current.getBoundingClientRect();
        const rightEyeCenterX = rightEyeRect.left + rightEyeRect.width / 2;
        const rightEyeCenterY = rightEyeRect.top + rightEyeRect.height / 2;

        const deltaXRight = mouseX - rightEyeCenterX;
        const deltaYRight = mouseY - rightEyeCenterY;

        const angleRadRight = Math.atan2(deltaYRight, deltaXRight);
        const angleDegRight = (angleRadRight * (180 / Math.PI)) - 180;

        setRotateRight(angleDegRight);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eyes-container">
      <div className="eyes-main">
        <div className="eye-wrapper">
          <div className="eye" ref={leftEyeRef}>
            <div className="pupil-container">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotateLeft}deg)`}} className="line">
                <div className="pupil">
                  <div className="line">
                    <div className="placeholder"></div>
                    <div className="iris"></div> 
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="eye" ref={rightEyeRef}>
            <div className="pupil-container">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotateRight}deg)`}} className="line">
                <div className="pupil">
                  <div  className="line">
                    <div className="placeholder"></div>
                    <div className="iris"></div>
                  </div>
                </div>
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
