import Bowman from '../bowman';
import Magician from '../magician';
import Swordsman from '../swordsman';

import Team from '../team';

test('testing Team iterator', () => {
  const characterOne = new Bowman('Robin');
  const characterTwo = new Magician('Merlin');
  const characterThree = new Swordsman('Philippe');
  const myTeam = new Team(characterOne, characterTwo, characterThree);

  const teamArray = myTeam.toArray();

  const array = [];
  for (const character of myTeam) {
    array.push(character);
  }

  expect(array).toEqual(teamArray);
});
