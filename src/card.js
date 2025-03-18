import lodash from 'lodash';
import cards from "../data/cards.json" with {type: "json"};

export class Deck {
  constructor() {
    this.originalDeck = [...cards];
    this.cards = lodash.shuffle(this.originalDeck);
  }

  drawCard() {
    return this.cards.length ? this.cards.shift() : null;
  }

  hasCards() {
    return this.cards.length > 0;
  }

  reShuffle() {
    this.cards = lodash.shuffle(this.originalDeck);
  }
}