import React, { useEffect, useState } from 'react';
import './BoxContainer.css';

const BoxContainer = ({ BoxProps = [] }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const removeBrTags = (text) => {
    return typeof text === 'string' ? text.replace(/<br\s*\/?>/gi, ' ') : text;
  };

  return (
    <div className="box-container">
      {BoxProps.map((box, index) => {
        const {
          box1ClassName = 'display-none',
          box1Content,
          box1ContentType = 'image',
          box2ClassName = 'display-none',
          box2Content,
          box2ContentType = 'image',
          box3ClassName = 'display-none',
          box3Content,
          box3ContentType = 'image',
        } = box;

        return (
          <div className="box-main" key={index}>
            <div className={box1ClassName}>
              {box1ContentType === 'image' && box1Content ? (
                <img src={box1Content} alt="" />
              ) : (
                <p dangerouslySetInnerHTML={{ __html: isSmallScreen ? removeBrTags(box1Content) : box1Content }}></p>
              )}
            </div>
            <div className={box2ClassName}>
              {box2ContentType === 'image' && box2Content ? (
                <img src={box2Content} alt="" />
              ) : (
                <p dangerouslySetInnerHTML={{ __html: isSmallScreen ? removeBrTags(box2Content) : box2Content }}></p>
              )}
            </div>
            <div className={box3ClassName}>
              {box3ContentType === 'image' && box3Content ? (
                <img src={box3Content} alt="" />
              ) : (
                <p dangerouslySetInnerHTML={{ __html: isSmallScreen ? removeBrTags(box3Content) : box3Content }}></p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default BoxContainer