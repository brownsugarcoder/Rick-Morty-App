import React from "react";
import "../assets/style/CharacterCard.css";

const CharacterCard = ({ children, handleSearch, handleReset }) => {
  return (
    <div className="character-container">
      <div className="character-card">
        {children}
        <h2>Testing Character Card</h2>
      </div>
      <div className="buttons">
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default CharacterCard;
