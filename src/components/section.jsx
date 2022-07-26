import React from "react";
//importing the pages
import "../styles/section.css";
import About from "./pages/about";
import ComingSoon from "./pages/comingsoon";
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
    if (currentPage === "ComingSoon") {
      return <ComingSoon />;
    }
    return <Contact />;
  };
  return <section className="content">{renderPage()}</section>;
}

export default Section;