import Bowman from './bowman';
import Magician from './magician';
import Swordsman from './swordsman';

import Team from './team';

const characterOne = new Bowman('Robin');
const characterTwo = new Magician('Merlin');
const characterThree = new Swordsman('Philippe');
const myTeam = new Team(characterOne, characterTwo, characterThree);

const array = [];
for (const character of myTeam) {
  array.push(character);
}

console.log(array);
