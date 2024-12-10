import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
//import "../assets/style/Search.css";


  
export default Search;

<input
              type="text"
                 placeholder="Enter Character"
                 value={characterName}
                 onChange={(e) => setCharacterName(e.target.value)}
             />