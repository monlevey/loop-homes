import React from "react";
// Here we import the Project.css file to grant access to some additional classNames
import "../styles/listing.module.css";

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
            <a target="_blank" href={Url}>
              {Address}
            </a>
          </div>
        </div>
      </div>

      <h4>{Address}</h4>
      <h5>
        <strong>{Price}</strong>
        <div className="descriptionClass">{Description}</div>
      </h5>
      <p>
        <div className="descriptionClass">{Contact}</div>
      </p>
    </div>
  );
}

export default Listing;