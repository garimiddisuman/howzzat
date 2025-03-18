import lodash from 'lodash';
import cards from "../data/cards.json" with {type :"json"}

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

const main = () => {
  const cardDeck = new Deck(cards);
  console.log('red Deck:', cardDeck.cards);

  console.log('First Card Drawn:', cardDeck.drawCard());
  console.log('Second Card Drawn:', cardDeck.drawCard());

  if (!cardDeck.hasCards()) {
    cardDeck.reShuffle();
    console.log('Deck Reshuffled:', cardDeck.cards);
  }
};

main();

export { Deck };
