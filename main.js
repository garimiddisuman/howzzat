import { Deck } from './src/card.js';
import { Field } from './src/field.js';
import { Scorecard } from './src/scorecard.js';

const startGame = (deck, field, scorecard) => {
  while (scorecard.wickets.length !== 3) {
    const selectedPos = prompt('select Position :').split(' ').map(Number);
    console.log(field.setMultipleFielders(selectedPos));
    const chooseCard = confirm('pickcard');

    if (chooseCard) {
      console.log(deck.drawCard());
    }
  }
};

const main = () => {
  const deck = new Deck();
  const field = new Field();
  const scorecard = new Scorecard('surendra');

  console.log(field.showAllFields);
  startGame(deck, field, scorecard);
};

main();
