export const Home = () => {
    return (

    
   
     <div className="search">
     <h1>Ricky & Morty</h1>
         <div className="search-bar"> 
             <input
              type="text"
                 placeholder="Enter Character"
                 value={characterName}
                 onChange={(e) => setCharacterName(e.target.value)}
             />
          </div>

         <div className="buttons">
         <button onClick={handleSubmit}>Search</button>
         <button onClick={handleSubmit}>Reset</button>
         </div>

         
     </div>
    
    )
};

/* const Home = () => {
    const [characterName, setCharacterName] = useState("");
    const [characterData, setCharacterData] = useState(null);
    const [loading, setLoading] = useState(false);
*/
export default Home;