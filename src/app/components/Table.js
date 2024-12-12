// src/components/Table.js
const Table = ({ players, deck, onDrawCard }) => {
    return (
      <div>
        <div>Deck: {deck.cards.length} kaarten</div>
        <button onClick={onDrawCard}>Draw Card</button>
        <div>
          {players.map((player, index) => (
            <div key={index}>
              <h2>Player {index + 1}</h2>
              <div>
                {player.hand.map((card, i) => (
                  <Card key={i} value={card.value} suit={card.suit} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Table;
  