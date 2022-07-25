import React from "react";
// Here we import the Nav.css file to grant access to some additional classNames
import "../styles/nav.css";

//taking currentpage and handlePageChange as props from parent component
function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <li>
        {/* Checking the current page is about me if so add highlighting styles otherwise normal style */}
        <a
          href="#About"
          className={
            currentPage == "About" ? "nav-link nav-active" : "nav-link"
          }
          onClick={() => handlePageChange("About")}
        >
          About Loop Homes
        </a>
      </li>
      <li>
        <a
          href="#ListingPage"
          className={
            currentPage == "ListingPage" ? "nav-link nav-active" : "nav-link"
          }
          onClick={() => handlePageChange("ListingPage")}
        >
          Listings
        </a>
      </li>
      <li>
        <a
          href="#Contact"
          className={
            currentPage == "Contact" ? "nav-link nav-active" : "nav-link"
          }
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </a>
      </li>
    </nav>
  );
}

export default Navbar;