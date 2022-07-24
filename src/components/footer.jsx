import React from "react";
// Here we import the Footer.css file to grant access to some additional classNames
import "../styles/Footer.css";

//we are importing the icons needed for this page
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/monique-levey-206203231/"
        target="_blank"
      >
        <FaLinkedinIn size={30} />
      </a>
      <a href="https://github.com/monlevey/loop-homes" target="_blank">
        <FaGithub size={30} />
      </a>
    </div>
  );
}

export default Footer
