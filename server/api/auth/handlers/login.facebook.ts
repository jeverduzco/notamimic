import {Context} from "koa";
import bluebird from 'bluebird';
import fbg from 'fbgraph';
import config from 'config';
import {getOrCreateUser} from '../helpers/getOrCreateUser';

const fb = bluebird.promisifyAll(fbg);

export const facebookLogin = async (ctx: Context, next) => {
  const conf = config.get('auth.facebook');
  const {code} = ctx.query;
  const tokens = await fb.authorizeAsync({
    client_id: conf.clientId,
    redirect_uri: conf.redirectUri,
    client_secret: conf.clientSecret,
    code: code
  });

  const {email, picture: {data: {url: picture}}} = await fb.getAsync('me', {
    access_token: tokens.access_token,
    fields: ['picture', 'email'].join(',')
  });

  const user = await getOrCreateUser({email, picture}, 'facebook');

  ctx.session.userInfo = {email: user.email, picture: user.picture, tokens};
  ctx.redirect('/');
};
