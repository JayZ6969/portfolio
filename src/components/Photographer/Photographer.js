import React from 'react'
import '../styles/Sections.css'
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
import image3 from '../../assets/images/3.JPG'
import image4 from '../../assets/images/4.JPG'
import image5 from '../../assets/images/5.JPG'
import image6 from '../../assets/images/6.JPG'
import image7 from '../../assets/images/7.JPG'
import image8 from '../../assets/images/8.JPG'
import image9 from '../../assets/images/9.JPG'
import image10 from '../../assets/images/10.JPG'
import image11 from '../../assets/images/11.JPG'
import image12 from '../../assets/images/12.JPG'
import image13 from '../../assets/images/13.JPG'
import image14 from '../../assets/images/14.JPG'
import image15 from '../../assets/images/15.JPG'
import image16 from '../../assets/images/16.JPG'
import image17 from '../../assets/images/17.JPG'

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

  const boxprops = [
    {
      box1ClassName: "box-big",
      box1Content: image1,
      box2ClassName: "box-small",
      box2Content: "Shilpa Rao;<br>REVOTHSAVA '23,<br>REVA University",
      box2ContentType: "text",
      box3ClassName: "display-none"
    },
    {
      box2ClassName: "box-big",
      box2Content: image2,
      box1ClassName: "box-small box-small-right",
      box1Content: "Yakshagaana,<br>Karnataka’s<br>Traditional<br>Dance Form;<br>NAAC Cultural<br>Performance,<br>REVA University",
      box1ContentType: "text",
      box3ClassName: "display-none"
    },
    {
      box1ClassName: "box-big",
      box1Content: image3,
      box2ClassName: "box-small",
      box2Content: "Dandiya,<br>Rajasthani<br>Folk Dance;<br>NAAC Cultural<br>Performance,<br>REVA University",
      box2ContentType: "text",
      box3ClassName: "display-none"
    },
    {
      box2ClassName: "box-big",
      box2Content: image4,
      box1ClassName: "box-small box-small-right",
      box1Content: "Bharatanatyam,<br>Indian Classical<br>Dance Form;<br>NAAC Cultural<br>Performance,<br>REVA University",
      box1ContentType: "text",
      box3ClassName: "display-none"
    },
    {
      box1ClassName: "box-big",
      box1Content: image5,
      box2ClassName: "box-small",
      box2Content: "Bharatanatyam,<br>Indian Classical<br>Dance Form;<br>NAAC Cultural<br>Performance,<br>REVA University",
      box2ContentType: "text",
      box3ClassName: "display-none"
    },
    {
      box2ClassName: "box-big",
      box2Content: image6,
      box1ClassName: "box-small box-small-right",
      box1Content: "Bharatanatyam,<br>Indian Classical<br>Dance Form;<br>NAAC Cultural<br>Performance,<br>REVA University",
      box1ContentType: "text",
      box3ClassName: "display-none"
    },
    {
      box1ClassName: "box-big",
      box1Content: image7,
      box2ClassName: "box-small",
      box2Content: "Sri Lankan<br>Classical<br>Dance Form;<br>NAAC Cultural<br>Performance,<br>REVA University",
      box2ContentType: "text",
      box3ClassName: "display-none"
    },
    {
      box2ClassName: "box-big",
      box2Content: image9,
      box1ClassName: "box-small",
      box1Content: image8,
      box3ClassName: "display-none"
    },
    {
      box1ClassName: "box-big",
      box1Content: image10,
      box2ClassName: "box-small",
      box2Content: image11,
      box3ClassName: "display-none"
    },
    {
      box1ClassName: "box-equal",
      box1Content: image12,
      box2ClassName: "box-equal",
      box2Content: image13,
      box3ClassName: "box-equal",
      box3Content: image14
    },
    {
      box1ClassName: "box-equal",
      box1Content: image15,
      box2ClassName: "box-equal",
      box2Content: image16,
      box3ClassName: "box-equal",
      box3Content: image17
    }
  ]

  return (
    <div className='main-container'>
      <SectionsNavbar />
      <div className="content-main">
        <h1>Work</h1>
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

export default Photographer