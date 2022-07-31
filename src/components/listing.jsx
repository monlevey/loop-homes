import React from "react";
// Here we import the Project.css file to grant access to some additional classNames
import "../styles/listing.css";

//getting listing details as props
function Listing({
  Url,
  imgUrl,
  Price,
  Address,
  Description,
  Contact,
}) {
  return (
    <div className="listing_item">
      <div className="imgcontainer">
        <img src={require(`${imgUrl}`)} className="image" alt={Address} />{" "}
        <div className="overlay">
          <div className="text">
            <a target="_blank" rel="noreferrer" href={Url}>
              {Address}
            </a>
          </div>
        </div>
      </div>
      <div className="houseinfo">
          <h4>{Address}</h4>
          <h5>
            <strong>{Price}</strong>
            <div className="descriptionClass">{Description}</div>
          </h5>
          <h5>
            <div className="descriptionClass">{Contact}</div>
          </h5>
      </div>
    </div>
  );
}

export default Listing;