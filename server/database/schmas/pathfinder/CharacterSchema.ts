import {arrayProp, prop, Typegoose} from 'typegoose';
import {Ability, Alignment, Size, Trait} from '../../enums';
import {Class} from './ClassSchema';
import {Ancestry} from './AncestrySchema';
import {Background} from './BackgroundSchema';
import {empty} from '../../enums/Abilities';

export class Character extends Typegoose {
  @prop({required: true})
  name!: string;

  @prop({default: 0})
  xp!: number;

  @prop({required: true})
  ancestry!: Ancestry;

  @prop({required: true})
  heritage!: string;

  @prop({required: true})
  class!: Class;

  @prop({required: true})
  background!: Background;

  @prop({enum: Size, required: true})
  size!: Size;

  @prop({enum: Alignment, required: true})
  alignment!: Alignment;

  @arrayProp({items: Trait, required: true, default: []})
  traits!: Trait[];

  @prop({enum: Ability, required: true, default: empty})
  abilityScores!: { Ability: number }

}

export default new Class().getModelForClass(Class, {schemaOptions: {collection: 'classes'}});
