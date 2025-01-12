import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import linkedin from '../public/assets/icons/linkedin-1.svg';
import instagram from '../public/assets/icons/instagram-1.svg';
import github from '../public/assets/icons/github-1.svg';
import behance from '../public/assets/icons/behance-1.svg';

const classes = {
  Container: 'flex flex-col items-center justify-center w-full h-full bg-white z-20',
  ContactContainer: 'flex flex-col w-full h-full min-[1921px]:max-w-[74.961vw] max-w-[1440px] items-start justify-between min-[1921px]:px-[4.164vw] min-[1921px]:py-[2.915vw] xl:px-20 xl:py-14 lg:px-16 lg:py-10 md:px-12 md:py-6 px-10 py-6 xl:gap-20 lg:gap-10 gap-6',
  Contacts: 'flex md:flex-row flex-col w-full h-full items-start justify-between min-[1921px]:gap-[4.164vw] md:gap-20 gap-6',
  SocialsHeaderContainer: 'flex items-center justify-center w-full',
  SocialsHeader: 'border-b-2 border-black pb-6 w-full font-inter font-bold tracking-tight text-black min-[1921px]:text-[4.373vw] min-[1440px]:text-[4.25rem] xl:text-[4rem] lg:text-[3.5rem] md:text-[3rem] min-[430px]:text-[2.5rem] text-[2rem] leading-none',
  SocialsMainContainer: 'flex w-full h-full items-start justify-center min-[1921px]:gap-[0.833vw] gap-4',
  SocialsContainer: 'flex flex-col w-full h-full items-start justify-center min-[1921px]:gap-[0.833vw] md:gap-4 gap-3',
  FooterContainer: 'border-t-2 border-gray-300 flex w-screen items-center justify-center lg:justify-between',
  Socials: 'flex items-center justify-center min-[1921px]:gap-[4.164vw] gap-20',
  SocialsText: 'font-pp-mori-semibold text-black min-[1921px]:text-[1.249vw] min-[1440px]:text-[2rem] xl:text-[1.75rem] md:text-[1.5rem] min-[430px]:text-[1.25rem] text-[1rem] leading-none',
  FooterText: 'font-pp-mori-semibold font-[600] text-black min-[1921px]:text-[0.833vw] min-[430px]:text-[1rem] text-[0.75rem] min-[1921px]:p-[1.249vw] md:py-6 md:px-8 py-4 px-2 leading-none',
}

const Footer: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.ContactContainer}>
        <div className={classes.Contacts}>
          <div className={classes.SocialsHeaderContainer}>
            <h1 className={classes.SocialsHeader}>Let's Connect</h1>
          </div>
          <div className={classes.SocialsMainContainer}>
            <div className={classes.SocialsContainer}>
              <Link className={classes.Socials} href="https://www.linkedin.com/in/jayasheelvinayj/" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>LinkedIn ↗</p>
              </Link>
              <Link className={classes.Socials} href="https://www.youtube.com/@JayZ6969" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>YouTube ↗</p>
              </Link>
              <Link className={classes.Socials} href="https://www.instagram.com/jayasheel.vinay/" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>Instagram ↗</p>
              </Link>
              <Link className={classes.Socials} href="https://www.behance.net/jayasheelvinayj/" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>Behance ↗</p>
              </Link>
            </div>
            <div className={classes.SocialsContainer}>
              <Link className={classes.Socials} href="https://www.github.com/jayz6969/" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>GitHub ↗</p>
              </Link>
              <Link className={classes.Socials} href="https://developers.google.com/profile/u/JayZ6969" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>Google Dev ↗</p>
              </Link>
              <Link className={classes.Socials} href="https://www.codechef.com/users/jayasheelvinayj" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>CodeChef ↗</p>
              </Link>
              <Link className={classes.Socials} href="https://leetcode.com/u/jayz6969/" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>LeetCode ↗</p>
              </Link>
              <Link className={classes.Socials} href="https://www.geeksforgeeks.org/user/jayz6969/" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>GFG ↗</p>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.Contacts}>
          <div className={classes.SocialsHeaderContainer}>
            <h1 className={classes.SocialsHeader}>More Links</h1>
          </div>
          <div className={classes.SocialsMainContainer}>
            <div className={classes.SocialsContainer}>
              <Link className={classes.Socials} href="#" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>Home ↗</p>
              </Link>
              <Link className={classes.Socials} href="#" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>About Me↗</p>
              </Link>
              <Link className={classes.Socials} href="#" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>Resume ↗</p>
              </Link>
              <Link className={classes.Socials} href="#" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>Experience ↗</p>
              </Link>
              <Link className={classes.Socials} href="#" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>Start a Project ↗</p>
              </Link>
              <Link className={classes.Socials} href="#" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>Photography Work ↗</p>
              </Link>
              <Link className={classes.Socials} href="#" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>Engineering Projects ↗</p>
              </Link>
              <Link className={classes.Socials} href="#" target="_blank" rel="noreferrer">
                <p className={classes.SocialsText}>Music Work ↗</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.FooterContainer}>
        <p className={`${classes.FooterText} hidden lg:block`}>Coded with ❣️</p>
        <p className={classes.FooterText}> © 2025 Jayasheel Vinay J. All rights reserved.</p>
        <Link href="https://github.com/JayZ6969/portfolio" target="_blank" rel="noreferrer" className={`${classes.FooterText} hidden lg:block`}>Source Code ↗</Link>
      </div>
    </div>
  );
}

export default Footer;