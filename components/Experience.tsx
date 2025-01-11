import React, { FC } from "react";
import Image from 'next/image';
import star from '../public/assets/icons/star.svg';
import premiere from '../public/assets/icons/premiere.svg';
import aftereffects from '../public/assets/icons/aftereffects.svg';
import photoshop from '../public/assets/icons/photoshop.svg';
import lightroom from '../public/assets/icons/lightroom.svg';
import illustrator from '../public/assets/icons/illustrator.svg';
import blender from '../public/assets/icons/blender.svg';
import figma from '../public/assets/icons/figma.svg';

const classes = {
  Container: 'flex md:flex-row flex-col min-[1921px]:w-[74.961vw] max-[1920px]:max-w-[1440px] items-center w-screen bg-black in-[1921px]:p-[4.164vw] xl:p-20 lg:p-16 md:p-12 p-10 md:gap-8 gap-6',
  leftContainer: 'flex flex-col md:gap-12 gap-8 md:w-[50%] w-full',
  rightContainer: 'flex flex-col md:gap-12 gap-8 md:w-[50%] w-full',
  SubContainer: 'flex flex-col gap-4 w-full',
  SubContainer_1: 'flex flex-row items-start gap-4 w-full',
  SubContainer_2: 'flex flex-col items-start gap-2 w-full',
  SubContainer_3: 'flex flex-row gap-2 w-[60%]',
  SubContainer_4: 'flex md:flex-row flex-col items-start gap-4 w-full',
  Header: 'font-inter font-bold text-white min-[1921px]:text-[4.373vw] min-[1440px]:text-[4.25rem] xl:text-[4rem] lg:text-[3.5rem] md:text-[3rem] min-[425px]:text-[2.5rem] text-[2rem] leading-none',
  SubHeader: 'font-inter font-semibold text-white min-[1921px]:text-[1.666vw] min-[1440px]:text-[2rem] xl:text-[1.8rem] min-[425px]:text-[1.5rem] text-[1.25rem] leading-none',
  ParaText: 'font-inter font-normal text-gray-400 min-[1440px]:text-[1.25rem] xl:text-[1.05rem] min-[425px]:text-[0.75rem] text-[0.5rem] leading-none',
  ParaTextSmall: 'font-inter font-semibold text-gray-400 min-[1440px]:text-[1rem] xl:text-[0.8rem] min-[425px]:text-[0.75rem] text-[0.5rem] leading-none',
  Star: 'w-8 h-8',
  SkillIcons: 'w-12 h-12',
}

const Experience: FC = () => {
  return (
    <div data-scroll data-scroll-speed="0.1" className={classes.Container}>
      <div className={classes.leftContainer}>
        <div className={classes.SubContainer}>
          <h1 className={classes.Header}>Education</h1>
          <div className={classes.SubContainer_1}>
            <div className={classes.SubContainer_3}>
              <Image className={classes.Star} src={star} alt="" />
              <p className={classes.SubHeader}>2022-2026</p>
            </div>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>Electronics and Communication Engg.</h2>
              <p className={classes.ParaText}>REVA University</p>
            </div>
          </div>
          <div className={classes.SubContainer_1}>
            <div className={classes.SubContainer_3}>
              <Image className={classes.Star} src={star} alt="" />
              <p className={classes.SubHeader}>2019-2021</p>
            </div>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>PCMCS</h2>
              <p className={classes.ParaText}>Kendriya Vidyalaya No.2 AFS Jalahalli (East), Bengaluru</p>
            </div>
          </div>
          <div className={classes.SubContainer_1}>
            <div className={classes.SubContainer_3}>
              <Image className={classes.Star} src={star} alt="" />
              <p className={classes.SubHeader}>2009-2019</p>
            </div>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>CBSE - X</h2>
              <p className={classes.ParaText}>Kendriya Vidyalaya No.2 AFS Jalahalli (East), Bengaluru</p>
            </div>
          </div>
        </div>
        <div className={classes.SubContainer}>
          <h1 className={classes.Header}>Languages</h1>
          <div className={classes.SubContainer_1}>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>English</h2>
              <p className={classes.ParaTextSmall}>Fluent</p>
            </div>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>Hindi</h2>
              <p className={classes.ParaTextSmall}>Intermediate</p>
            </div>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>Kannada</h2>
              <p className={classes.ParaTextSmall}>Native</p>
            </div>
          </div>
        </div>
        <div className={classes.SubContainer}>
          <h1 className={classes.Header}>Achievements</h1>
          <div className={classes.SubContainer_1}>
            <div className={classes.SubContainer_3}>
              <Image className={classes.Star} src={star} alt="" />
              <p className={classes.SubHeader}>2024-25</p>
            </div>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>InSPACE ISRO CanSat India Competition</h2>
              <p className={classes.ParaText}>Team Avinya: Team Lead</p>
            </div>
          </div>
          <div className={classes.SubContainer_1}>
            <div className={classes.SubContainer_3}>
              <Image className={classes.Star} src={star} alt="" />
              <p className={classes.SubHeader}>2024-25</p>
            </div>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>Smart India Hackathon</h2>
              <p className={classes.ParaText}>Project Title: Smart AI based Traffic Management System</p>
            </div>
          </div>
          <div className={classes.SubContainer_1}>
            <div className={classes.SubContainer_3}>
              <Image className={classes.Star} src={star} alt="" />
              <p className={classes.SubHeader}>2024</p>
            </div>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>D/T Designation</h2>
              <p className={classes.ParaText}>Project Title: A DApp UI for a Global Deep Tech Events Calendar</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.SubContainer}>
          <h1 className={classes.Header}>Technical Skills</h1>
          <div className={classes.SubContainer_4}>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>Software Tools</h2>
              <div className={classes.SubContainer_3}>
                <Image className={classes.SkillIcons} src={premiere} alt="" />
                <Image className={classes.SkillIcons} src={aftereffects} alt="" />
                <Image className={classes.SkillIcons} src={photoshop} alt="" />
                <Image className={classes.SkillIcons} src={illustrator} alt="" />
              </div>
              <div className={classes.SubContainer_3}>
                <Image className={classes.SkillIcons} src={lightroom} alt="" />
                <Image className={classes.SkillIcons} src={blender} alt="" />
                <Image className={classes.SkillIcons} src={figma} alt="" />
              </div>
            </div>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>Programming Skills</h2>
              <p className={classes.ParaTextSmall}>C/C++, Python, Matlab, Verilog, MySQL</p>
              <p className={classes.ParaTextSmall}>HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, TailwindCSS</p>
            </div>
          </div>
        </div>
        <div className={classes.SubContainer}>
          <h1 className={classes.Header}>Extra Curricular</h1>
          <div className={classes.SubContainer_1}>
            <div className={classes.SubContainer_3}>
              <Image className={classes.Star} src={star} alt="" />
              <p className={classes.SubHeader}>2022-25</p>
            </div>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>FORCE - Forum of REVA for Communication & Electronics</h2>
              <p className={classes.ParaText}>Vice-President</p>
            </div>
          </div>
          <div className={classes.SubContainer_1}>
            <div className={classes.SubContainer_3}>
              <Image className={classes.Star} src={star} alt="" />
              <p className={classes.SubHeader}>2023-24</p>
            </div>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>GDSC - REVA University</h2>
              <p className={classes.ParaText}>Media Team</p>
            </div>
          </div>
        </div>
        <div className={classes.SubContainer}>
          <h1 className={classes.Header}>Hobbies</h1>
          <div className={classes.SubContainer_4}>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>Photography</h2>
              <p className={classes.ParaTextSmall}>Semi-Pro</p>
            </div>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>Keyboard</h2>
              <p className={classes.ParaTextSmall}>Intermediate</p>
            </div>
            <div className={classes.SubContainer_2}>
              <h2 className={classes.SubHeader}>Cycling</h2>
              <p className={classes.ParaTextSmall}>Wanderlust</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;