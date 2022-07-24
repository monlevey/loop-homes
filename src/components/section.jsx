import React from "react";
//importing the pages
import "../styles/section.module.css";
import About from "./pages/about";
import Contact from "./pages/contact";
import ListingPage from "./pages/listingpage";



function Section({ currentPage, handlePageChange }) {

  //check the currentpage and based on currentpage load the appropriate page
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "ListingPage") {
      return <ListingPage />;
    }
    return <Contact />;
  };
  return <section className="content">{renderPage()}</section>;
}

export default Section;