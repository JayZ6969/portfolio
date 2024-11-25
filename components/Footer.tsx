'use client'

import React, { FC } from 'react';
import Image from 'next/image';
import './Footer.css';
import location from '../public/assets/icons/location.svg';
import suitcase from '../public/assets/icons/suitcase.svg';

const classes = {
  footer: 'flex justify-between items-center w-full md:px-10 md:pb-10 sm:px-8 sm:pb-8 px-6 pb-6',
  container: 'flex items-start flex-col gap-2',
  Image: 'xl:w-6 w-5',
  p1: 'font-pp-mori-semibold xl:text-[1.5rem] sm:text-[1.25rem] leading-none text-white',
  p2: 'font-pp-mori-semibold xl:text-[1.25rem] sm:text-[1rem] leading-none text-[#7C7C83]',
};

const Footer: FC = () => {
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

export default Footer;