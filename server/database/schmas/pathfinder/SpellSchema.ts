import {arrayProp, prop, Typegoose} from 'typegoose';
import {Rarity, SpellSchool, SpellType, Trait} from '../../enums';
import {Action} from './ActionSchema';

export class Spell extends Typegoose {
  @prop({required: true})
  name!: string;

  @prop({required: true})
  type!: SpellType;

  @prop({required: true})
  description!: string;

  @prop({required: true})
  trigger!: {};

  @prop({required: true})
  traits!: Trait;

  @arrayProp({items: Action, required: true})
  castingActions!: Action[];

  @prop({required: true})
  cost!: string;

  @prop({required: true})
  duration!: string;

  @prop()
  range?: number;

  @prop()
  aoe?: boolean;

  @prop()
  heightened!: {};

  @prop({required: true})
  rarity?: Rarity;

  @prop({required: true})
  spellSchool!: SpellSchool;
}

export default new Spell().getModelForClass(Spell, {schemaOptions: {collection: 'actions'}});
