import lodash from 'lodash';

export class Deck {
  constructor(cards) {
    this.originalDeck = [...cards];
    this.cards = [];
    this.reShuffle();
  }
  
  reShuffle() {
    this.cards = lodash.shuffle(this.originalDeck);
  }

  hasCards() {
    return this.cards.length > 5;
  }

  drawCard() {
    if (!this.hasCards()) {
      this.reShuffle();
    }

    return this.cards.shift();
  }
}