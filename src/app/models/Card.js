// src/models/Card.js
class Card {
    constructor(value, suit) {
      this.value = value;
      this.suit = suit;
    }
  
    getCardName() {
      return `${this.value} of ${this.suit}`;
    }
  }
  
  export default Card;
  