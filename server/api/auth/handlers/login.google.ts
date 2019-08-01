import {Context} from "koa";
import {google} from 'googleapis';
import config from 'config';

import {getOrCreateUser} from '../helpers/getOrCreateUser';

export const googleLogin = async (ctx: Context) => {
  const googleAuth = new google.auth.OAuth2(
    ...(Object.values(config.get('auth.google')) as any)
  );

  const {code} = ctx.query;

  const {tokens} = await googleAuth.getToken(code);
  googleAuth.setCredentials(tokens);
  const userInfo = await google.oauth2({auth: googleAuth, version: 'v2'}).userinfo.get();
  const {email, picture} = userInfo.data;

  const user = await getOrCreateUser({email, picture}, 'google');

  ctx.session.userInfo = {email: user.email, picture: user.picture, tokens};
  ctx.redirect('/');
};
