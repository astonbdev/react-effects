import axios from "axios";
import { useState, useEffect } from "react"

function Cards({ deck }) {
  const [cards, setCards] = useState(null);

  function drawCard() {
    async function fetchCard() {
      const results = await axios.get(
        `http://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`);

      setCards(results.data);
    }

  }

  return (
    <div className="cards">
      <img src={cards.cards[0].image}
        alt={`${cards.cards[0].suit} ${cards.cards[0].value}`} />
      <button onClick={drawCard}>Draw a Card</button>
    </div>
  )
}



export default Cards;