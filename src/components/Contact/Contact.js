import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import google from "../../assets/icons/google.svg";
import behance from "../../assets/icons/behance.svg";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-main">
          <h1>
            WANT TO
            <br />
            START
            <br />
            A NEW
            <br />
            PROJECT ?
          </h1>
        </div>
        <div className="contact-me">
          <h1>
            Let's <br className="hide"/>Connect
          </h1>
          <div className="contact-info">
            <div className="sub-contact-info">
              <Link
                to="https://www.linkedin.com/in/jayasheelvinayj/"
                target="_blank"
                className="flex-row"
              >
                <img src={linkedin} alt="" />
                <p>Linkedin</p>
              </Link>
              <Link
                to="https://www.instagram.com/jayasheel.vinay/"
                target="_blank"
                className="flex-row"
              >
                <img src={instagram} alt="" />
                <p>Instagram</p>
              </Link>
            </div>
            <div className="sub-contact-info">
              <Link
                to="mailto:jayasheelvinayj.work@gmail.com"
                target="_blank"
                className="flex-row"
              >
                <img src={google} alt="" />
                <p>Gmail</p>
              </Link>
              <Link
                to="ttps://www.behance.net/jayasheelvinayj"
                target="_blank"
                className="flex-row"
              >
                <img src={behance} alt="" />
                <p>Behance</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
