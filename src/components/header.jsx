import React from 'react';
// Here we import the Head css file 
import '../styles/header.css';
//importing the navbar
import Navbar from './navbar.jsx';
import HeadLogo from './images/LoopHomesLogo.png';

//taking currentpage and handlepagechange as props using object destructuring
function Header({ currentPage, handlePageChange }) {
   
    return (
        <div className="header">
        <h1> <img src={HeadLogo} alt="HeadLogo" className="headlogo" /> </h1>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange}></Navbar>
        </div>
    );
  }
  
  export default Header;