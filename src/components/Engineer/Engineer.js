import React from 'react'
import './Engineer.css'
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



const Engineer = () => {

  const header1 = "Experience";
  const points1 = [
    "UI/UX Design",
    "Front-End Development",
    "IoT/KiCAD PCB Design"
  ];
  const header2 = "Education";
  const points2 = [
    "B. Tech in Electronics & Communication Engineeering, REVA Universty, Bengaluru",
    "10+2 PCM+CS, Kendriya Vidyalaya No.2 AFS Jalahalli (E), Bengaluru"
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


  return (
    <div className="engineer-container">
      <SectionsNavbar />
      <div className="content-main">
        <h1>Projects</h1>
        <div className='content-container1'>
          <BoxContainer box1ClassName="box-big" box2ClassName="box-small"/>
          <BoxContainer box2ClassName="box-big" box1ClassName="box-small"/>
          <TextComponent1 Header={header1} Points={points1}/>
          <TextComponent1 Header={header2} Points={points2}/>
          <SocialsComponent Socials={
            socials.map((social, index) => (
              {socialsicon: social.socialsicon, socialslink: social.socialslink}
            ))
          }/>
        </div>
      </div>
    </div>
  )
}

export default Engineer