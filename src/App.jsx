import { useState, useEffect } from 'react';
import React from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import Charactercard from "./components/CharacterCard.jsx";
//import Search from "./Components/Search.jsx";
//import Navbar from "./components/Navbar.jsx";
//import Home from "./pages/Home.jsx";


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  console.log("Data Feteched!");
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

   useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log(data.results);
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1>Rick And Morty</h1>
      <button onClick={() => setPageNumber((prev) => prev - 1)}>Back</button>
      <button onClick={() => setPageNumber((prev) => prev + 1)}>Next Page</button>
      <button onClick={() => setPageNumber(1)}>Reset</button>
      <div>
        {fetchedData.results?.map((character) => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <p>{character.species}</p>
            <img src={character.image} alt={character.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
