import React from "react";
// Here we import the Nav.css file to grant access to some additional classNames
import "../styles/nav.css";
import HeadLogo from './images/looplogonoslogan.png';
//taking currentpage and handlePageChange as props from parent component
function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <li>
        <a
          href="#Login"
          className={
            currentPage == "Login" ? "nav-link nav-active" : "nav-link"
          }
          onClick={() => handlePageChange("Login")}
        >
         Sign Up / Login
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
      <li>
        <a
          href="#About"
          className={
            currentPage == "About" ? "nav-link nav-active" : "nav-link"
          }
          onClick={() => handlePageChange("About")}
        >
          About
        </a>
      </li>
      <img src={HeadLogo} alt="HeadLogo" className="headlogo desktoponly" />
    </nav>
  );
}

export default Navbar;