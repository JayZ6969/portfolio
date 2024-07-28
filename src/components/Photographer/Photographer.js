import React from 'react'
import './Photographer.css'
import BoxContainer from '../BoxContainer/BoxContainer'
import SectionsNavbar from '../SectionsNavbar/SectionsNavbar'
import TextComponent1 from '../TextComponent1/TextComponent1'
import SocialsComponent from '../SocialsComponent/SocialsComponent'
import linkedin from '../../assets/icons/linkedin.svg'
import google from '../../assets/icons/google.svg'
import instagram from '../../assets/icons/instagram.svg'
import behance from '../../assets/icons/behance.svg'
import image1 from '../../assets/images/1.JPG'
import image2 from '../../assets/images/2.JPG'

const Photographer = () => {

  const header1 = "Experience";
  const points1 = [
    "Volunteer Photographer; PetFed, Bengaluru; 2023",
    "Photographer; FORCE, REVA University; 2022-present",
    "Media Team, GDSC, REVA University; 2023-24"
  ];

  const socials = [
    {
      socialsicon: behance,
      socialslink: "https://www.behance.net/jayasheelvinayj"
    },
    {
      socialsicon: instagram,
      socialslink: "https://www.instagram.com/jayasheel.vinay/"
    },
    {
      socialsicon: google,
      socialslink: "https://developers.google.com/profile/u/JayZ6969"
    },
    {
      socialsicon: linkedin,
      socialslink: "https://www.linkedin.com/in/jayasheelvinayj/"
    }
  ]

  return (
    <div className='photographer-container'>
      <SectionsNavbar />
      <div className="content-main">
        <h1>Work</h1>
        <div className='content-container1'>
          <BoxContainer 
            box1ClassName="box-big"
            box1Content={image1}
            box2ClassName="box-small"
            box2Content={image2}
          />
          <BoxContainer 
            box2ClassName="box-big"
            box2Content="../../assets/images/4.JPG"
          />
          <TextComponent1 Header={header1} Points={points1}/>
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

export default Photographer