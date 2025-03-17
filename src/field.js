class Toss {
  #choices;
  constructor() {
    this.#choices = { 1: "batting", 2: "fielding" };
  }

  get decision() {
    return this.#choices[1];
  }
}

class Field {
  #allFieldPositions;
  #selectedPositions;
  #player;

  constructor(player) {
    this.#player = player;
    this.#allFieldPositions = JSON.parse(
      Deno.readTextFileSync("./data/field-positions.json")
    );

    this.#selectedPositions = new Set();
  }

  isPlayerSame(player) {
    return player === this.#player;
  }

  get showAllFields() {
    return Object.entries(this.#allFieldPositions);
  }

  setFielder(position) {
    const isValidPosition = position in this.#allFieldPositions;
    const isPositionAvailable = !this.#selectedPositions.has(position);
    const isValidAndAvailable = isPositionAvailable && isValidPosition;

    if (isValidAndAvailable) {
      this.#selectedPositions.add(position);
    }

    return isValidAndAvailable;
  }
}

class scoreCard {
  #player;
  #runs;
  #wicketsCount;

  constructor(player) {
    this.#player = player;
    this.#runs = 0;
    this.#wicketsCount = [];
  }

  addRuns(runs) {
    this.#runs += runs;
  }

  addWickets(kind) {
    return this.#wicketsCount.push(kind);
  }

  get runs() {
    return this.#runs;
  }

  get wickets() {
    return this.#wicketsCount;
  }
}

export { Field, Toss, scoreCard };
