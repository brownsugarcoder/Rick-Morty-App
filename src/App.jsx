import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
//import Main  from "./assets/style/Main.css"
import './assets/style/Main.css'
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;


  /* let [pageNumber, setPageNumber] = useState(1);
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
    <div>
      <div className="Header"> Welcome to Rick And Morty's World</div>
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
  </div>
  );
} */
  


