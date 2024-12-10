import React from "react";
import "../assets/style/CharacterCard.css";

const CharacterCard = ({ results }) => {
  let display;
  console.log (results);

  if (results) {
    display = results.map( ? =>){

    });

  } else {
    display = "No characters Found :/";
  }

  return <> {display} </>
};
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
