import React from 'react';
// Here we import the Head css file 
import '../styles/header.css';
//importing the navbar
import Navbar from './navbar.jsx';
import HeadLogo from './images/looplogonoslogan.png';

//taking currentpage and handlepagechange as props using object destructuring
function Header({ currentPage, handlePageChange }) {
   
    return (
        <div className="header">
        <div className="mobilelogo">
        <img src={HeadLogo} alt="HeadLogo" className="mobileonly tabletsize" /> 
        </div>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange}></Navbar>
        </div>
    );
  }
  
  export default Header;