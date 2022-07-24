import React from 'react';
// Here we import the Head css file 
import '../styles/header.module.css';
//importing the navbar
import Navbar from './navbar.jsx';

//taking currentpage and handlepagechange as props using object destructuring
function Header({ currentPage, handlePageChange }) {
   
    return (
        <div className="header">
        <h1>Loop Homes</h1>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange}></Navbar>
        </div>
    );
  }
  
  export default Header;