import './App.css';
import axios from "axios"
import Deck from "./Deck"
import {useState, useEffect} from "react"
/**App
 * 
 * Props: None
 * 
 * State: initial state = null
 * 
 * {
 *  "success": true,
 *  "deck_id": "3p40paa87x90",
 *  "shuffled": true,
 *  "remaining": 52
 * }
 * 
 * App => Deck
 */
function App() {
  const [deck, setDeck] = useState(null);

  useEffect(function getDeck(){
    async function fetchDeck(){
      const results = await axios.get("http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      setDeck(results.data);
    }
    fetchDeck();
  }, []);

  if(!deck) return <h1 className='loading'>Loading...</h1>

  return (
    <div className="App">
      <Deck deck={deck}/>
    </div>
  );
}

export default App;