import React from "react";
//importing data from listing.json
import ListingData from "../data/listing.json";
import Listing from "../listing";
import "../../styles/listingpage.css";

export default function ListingPage() {
  return (
    <div className="listingcontainer">
      <h1 className="listingheader">Current Listings </h1>
      <div className="ListingItem">
      {/* generate a component for each item in the array */}
      {ListingData.map((item, i) => (
        <Listing
          key={i}
          Url={item.Url}
          imgUrl={item.imgUrl}
          Price={item.Price}
          Address={item.Address}
          Description={item.Description}
          Contact={item.Contact}
        ></Listing>
      ))}
     </div>
    </div>
  );
}