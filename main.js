import { Deck } from './src/card.js';
import { Field, Scorecard } from './src/field.js';

const startGame = (deck, field, scorecard) => {
  while (scorecard.wickets.length === 3) {
    const selectedPos = prompt('select Position :').split(' ').map(Number);
    console.log(field.setMultipleFielders(selectedPos));
  }
};

const main = () => {
  const deck = new Deck();
  const field = new Field();
  const scorecard = new Scorecard('surendra');

  console.log(scorecard.showAllFields);
  startGame(deck, field, scorecard);
};

main();
