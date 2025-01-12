import { FC } from 'react';
import Image from 'next/image';
import IEEE from '../public/assets/images/IEEE.png';
import FORCE from '../public/assets/images/FORCE.png';

const classes = {
  Container: 'flex items-center justify-center w-full bg-white z-10',
  FeaturedContainer: 'flex flex-col min-[1921px]:w-[74.961vw] max-[1920px]:max-w-[1440px] w-screen min-[1921px]:px-[4.164vw] min-[1921px]:py-[2.915vw] xl:px-20 xl:py-14 lg:px-16 lg:py-10 md:px-12 md:py-6 px-10 py-4 md:gap-8 gap-6',
  FeaturedHeader: 'border-b-2 border-black py-6 w-full font-inter font-bold tracking-tight text-black min-[1921px]:text-[3.54vw] min-[1440px]:text-[4.25rem] xl:text-[4rem] lg:text-[3.5rem] md:text-[3rem] min-[430px]:text-[2.5rem] text-[2rem] leading-none',
  CardsContainer: 'flex md:flex-row flex-col gap-6 w-full',
  CardHeaderContainer: 'flex items-center xl:gap-4 lg:gap-3 gap-2 w-full',
  dot: 'xl:w-4 xl:h-4 lg:h-3 lg:w-3 h-2 w-2 bg-black rounded-full',
  CardHeader: 'font-inter font-semibold text-black min-[1921px]:text-[1.249vw] min-[1440px]:text-[1.5rem] xl:text-[1.25rem] text-[1rem] leading-none',
  Card: 'flex flex-col gap-6 md:w-1/2 w-full',
  ImageContainer: 'relative w-full xl:h-[60vh] lg:h-[50vh] sm:h-[40vh] h-[30vh] max-[1440px]:max-h-[600px] rounded-xl',
  CardImage: 'flex items-center justify-center w-full h-full rounded-xl overflow-hidden shadow-lg',
  Image: 'w-[75%] rounded-lg h-auto',
  CardImageHeader: 'absolute md:block hidden w-screen text-[#DFFF00] font-inter text-center font-bold leading-none tracking-tight min-[1921px]:text-[4.997vw] xl:text-8xl md:text-6xl sm:text-4xl text-3xl z-20 top-1/2 -translate-y-1/2 rounded-md',
}

const Featured: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.FeaturedContainer}>
        <h1 className={classes.FeaturedHeader}>Featured Projects</h1>
        <div className={classes.CardsContainer}>
          <div className={classes.Card}>
            <div className={classes.CardHeaderContainer}>
              <div className={classes.dot}></div>
              <h1 className={classes.CardHeader}>IEEE - ICAECC Website</h1>
            </div>
            <div className={classes.ImageContainer}>
              <h1 className={` ${classes.CardImageHeader} -translate-x-1/2 md:left-full left-1/2`}>
                {"FULL-STACK".split('').map((letter, index) => <span className='font-inter' key={index}>{letter}</span>)}
              </h1>
              <div className={`${classes.CardImage} bg-gray-400`}>
                <Image className={classes.Image} src={IEEE} alt="IEEE - ICAECC Website" />
              </div>
            </div>
          </div>
          <div className={classes.Card}>
            <div className={classes.CardHeaderContainer}>
              <div className={classes.dot}></div>
              <h1 className={classes.CardHeader}>FORCE - Forum Website</h1>
            </div>
            <div className={classes.ImageContainer}>
              <h1 className={` ${classes.CardImageHeader} translate-x-1/2 md:right-full right-1/2`}>
                {"".split('').map((letter, index) => <span className='font-inter' key={index}>{letter}</span>)}
              </h1>
              <div className={`${classes.CardImage} bg-gray-400`}>
                <Image className={classes.Image} src={FORCE} alt="FORCE - Forum Website" />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.CardsContainer}>
          <div className={classes.Card}>
            <div className={classes.CardHeaderContainer}>
              <div className={classes.dot}></div>
              <h1 className={classes.CardHeader}>FORCE - Forum Website</h1>
            </div>
            <div className={classes.ImageContainer}>
              <h1 className={` ${classes.CardImageHeader} -translate-x-1/2 md:left-full left-1/2`}>
                {"FRONT-END".split('').map((letter, index) => <span className='font-inter' key={index}>{letter}</span>)}
              </h1>
              <div className={`${classes.CardImage} bg-gray-400`}>
                <Image className={classes.Image} src={FORCE} alt="FORCE - Forum Website" />
              </div>
            </div>
          </div>
          <div className={classes.Card}>
            <div className={classes.CardHeaderContainer}>
              <div className={classes.dot}></div>
              <h1 className={classes.CardHeader}>IEEE - ICAECC Website</h1>
            </div>
            <div className={classes.ImageContainer}>
              <h1 className={` ${classes.CardImageHeader} translate-x-1/2 md:right-full right-1/2`}>
                {"".split('').map((letter, index) => <span className='font-inter' key={index}>{letter}</span>)}
              </h1>
              <div className={`${classes.CardImage} bg-gray-400`}>
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