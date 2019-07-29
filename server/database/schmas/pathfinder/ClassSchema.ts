import {arrayProp, prop, Typegoose} from 'typegoose';
import {Ability} from '../../enums';
import {Feat} from './FeatSchema';

export class Class extends Typegoose {
  @prop({required: true})
  name!: string;

  @prop({required: true})
  summery!: string;

  @prop({required: true})
  overview!: string;

  @prop({required: true})
  keyAbility!: Ability;

  @prop({required: true})
  hp!: {};

  @prop({required: true})
  proficiencies!: {};

  @prop({required: true})
  advancementTable!: {};

  @prop({required: true})
  savingThrows!: {};

  @prop({required: true})
  weapons!: {};

  @prop({required: true})
  armor!: {};

  @prop({required: true})
  playingTheClass!: {};

  @prop({required: true})
  rolePlayingTheClass!: {};

  @prop({required: true})
  keyTerms!: {};

  @prop({required: true})
  classFeatures!: {};

  @prop({required: true, default: []})
  classFeats!: Feat;

  @arrayProp({items: Feat, required: true, default: []})
  skillFeats!: Feat;

  @prop({required: true, default: []})
  generalFeats!: Feat;

  @prop({required: true})
  skillIncreases!: {};
}

export default new Class().getModelForClass(Class, {schemaOptions: {collection: 'classes'}});
