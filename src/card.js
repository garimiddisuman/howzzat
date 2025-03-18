import lodash from 'lodash';
// import cards from "../data/cards.json" with {type: "json"};

export class Deck {
  constructor(cards) {
    this.originalDeck = [...cards];
    this.cards = this.reShuffle();
  }
  
  reShuffle() {
    return lodash.shuffle(this.originalDeck);
  }

  hasCards() {
    return this.cards.length > 5;
  }

  drawCard() {
    if (!this.hasCards()) {
      this.cards = this.reShuffle();
    }

    return this.cards.shift();
  }
}