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
}
