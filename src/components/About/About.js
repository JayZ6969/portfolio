import React from "react";
import "./About.css";
import ME from "../../assets/images/ME.JPG";

const About = () => {
  return (
    <div className="about-bg">
      <div className="about-content">
        <div className="about-me">
          <h1>
            <span>ABOUT-</span>
            <br />
            <span>ME</span>
          </h1>
          <img className="sm-img" src={ME} alt="" />
          <p>
            I'm a front-end developer passionate about UI/UX design and
            currently diving into Data Structures and Algorithms. I enjoy making
            creative projects that combine style and utility.
            <br />
            <br />
            Beyond coding, I work as a professional photographer, documenting
            special moments in life, and I play music, performing live on stages
            with my band at events. Each project I work on reflects my passion
            and commitment to my craft, which is a blend of technical expertise
            and artistic vision.
          </p>
          <a href="https://revaedu-my.sharepoint.com/:b:/g/personal/ugcet220791_reva_edu_in/EUvS78wQDC9EqQoQygyiTM0BquHcUtXQrEv-j9ovCgFTZw?e=TZEok1" target="_blank" rel="noreferrer">
            <button className="button-container">RESUME</button>
          </a>
        </div>
        <img src={ME} alt="" />
      </div>
    </div>
  );
};

export default About;
