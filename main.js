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

const ballsToOvers = (totalBalls) => {
  const overs = Math.floor(totalBalls/6)
  const balls = totalBalls%6;

  return `${overs}.${balls}`
}

const displayCurrentScore = (scorecard,runs)=> {
  console.log("Runs For This Ball : ",runs)
  console.log("Total Runs Scored : ", scorecard.runs)
  console.log("Wickets : ", scorecard.wickets.length)
  console.log("Overs : ", ballsToOvers(scorecard.incrementBallCount()))
}

const ballAnalysis = (ballDetails, scorecard) => {
  const { runs, wicket } = ballDetails;
  scorecard.addRuns(runs);

  if (wicket) {
    scorecard.recordWickets(wicket.kind);
  }

  displayCurrentScore(scorecard, runs)
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
  while (scorecard.wickets.length !== 10) {
    prompt("next round :");
    const card = deck.drawCard();
    const ballDetails = cardBreakdown(card, field);
    ballAnalysis(ballDetails, scorecard);
  }

  return scorecard.summary()
};

const inning = (playerName) => {
  const deck = new Deck(cards);
  const field = new Field();
  const scorecard = new Scorecard(playerName);
  
 return  startGame(deck, field, scorecard);

}

const main = () => {
  const player1 = prompt("enter player one name");
  const player2 = prompt("enter player two name");

  const playerOneSummary  = inning(player1);
  console.log(playerOneSummary);
  console.log(`----------Target score: ${playerOneSummary.runs + 1}----------`)
  const playerTwoSummary  = inning(player2);
  console.log(playerTwoSummary);
};

main();
