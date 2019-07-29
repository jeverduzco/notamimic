import {arrayProp, prop, Typegoose} from 'typegoose';
import {Trait} from '../../enums';

export class Item extends Typegoose {
  @prop({required: true})
  name!: string;

  @prop({required: true})
  description!: string;

  @prop({required: true})
  level!: number;

  @prop({required: true})
  bulk!: number;

  @prop({required: true})
  price!: number;

  @arrayProp({items: String, enum: Trait})
  traits?: Array<Trait>;

  @prop({min: 0, max: 2})
  hands?: number;
}

export default new Item().getModelForClass(Item, {schemaOptions: {collection: 'items'}});
