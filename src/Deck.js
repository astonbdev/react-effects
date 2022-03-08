import axios from "axios";
import { useState } from "react";
import Card from './Card';

/**Deck
 * 
 * Props: deck like => 
 * {
 *   "success": true,
 *   "deck_id": "3p40paa87x90",
 *   "shuffled": true,
 *   "remaining": 52
 * }
 *
 * State: cards => 
 * [{}...]
 * 
 * App => Deck => Card
 */
function Deck({ deck }) {
  const [cards, setCards] = useState([]);
  console.log('length', cards.length);
  const fullDeck = (cards.length === 52);

  if(cards.length === 52) {
    alert("Error: no cards remaining!");
  }

  async function fetchCard() {
    const results = await axios.get(
      `http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);
      setCards(() => [...cards, results.data.cards[0]]);
  }

  return (
    <div className="Deck">
      {!fullDeck && <button onClick={fetchCard}>Draw a Card</button>}
      {cards.map((c) => {
        return <Card card={c} key={c.code}/>
      })}
    </div>
  )
}

export default Deck;