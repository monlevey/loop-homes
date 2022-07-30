import React from "react";
import "../../styles/comingsoon.css";
export default function ComingSoon() {
  return (
    <div className="comingsooncontainer">
      <h1>Coming Soon</h1>
      <div className="imgdivClass">
        <img
          className="imgclass"
          src={require(`../images/housesloop.png`)}
          alt="Loop Homes"
        />
      </div>
      <p>
       -- Keeping home buyers and sellers in the loop.
       
      </p>
    </div>
  );
}