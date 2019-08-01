import Koa from 'koa'
import Http2 from 'http2'
import fs from 'fs';
import consola from 'consola'
import {Builder, Nuxt} from 'nuxt'
import config from 'config';
import nuxtConfig from '../nuxt.config';
import initApollo from './apollo/apollo';
import bodyparser from 'koa-bodyparser';
import cookie from 'koa-cookie';
import session from 'koa-session';
import {registerRouter} from './api';

const app = new Koa();
app.keys = [config.get('key')];
app.use(bodyparser());
app.use(cookie());
app.use(session({...config.get('session')}, app));
// Import and Set Nuxt.js options
nuxtConfig.dev = !(app.env === 'production');

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(nuxtConfig);

  const {
    host = process.env.HOST || '0.0.0.0',
    port = process.env.PORT || 8080
  } = nuxt.options.server;

  // Build in development
  if (nuxtConfig.dev) {
    const builder = new Builder(nuxt);
    await builder.build()
  } else {
    await nuxt.ready()
  }

  registerRouter(app);

  app.use((ctx) => {
    ctx.status = 200;
    ctx.respond = false; // Bypass Koa's built-in response handling
    // @ts-ignore
    ctx.req.ctx = ctx; // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  });

  Http2.createSecureServer({
    key: fs.readFileSync(config.get('cert.keyPath')),
    cert: fs.readFileSync(config.get('cert.certPath'))
  }, app.callback()).listen(3000, '0.0.0.0', async () => {
    await initApollo();
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })
  });

  process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason, reason.stack);
    // application specific logging, throwing an error, or other logic here
  });
}

start();
