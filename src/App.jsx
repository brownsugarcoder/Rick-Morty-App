import { useState } from 'react'
import React from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Charactercard from "./components/CharacterCard.jsx";
//import Search from "./Components/Search.jsx";
import Navbar from "./components/Navbar.jsx";
//import Home from "./pages/Home.jsx";


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let []
  //let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  return (
  <>
 
      <h1> Rick And Morty</h1>
        <button>Search</button>
        <button>Reset</button>
    </>
    
  );
}

export default App;
