import React, { useState } from "react";
//import header component
import Header from "./header";
//import section component
import Section from "./section";
//import footer component
import Footer from "./footer";

export default function MainContent() {
    // Declare a new state variable, which we'll call "currentPage"
  const [currentPage, setCurrentPage] = useState("About");
  //declare a function call handlepagechange which takes one argument
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
        {/* Passing currentpage,handlepagechange as props to header and section component */}
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Header>
      <Section
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Section>
      <Footer></Footer>
    </div>
  );
}