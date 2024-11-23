'use client'

import React, { FC } from 'react';
import Image from 'next/image';
import './Footer.css';
import location from '../public/assets/icons/location.svg';
import suitcase from '../public/assets/icons/suitcase.svg';

const Footer: FC = () => {
  return (
    <footer>
      <div className="recent-experience">
        <Image src={suitcase} alt="" />
        <p className='p1'>Recent Experience</p>
        <p className='p2'>Vice President @ FORCE</p>
      </div>
      <div className="location">
        <Image src={location} alt="" />
        <p className='p1'>Location</p>
        <p className='p2'>Bengaluru, India</p>
      </div>
    </footer>
  );
}

export default Footer;