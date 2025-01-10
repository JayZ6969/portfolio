'use client'

import React, { FC } from 'react';
import Image from 'next/image';
import location from '../public/assets/icons/location.svg';
import suitcase from '../public/assets/icons/suitcase.svg';

const classes = {
  footer: 'flex justify-between items-center w-full min-[1921px]:px-[2.082vw] min-[1921px]:pb-[2.082vw] md:px-10 md:pb-10 sm:px-8 sm:pb-8 px-6 pb-6',
  container: 'flex items-start flex-col gap-2',
  Image: 'min-[1921px]:w-[1.249vw] xl:w-6 w-5',
  p1: 'font-pp-mori-semibold min-[1921px]:text-[1.249vw] min-[1440px]:text-[1.5rem] sm:text-[1.25rem] text-[1.10rem] leading-none text-white',
  p2: 'font-pp-mori-semibold min-[1921px]:text-[0.99vw] min-[1440px]:text-[1.35rem] sm:text-[1.10rem] text-[0.9rem] leading-none text-[#7C7C83]',
};

const LandingFooter: FC = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Image className={classes.Image} src={suitcase} alt="" />
        <p className={classes.p1}>Recent Experience</p>
        <p className={classes.p2}>Vice President @ FORCE</p>
      </div>
      <div className={classes.container }>
        <Image className={classes.Image} src={location} alt="" />
        <p className={classes.p1}>Location</p>
        <p className={classes.p2}>Bengaluru, India</p>
      </div>
    </footer>
  );
}

export default LandingFooter;