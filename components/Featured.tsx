import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import IEEE from '../public/assets/images/IEEE.webp';
import FORCE from '../public/assets/images/FORCE.webp';

const classes = {
  Container: 'flex items-center justify-center w-full bg-[#CEE968] z-10',
  FeaturedContainer: 'flex flex-col min-[1921px]:w-[74.961vw] max-[1920px]:max-w-[1440px] w-screen min-[1921px]:px-[4.164vw] min-[1921px]:py-[2.915vw] xl:px-20 xl:py-14 lg:px-16 lg:py-10 md:px-12 md:py-8 p-10 md:gap-8 gap-6',
  FeaturedHeader: 'border-b-2 border-black md:py-6 sm:py-4 pb-3 w-full font-inter font-bold tracking-tight text-black min-[1921px]:text-[3.54vw] min-[1440px]:text-[4.25rem] xl:text-[4rem] lg:text-[3.5rem] md:text-[3rem] min-[430px]:text-[2.5rem] text-[2rem] leading-none',
  CardsContainer: 'flex md:flex-row flex-col gap-6 w-full',
  CardHeaderContainer: 'flex items-center xl:gap-4 lg:gap-3 gap-2 w-full',
  dot: 'xl:w-4 xl:h-4 lg:h-3 lg:w-3 h-2 w-2 bg-black rounded-full',
  CardHeader: 'font-inter font-semibold text-black min-[1921px]:text-[1.249vw] min-[1440px]:text-[1.5rem] xl:text-[1.25rem] text-[1rem] leading-none',
  Card: 'flex flex-col gap-6 md:w-1/2 w-full',
  ImageContainer: 'relative w-full cursor-pointer xl:h-[60vh] lg:h-[50vh] sm:h-[40vh] h-[30vh] max-[1440px]:max-h-[600px] rounded-xl',
  CardImage: 'flex items-center justify-center w-full h-full rounded-xl overflow-hidden',
  Image: 'w-[75%] rounded-lg h-auto shadow-lg',
  CardImageHeader: 'absolute flex overflow-hidden w-[60vw] justify-center min-[1921px]:h-[4.997vw] xl:h-[6rem] md:h-[3.75rem] sm:h-[2.25rem] h-[1.875rem] text-[#CEE968] font-inter text-center font-bold leading-none tracking-tight min-[1921px]:text-[4.997vw] xl:text-8xl md:text-6xl sm:text-4xl text-3xl z-20 top-1/2 -translate-y-1/2 rounded-md',
  CardImageHeaderTagline: 'font-inter flex items-center justify-center h-full',
}

const Featured: FC = () => {

  motion

  const [isHovering1, setHovering1] = useState(false);
  const [isHovering2, setHovering2] = useState(false);
  const [isHovering3, setHovering3] = useState(false);
  const [isHovering4, setHovering4] = useState(false);

  const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      const listener = () => setMatches(media.matches);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }, [matches, query]);
  
    return matches;
  };
  
  const isMdUp = useMediaQuery('(min-width: 768px)');

  const handleMouseEnter1 = () => {
    if (isMdUp) setHovering1(true);
  };

  const handleMouseLeave1 = () => {
    if (isMdUp) setHovering1(false);
  };

  const handleMouseEnter2 = () => {
    if (isMdUp) setHovering2(true);
  };

  const handleMouseLeave2 = () => {
    if (isMdUp) setHovering2(false);
  };

  const handleMouseEnter3 = () => {
    if (isMdUp) setHovering3(true);
  };

  const handleMouseLeave3 = () => {
    if (isMdUp) setHovering3(false);
  };

  const handleMouseEnter4 = () => {
    if (isMdUp) setHovering4(true);
  };

  const handleMouseLeave4 = () => {
    if (isMdUp) setHovering4(false);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.FeaturedContainer}>
        <h1 className={classes.FeaturedHeader}>Featured</h1>
        <div className={classes.CardsContainer}>
          <div className={classes.Card}>
            <div className={classes.CardHeaderContainer}>
              <div className={classes.dot}></div>
              <h1 className={classes.CardHeader}>ICAECC - Website</h1>
            </div>
            <div onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} className={classes.ImageContainer}>
              <h1 className={` ${classes.CardImageHeader} -translate-x-1/2 md:left-full left-1/2`}>
                {"WEB-DEV".split('').map((letter, index) => <motion.span key={index} initial={{y: "100%"}} animate={isHovering1 ? ({y: "0"}) : ({y: "100%"})} transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.025}} className={classes.CardImageHeaderTagline}>{letter}</motion.span>)}
              </h1>
              <div className={`${classes.CardImage} bg-gray-100`}>
                <Image className={classes.Image} src={IEEE} alt="IEEE - ICAECC Website" />
              </div>
            </div>
          </div>
          <div className={classes.Card}>
            <div className={classes.CardHeaderContainer}>
              <div className={classes.dot}></div>
              <h1 className={classes.CardHeader}>Electronics Projects</h1>
            </div>
            <div onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} className={classes.ImageContainer}>
              <h1 className={` ${classes.CardImageHeader} translate-x-1/2 md:right-full right-1/2`}>
                {"ELECTRONICS".split('').map((letter, index) => <motion.span key={index} initial={{y: "100%"}} animate={isHovering2 ? ({y: "0"}) : ({y: "100%"})} transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.025}} className={classes.CardImageHeaderTagline}>{letter}</motion.span>)}
              </h1>
              <div className={`${classes.CardImage} bg-gray-100`}>
                <Image className={classes.Image} src={FORCE} alt="FORCE - Forum Website" />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.CardsContainer}>
          <div className={classes.Card}>
            <div className={classes.CardHeaderContainer}>
              <div className={classes.dot}></div>
              <h1 className={classes.CardHeader}>Event Photography</h1>
            </div>
            <div onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} className={classes.ImageContainer}>
              <h1 className={` ${classes.CardImageHeader} -translate-x-1/2 md:left-full left-1/2`}>
                {"PHOTOGRAPHY".split('').map((letter, index) => <motion.span key={index} initial={{y: "100%"}} animate={isHovering3 ? ({y: "0"}) : ({y: "100%"})} transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.025}} className={classes.CardImageHeaderTagline}>{letter}</motion.span>)}
              </h1>
              <div className={`${classes.CardImage} bg-gray-100`}>
                <Image className={classes.Image} src={FORCE} alt="FORCE - Forum Website" />
              </div>
            </div>
          </div>
          <div className={classes.Card}>
            <div className={classes.CardHeaderContainer}>
              <div className={classes.dot}></div>
              <h1 className={classes.CardHeader}>AI/ML Projects</h1>
            </div>
            <div onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} className={classes.ImageContainer}>  
              <h1 className={` ${classes.CardImageHeader} translate-x-1/2 md:right-full right-1/2`}>
                {"AI/ML".split('').map((letter, index) => <motion.span key={index} initial={{y: "100%"}} animate={isHovering4 ? ({y: "0"}) : ({y: "100%"})} transition={{ease: [0.22, 1, 0.36, 1], delay: index * 0.025}} className={classes.CardImageHeaderTagline}>{letter}</motion.span>)}
              </h1>
              <div className={`${classes.CardImage} bg-gray-100`}>
                <Image className={classes.Image} src={IEEE} alt="IEEE - ICAECC Website" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;