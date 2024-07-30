import React from 'react'
import '../styles/Sections.css'
import BoxContainer from '../BoxContainer/BoxContainer'
import SectionsNavbar from '../SectionsNavbar/SectionsNavbar'
import TextComponent1 from '../TextComponent1/TextComponent1'
import SocialsComponent from '../SocialsComponent/SocialsComponent'
import google from '../../assets/icons/google.svg'
import instagram from '../../assets/icons/instagram.svg'
import youtube from '../../assets/icons/youtube.svg'
import spotify from '../../assets/icons/spotify.svg'



const Musician = () => {
  const header1 = "Experience";
  const points1 = [
    "Pianist, 2010-present",
    "Pianist, Music Band-Euphony; 2022-present",
    "Finalist at KVS “Ek Bharat Shresht Bharat” Parv; 2019 ",
    "Digital Audio Workstations/Music Production; 2019-present"
  ];
  const header2 = "Qualifications";
  const points2 = [
    "5th Year “Sangeet Bivakar”, Diploma in  Digital Keyboard, Bangiya Sangeet Parishad, Kolkata",
    "4th Year, Diploma in Digital Keyboard, Bangiya Sangeet Parishad, Kolkata",
    "3rd Year, Diploma in Digital Keyboard, Bangiya Sangeet Parishad, Kolkata",
    "2nd Year, Diploma in Digital Keyboard, Bangiya Sangeet Parishad, Kolkata",
    "1st Year, Diploma in Digital Keyboard, Bangiya Sangeet Parishad, Kolkata",
  ];


  const socials = [
    {
      socialsicon: youtube,
      socialslink: "https://www.youtube.com/channel/JayZ6969"
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
      socialsicon: spotify,
      socialslink: "https://open.spotify.com/user/jayasheel?si=579a6a337dc64e3e"
    }

  ]


  return (
    <div className='main-container'>
      <SectionsNavbar />
      <div className="content-main">
        <h1>Performances</h1>
        <div className='content-container1'>
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

export default Musician