import React, { FC } from "react";
import Image from 'next/image';
import star from '../public/assets/icons/star-1.svg';
import premiere from '../public/assets/icons/premiere-1.svg';
import aftereffects from '../public/assets/icons/aftereffects-1.svg';
import photoshop from '../public/assets/icons/photoshop-1.svg';
import lightroom from '../public/assets/icons/lightroom-1.svg';
import illustrator from '../public/assets/icons/illustrator-1.svg';
import blender from '../public/assets/icons/blender-1.svg';
import figma from '../public/assets/icons/figma-1.svg';

const classes = {
  Container: 'flex md:flex-row flex-col min-[1921px]:w-[74.961vw] max-[1920px]:max-w-[1440px] items-center w-screen bg-white in-[1921px]:p-[4.164vw] xl:p-20 lg:p-16 md:p-12 sm:px-10 min-[430px]:px-8 px-6 py-10 md:gap-8 gap-6 z-10',
  leftContainer: 'flex flex-col md:gap-12 gap-8 md:w-[50%] w-full',
  rightContainer: 'flex flex-col md:gap-12 gap-8 md:w-[50%] w-full',
  SubContainer: 'flex flex-col gap-4 w-full',
  SubContainer_1: 'flex flex-row items-start gap-4 w-full',
  SubContainer_2: 'flex flex-col items-start gap-2 w-full',
  SubContainer_3: 'flex flex-row gap-2 w-[60%]',
  SubContainer_4: 'flex md:flex-row flex-col items-start gap-4 w-full',
  Header: 'font-inter font-bold text-black border-b-2 border-black md:pb-6 sm:pb-4 pb-3 min-[1921px]:text-[3.54vw] min-[1440px]:text-[4.25rem] xl:text-[4rem] lg:text-[3.5rem] md:text-[3rem] min-[430px]:text-[2.5rem] text-[2rem] leading-none',
  SubHeader: 'font-inter font-semibold text-black min-[1921px]:text-[1.666vw] min-[1440px]:text-[2rem] xl:text-[1.8rem] min-[430px]:text-[1.5rem] text-[1.25rem] leading-none',
  ParaText: 'font-inter font-[600] text-gray-600 min-[1921px]:text-[1.041vw] min-[1440px]:text-[1.25rem] xl:text-[1.05rem] min-[430px]:text-[1rem] text-[0.85rem] leading-none',
  Star: 'w-8 h-8',
  SkillIcons: 'w-12 h-12',
};

const educationData = [
  { year: "2022-2026", degree: "Electronics and Communication Engg.", institution: "REVA University" },
  { year: "2019-2021", degree: "PCMCS", institution: "Kendriya Vidyalaya No.2 AFS Jalahalli (East), Bengaluru" },
  { year: "2009-2019", degree: "CBSE - X", institution: "Kendriya Vidyalaya No.2 AFS Jalahalli (East), Bengaluru" },
];

const languagesData = [
  { language: "English", proficiency: "Fluent" },
  { language: "Hindi", proficiency: "Intermediate" },
  { language: "Kannada", proficiency: "Native" },
];

const achievementsData = [
  { year: "2024-25", title: "InSPACE ISRO CanSat India Competition", description: "Team Avinya: Team Lead" },
  { year: "2024-25", title: "Smart India Hackathon", description: "Project Title: Smart AI based Traffic Management System" },
  { year: "2024", title: "D/T Designation", description: "Project Title: A DApp UI for a Global Deep Tech Events Calendar" },
];

const softwareToolsData = [
  { src: premiere, alt: "Premiere" },
  { src: aftereffects, alt: "After Effects" },
  { src: photoshop, alt: "Photoshop" },
  { src: illustrator, alt: "Illustrator" },
  { src: lightroom, alt: "Lightroom" },
  { src: blender, alt: "Blender" },
  { src: figma, alt: "Figma" },
];

const programmingSkillsData = [
  "C/C++, Python, Matlab, Verilog, MySQL",
  "HTML, CSS, JavaScript, TypeScript, ReactJS, NextJS, TailwindCSS",
];

const extraCurricularData = [
  { year: "2022-25", title: "FORCE - Forum of REVA for Communication & Electronics", role: "Vice-President" },
  { year: "2023-24", title: "GDSC - REVA University", role: "Media Team" },
];

const hobbiesData = [
  { hobby: "Photography", level: "Semi-Pro" },
  { hobby: "Keyboard", level: "Intermediate" },
  { hobby: "Cycling", level: "Wanderlust" },
];

const Experience: FC = () => {
  return (
    <div className="flex items-center justify-center bg-white w-screen z-10" id='experience'>
      <div className={classes.Container}>
        <div className={classes.leftContainer}>
          <div className={classes.SubContainer}>
            <h1 className={classes.Header}>Education</h1>
            {educationData.map((item, index) => (
              <div key={index} className={classes.SubContainer_1}>
                <div className={classes.SubContainer_3}>
                  <Image className={classes.Star} src={star} alt="" />
                  <p className={classes.SubHeader}>{item.year}</p>
                </div>
                <div className={classes.SubContainer_2}>
                  <h2 className={classes.SubHeader}>{item.degree}</h2>
                  <p className={classes.ParaText}>{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={classes.SubContainer}>
            <h1 className={classes.Header}>Languages</h1>
            <div className={classes.SubContainer_1}>
              {languagesData.map((item, index) => (
                <div key={index} className={classes.SubContainer_2}>
                  <h2 className={classes.SubHeader}>{item.language}</h2>
                  <p className={classes.ParaText}>{item.proficiency}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={classes.SubContainer}>
            <h1 className={classes.Header}>Achievements</h1>
            {achievementsData.map((item, index) => (
              <div key={index} className={classes.SubContainer_1}>
                <div className={classes.SubContainer_3}>
                  <Image className={classes.Star} src={star} alt="" />
                  <p className={classes.SubHeader}>{item.year}</p>
                </div>
                <div className={classes.SubContainer_2}>
                  <h2 className={classes.SubHeader}>{item.title}</h2>
                  <p className={classes.ParaText}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.SubContainer}>
            <h1 className={classes.Header}>Technical Skills</h1>
            <div className={classes.SubContainer_4}>
              <div className={classes.SubContainer_2}>
                <h2 className={classes.SubHeader}>Software Tools</h2>
                <div className={classes.SubContainer_3}>
                  {softwareToolsData.slice(0, 4).map((tool, index) => (
                    <Image key={index} className={classes.SkillIcons} src={tool.src} alt={tool.alt} />
                  ))}
                </div>
                <div className={classes.SubContainer_3}>
                  {softwareToolsData.slice(4).map((tool, index) => (
                    <Image key={index} className={classes.SkillIcons} src={tool.src} alt={tool.alt} />
                  ))}
                </div>
              </div>
              <div className={classes.SubContainer_2}>
                <h2 className={classes.SubHeader}>Programming Skills</h2>
                {programmingSkillsData.map((skill, index) => (
                  <p key={index} className={classes.ParaText}>{skill}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.SubContainer}>
            <h1 className={classes.Header}>Extra Curricular</h1>
            {extraCurricularData.map((item, index) => (
              <div key={index} className={classes.SubContainer_1}>
                <div className={classes.SubContainer_3}>
                  <Image className={classes.Star} src={star} alt="" />
                  <p className={classes.SubHeader}>{item.year}</p>
                </div>
                <div className={classes.SubContainer_2}>
                  <h2 className={classes.SubHeader}>{item.title}</h2>
                  <p className={classes.ParaText}>{item.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={classes.SubContainer}>
            <h1 className={classes.Header}>Hobbies</h1>
            <div className={classes.SubContainer_4}>
              {hobbiesData.map((item, index) => (
                <div key={index} className={classes.SubContainer_2}>
                  <h2 className={classes.SubHeader}>{item.hobby}</h2>
                  <p className={classes.ParaText}>{item.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;