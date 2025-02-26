import React, { FC } from "react";
import Link from 'next/link';
import Image from 'next/image';
import ME from '../public/assets/images/ME.webp';

const classes = {
  aboutContainer: 'flex flex-col items-center justify-center w-screen bg-white z-10 min-[1921px]:rounded-t-[1.666vw] rounded-t-[2rem]',
  aboutContent: 'flex items-center min-[1921px]:w-[74.961vw] max-[1920px]:max-w-[1440px] w-full justify-between  min-[1921px]:gap-[4.164vw] xl:gap-20 lg:gap-16 md:gap-14 sm:gap-12 min-[1921px]:p-[4.164vw] xl:p-20 lg:p-16 md:p-12 sm:px-10 min-[430px]:px-8 px-8 py-10',
  aboutMe: 'flex flex-col items-center justify-center w-full min-[1921px]:gap-[2.082vw] min-[1440px]:gap-10 sl:gap-8 gap-6',
  aboutHeader: 'font-inter font-bold text-left text-black min-[1921px]:text-[4.997vw] min-[1440px]:text-[6.25rem] xl:text-[6rem] lg:text-[5.5rem] md:text-[4rem] min-[430px]:text-[4rem] text-[3.5rem] leading-none',
  aboutPara: 'font-inter font-semibold text-black text-justify min-[1921px]:text-[1.666vw] min-[1440px]:text-[2rem] xl:text-[1.8rem] min-[430px]:text-[1.5rem] text-[1.25rem] leading-none',
  buttonContainer: 'flex items-center justify-center bg-black rounded-full gap-2 cursor-pointer transition-transform transform hover:scale-[1.025] duration-300 ease-in-out',
  buttonContainerText: 'text-white text-center font-pp-mori-semibold min-[1921px]:text-[1.874vw] md:text-[1.75rem] text-[1.35rem] min-[1921px]:px-[1.666vw] min-[1921px]:py-[1.458vw] lg:px-6 lg:pt-4 lg:pb-3 md:px-5 min-[430px]:px-4 min-[430px]:pt-3 min-[430px]:pb-2 px-5 pt-3 pb-2 leading-none',
  Img: 'min-[1921px]:w-[28.319vw] min-[1440px]:w-[34rem] xl:w-[32rem] min-[1100px]:w-[30rem] lg:w-[28rem] min-[850px]:w-[26rem] md:w-[20rem] sm:w-[24rem] min-[1921px]:rounded-[1.458vw] rounded-[1.75rem] md:block hidden',
  smImg: 'md:hidden md:rounded-xl sm:rounded-[2rem] rounded-[1.5rem]',
}

const About: FC = () => {
  return (
    <div className={classes.aboutContainer} id='about'>
      <div className={classes.aboutContent}>
        <div className={classes.aboutMe}>
          <div className="w-full border-b-2 border-black md:pb-6 sm:pb-4 pb-3">
            <h1 className='w-full' >
              <span className={classes.aboutHeader}>About Me</span>
            </h1>
          </div>
          <Image className={classes.smImg} src={ME} alt="" />
          <p className={classes.aboutPara}>
            I&apos;m a front-end developer passionate about UI/UX design and
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
          <Link className={classes.buttonContainer} href="https://revaedu-my.sharepoint.com/:b:/g/personal/ugcet220791_reva_edu_in/Ef6ZeWqdCf1FuWCTddUJyHQByM18J3UOlcSp3860VoO22Q?e=0SPgEr" target="_blank" rel="noreferrer">
            <p className={classes.buttonContainerText}>RESUME ↗</p>
          </Link>
        </div>
        <Image src={ME} className={classes.Img} alt="" />
      </div>
    </div>
  );
};

export default About;