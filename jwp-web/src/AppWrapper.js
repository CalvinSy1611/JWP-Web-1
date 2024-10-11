// src/AppWrapper.js
import React from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar'; 

const AppWrapper = () => {
  const location = useLocation(); 

  return (
    <>
      {(location.pathname === '/products' || location.pathname === '/cart') && <Navbar />}
      <App />
    </>
  );
};

const Main = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default Main;
