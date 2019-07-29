import {prop, Typegoose} from 'typegoose';
import {Feat} from './FeatSchema';
import {Skill} from './SkillSchema';

export class Background extends Typegoose {
  @prop({required: true})
  name!: string;

  @prop({required: true, default: {}})
  abilityModifiers!: { Ability: number };

  @prop({required: true})
  description!: string;

  @prop({required: true})
  skillFeat!: Feat;

  @prop({required: true})
  loreSkill!: Skill;
}

export default new Background().getModelForClass(Background, {schemaOptions: {collection: 'skills'}});
