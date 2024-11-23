'use client'

import React, { FC } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Landing.css';

const classes = {
  landingContainer: 'w-screen h-svh max-h-[1080 px] flex flex-col justify-between',
  landingContent: 'flex flex-col justify-center items-center gap-10 p-8',
  titleContainer: 'flex flex-col items-start',
  header3: 'font-pp-mori-regular font-semibold text-white xl:text-[3.5rem] lg:text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-[1.5rem] leading-loose',
  header1: 'text-white xl:text-[12rem] lg:text-[10rem] md:text-[8rem] sm:text-[6rem] text-[4rem] leading-none',
  sectionsContainer: 'flex md:flex-row flex-col items-center sm:gap-4 gap-3',
  sectionsContainerButton: 'bg-white text-black font-pp-mori-regular font-semibold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl xl:px-12 xl:py-3 lg:px-10 lg:py-2 px-8 py-[0.4rem] md:w-full grow rounded-full transition-transform duration-300 ease-in-out transform hover:-translate-y-2',
}

const Landing: FC = () => {
  return (
    <div className={classes.landingContainer}>
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
  );
}

export default Landing;