import React, { useEffect } from 'react';
import './PreLoader.css';
import { preLoaderAnimation } from '../../animations';

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnimation();
    },[]);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Touch</span>
        <span>the sky</span>
        <span>with glory !</span>
      </div>
    </div>
  );
}

export default PreLoader;