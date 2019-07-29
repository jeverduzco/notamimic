import Router from '@koa/router';
import {authRouter} from './auth';

const router = new Router();
router.get('/health_check', ctx => {
  ctx.body = 'I\'m a box';
});

const apiRouter = new Router({prefix: '/api/v1'});
apiRouter.use(authRouter.routes(), apiRouter.allowedMethods());

router.use(apiRouter.routes(), apiRouter.allowedMethods());

export const registerRouter = app => {
  app
    .use(router.routes())
    .use(router.allowedMethods());
};
