export class Scorecard {
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

  get runs() {
    return this.#runs;
  }

  get wickets() {
    return this.#wickets;
  }

  get ballsPlayed() {
    return this.#ballsPlayed;
  }

  addRuns(runs) {
    return (this.#runs += runs);
  }

  recordWickets(kind) {
    return this.#wickets.push(kind);
  }

  incrementBallCount() {
    return (this.#ballsPlayed += 1);
  }

  summary() {
    const player = this.#player;
    const runs = this.#runs;
    const ballsPlayed = this.#ballsPlayed;
    const wickets = this.#wickets;

    return { player, runs, ballsPlayed, wickets };
  }
}
