import React from 'react'
import '../styles/Sections.css'
import BoxContainer from '../BoxContainer/BoxContainer'
import SectionsNavbar from '../SectionsNavbar/SectionsNavbar'
import TextComponent1 from '../TextComponent1/TextComponent1'
import SocialsComponent from '../SocialsComponent/SocialsComponent'
import linkedin from '../../assets/icons/linkedin.svg'
import github from '../../assets/icons/github.svg'
import google from '../../assets/icons/google.svg'
import instagram from '../../assets/icons/instagram.svg'
import codechef from '../../assets/icons/codechef.svg'
import leetcode from '../../assets/icons/leetcode.svg'
import image20 from '../../assets/images/20.JPG'
import image21 from '../../assets/images/21.JPG'
import image22 from '../../assets/images/22.JPG'

const Engineer = () => {

  const header1 = "Skills";
  const points1 = [
    "Programming Languages: C/C++, Python, MATLAB",
    "Database: Oracle MySql",
    "Web Development: HTML, CSS, JavaScript, React.JS, Node.JS",
    "Tools: Docker, Git, GitHub, Figma, KiCAD, NI Mulisim, Arduino IDE",
  ];
  const header2 = "Certifications";
  const points2 = [
    "Programming Fundamentals - Duke University (Coursera)",
    "Writing, Running and Fixing Code in C - Duke University (Coursera)",
    "Python for AI, Data Science & Development - IBM (Coursera)",
    "Introduction to Machine Learning - Kaggle",
    "Prompt Design in Vertex AI Skill Badge - Google Cloud",
    "Introduction to Front-End Development - Meta (Coursera)",
    "Business Ethics Certification- Saylor Academy"
  ];
  const header3 = "Education";
  const points3 = [
    "2022-2026: B. Tech in Electronics & Communication Engineeering, REVA Universty, Bengaluru",
    "2009-2021: 10+2 PCM+CS, Kendriya Vidyalaya No.2 AFS Jalahalli (E), Bengaluru"
  ];


  const socials = [
    {
      socialsicon: linkedin,
      socialslink: "https://www.linkedin.com/in/jayasheelvinayj/"
    },
    {
      socialsicon: github,
      socialslink: "https://github.com/JayZ6969/"
    },
    {
      socialsicon: google,
      socialslink: "https://developers.google.com/profile/u/JayZ6969"
    },
    {
      socialsicon: instagram,
      socialslink: "https://www.instagram.com/jayasheel.vinay/"
    },
    {
      socialsicon: codechef,
      socialslink: "https://www.codechef.com/users/jayasheelvinayj"
    },
    {
      socialsicon: leetcode,
      socialslink: "https://leetcode.com/JayZ6969/"
    }

  ]

  const boxprops = [
    {
      box1ClassName: "box-big",
      box1Content: image20,
      box2ClassName: "box-small",
      box2Content: "FORCE - Forum Website: A website for the Forum of School of ECE, designed using Figma and built using React.JS fr Front-End & Firebase for Backend. This website allows us to post information about our event and participant registration for our events",
      box2ContentType: "text",
      box3ClassName: "display-none"
    },
    {
      box1ClassName: "box-small box-small-right",
      box1Content: "FM Radio Receiver: An FM Radio Receiver designed using KiCAD, which uses the RDA5807FP Radio IC and can receive signals from 76MHz to 108MHz", 
      box1ContentType: "text",
      box2ClassName: "box-big",
      box2Content: image21,
      box2ContentType: "image",
      box3ClassName: "display-none"
    },
    {
      box1ClassName: "box-big",
      box1Content: image22,
      box2ClassName: "box-small",
      box2Content: "Electric Guitar OverDrive Effect Pedal: An OverDrive Effect Pedal designed using KiCAD, which uses two 1N4148 clipping diodes to introduce the characteristic distortion and the TL082 Dual Op-Amp IC for audio amplification. This can be used to distort the sound of an electric guitar",
      box2ContentType: "text",
      box3ClassName: "display-none"
    }
  ]


  return (
    <div className="main-container">
      <SectionsNavbar />
      <div className="content-main">
        <h1>Projects</h1>
        <div className='content-container1'>
        <BoxContainer BoxProps={
            boxprops.map((boxprop, index) => (
              {
                box1ClassName: boxprop.box1ClassName, 
                box1Content: boxprop.box1Content, 
                box1ContentType: boxprop.box1ContentType,
                box2ClassName: boxprop.box2ClassName, 
                box2Content: boxprop.box2Content,
                box2ContentType: boxprop.box2ContentType,
                box3ClassName: boxprop.box3ClassName,
                box3Content: boxprop.box3Content,
                box3ContentType: boxprop.box3ContentType
              }
            ))
          }/>
          <TextComponent1 
            Header={header1} 
            Points={points1}
          />
          <TextComponent1 
            Header={header2} 
            Points={points2}
          />
          <TextComponent1 
            Header={header3} 
            Points={points3}
          />
          <SocialsComponent Socials={
            socials.map((social, index) => (
              {
                socialsicon: social.socialsicon, 
                socialslink: social.socialslink
              }
            ))
          }/>
        </div>
      </div>
    </div>
  )
}

export default Engineer