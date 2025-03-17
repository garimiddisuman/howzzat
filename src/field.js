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
    return Object.entries(this.#allFieldPositions);
  }

  setPlayer(position) {
    const isItAPosition = position in this.#allFieldPositions;
    const isPositionEmpty = !this.#selectedPositions.has(position);
    const shouldIAdd = isPositionEmpty && isItAPosition; // change variable name

    if (shouldIAdd) {
      this.#selectedPositions.add(position);
    }

    return shouldIAdd;
  }
}
