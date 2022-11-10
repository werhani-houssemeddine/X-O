// It's a class for single player

export default class Player {
  //Id at this moment will be passed as argument
  constructor(name, id, role, isNow) {
    this.name = name;
    this.id = id;
    this.role = role;
    this.isNow = isNow;
    this.wins = 0;
    this.loses = 0;
    this.draws = 0;
  }

  get win() {
    return this.wins;
  }

  set win(_) {
    this.wins += 1;
  }
  get lose() {
    return this.loses;
  }

  set lose(_) {
    this.loses += 1;
  }
  get draw() {
    return this.draws;
  }

  set draw(_) {
    this.draws += 1;
  }

  moves() {
    return this.moves;
  }

  moves(index) {
    if (index == -1) this.moves = [];
    else this.moves[index] = this.id;
  }

  getPlayer() {
    if (this.isNow) return this.id;

    return null;
  }

  swape() {
    this.isNow = !this.isNow;
  }
}
