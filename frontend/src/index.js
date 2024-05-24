import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
//import Login from './pages/login/Login'
//import Profile from './pages/profile/Profile'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />}/> */}
        {/* <Route path="/profile" element={<Profile />}/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
