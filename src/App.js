import './App.css';
import axios from "axios"
import Cards from "./Cards"
import {useState, useEffect} from "react"


function App() {
  const [deck, setDeck] = useState(null);

  useEffect(function getDeck(){
    async function fetchDeck(){
      const results = await axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      setDeck(results.data);
    }
    fetchDeck();
  }, []);

  if(!deck){
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <Cards deck={deck}/>
    </div>
  );
}

export default App;
