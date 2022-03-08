
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
  return (
    <div className="cards">
      <img src={card.image} alt={`${card.suit} ${card.value}`} />
    </div>
  )
}
export default Card;