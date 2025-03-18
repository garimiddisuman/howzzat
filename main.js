import { Deck } from './src/card.js';
import { Field } from './src/field.js';
import { Scorecard } from './src/scorecard.js';
import cards from "./data/cards.json" with {type: "json"};

const setFielders = (field) => {
  console.log(field.showAllFields);
  console.log(field.showSelectedFields);
  const positions = prompt('select Position :').split(' ').map(Number);
  console.log(field.setMultipleFielders(positions));
  
  return field.showSelectedFields.size === 11 ? true : setFielders(field);
}

const ballAnalysis = (ballDetails, scorecard) => {
  const { runs, wicket } = ballDetails;
  scorecard.addRuns(runs);

  if (wicket) {
    scorecard.recordWickets(wicket.kind);
  }

  console.log(scorecard.summary())
}

const cardBreakdown = (card, field) => {
  console.log("shot", card.shot);

  const isFielderPresent = field.hasFielder(card.position);
  const event = isFielderPresent ? "fielderPresent" : "fielderAbsent";
  console.log(event);

  return card[event];
}

const startGame = (deck, field, scorecard) => {
  setFielders(field);
  while (scorecard.wickets.length !== 3) {
    prompt("next round :");
    const card = deck.drawCard();
    const ballDetails = cardBreakdown(card, field);
    ballAnalysis(ballDetails, scorecard);
  }
};

const main = () => {
  const deck = new Deck(cards);
  const field = new Field();
  const scorecard = new Scorecard('surendra');

  startGame(deck, field, scorecard);
};

main();
