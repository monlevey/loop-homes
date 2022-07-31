import React, { useState } from "react";
import Login from './components/pages/login';
import Dashboard from './components/pages/dashboard';
import Register from './components/pages/register';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import MainContent from './components/maincontent';
import { login } from "./features/auth/authSlice";


function App() {
  return (
    <>
      <Router>
        <div className='container'>
        <Header />
          <Routes>
            <Route path='/' element={<MainContent />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
