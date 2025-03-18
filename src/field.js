// import allPositions from "../data/field-positions.json" with {type: "json"}

class Field {
  #fieldPositions;
  #selectedPositions;

  constructor() {
    this.#fieldPositions = allPositions;
    this.#selectedPositions = new Set([25, 26]);
  }

  get showAllFields() {
    return this.#fieldPositions;
  }

  get showSelectedFields() {
    return this.#selectedPositions;
  }

  #addFielder(position) {
    const isValidPosition = position in this.#fieldPositions;
    const isPositionAvailable = !this.hasFielder(position);
    const isFieldPositionsFull = this.#selectedPositions.size >= 11;
    const isValidAndAvailable =
      isPositionAvailable && isValidPosition && !isFieldPositionsFull;

    if (isValidAndAvailable) {
      this.#selectedPositions.add(position);
    }

    return isValidAndAvailable;
  }

  #isKeeperOrBowler(position) {
    return [25, 26].map(String).includes(position);
  }

  #removeFielder(position) {
    const isPositionOccupied = position in this.#fieldPositions;
    const isPositionEmpty = this.hasFielder(position);
    const bowlerOrWicketKeeper = this.#isKeeperOrBowler(position);
    const isValidAndNotAvailable =
      isPositionEmpty && isPositionOccupied && !bowlerOrWicketKeeper;

    if (isValidAndNotAvailable) {
      this.#selectedPositions.delete(position);
    }

    return isValidAndNotAvailable;
  }

  setMultipleFielders(positions) {
    const success = positions.map((pos) => [pos, this.#addFielder(pos)]);
    return Object.fromEntries(success);
  }

  removeMultipleFielders(positions) {
    const success = positions.map((pos) => [pos, this.#removeFielder(pos)]);
    return Object.fromEntries(success);
  }

  hasFielder(position) {
    return this.#selectedPositions.has(position);
  }
}

class Scorecard {
  #player;
  #runs;
  #wickets;
  #ballsPlayed;

  constructor(player) {
    this.#player = player;
    this.#runs = 0;
    this.#ballsPlayed = 0;
    this.#wickets = [];
  }

  updateRuns(runs) {
    this.#runs += runs;
  }

  recordWickets(kind) {
    return this.#wickets.push(kind);
  }

  updateBallsPlayed() {
    this.#ballsPlayed += 1;
    return this.#ballsPlayed;
  }

  get runs() {
    return this.#runs;
  }

  get wickets() {
    return this.#wickets;
  }

  get ballsPlayed() {
    return this.#ballsPlayed;
  }

  get summary() {
    const player = this.#player;
    const runs = this.#runs;
    const ballsPlayed = this.#ballsPlayed;
    const wickets = this.#wickets;

    return { player, runs, ballsPlayed, wickets };
  }
}

export { Field, Scorecard };
