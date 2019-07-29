import {mapValues} from 'lodash';

enum Ability {
  Strength = 'Strength',
  Dexterity = 'Dexterity',
  Constitution = 'Constitution',
  Intelligence = 'Intelligence',
  Wisdom = 'Wisdom',
  Charisma = 'Charisma',
}

export const getShortForm = (ability: Ability): string => {
  return ability.substring(0, 3).toLowerCase();
};

export const empty = mapValues(Ability, v => ({name: v, value: 0}));

export default Ability;
