import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/CharacterCard.css";

const CharacterCard = ({ results }) => {
  return (
    <div className="character-container">
      <div className="character-card">
        {children}
        <h2>Testing Character Card</h2>
      </div>


      <div className="button">
        <button onClick={handleSearch}>Search</button>
        
      </div>
    </div>
  );
};

export default CharacterCard;
