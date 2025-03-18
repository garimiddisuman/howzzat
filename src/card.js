import lodash from 'lodash';

class Deck {
  constructor(cards) {
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

export { Deck };