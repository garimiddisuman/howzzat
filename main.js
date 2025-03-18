import { Deck } from './src/card.js';
import { Field } from './src/field.js';
import { Scorecard } from './src/scorecard.js';
import cards from "./data/cards.json" with {type: "json"};

const isPlayerWon = (playerRuns, target) => playerRuns > target;

const congratulatePlayer = (winner) => {
  console.log(`${winner} Won`);
};

const showTargetMessage = (target) =>
  console.log(`----------Target score: ${target}----------`);

const displayAsTable = (object) => {
  console.table(object);
};

const setFielders = (field) => {
  console.log(field.showAllFields);
  console.log(field.showSelectedFields);
  const positions = prompt('select Position :').split(' ').map(Number);
  console.log(field.setMultipleFielders(positions));

  return field.showSelectedFields.size === 11 ? true : setFielders(field);
};

const ballsToOvers = (totalBalls) => {
  const overs = Math.floor(totalBalls / 6);
  const balls = totalBalls % 6;

  return `${overs}.${balls}`;
};

const displayCurrentScore = (scorecard, runs) => {
  const summary = {
    runs,
    totalRuns: scorecard.runs,
    wickets: scorecard.wickets.length,
    overs: ballsToOvers(scorecard.incrementBallCount()),
  };

  displayAsTable(summary);
};

const ballAnalysis = (ballDetails, scorecard) => {
  const { runs, wicket } = ballDetails;
  scorecard.addRuns(runs);

  if (wicket) {
    scorecard.recordWickets(wicket.kind);
  }

  displayCurrentScore(scorecard, runs);
};

const cardBreakdown = (card, field) => {
  console.log('shot', card.shot);

  const isFielderPresent = field.hasFielder(card.position);
  const event = isFielderPresent ? 'fielderPresent' : 'fielderAbsent';
  console.log(event);

  return card[event];
};

const startGame = (deck, field, scorecard, target) => {
  setFielders(field);

  while (scorecard.wickets.length !== 3) {
    if (isPlayerWon(scorecard.runs, target)) return  scorecard.summary();

    prompt('next round :');
    const card = deck.drawCard();
    const ballDetails = cardBreakdown(card, field);

    ballAnalysis(ballDetails, scorecard);
  }

  return scorecard.summary();
};

const inning = (playerName, target) => {
  const deck = new Deck(cards);
  const field = new Field();
  const scorecard = new Scorecard(playerName);

  return startGame(deck, field, scorecard, target);
};

const main = () => {
  const player1 = prompt('enter player one name');
  const player2 = prompt('enter player two name');

  const playerOneSummary = inning(player1, Infinity);
  displayAsTable(playerOneSummary);
  
  showTargetMessage(playerOneSummary.runs + 1);
  const playerTwoSummary = inning(player2, playerOneSummary.runs + 1);
  displayAsTable(playerTwoSummary);
  const winner =
    playerOneSummary.runs > playerTwoSummary.runs ? player1 : player2;

  congratulatePlayer(winner);
};

main();
