import React from "react";
import "../../styles/comingsoon.css";
export default function ComingSoon() {
  return (
    <div className="comingsooncontainer">
      <h1 className="listingheader">Coming Soon</h1>
      <div className="imgdivClass">
        <img
          className="imgclasscoming"
          src={require(`../images/AskingPrice.png`)}
          alt="Loop Homes"
        />
        <span>
        <img
          className="imgclasscoming"
          src={require(`../images/BuildingBlocks.png`)}
          alt="Loop Homes"
        /></span>
      </div>
    </div>
  );
}