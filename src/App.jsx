//import { useState } from 'react'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Charactercard from "./components/CharacterCard.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Charactercard />
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        
      </Routes>
    </Router>
      
    </>
    
  );
}

export default App;
