// import positions from "../data/field-positions.json" with {type: "json"};
import lodash from 'lodash';

const cards = [
  {
    shot: 'Cover Drive',
    position: '9',
    fielderPresent: { wicket: { outType: 'Caught' }, runsScored: 0 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: 'Pull Shot',
    position: '13',
    fielderPresent: { wicket: { outType: 'Caught' }, runsScored: 0 },
    fielderAbsent: { runsScored: 6 },
  },
  {
    shot: 'Straight Drive',
    position: '12',
    fielderPresent: { runsScored: 1 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: 'Cut Shot',
    position: '5',
    fielderPresent: { wicket: { outType: 'Caught' }, runsScored: 0 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: 'Lofted Shot',
    position: '21',
    fielderPresent: { wicket: { outType: 'Caught' }, runsScored: 0 },
    fielderAbsent: { runsScored: 6 },
  },
  {
    shot: 'Glance',
    position: '16',
    fielderPresent: { runsScored: 1 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: 'Defensive Block',
    position: '6',
    fielderPresent: { runsScored: 0 },
    fielderAbsent: { runsScored: 0 },
  },
  {
    shot: 'Sweep Shot',
    position: '15',
    fielderPresent: { wicket: { outType: 'Caught' }, runsScored: 0 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: 'Upper Cut',
    position: '23',
    fielderPresent: { wicket: { outType: 'Caught' }, runsScored: 0 },
    fielderAbsent: { runsScored: 6 },
  },
  {
    shot: 'Helicopter Shot',
    position: '12',
    fielderPresent: { runsScored: 2 },
    fielderAbsent: { runsScored: 6 },
  },
];

// const jsonData = JSON.stringify(cards);
// const filePath = "../data/cards.json";

// try {
//   await Deno.writeTextFile(filePath, jsonData);
//   console.log(`Data has been successfully written to ${filePath}`);
// } catch (error) {
//   console.error("Error writing to file:", error);
// }

class CardDeck {
  constructor(cards) {
    this.cards = [...cards];
  }

  shuffle() {
    this.cards = lodash.shuffle(this.cards);
  }

  drawCard() {
    if (this.cards.length < 0) return null;
    const [card, ...remainingCards] = this.cards;
    this.cards = remainingCards;
    return card;
  }
}

const deck = new CardDeck(cards);
deck.shuffle();

console.log('Shuffled Deck:', deck.cards);

const drawnCard = deck.drawCard();
console.log('Drawn Card:', drawnCard);
console.log('Remaining Cards:', deck.cards);
