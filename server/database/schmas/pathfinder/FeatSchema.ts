import {arrayProp, prop, Typegoose} from 'typegoose';
import {Trait} from '../../enums';

export class Feat extends Typegoose {
  @prop({required: true})
  name!: string;

  @prop({required: true})
  level!: number;

  @arrayProp({items: String, enum: Trait})
  traits?: Array<Trait>;

  @prop({})
  prerequisites?: {};
}

export default new Feat().getModelForClass(Feat, {schemaOptions: {collection: 'feats'}});
