import {arrayProp, prop, Typegoose} from 'typegoose';
import {AuthType} from '../enums'

type ProviderData = {
  providerName: string,
  email: string,
  picture: string,
}

export class User extends Typegoose {
  @prop({required: true, unique: true})
  email!: string;

  @prop({})
  password!: string;

  @arrayProp({items: String, enum: AuthType, required: true, default: AuthType.basic})
  authTypes!: AuthType;

  @prop({})
  displayName!: string;

  @prop({})
  picture!: string;

  @prop({default: []})
  providersData!: ProviderData[];
}

export default new User().getModelForClass(User, {schemaOptions: {collection: 'users'}});
