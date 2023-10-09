export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  * [Symbol.iterator]() {
    const team = this.characters;

    for (let i = 0; i < team.length; i += 1) {
      yield team[i];
    }
  }

  toArray() {
    return [...this.characters];
  }
}
