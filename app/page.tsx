'use client'

import React, { FC, useEffect } from 'react';
import Link from 'next/link';
import ParticlesBG from '../components/ParticlesBG';
import Navbar from '../components/Navbar';
import LandingFooter from '../components/LandingFooter';
import About from '../components/About';
import Experience from '../components/Experience';
import Featured from '../components/Featured';
import Start from '../components/Start';
import Footer from '../components/Footer';

const classes = {
  HomeContainer: 'flex flex-col items-center justify-around w-screen',
  landingContainer: 'w-screen h-svh flex flex-col justify-between',
  landingContent: 'flex flex-col justify-center items-center min-[1921px]:gap-[2.082vw] gap-10 p-8',
  titleContainer: 'flex flex-col items-start',
  header3: 'font-pp-mori-regular font-semibold text-white min-[1921px]:text-[2.915vw] min-[1440px]:text-[3.5rem] xl:text-[3rem] lg:text-[2.5rem] md:text-[2rem] min-[430px]:text-[1.5rem] text-[1rem] leading-loose',
  header1: 'text-white min-[1921px]:text-[9.995vw] min-[1440px]:text-[12rem] xl:text-[11rem] lg:text-[9rem] md:text-[7rem] sm:text-[6.5rem] min-[430px]:text-[5.5rem] text-[4.75rem] leading-none',
  NavLink: 'relative group',
  NavLinkHover: 'hover:text-zinc-900',
  NavLinkUnderline: 'absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100',
  sectionsContainer: 'flex md:flex-row flex-col items-center min-[1921px]:gap-[0.625vw] sm:gap-3 gap-2',
  sectionsContainerButton: 'bg-white  min-[1921px]:px-[2.499vw] min-[1921px]:py-[0.833vw] min-[1440px]:px-12 min-[1440px]:py-4 xl:px-10 xl:py-3 lg:px-8 lg:py-2 px-8 py-[0.4rem] md:w-full grow rounded-full transition-colors duration-300 ease-in-out transform hover:bg-[#cee968] ',
  sectionsText: 'font-pp-mori-regular font-semibold min-[1921px]:text-[2.499vw] min-[1440px]:text-[3rem] xl:text-[2.75rem] lg:text-4xl md:text-3xl sm:text-2xl text-2xl max-[430px]:text-xl',
}


const Home: FC = () => {

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, []);

  return (
    <div className={classes.HomeContainer}>
      <ParticlesBG />
      <div data-scroll data-scroll-speed="-0.8" className={classes.landingContainer}>
        <Navbar title="Portfolio"/>
        <div className={classes.landingContent}>
          <div className={classes.titleContainer}>
            <h3 className={classes.header3}>Hi, I am</h3>
            <h1 className={classes.header1}>Jayasheel</h1>
          </div>
          <div className={classes.sectionsContainer}>
            <Link className={`${classes.sectionsContainerButton} ${classes.NavLink} ${classes.NavLinkHover}`} href="/Engineer"><p className={classes.sectionsText}>Engineer</p><span className={classes.NavLinkUnderline}></span></Link>
            <Link className={`${classes.sectionsContainerButton} ${classes.NavLink} ${classes.NavLinkHover}`} href="/Photographer"><p className={classes.sectionsText}>Photographer</p><span className={classes.NavLinkUnderline}></span></Link>
            <Link className={`${classes.sectionsContainerButton} ${classes.NavLink} ${classes.NavLinkHover}`} href="/Musician"><p className={classes.sectionsText}>Musician</p><span className={classes.NavLinkUnderline}></span></Link>
          </div>
        </div>
        <LandingFooter />
      </div>
      <About />
      <Featured />
      <Experience />
      <Start />
      <Footer />
    </div>
  );
}

export default Home;