import {prop} from 'typegoose';
import ItemModel, {Item} from './ItemSchema';

export class ArmorSchema extends Item {
  @prop({required: true})
  armorClass!: number;
  @prop({required: true})
  dexCap!: number;
  @prop({})
  checkPenalty?: number;
  @prop({required: true})
  speedPenalty!: number;
}

export default ItemModel.discriminator('Armour', new ArmorSchema().getModelForClass(ArmorSchema, {schemaOptions: {collection: 'items'}}).schema);
