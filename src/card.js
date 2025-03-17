import positions from "../data/field-positions.json" with {type: "json"};
import lodash from "lodash";

const cards = [
  {
    shot: "Cover Drive",
    position: "9",
    fielderPresent: { wicket: { outType: "Caught" }, runsScored: 0 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: "Pull Shot",
    position: "13",
    fielderPresent: { wicket: { outType: "Caught" }, runsScored: 0 },
    fielderAbsent: { runsScored: 6 },
  },
  {
    shot: "Straight Drive",
    position: "12",
    fielderPresent: { runsScored: 1 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: "Cut Shot",
    position: "5",
    fielderPresent: { wicket: { outType: "Caught" }, runsScored: 0 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: "Lofted Shot",
    position: "21",
    fielderPresent: { wicket: { outType: "Caught" }, runsScored: 0 },
    fielderAbsent: { runsScored: 6 },
  },
  {
    shot: "Glance",
    position: "16",
    fielderPresent: { runsScored: 1 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: "Defensive Block",
    position: "6",
    fielderPresent: { runsScored: 0 },
    fielderAbsent: { runsScored: 0 },
  },
  {
    shot: "Sweep Shot",
    position: "15",
    fielderPresent: { wicket: { outType: "Caught" }, runsScored: 0 },
    fielderAbsent: { runsScored: 4 },
  },
  {
    shot: "Upper Cut",
    position: "23",
    fielderPresent: { wicket: { outType: "Caught" }, runsScored: 0 },
    fielderAbsent: { runsScored: 6 },
  },
  {
    shot: "Helicopter Shot",
    position: "12",
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

const cardDeck = new Deck(cards);
console.log("red Deck:", cardDeck.cards);

console.log("First Card Drawn:", cardDeck.drawCard());
console.log("Second Card Drawn:", cardDeck.drawCard());

if (!cardDeck.hasCards()) {
  cardDeck.reShuffle();
  console.log("Deck Reshuffled:", cardDeck.cards);
}