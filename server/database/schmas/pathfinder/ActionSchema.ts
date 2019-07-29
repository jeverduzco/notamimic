import {prop, Typegoose} from 'typegoose';
import {ActionType} from '../../enums';

export class Action extends Typegoose {
  @prop({required: true})
  name!: string;

  @prop({required: true})
  type!: ActionType;

  @prop({required: true})
  description!: string;

  @prop()
  prerequisites!: {};

  @prop()
  requirements!: {};

  @prop()
  frequency!: string;

  @prop()
  trigger!: string;

  @prop({required: true})
  success!: string;

  @prop()
  criticalSuccess!: string;

  @prop()
  criticalFailure!: string;

  @prop({required: true})
  special!: string;
}

export default new Action().getModelForClass(Action, {schemaOptions: {collection: 'actions'}});
