import allPositions from "../data/field-positions.json" with {type: "json"}
export class Field {
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


  hasFielder(position) {
    return this.#selectedPositions.has(position);
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
}