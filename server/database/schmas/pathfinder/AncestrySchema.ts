import {arrayProp, prop, Typegoose} from 'typegoose';
import {Size, Trait} from '../../enums';
import {Feat} from './FeatSchema';

export class Ancestry extends Typegoose {
  @prop({required: true})
  name!: string;

  @prop({required: true})
  overview!: string;

  @prop({required: true})
  hpData!: {};

  @prop({required: true})
  size!: Size;

  @prop({required: true})
  speed!: number;

  @prop({required: true, default: {}})
  abilityModifiers!: { Ability: number };

  @arrayProp({items: String, required: true, default: []})
  languages!: string[];

  @arrayProp({items: String, required: true, default: []})
  bonusLanguages!: string[];

  @arrayProp({items: Trait, required: true, default: []})
  traits!: Trait[];

  @arrayProp({items: {}, required: true, default: []})
  specialAbilities!: {};

  @arrayProp({items: Feat, required: true})
  ancestryFeats!: Feat[];

  @arrayProp({items: {}, required: true, default: []})
  heritages!: {}[];
}

export default new Ancestry().getModelForClass(Ancestry, {schemaOptions: {collection: 'ancestries'}});
