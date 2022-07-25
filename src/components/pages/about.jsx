import React from "react";
import "../../styles/about.css";
export default function About() {
  return (
    <div>
      <h1>Loop Homes</h1>
      <div className="imgdivClass">
        <img
          className="imgclass"
          src={require(`../images/drone.jpg`)}
          alt="Loop Homes"
        />
      </div>
      <p>
       -- Keeping home buyers and sellers in the loop.
       
      </p>
    </div>
  );
}