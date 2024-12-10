import React from "react";
import "../assets/style/CharacterCard.css";

const Charactercard = ({children}) => {
    return (
        <div className="character-card">{children} 
            <h2>  testing character card </h2>
        
        </div>
    );
};

export default Charactercard;