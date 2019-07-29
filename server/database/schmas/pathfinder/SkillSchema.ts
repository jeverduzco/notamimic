import {arrayProp, prop, Typegoose} from 'typegoose';
import {Ability} from '../../enums';
import {Action} from './ActionSchema';

export class Skill extends Typegoose {
  @prop({required: true})
  name!: string;

  @prop({required: true})
  trained!: boolean;

  @prop({required: true})
  keyAbility!: Ability;

  @arrayProp({items: Action, default: []})
  untrainedUses?: Array<Action>;

  @arrayProp({items: Action, default: []})
  trainedUses?: Array<Action>;
}

export default new Skill().getModelForClass(Skill, {schemaOptions: {collection: 'skills'}});
