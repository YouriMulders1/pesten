// src/models/Deck.js
import Card from './Card';

class Deck {
  constructor() {
    this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    this.values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.cards = this.createDeck();
  }

  createDeck() {
    return this.suits.flatMap(suit =>
      this.values.map(value => new Card(value, suit))
    );
  }

  shuffle() {
    this.cards.sort(() => Math.random() - 0.5);
  }

  drawCard() {
    return this.cards.pop();
  }
}

export default Deck;
