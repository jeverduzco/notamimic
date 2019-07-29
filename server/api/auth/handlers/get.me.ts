import {Context} from "koa";
import * as R from 'ramda';

export const getUserInfo = async (ctx: Context) => {
  ctx.assert(ctx.session.userInfo, 204);

  ctx.body = R.pick(['email', 'picture', 'displayName'], ctx.session.userInfo)
};
