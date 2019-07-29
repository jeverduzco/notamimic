import {prop} from 'typegoose';
import ItemModel, {Item} from './ItemSchema';
import {WeaponGroup} from '../../enums';

export class WeaponSchema extends Item {
  @prop({required: true})
  damage!: {};
  @prop({required: true})
  group!: WeaponGroup;
  @prop({})
  reload?: number;
  @prop({required: true})
  range!: number;
}

export default ItemModel.discriminator('Weapon', new WeaponSchema().getModelForClass(WeaponSchema, {schemaOptions: {collection: 'items'}}).schema);
