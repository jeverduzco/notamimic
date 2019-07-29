import Router from '@koa/router';
import {facebookLogin, getUserInfo, googleLogin} from './handlers';

const router = new Router({prefix: '/auth'});

router
  .get('/google/login', googleLogin)
  .get('/facebook/login', facebookLogin)
  .get('/me', getUserInfo);

export const authRouter = router;
