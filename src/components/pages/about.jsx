import React from "react";
import "../../styles/about.css";
export default function About() {
  return (
    <div>
      <div className="imgdivClass">
        <img
          className="imgclass"
          src={require(`../images/About2.png`)}
          alt="Loop Homes"
        />
      </div>
    </div>
  );
}