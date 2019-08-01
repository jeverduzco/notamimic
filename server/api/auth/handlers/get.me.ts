import {Context} from "koa";
import * as R from 'ramda';

export const getUserInfo = async (ctx: Context) => {
  if (ctx.session.userInfo) {
    ctx.body = R.pick(['email', 'picture', 'displayName'], ctx.session.userInfo);
  } else {
    ctx.status = 204;
  }
};
