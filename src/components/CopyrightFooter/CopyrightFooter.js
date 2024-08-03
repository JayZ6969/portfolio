import React from "react";
import "./CopyrightFooter.css";

const CopyrightFooter = (props) => {
  return (
    <div className={props.ColorBG}>
      <p>Coded with ❣️</p>
      <p> © 2024 Jayasheel Vinay J. All rights reserved.</p>
      <a
        href="https://github.com/JayZ6969/portfolio"
        target="_blank"
        rel="noreferrer"
      >
        Source Code 🔧
      </a>
    </div>
  );
};

export default CopyrightFooter;
