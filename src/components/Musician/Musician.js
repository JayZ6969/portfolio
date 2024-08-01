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
import image18 from '../../assets/images/18.JPG'
import image19 from '../../assets/images/19.JPG'



const Musician = () => {
  const header1 = "Experience";
  const points1 = [
    "Pianist, Music Band-Euphony; 2022-present",
    "Finalist at KVS “Ek Bharat Shresht Bharat” Parv; 2019 ",
    "Digital Audio Workstations/Music Production; 2019-present"
  ];
  const header2 = "Qualifications";
  const points2 = [
    "5th Year “Sangeet Bivakar”, Diploma in  Digital Keyboard, Bangiya Sangeet Parishad, Kolkata"
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

  const boxprops = [
    {
      box1ClassName: "box-big",
      box1Content: image18,
      box2ClassName: "box-small",
      box2Content: "An energetic<br>performance with<br>Neha Shastri,<br>SaReGaMaPa<br>finalist, at the<br>Harmonics<br>Music Fest‘23,<br> REVA University",
      box2ContentType: "video",
      box3ClassName: "display-none",
    },
    {
      box1ClassName: "box-small box-small-right",
      box1Content: "A mesmerizing<br>performance with<br>Asha Bhat,<br>SaReGaMaPa<br>finalist, at the<br>Harmonics<br>Music Fest‘24,<br> REVA University",
      box1ContentType: "text",
      box2ClassName: "box-big",
      box2Content: image19,
      box2ContentType: "image",
      box3ClassName: "display-none",
    }
  ]


  return (
    <div className="main-container">
      <SectionsNavbar />
      <div className="content-main">
        <h1>Performances</h1>
        <div className="content-container1">
          <BoxContainer
            BoxProps={boxprops.map((boxprop, index) => ({
              box1ClassName: boxprop.box1ClassName,
              box1Content: boxprop.box1Content,
              box1ContentType: boxprop.box1ContentType,
              box2ClassName: boxprop.box2ClassName,
              box2Content: boxprop.box2Content,
              box2ContentType: boxprop.box2ContentType,
              box3ClassName: boxprop.box3ClassName,
              box3Content: boxprop.box3Content,
              box3ContentType: boxprop.box3ContentType,
            }))}
          />
          <div className="video-player-container">
            <iframe
              className="video-player"
              src="https://www.youtube.com/embed/WxmxyDozFE8?si=JRsbHn_wwmlJRyEM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
            <p>
              This is a piano cover <br />
              of the song <br />
              "Until I Found You" <br />
              composed and sung by <br />
              Stephen Sanchez <br />
              feat. Em Beihold 
            </p>
          </div>
          <div className="video-player-container video-player-reverse-flex">
            <p className='video-text-right'>
              This is a piano cover <br />
              of the song <br />
              "Bol Do Na Zara" <br />
              composed by <br />
              Amaal Malik <br />
              and sung by <br />
              Armaan Malik
            </p>
            <iframe
              className="video-player"
              src="https://www.youtube.com/embed/eTJX2Pi5mkk?si=mH0ekqCxeVC6QNOb"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
          <TextComponent1 Header={header1} Points={points1} />
          <TextComponent1 Header={header2} Points={points2} />
          <SocialsComponent
            Socials={socials.map((social, index) => ({
              socialsicon: social.socialsicon,
              socialslink: social.socialslink,
            }))}
          />
        </div>
      </div>
    </div>
  );
}

export default Musician