import React, { FC } from "react";
import Image from 'next/image';
import ME from '../public/assets/images/ME.jpg';

const classes = {
  aboutContainer: 'flex flex-col items-center justify-center w-screen bg-white z-10',
  aboutContent: 'flex items-center min-[1921px]:w-[74.961vw] max-[1920px]:max-w-[1440px] w-full justify-between  min-[1921px]:gap-[4.164vw] xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12  min-[1921px]:p-[4.164vw] xl:p-20 lg:p-16 md:p-12 p-10',
  aboutMe: 'flex flex-col items-center justify-center w-full min-[1921px]:gap-[2.082vw] min-[1440px]:gap-10 sl:gap-8 gap-6',
  aboutHeader: 'font-inter font-bold text-left  min-[1921px]:text-[4.997vw] min-[1440px]:text-[6.25rem] xl:text-[6rem] lg:text-[5.5rem] md:text-[5rem] min-[425px]:text-[4.5rem] text-[4rem] leading-none',
  aboutPara: 'font-inter font-semibold text-justify min-[1921px]:text-[1.666vw] min-[1440px]:text-[2rem] xl:text-[1.8rem] min-[425px]:text-[1.5rem] text-[1.25rem] leading-none',
  buttonContainer: 'bg-black text-white font-inter font-semibold min-[1921px]:text-[1.874vw] min-[1440px]:text-[2.25rem] lg:text-[2rem] md:text-[1.75rem] min-[425px]:text-[1.5rem] text-[1.25rem] min-[1921px]:px-[1.666vw] min-[1921px]:py-[1.458vw] lg:px-8 lg:py-7 md:py-6 md:px-7 sm:py-6 sm:px-6 py-5 px-6 rounded-full hover:-translate-y-2 duration-300 ease-in-out',
  Img:'min-[1921px]:w-[28.319vw] min-[1440px]:w-[34rem] xl:w-[32rem] min-[1100px]:w-[30rem] lg:w-[28rem] min-[850px]:w-[26rem] md:w-[20rem] sm:w-[24rem] min-[1921px]:rounded-[1.666vw] rounded-[2rem] md:block hidden',
  smImg: 'md:hidden md:rounded-xl sm:rounded-[2rem] rounded-[1.5rem]',
}

const About: FC = () => {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.aboutContent}>
        <div className={classes.aboutMe}>
          <h1 className='w-full' >
            <span className={classes.aboutHeader}>ABOUT-</span>
            <br />
            <span className={classes.aboutHeader}>ME</span>
          </h1>
          <Image className={classes.smImg} src={ME} alt="" />
          <p className={classes.aboutPara}>
            I'm a front-end developer passionate about UI/UX design and
            currently diving into Data Structures and Algorithms. I enjoy making
            creative projects that combine style and utility.
            <br />
            <br />
            Beyond coding, I work as a professional photographer, documenting
            special moments in life, and I play music, performing live on stages
            with my band at events. Each project I work on reflects my passion
            and commitment to my craft, which is a blend of technical expertise
            and artistic vision.
          </p>
          <a href="https://revaedu-my.sharepoint.com/:b:/g/personal/ugcet220791_reva_edu_in/EXGcPi8JK5pPmNKCeS5kSBoBPYfOLPuvBFy3tU0t-tVW8g?e=R3m8Ar" target="_blank" rel="noreferrer">
            <button className={classes.buttonContainer}>RESUME</button>
          </a>
        </div>
        <Image src={ME} className={classes.Img} alt="" />
      </div>
    </div>
  );
};

export default About;