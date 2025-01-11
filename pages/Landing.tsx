'use client'

import React, { FC, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/LandingFooter';
import About from '../components/About';
import Experience from '../components/Experience';
import Featured from '../components/Featured';

const classes = {
  HomeContainer: 'flex flex-col items-center justify-around w-screen',
  landingContainer: 'w-screen h-svh flex flex-col justify-between',
  landingContent: 'flex flex-col justify-center items-center min-[1921px]:gap-[2.082vw] gap-10 p-8',
  titleContainer: 'flex flex-col items-start',
  header3: 'font-pp-mori-regular font-semibold text-white min-[1921px]:text-[2.915vw] min-[1440px]:text-[3.5rem] xl:text-[3rem] lg:text-[2.5rem] md:text-[2rem] min-[425px]:text-[1.5rem] text-[1rem] leading-loose',
  header1: 'text-white min-[1921px]:text-[9.995vw] min-[1440px]:text-[12rem] xl:text-[11rem] lg:text-[9rem] md:text-[7rem] sm:text-[6.5rem] min-[425px]:text-[5.5rem] text-[4.75rem] leading-none',
  sectionsContainer: 'flex md:flex-row flex-col items-center min-[1921px]:gap-[0.625vw] sm:gap-3 gap-2',
  sectionsContainerButton: 'bg-white text-black font-pp-mori-regular font-semibold min-[1921px]:text-[2.499vw] min-[1440px]:text-[3rem] xl:text-[2.75rem] lg:text-4xl md:text-3xl sm:text-2xl text-2xl max-[425px]:text-xl min-[1921px]:px-[2.499vw] min-[1921px]:py-[0.833vw] min-[1440px]:px-12 min-[1440px]:py-4 xl:px-10 xl:py-3 lg:px-8 lg:py-2 px-8 py-[0.4rem] md:w-full grow rounded-full transition-transform duration-300 ease-in-out transform hover:-translate-y-2',
}

const Landing: FC = () => {
  return (
    <div className={classes.HomeContainer}>
      <div data-scroll data-scroll-speed="-0.8" className={classes.landingContainer}>
        <Navbar />
        <div className={classes.landingContent}>
          <div className={classes.titleContainer}>
            <h3 className={classes.header3}>Hi, I am</h3>
            <h1 className={classes.header1}>Jayasheel</h1>
          </div>
          <div className={classes.sectionsContainer}>
            <Link href="/Engineer"><button className={classes.sectionsContainerButton}>Engineer</button></Link>
            <Link href="/Photographer"><button className={classes.sectionsContainerButton}>Photographer</button></Link>
            <Link href="/Musician"><button className={classes.sectionsContainerButton}>Musician</button></Link>
          </div>
        </div>
        <Footer />
      </div>
      <About />
      <Experience />
      <Featured />
    </div>
  );
}

export default Landing;