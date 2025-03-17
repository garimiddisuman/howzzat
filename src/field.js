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

  showAllFields() {
    return this.#allFieldPositions;
  }

  showSelectedFields() {
    return this.#selectedPositions;
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
  
  removeFielder(position) {
    const isValidPosition = position in this.#allFieldPositions;
    const isPositionNotAvailable = this.#selectedPositions.has(position);
    const isValidAndNotAvailable = isPositionNotAvailable && isValidPosition;
  
    if (isValidAndNotAvailable) {
      this.#selectedPositions.delete(position);
    }
  
    return isValidAndNotAvailable;
  }

  setMultipleFielders(positions) {
    return positions.reduce((success, position) => {
      const result = this.setFielder(position);
      success[position] = result;
      return success;
    }, {});
  }

  removeMultipleFielders(positions) {
    return positions.reduce((success, position) => {
      const result = this.removeFielder(position);
      success[position] = result;
      return success;
    }, {});
  }
}

export { Toss, Field };
