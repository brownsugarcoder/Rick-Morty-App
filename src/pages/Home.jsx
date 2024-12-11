import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/style/logo.png";

function Home() {
    let [pageNumber, setPageNumber] = useState(1);
    let [fetchedData, updateFetchedData] = useState([]);
    let [gender, updateGender] = useState("");
    let [species, updateSpecies] = useState("");
    //let [origin, updateOrigin] = useState("");
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
      <div>
        <div className="Header"> </div>
        <div className="App">
            <div style={{ paddingTop: "20px" }}>
                <img src={logo} alt="Rick and Morty logo" style={{ width: "550px", height: "auto" }} />
                </div>
        
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
    </div>
    );
  }

/* const Home = () => {
    const [characterName, setCharacterName] = useState("");
    const [characterData, setCharacterData] = useState(null);
    const [loading, setLoading] = useState(false);
*/
export default Home;