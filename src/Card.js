import { useState } from "react";

/**Card
 * 
 * Props: card like => 
 *  {
 *   "image": "http://deckofcardsapi.com/static/img/KH.png",
 *   "value": "KING",
 *   "suit": "HEARTS",
 *   "code": "KH"
 *  }
 * 
 * Deck => Card
 */
function Card({ card }) {
  const[rotation, setRotation] = useState(randomNumber());

  function randomNumber() { 
    return Math.random() * (45 - (-45)) + (-45);
  } 

  const cardStyle = {transform: `rotate(${rotation}deg)`};

  return (
    <div className="cards">
      <img src={card.image} alt={`${card.suit} ${card.value}`} style={cardStyle}/>
    </div>
  )
}
export default Card;