import { FC } from 'react';
import Link from 'next/link';

const classes = {
  Container: 'flex flex-col items-center justify-center w-full h-full bg-white z-20',
  ContactContainer: 'flex flex-col w-full h-full min-[1921px]:max-w-[74.961vw] max-w-[1440px] items-start justify-between min-[1921px]:px-[4.164vw] min-[1921px]:py-[2.915vw] xl:px-20 xl:py-14 lg:px-16 lg:py-10 md:px-12 md:py-10 min-[430px]:px-8 min-[430px]:py-8 px-6 py-6 xl:gap-20 lg:gap-10 gap-6',
  Contacts: 'flex md:flex-row flex-col w-full h-full items-start justify-between min-[1921px]:gap-[4.164vw] md:gap-20 gap-6',
  SocialsHeaderContainer: 'flex items-center justify-center w-full',
  SocialsHeader: 'border-b-2 border-black md:pb-6 sm:pb-4 pb-3 w-full font-inter font-bold tracking-tight text-black min-[1921px]:text-[4.373vw] min-[1440px]:text-[4.25rem] xl:text-[4rem] lg:text-[3.5rem] md:text-[3rem] min-[430px]:text-[2.5rem] text-[2rem] leading-none',
  SocialsMainContainer: 'flex w-full h-full items-start justify-center min-[1921px]:gap-[0.833vw] gap-4',
  SocialsContainer: 'flex flex-col w-full h-full items-start justify-center min-[1921px]:gap-[0.833vw] md:gap-4 gap-3',
  FooterContainer: 'border-t-2 border-gray-300 flex w-screen items-center justify-center lg:justify-between',
  Socials: 'flex items-center justify-center min-[1921px]:gap-[4.164vw] gap-20 ',
  NavLink: 'relative group',
  NavLinkHover: 'hover:text-zinc-900',
  NavLinkUnderline: 'absolute bottom-0 left-0 w-full h-0.5 bg-zinc-900 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100',
  SocialsText: 'font-pp-mori-semibold text-black min-[1921px]:text-[1.249vw] min-[1440px]:text-[2rem] xl:text-[1.75rem] md:text-[1.5rem] min-[430px]:text-[1.25rem] text-[1rem] leading-none',
  FooterText: 'font-pp-mori-semibold font-[600] text-black min-[1921px]:text-[0.833vw] min-[430px]:text-[1rem] text-[0.75rem] min-[1921px]:p-[1.249vw] md:py-6 md:px-8 py-4 px-2 leading-none',
};

const socialLinks = [
  { href: "https://www.linkedin.com/in/jayasheelvinayj/", text: "LinkedIn ↗" },
  { href: "https://www.youtube.com/@JayZ6969", text: "YouTube ↗" },
  { href: "https://www.instagram.com/jayasheel.vinay/", text: "Instagram ↗" },
  { href: "https://www.behance.net/jayasheelvinayj/", text: "Behance ↗" },
  { href: "https://github.com/JayZ6969", text: "GitHub ↗" },
  { href: "https://developers.google.com/profile/u/JayZ6969", text: "Google Dev ↗" },
  { href: "https://leetcode.com/u/jayz6969/", text: "LeetCode ↗" },
  { href: "https://www.geeksforgeeks.org/user/jayz6969/", text: "GFG ↗" },
];

const moreLinks = [
  { href: "#", text: "Home ↗", },
  { href: "#about", text: "About Me ↗" },
  { href: "https://revaedu-my.sharepoint.com/:b:/g/personal/ugcet220791_reva_edu_in/EXGcPi8JK5pPmNKCeS5kSBoBPYfOLPuvBFy3tU0t-tVW8g?e=R3m8Ar", text: "Resume ↗" },
  { href: "#experience", text: "Experience ↗" },
  { href: "https://www.behance.net/jayasheelvinayj/", text: "Photography Work ↗" },
  { href: "https://www.behance.net/jayasheelvinayj/", text: "Engineering Projects ↗" },
  { href: "https://www.youtube.com/@JayZ6969", text: "Music Work ↗" },
];

const Footer: FC = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.ContactContainer}>
        <div className={classes.Contacts}>
          <div className={classes.SocialsHeaderContainer}>
            <h1 className={classes.SocialsHeader}>Let&apos;s Connect</h1>
          </div>
          <div className={classes.SocialsMainContainer}>
            <div className={classes.SocialsContainer}>
              {socialLinks.slice(0, 4).map((link, index) => (
                <Link key={index} className={`${classes.Socials} ${classes.NavLink} ${classes.NavLinkHover}`} href={link.href} target="_blank" rel="noreferrer">
                  <p className={classes.SocialsText}>{link.text}</p>
                  <span className={classes.NavLinkUnderline}></span>
                </Link>
              ))}
            </div>
            <div className={classes.SocialsContainer}>
              {socialLinks.slice(4).map((link, index) => (
                <Link key={index} className={`${classes.Socials} ${classes.NavLink} ${classes.NavLinkHover}`} href={link.href} target="_blank" rel="noreferrer">
                  <p className={classes.SocialsText}>{link.text}</p>
                  <span className={classes.NavLinkUnderline}></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.Contacts}>
          <div className={classes.SocialsHeaderContainer}>
            <h1 className={classes.SocialsHeader}>More Links</h1>
          </div>
          <div className={classes.SocialsMainContainer}>
            <div className={classes.SocialsContainer}>
              {moreLinks.map((link, index) => (
                <Link key={index} className={`${classes.Socials} ${classes.NavLink} ${classes.NavLinkHover}`} href={link.href} target="_blank" rel="noreferrer">
                  <p className={classes.SocialsText}>{link.text}</p>
                  <span className={classes.NavLinkUnderline}></span>
                </Link>
              ))}
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