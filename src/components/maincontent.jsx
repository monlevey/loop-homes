import React, { useState } from "react";
//import header component
import SectionHeader from "./sectionheader";
//import section component
import Section from "./section";
//import footer component
import Footer from "./footer";

export default function MainContent() {
    // Declare a new state variable, which we'll call "currentPage"
  const [currentPage, setCurrentPage] = useState("ListingPage");
  //declare a function call handlepagechange which takes one argument
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
           
            <SectionHeader
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></SectionHeader> 
      <Section
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Section>
      <Footer></Footer>
    </div>
  );
}