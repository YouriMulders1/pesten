// src/pages/index.js
import { useEffect } from 'react';
import useGameStore from '../store/UseGameStore';
import Deck from '../models/Deck';
import Table from '../components/Table';

const Home = () => {
  const { deck, setDeck, players, setPlayers, currentPlayer, nextPlayer } = useGameStore();

  useEffect(() => {
    const newDeck = new Deck();
    newDeck.shuffle();
    setDeck(newDeck);

    const newPlayers = Array(4)
      .fill(null)
      .map(() => ({
        hand: [newDeck.drawCard(), newDeck.drawCard(), newDeck.drawCard(), newDeck.drawCard()],
      }));
    setPlayers(newPlayers);
  }, []);

  const handleDrawCard = () => {
    const newCard = deck.drawCard();
    players[currentPlayer].hand.push(newCard);
    nextPlayer();
  };

  return <Table players={players} deck={deck} onDrawCard={handleDrawCard} />;
};

export default Home;
